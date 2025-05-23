import { create } from 'zustand';

const useCountStore = create((set) => ({
	count: 0,
	increaseCount: () =>
		set((state) => ({
			count: state.count + 1,
		})),
	decreaseCount: () =>
		set((state) => ({
			count: state.count - 1,
		})),
	resetCount: () => set({ count: 0 }),
}));

export default useCountStore;
