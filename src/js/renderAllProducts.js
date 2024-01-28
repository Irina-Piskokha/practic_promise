import { refs } from './refs';
import { productsApi } from '../requests/products';
import { createProductsMarkup } from '../services/markupService';

export async function renderAllProducts() {
  try {
    const result = await productsApi.getAll();
    refs.ulContainer.innerHTML = createProductsMarkup(result.data.products);
  } catch (error) {
    console.log(error);
  }
}
