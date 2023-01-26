const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandom = (items) => items[Math.floor(Math.random() * items.length)];

function updateItem (items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export {
  getRandomArrayElement,
  getRandom,
  updateItem,
};
