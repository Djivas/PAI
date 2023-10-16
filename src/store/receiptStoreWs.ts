import { create } from 'zustand';
import socket from '../store/api/receiptWs';

interface Product {
  product_name: string;
  product_sum: string;
  num: string;
}

interface ReceiptData {
  transaction_id: string;
  date_close_date: string;
  status: string;
  products: Product[];
}

interface State {
  data: ReceiptData | null;
  error: Error | null;
}

export const useReceiptStore = create<State>(() => ({
  data: null,
  error: null,
}));

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  
  if (data.tablet_id) {
    useReceiptStore.setState({ data });
  }
};