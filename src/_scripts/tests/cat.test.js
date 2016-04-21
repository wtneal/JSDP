/*eslint no-unused-expressions:0 */
'use strict';

import Cat from '../cat';

describe('test cat', function() {
  beforeEach(() => {
    this.cat = new Cat('Fluffy', 'cat1.jpg');
  });

  it('initial count should be zero', () => {
    expect(this.cat.getCount()).to.equal(0);
  });

  if('cat should increment and keep the current count', () => {
    this.cat.inc();
    expect(this.cat.getCount()).to.equal(1);
  });

  it('cat should increment and return current count', () => {
    expect(this.cat.inc()).to.equal(1);
    expect(this.cat.inc()).to.equal(2);
    expect(this.cat.getCount()).to.equal(2);
  });
});
