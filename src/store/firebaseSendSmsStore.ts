import create from 'zustand';
import { VerificationResponse, sendVerificationCode } from './api/firebaseSendSmsApi';

interface VerificationStore {
  verificationData: VerificationResponse | null;
  sendVerificationCode: () => Promise<void>;
}

const useVerificationStore = create<VerificationStore>((set) => ({
  verificationData: null,
  sendVerificationCode: async () => {
    const data = await sendVerificationCode();
    set({ verificationData: data });
  },
}));

export default useVerificationStore;
