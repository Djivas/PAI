import create from 'zustand';

interface CardState {
  selectedCards: string[];
  showModal: boolean;
  addCard: (card: string) => void;
  removeCard: (card: string) => void;
  toggleModal: () => void;
}

export const useCardStore = create<CardState>((set) => ({
  selectedCards: [],
  showModal: false,
  addCard: (card) => set((state) => ({ selectedCards: [...state.selectedCards, card] })),
  removeCard: (card) => set((state) => ({ selectedCards: state.selectedCards.filter((c) => c !== card) })),
  toggleModal: () => set((state) => ({ showModal: !state.showModal })),
}));