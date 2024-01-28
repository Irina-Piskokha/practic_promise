const createProductsMarkup = arr => {
  return arr
    .map(
      ({ title, description, price }) => `<li><h3>${title}</h3>
      <p>${description}</p>
      <p>${price}</p></li>`
    )
    .join('');
};

function createSingleProductMarkup({ title, description, price }) {
  return `<h3>${title}</h3>
      <p>${description}</p>
      <p>${price}</p>`;
}

export { createProductsMarkup, createSingleProductMarkup };
