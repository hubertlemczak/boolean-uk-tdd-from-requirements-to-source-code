const { getTotalCost, addToBasket, reset } = require('../src/supermarketShopper');

describe('Total cost of items', () => {
  it('returns total of no john in basket', () => {
    reset();
    addToBasket('john', 0);
    const total = getTotalCost();
    expect(total).toEqual(0);
  });
  it('returns total of no items in basket', () => {
    reset();
    addToBasket('', 0);
    const total = getTotalCost();
    expect(total).toEqual(0);
  });
  it('returns total of banana in basket', () => {
    reset();
    addToBasket('banana', 2);
    const total = getTotalCost();
    expect(total).toEqual(24);
  });
  it('returns total of banana and apple in basket', () => {
    reset();
    addToBasket('banana', 2);
    addToBasket('apple', 3);
    const total = getTotalCost();
    expect(total).toEqual(48);
  });
});
