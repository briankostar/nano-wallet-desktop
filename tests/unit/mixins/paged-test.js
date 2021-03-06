import { expect } from 'chai';
import { describe, it } from 'mocha';
import EmberObject from '@ember/object';
import PagedMixin from '@nano-wallet-company/nano-wallet-desktop/mixins/paged';

describe('Unit | Mixin | paged', () => {
  // Replace this with your real tests.
  it('works', () => {
    const PagedObject = EmberObject.extend(PagedMixin);
    const subject = PagedObject.create();
    expect(subject).to.be.ok;
  });
});
