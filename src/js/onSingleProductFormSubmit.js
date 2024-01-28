import { productsApi } from '../requests/products';
import { createSingleProductMarkup } from '../services/markupService';
const singleProductRef = document.querySelector('#singleProduct');

export async function onSingleProductFormSubmit(event) {
  event.preventDefault();
  const id = event.currentTarget.elements.id.value.trim();
  try {
    const result = await productsApi.getById(id);
    singleProductRef.innerHTML = createSingleProductMarkup(result.data);
  } catch (error) {
    console.log(error);
  }
}
