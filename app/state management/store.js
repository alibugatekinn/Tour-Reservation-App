import create from 'zustand';

const useStore = create((set) => ({
  // Mevcut state'ler ve fonksiyonlar
  location: '',
  date: '',
  signIn: false,
  email: '',
  password: '',
  name: '',
  surname: '',
  signModal: false,
  matchedTours2: [],
  allTours: '',
  // Tur verileri için yeni state'ler
  selectedTourId: '',
  selectedTourName: '',
  selectedTourSlug: '',
  selectedTourRoutes: [],
  selectedTourGenres: [],
  selectedTourProgram: [],
  selectedTourDestinations: [],
  selectedTourPhotos: [],
  selectedTourInfo: '',
  filteredTours:[],
  // Setter fonksiyonları
  setfilteredTours: (value) => set({ filteredTours: value }),
  setAllTours: (value) => set({ allTours: value }),
  setMatchedTours2: (value) => set({ matchedTours2: value }),
  setSignModal: (value) => set({ signModal: value }),
  setPassword: (value) => set({ password: value }),
  setName: (value) => set({ name: value }),
  setSurname: (value) => set({ surname: value }),
  setEmail: (value) => set({ email: value }),
  setLocation: (value) => set({ location: value }),
  setDate: (value) => set({ date: value }),
  setSignIn: () => set((state) => ({ signIn: !state.signIn })),
  // Tur verileri için setter fonksiyonları
  setSelectedTourId: (value) => set({ selectedTourId: value }),
  setSelectedTourName: (value) => set({ selectedTourName: value }),
  setSelectedTourSlug: (value) => set({ selectedTourSlug: value }),
  setSelectedTourRoutes: (value) => set({ selectedTourRoutes: value }),
  setSelectedTourGenres: (value) => set({ selectedTourGenres: value }),
  setSelectedTourProgram: (value) => set({ selectedTourProgram: value }),
  setSelectedTourDestinations: (value) => set({ selectedTourDestinations: value }),
  setSelectedTourPhotos: (value) => set({ selectedTourPhotos: value }),
  setSelectedTourInfo: (value) => set({ selectedTourInfo: value }),
}));

export default useStore;
