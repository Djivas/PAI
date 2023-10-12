import axios from 'axios';
import {Organization} from '../restaurantsStore';

export async function fetchOrganizationData() {
  try {
    const response = await axios.get<Organization[]>('http://127.0.0.1:8080/api/organization');
    return response.data;
  } catch (error) {
    console.error('Ошибка при запросе данных об организации:', error);
    throw error;
  }
}