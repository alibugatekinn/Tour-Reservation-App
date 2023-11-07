import create from 'zustand';

const useStore = create((set) => ({
  location: '',
  date: '',
  signIn: false,  // Yeni state
  email:'',
  password:'',
  signModal:false,
  setSignModal: (value) => set({ signModal: value }),
  setPassword: (value) => set({ password: value }),
  setEmail: (value) => set({ email: value }),
  setLocation: (value) => set({ location: value }),
  setDate: (value) => set({ date: value }),
  setSignIn: () => set((state) => ({ signIn: !state.signIn }))  // State'i değiştirmek için fonksiyon
}));

export default useStore;
