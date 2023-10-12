import create from 'zustand';
import { AccessTokenResponse, getAccessToken } from './api/codeApi';

interface AccessTokenStore {
  accessTokenData: AccessTokenResponse | null;
  getAccessToken: () => Promise<void>;
}

const useAccessTokenStore = create<AccessTokenStore>((set) => ({
  accessTokenData: null,
  getAccessToken: async () => {
    const data = await getAccessToken();
    set({ accessTokenData: data });
  },
}));

export default useAccessTokenStore;

