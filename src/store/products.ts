import {create} from 'zustand';

export const useProductsStore = create<{
    name: string;
    price: number;
    cartTotal: number;
}>((set) => ({
    name: '',
    price: 0,
    cartTotal: 0,
    setName: (name: string) => set({name}),
    setPrice: (price: number) => set({price}),
    setCartTotal: (cartTotal: number) => set({cartTotal}),
}));