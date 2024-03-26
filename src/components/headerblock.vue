

<template>
    <section class="flex items-center justify-between flex-row h-[94px] border-b">
        <div>
            <h1 class="text-[24px] font-bold">Exclusive</h1>
        </div>

        <div>
            <ul class="flex flex-row gap-6">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/ContactPage">Contact</RouterLink>
                <RouterLink to="/AboutPage">About</RouterLink>
                <RouterLink to="/SignUpPage">Sign Up</RouterLink>
            </ul>
        </div>


        <section class="flex flex-row items-center">
            <div class="flex items-center justify-between px-3 rounded flex-row w-[243px] h-[38px] bg-[#D3D3D3]">
                <input class='bg-[#D3D3D3] outline-none w-[200px]' placeholder="What are you looking for?">
                <a href="#"><img class="w-[24] h-[24px]" src="./img/Vector-2.png" alt="search"></a>
            </div>

            <div class="flex flex-row gap-5 mx-5">
                <img class="w-[32] h-[32px]" src="./img/Vector-3.png" alt="like">
                <img class="w-[32] h-[32px]" src="./img/Cart1.png" alt="korzina">
            </div>
        </section>
    </section>
</template>
<script setup>

import { RouterLink } from 'vue-router';

</script>