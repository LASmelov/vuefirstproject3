<script setup>
import sales from './components/sales.vue';

import headerblock from './components/headerblock.vue';
import insideandslider from './components/insideandslider.vue';
import flashsales from './components/flashsales.vue';
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
    <!-- <flashsales/> -->
  </main>

  <footer>

  </footer>
</template>


