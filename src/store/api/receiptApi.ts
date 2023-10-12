import axios, { AxiosResponse } from 'axios';

export interface Product {
  product_name: string;
  product_sum: string;
  num: string;
}

export interface ReceiptData {
  transaction_id: string;
  date_close_date: string;
  status: string;
  products: Product[];
}

export async function fetchReceiptData(tabletId: string): Promise<ReceiptData> {
  try {
    const response: AxiosResponse<ReceiptData> = await axios.get('https://pai.kg/api/getReceipt', {
      params: { tablet_id: tabletId },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Ошибка при запросе данных чека. Некорректный статус ответа:', response.status);
      throw new Error('Ошибка при запросе данных чека');
    }
  } catch (error) {
    console.error('Ошибка при запросе данных чека:', error);
    throw error;
  }
}