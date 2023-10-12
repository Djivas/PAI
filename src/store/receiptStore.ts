import {create} from 'zustand';
import { fetchReceiptData, ReceiptData } from '../store/api/receiptApi';

interface State {
  data: ReceiptData | null;
  error: Error | null;
  fetchReceipt: (tablet_id: string) => Promise<void>;
}
  
export const useReceiptStore = create<State>((set) => ({
  data: null,
  error: null,
  fetchReceipt: async (tablet_id) => {
    try {
      const data = await fetchReceiptData(tablet_id);
      set({ data });
    } catch (error) {
      // set({ error });
      console.error('Ошибка при запросе данных чека:', error);
      throw error;
    }
  },
}));