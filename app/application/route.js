import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { A } from '@ember/array';

import fetch from 'fetch';
import nprogress from 'nprogress';
import { all } from 'rsvp';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { DisposableMixin } from 'ember-lifeline';
import { service } from 'ember-decorators/service';
import { action } from 'ember-decorators/object';

import guessLocale, { DEFAULT_LOCALE } from '../utils/guess-locale';
import normalizeLocale from '../utils/normalize-locale';
import reload from '../utils/reload';

export default Route.extend(ApplicationRouteMixin, DisposableMixin, {
  @service intl: null,
  @service config: null,
  @service settings: null,
  @service electron: null,

  async beforeModel(...args) {
    const electron = this.get('electron');
    const isElectron = get(electron, 'isElectron');
    const settings = this.get('settings');
    let currentLocale = get(settings, 'locale');
    if (!currentLocale && isElectron) {
      currentLocale = get(electron, 'locale');
    }

    currentLocale = normalizeLocale(currentLocale || guessLocale());

    const intl = this.get('intl');
    const config = this.get('config');
    const rootURL = get(config, 'rootURL');
    const translations = A([currentLocale, DEFAULT_LOCALE]).uniq().map(async (key) => {
      const response = await fetch(`${rootURL}translations/${key}.json`);
      if (response.ok) {
        const data = await response.json();
        intl.addTranslations(key, data);
      }

      return key;
    });

    const locales = await all(translations);
    intl.setLocale(locales);

    if (isElectron) {
      this.registerDisposable(() => electron.off('exit', reload));
      electron.one('exit', reload);
    }

    return this._super(...args);
  },

  @action
  loading(transition) {
    nprogress.start();
    transition.finally(() => nprogress.done());
    return true;
  },
});
