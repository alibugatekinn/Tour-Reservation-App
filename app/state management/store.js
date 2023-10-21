import create from 'zustand';

const useStore = create((set) => ({
    location: '',
   date:'',
  
    setLocation: (value) => set({ location: value }),
    setDate: (value) => set({ date: value }),
    
  }));

export default useStore;