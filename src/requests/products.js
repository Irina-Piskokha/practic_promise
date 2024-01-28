import apiInstance from '../services/api';

async function getAll() {
  try {
    return await apiInstance.get('/products');
  } catch (error) {
    console.log(error);
  }
}

async function getById(id) {
  try {
    return await apiInstance.get(`/products/${id}`);
  } catch (error) {
    console.log(error);
  }
}
async function add(data) {
  return await apiInstance.post('/products/add', data);
}

export const productsApi = { getAll, getById, add };

