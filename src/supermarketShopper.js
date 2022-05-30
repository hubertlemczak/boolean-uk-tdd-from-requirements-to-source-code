const shopItems = [
  { item: 'banana', price: 12 },
  { item: 'apple', price: 8 },
  { item: 'john', price: 0 },
];

let basket = [];

function reset() {
  basket = [];
}

const addToBasket = (newItem, quantity) => {
  for (let i = 0; i < shopItems.length; i++) {
    if (shopItems[i].item.includes(newItem)) basket.push([newItem, shopItems[i].price, quantity]);
  }
};

const getTotalCost = () => {
  let totalCost = 0;
  for (let i = 0; i < basket.length; i++) totalCost += basket[i][1] * basket[i][2];
  return totalCost;
};

module.exports = {
  getTotalCost,
  addToBasket,
  reset,
};
