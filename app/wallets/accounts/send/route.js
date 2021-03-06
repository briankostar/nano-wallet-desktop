import Route from '@ember/routing/route';

import { action } from 'ember-decorators/object';

export default Route.extend({
  model() {
    const wallet = this.modelFor('wallets');
    const source = this.modelFor('wallets.accounts');
    return this.store.createRecord('block', {
      wallet,
      source,
      destination: null,
      amount: null,
    });
  },

  @action
  changeSource(source) {
    return this.transitionTo(this.routeName, source);
  },

  @action
  async sendAmount(changeset) {
    await changeset.save();
    const account = this.modelFor('wallets.accounts');
    return this.transitionTo('wallets.accounts.history', account.reload());
  },
});
