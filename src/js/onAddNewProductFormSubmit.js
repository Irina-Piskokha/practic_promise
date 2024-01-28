import { productsApi } from '../requests/products';
import { createSingleProductMarkup } from '../services/markupService';

const newProductSectionRef = document.querySelector('#newProductSection');

export async function onAddNewProductFormSubmit(event) {
  event.preventDefault();
  const data = {};
  new FormData(event.currentTarget).forEach(
    (value, key) => (data[key] = value)
  );
  const result = await productsApi.add(data);
  const markup = createSingleProductMarkup(result.data);
  newProductSectionRef.innerHTML = markup;
}

