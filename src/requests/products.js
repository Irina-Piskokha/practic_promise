import apiInstance from '../services/api';

async function getAll() {
  try {
    return await apiInstance.get('/products');
  } catch (error) {
    console.log(error);
  }
}

export const contactsApi = { getAll };
