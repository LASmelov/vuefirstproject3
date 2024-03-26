


<template>
    <section class="flex justify-start flex-col  mx-[5%] my-[50px]">

        <div class="flex gap-4 items-center ">
            <div class="w-[20px] h-[40px] bg-red-700 rounded-lg"></div>
            <h3 class="text-[16px] text-red-700">Categories</h3>
        </div>

        <section class="flex  gap-10">
            <div>
                <h1 class="text-[36px]">Browse By Category</h1>
            </div>
            <div>



            </div>
        </section>
    </section>


    <section class="relative">

        <div class="flex absolute gap-[30px] z-30 right-0 top-[-80px]">
            <button type="button" class="swiper-button-prev" @click="swiperInst.slidePrev()">←</button>

            <button type="button" class="swiper-button-next" @click="swiperInst.slideNext()">→</button>

        </div>

        <swiper :modules="modules" :slides-per-view="6" :space-between="50" @swiper="onSwiper">

            <swiper-slide v-for="(card, index) in cardsCategory" :key="index">
                 <RouterLink to ="#">
                <div class="w-[170px] h-[140px] flex items-center justify-center flex-col gap-4 border rounded-sm"
                @click="() => activeListItem(index)" :class="{ 'bg-[#DB4444]': activeLi === index }">
                   
                    <img :src="card.img" :alt="card.название" />
                    <h5 class="font-bold">{{ card.название }}</h5>
               
                </div>
             </RouterLink>
            </swiper-slide>



        </swiper>


    </section>
</template>
  
<style scoped>
.swiper-button-prev {
    display: flex;
    top: 50px;

    font-size: 40px;

}

.swiper-button-next {
    display: flex;
    top: 50px;

    font-size: 40px;
}
</style>
  
  
  
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';



const activeLi = ref()

function activeListItem(item) {
    activeLi.value = null
    activeLi.value = item
}



defineProps({
    cardsCategory: Array,
})

const swiperInst = ref()

function onSwiper(instanse) {
    swiperInst.value = instanse
}




</script>