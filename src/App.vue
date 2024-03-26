<script setup>
import sales from './components/sales.vue';

import headerblock from './components/headerblock.vue';
// import insideandslider from './components/insideandslider.vue';
// import flashsales from './components/flashsales.vue';

// import cardsData from './components/Data/cardsData.js'
// import cardsCategory from './components/Data/cardsCategory.js'
// import Category from './components/Category.vue';

import { RouterView } from 'vue-router';
import FooterBlock from './components/FooterBlock.vue';
</script>

<template>
  <header>

    <div>
      <sales />
    </div>
    <div class="headerblock">
      <headerblock />
    </div>
  </header>

  <main class="mainblock">
    <RouterView />
  </main>

  <footer>
    <FooterBlock />
  </footer>
</template>


<style scoped>
.headerblock {
  margin: 0 auto;
  max-width: 1170px;
  padding: 0 10px;
}

.mainblock {
  margin: 0 auto;
  max-width: 1170px;
  padding: 0 10px;
}
</style>


