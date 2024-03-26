<template>
    <Insideandslider />
    <Flashsales :cardsData="cardsData" />
    <Category :cardsCategory="cardsCategory" />
    <BestSale :cardsData="cardsData" :cardsSelling="cardsSelling" />
</template>

<script setup>
import Category from '@/components/Category.vue';
import cardsData from '@/components/Data/cardsData';
import cardsCategory from '@/components/Data/cardsCategory';
import Flashsales from '@/components/flashsales.vue';
import Insideandslider from '@/components/insideandslider.vue';
import BestSale from '@/components/BestSale.vue';
import cardsSelling from '@/components/Data/CardsSelling';


</script>



