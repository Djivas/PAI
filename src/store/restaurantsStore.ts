import create from 'zustand';
import { fetchOrganizationData } from './api/restaurantsApi';

export interface Organization {
  // Определите типы данных организации
  // Другие поля
}

interface OrganizationStore {
  organizationData: Organization[];
  fetchOrganizationData: () => Promise<void>;
}

const useOrganizationStore = create<OrganizationStore>((set) => ({
  organizationData: [],
  fetchOrganizationData: async () => {
    const data = await fetchOrganizationData();
    set({ organizationData: data });
  },
}));

export default useOrganizationStore;