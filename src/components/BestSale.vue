


<template>
    <section class="flex justify-start flex-col  mx-[5%] my-[50px]">

        <div class="flex gap-4 items-center ">
            <div class="w-[20px] h-[40px] bg-red-700 rounded-lg"></div>
            <h3 class="text-[16px] text-red-700">This Month</h3>
        </div>



        <section class="flex justify-between gap-10">
            <div>
                <h1 class="text-[36px]">Best Selling Products</h1>
            </div>
            <div class="flex items-center justify-center flex-col ">
                <button @click="toggleBlock" class="w-[160px] h-[50px] bg-red-500 rounded text-white">View All</button>
            </div>
        </section>
    </section>


    <section class="relative">


        <div class="flex items-center justify-around mb-[10%]">
            <div v-for="(card, index) in cardsSelling" :key="index">
                <RouterLink to ="#">
                <img :src="card.img" :alt="card.название" />
                <h5 class="font-bold">{{ card.название }}</h5>
                <p class="text-red-500">$ {{ card.цена }} </p>
                <p>Рейтинг: {{ card.рейтинг }} звезд</p>
               </RouterLink>
            </div>
        </div>



        <div v-if="showBlock">
            <div class="flex flex-wrap items-center justify-between mb-10 gap-[40px]">
                <div v-for="(card, index) in cardsData" :key="index">
                    <RouterLink to ="#">
                    <img :src="card.img" :alt="card.название" />
                    <h5 class="font-bold">{{ card.название }}</h5>
                    <p class="text-red-500">$ {{ card.цена }} </p>
                    <p>Рейтинг: {{ card.рейтинг }} звезд</p>
                    </RouterLink>
                </div>
            </div>
        </div>






    </section>
</template>
  
<style scoped></style>
  
  
  
<script setup>
import { ref } from 'vue';




defineProps({
    cardsData: Array,
    cardsSelling: Array,
})



const showBlock = ref(false)


function toggleBlock() {
    showBlock.value = !showBlock.value
}



</script>