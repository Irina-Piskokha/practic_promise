import './styles/normalize.css';
import './styles/index.css';
import { createProductsMarkup } from './services/markupService';
import { contactsApi } from './requests/products';

const ulContainer = document.querySelector('#allProducts');

async function renderAllProducts() {
  try {
    const result = await contactsApi.getAll();
    ulContainer.innerHTML = createProductsMarkup(result.data.products);
  } catch (error) {
    console.log(error);
  }
}

renderAllProducts();
