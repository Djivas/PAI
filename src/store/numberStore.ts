import create from 'zustand';
import { AuthenticationResponse, authenticateUser } from './api/numberApi';

interface AuthenticationStore {
  authenticationData: AuthenticationResponse | null;
  authenticateUser: () => Promise<void>;
}

const useAuthenticationStore = create<AuthenticationStore>((set) => ({
  authenticationData: null,
  authenticateUser: async () => {
    const data = await authenticateUser();
    set({ authenticationData: data });
  },
}));

export default useAuthenticationStore;