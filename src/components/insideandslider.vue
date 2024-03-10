<template>
    <section class="relative flex items-center justify-around mt-5">

        <section >
            <ul class="flex flex-col gap-3">
                <li>
                    <button @click="toggleShow('show')">
                    <h3 class="text-[16px]">Woman’s Fashion ></h3>
                </button>


                </li>
                <li>
                    <button @click="toggleShow('show1')">
                    <h3>Men’s Fashion ></h3>
                </button> 
                </li>
                <li><h3>Electronics</h3></li>
                <li><h3>Home & Lifestyle</h3></li>
                <li><h3>Medicine</h3></li>
                <li><h3>Sports & Outdoo</h3></li>
                <li><h3>Baby’s & Toys</h3></li>
                <li><h3>Groceries & Pets</h3></li>
                <li><h3>Health & Beauty</h3></li>
             </ul>

            

        </section>
        <div class="border-r h-[384px] m-[-20px]"></div>
        <section>
            <img src="./img/Frame 560.png" alt="">
        </section>

         <section class="absolute left-[25%]">
             <div v-show="show" class=" bg-[#D3D3D3] border-black  border w-[400px] p-5 rounded-xl flex items-center justify-center ">
                <ul class="flex gap-5 flex-col">
                    <li>Платья: Элегантные и стильные платья для разных случаев.</li>
                    <li>Джинсы: Удобные джинсы разных фасонов и цветов.</li>
                    <li>Блузки и рубашки: Легкие топы и рубашки для повседневного ношения.</li>
                    <li>Пальто и пиджаки: Теплые пальто и стильные пиджаки.</li>
                    <li>Обувь: Ботинки, кроссовки и туфли.</li>
                </ul>
                </div>

                <div v-show="show1" class="bg-[#D3D3D3] border-black  border w-[400px] p-5 rounded-xl flex items-center justify-center">
                    <ul class="flex gap-5 flex-col">
                        <li>Смартфоны: Популярные модели с хорошими характеристиками.</li>
                        <li>Ноутбуки и планшеты: Мощные ноутбуки и удобные планшеты.</li>
                        <li>Наушники: Беспроводные и шумоподавляющие модели.</li>
                        <li>Фитнес-трекеры: Для отслеживания активности и здоровья.</li>
                        <li>Фотоаппараты: От простых компактных до профессиональных зеркальных.</li>
                    </ul>

                </div>
            </section>
    </section>
</template>


<script setup>
import { ref } from 'vue';

const show = ref(false)
const show1 = ref(false)


function toggleShow(target) {
   
    if (target === 'show') {
        show.value = !show.value;
        show1.value = false;
    } else if (target === 'show1') {
        show1.value = !show1.value;
        show.value = false; 
    }
}


</script>