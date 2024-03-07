<template>
    <section class="flex items-center justify-around mt-5">

        <section >
            <ul class="flex flex-col gap-3">
                <li>
                   <button v-show="show"> <h3 class="text-[16px]">Woman’s Fashion ></h3></button>
                </li>
                <li>
                  <button v-show="show1" > <h3>Men’s Fashion ></h3></button> 
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
    </section>
</template>


<script setup>
import { ref } from 'vue';

const show = ref(false)
const show1 = ref(false)


</script>