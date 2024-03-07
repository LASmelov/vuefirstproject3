<template>
    <div class="flex flex-row bg-black h-[48px] items-center pr-6 ">
        <div class="flex ml-auto gap-[20px] items-center">

            <h1 class="text-white text-[14px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
            <a href="#" ><button class="text-white text-[14px] underline">ShopNow</button></a>

        </div>

        <div class="flex flex-col ml-auto items-center ">

            <div class="flex flex-col ml-auto mr-3 relative">
            <button @click="show = !show" class="text-white font-medium flex items-center">Русский ↓</button>
            
            <div class="absolute top-10">
                <div v-show="show" class="bg-black border w-[80px] h-[40px] rounded-xl flex items-center justify-center">
                    <button class="text-white font-medium">English</button>
                </div>
            </div>

           
        </div>

        </div>
    </div>
</template>



<script setup>
import { ref } from 'vue';

const show = ref(false)


</script>


