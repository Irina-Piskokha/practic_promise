import './styles/normalize.css';
import './styles/index.css';
import apiInstance from './services/api';
import { productsApi } from './requests/products';
import { renderAllProducts } from './js/renderAllProducts';
import { onSingleProductFormSubmit } from './js/onSingleProductFormSubmit';
import { onAddNewProductFormSubmit } from './js/onAddNewProductFormSubmit';
import { refs } from './js/refs';

renderAllProducts();

refs.formRef.addEventListener('submit', onSingleProductFormSubmit);
refs.addNewProductFormRef.addEventListener('submit', onAddNewProductFormSubmit);
