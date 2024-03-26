import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'card',
    state: () => ({
        cartProduct: JSON.parse(localStorage.getItem('CartStore')) || []
    }),
    actions: {
        addProductToCart(card) {
            this.cartProduct.push(card);
            localStorage.setItem('CartStore', JSON.stringify(this.cartProduct))
        },
        removeProductFromCart(index) {
            this.cartProduct.splice(index, 1);
            localStorage.setItem('CartStore', JSON.stringify(this.cartProduct))
        }
    }
});