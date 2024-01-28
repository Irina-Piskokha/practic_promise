import './styles/normalize.css';
import './styles/index.css';
import apiInstance from './services/api';
import { createProductsMarkup } from './services/markupService';
import { productsApi } from './requests/products';
import { onSingleProductFormSubmit } from './js/onSingleProductFormSubmit';

const formRef = document.querySelector('#singleProductForm');
const ulContainer = document.querySelector('#allProducts');

async function renderAllProducts() {
  try {
    const result = await productsApi.getAll();
    ulContainer.innerHTML = createProductsMarkup(result.data.products);
  } catch (error) {
    console.log(error);
  }
}

// renderAllProducts();

formRef.addEventListener('submit', onSingleProductFormSubmit);
