<script setup>
import sales from './components/sales.vue';

import headerblock from './components/headerblock.vue';
import insideandslider from './components/insideandslider.vue';
import flashsales from './components/flashsales.vue';

import cardsData from './components/Data/cardsData.js'
</script>

<template>
  <header>
   
    <div>
  <sales/>
    </div>
    <div>
  <headerblock />
    </div>
  </header>

  <main>
    <insideandslider/>
    <flashsales :cardsData="cardsData" />
  </main>

  <footer>

  </footer>
</template>

./components/Data/cardsData.vue./components/Data/cardsData.js
