<script setup>
import { useCartStore } from '@/store/CartStore';

</script>

<template>
    <div>
        <div class="border mt-10 p-5 drop-shadow-xl">
            <table class="table-auto w-full">
                <thead>
                    <tr class="flex justify-around">
                        <th class="text-left font-bold">Product</th>
                        <th class="text-left font-bold">Price</th>
                        <th class="text-left font-bold">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(card, index) in useCartStore().cartProduct" :key="index" class="flex justify-around m-5">
                        <td class="text-left">{{ card?.название }}</td>
                        <td class="text-left">{{ card?.цена }}</td>
                        <button class="text-red-500" @click="useCartStore().removeProductFromCart(index)">Remove</button>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>