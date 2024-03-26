


<template>
  <section class="flex justify-start flex-col  mx-[5%] my-[50px]">

    <div class="flex gap-4 items-center ">
      <div class="w-[20px] h-[40px] bg-red-700 rounded-lg"></div>
      <h3 class="text-[16px] text-red-700">Today’s</h3>
    </div>

    <section class="flex  gap-10">
      <div>
        <h1 class="text-[36px]">Flash Sales</h1>
      </div>
      <div>
        <div class='wrapper'>

          <div class='time-part-wrapper'>
            <h3>Minutes</h3>
            <div class='time-part minutes tens'>
              <div class='digit-wrapper'>
                <span class='digit'>0</span>
                <span class='digit'>5</span>
                <span class='digit'>4</span>
                <span class='digit'>3</span>
                <span class='digit'>2</span>
                <span class='digit'>1</span>
                <span class='digit'>0</span>
              </div>
            </div>
            <div class='time-part minutes ones'>

              <div class='digit-wrapper'>
                <span class='digit'>0</span>
                <span class='digit'>9</span>
                <span class='digit'>8</span>
                <span class='digit'>7</span>
                <span class='digit'>6</span>
                <span class='digit'>5</span>
                <span class='digit'>4</span>
                <span class='digit'>3</span>
                <span class='digit'>2</span>
                <span class='digit'>1</span>
                <span class='digit'>0</span>
              </div>
            </div>
          </div>
          <div class='time-part-wrapper'>
            <h3>Seconds</h3>
            <div class='time-part seconds tens'>
              <div class='digit-wrapper'>
                <span class='digit'>0</span>
                <span class='digit'>5</span>
                <span class='digit'>4</span>
                <span class='digit'>3</span>
                <span class='digit'>2</span>
                <span class='digit'>1</span>
                <span class='digit'>0</span>
              </div>
            </div>
            <div class='time-part seconds ones'>
              <div class='digit-wrapper'>
                <span class='digit'>0</span>
                <span class='digit'>9</span>
                <span class='digit'>8</span>
                <span class='digit'>7</span>
                <span class='digit'>6</span>
                <span class='digit'>5</span>
                <span class='digit'>4</span>
                <span class='digit'>3</span>
                <span class='digit'>2</span>
                <span class='digit'>1</span>
                <span class='digit'>0</span>
              </div>
            </div>
          </div>
          <div class='time-part-wrapper'>
            <h3>Milliseconds</h3>
            <div class='time-part hundredths tens'>
              <div class='digit-wrapper'>
                <span class='digit'>0</span>
                <span class='digit'>9</span>
                <span class='digit'>8</span>
                <span class='digit'>7</span>
                <span class='digit'>6</span>
                <span class='digit'>5</span>
                <span class='digit'>4</span>
                <span class='digit'>3</span>
                <span class='digit'>2</span>
                <span class='digit'>1</span>
                <span class='digit'>0</span>
              </div>
            </div>
            <div class='time-part hundredths ones'>
              <div class='digit-wrapper'>
                <span class='digit'>0</span>
                <span class='digit'>9</span>
                <span class='digit'>8</span>
                <span class='digit'>7</span>
                <span class='digit'>6</span>
                <span class='digit'>5</span>
                <span class='digit'>4</span>
                <span class='digit'>3</span>
                <span class='digit'>2</span>
                <span class='digit'>1</span>
                <span class='digit'>0</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  </section>


  <section class="relative">

    <div class="flex absolute gap-[30px] z-30 right-0 top-[-80px]">
      <button type="button" class="swiper-button-prev" @click="swiperInst.slidePrev()">←</button>

      <button type="button" class="swiper-button-next" @click="swiperInst.slideNext()">→</button>

    </div>

    <swiper :modules="modules" :slides-per-view="4" :space-between="50" @swiper="onSwiper">

      <swiper-slide v-for="(card, index) in cardsData" :key="index">
        
        <div class='mb-[20%] flex items-center justify-center'>
          <RouterLink to ="#">
          <img :src="card.img" :alt="card.название" />
          <h5 class="font-bold">{{ card.название }}</h5>
          <p class="text-red-500">$ {{ card.цена }} </p>
          <p>Рейтинг: {{ card.рейтинг }} звезд</p>
          <div class="border w-[100%] h-[30px] bg-red-500 rounded-xl flex flex-col">
                        <button @click="addToCart(card)" class="text-white">Buy</button>
                    </div>
          </RouterLink>
        
        </div>
        
     
      </swiper-slide>



    </swiper>



    <div class="flex items-center justify-center flex-col ">
      <button @click="toggleBlock" class="w-[230px] h-[50px] bg-red-500 rounded text-white">View All Products</button>
    </div>
    <div v-if="showBlock">
      <div class="flex flex-wrap items-center justify-between mb-10 gap-[40px]">
        <div v-for="(card, index) in cardsData" :key="index">
          <RouterLink to ="#">
          <img :src="card.img" :alt="card.название" />
          <h5 class="font-bold">{{ card.название }}</h5>
          <p class="text-red-500">$ {{ card.цена }} </p>
          <p>Рейтинг: {{ card.рейтинг }} звезд</p>
      
          <div class="border w-[100%] h-[30px] bg-red-500 rounded-xl flex flex-col">
                        <button @click="addToCart(card)" class="text-white">Buy</button>
                    </div>
                    </RouterLink>
        </div>
      </div>
    </div>

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

.digit {
  display: inline-block;
  font-size: 40px;
  color: rgb(0, 0, 0);
  height: 30px;
  line-height: 1;

}

.time-part-wrapper {
  display: inline-block;
  margin-right: 20px;
  position: relative;
}

.time-part-wrapper:not(:last-child):after {
  content: ":";
  display: block;
  width: 30px;
  height: 23px;
  position: absolute;
  top: 0px;
  right: -30px;
  color: rgb(255, 0, 0);
  font-size: 40px;
  line-height: 0.9;
  top: 15px;
}

.time-part {
  width: 40px;
  text-align: center;
  height: 40px;
  overflow: hidden;
  display: inline-block;
  margin-left: -5px;
  box-sizing: border-box;
}

.time-part .digit-wrapper {
  animation-timing-function: cubic-bezier(1, 0, 1, 0);
}

.time-part.minutes.tens .digit-wrapper {
  animation-name: minutes-tens;
  animation-duration: 3600s;
  animation-iteration-count: 1;
}

.time-part.minutes.ones .digit-wrapper {
  animation-name: minutes-ones;
  animation-duration: 600s;
  animation-iteration-count: 6;
}

.time-part.seconds.tens .digit-wrapper {
  animation-name: seconds-tens;
  animation-duration: 60s;
  animation-iteration-count: 60;
}

.time-part.seconds.ones .digit-wrapper {
  animation-name: seconds-ones;
  animation-duration: 10s;
  animation-iteration-count: 360;
}

.time-part.hundredths.tens .digit-wrapper {
  animation-name: hundredths-tens;
  animation-duration: 1s;
  animation-iteration-count: 3600;
}

.time-part.hundredths.ones .digit-wrapper {
  animation-name: hundredths-ones;
  animation-duration: 0.1s;
  animation-iteration-count: 36000;
}

@keyframes minutes-tens {
  0% {
    transform: translateY(-18px);
  }

  16.66667% {
    transform: translateY(-36px);
  }

  33.33333% {
    transform: translateY(-54px);
  }

  50% {
    transform: translateY(-720px);
  }

  66.66667% {
    transform: translateY(-90px);
  }

  83.33333% {
    transform: translateY(-108px);
  }
}

@keyframes minutes-ones {
  0% {
    transform: translateY(-18px);
  }

  10% {
    transform: translateY(-36px);
  }

  20% {
    transform: translateY(-54px);
  }

  30% {
    transform: translateY(-72px);
  }

  40% {
    transform: translateY(-90px);
  }

  50% {
    transform: translateY(-108px);
  }

  60% {
    transform: translateY(-126px);
  }

  70% {
    transform: translateY(-144px);
  }

  80% {
    transform: translateY(-162px);
  }

  90% {
    transform: translateY(-180px);
  }
}

@keyframes seconds-tens {
  0% {
    transform: translateY(-18px);
  }

  16.66667% {
    transform: translateY(-36px);
  }

  33.33333% {
    transform: translateY(-54px);
  }

  50% {
    transform: translateY(-72px);
  }

  66.66667% {
    transform: translateY(-90px);
  }

  83.33333% {
    transform: translateY(-108px);
  }
}

@keyframes seconds-ones {
  0% {
    transform: translateY(-18px);
  }

  10% {
    transform: translateY(-36px);
  }

  20% {
    transform: translateY(-54px);
  }

  30% {
    transform: translateY(-72px);
  }

  40% {
    transform: translateY(-90px);
  }

  50% {
    transform: translateY(-108px);
  }

  60% {
    transform: translateY(-126px);
  }

  70% {
    transform: translateY(-144px);
  }

  80% {
    transform: translateY(-162px);
  }

  90% {
    transform: translateY(-180px);
  }
}

@keyframes hundredths-tens {
  0% {
    transform: translateY(-18px);
  }

  10% {
    transform: translateY(-36px);
  }

  20% {
    transform: translateY(-54px);
  }

  30% {
    transform: translateY(-72px);
  }

  40% {
    transform: translateY(-90px);
  }

  50% {
    transform: translateY(-108px);
  }

  60% {
    transform: translateY(-126px);
  }

  70% {
    transform: translateY(-144px);
  }

  80% {
    transform: translateY(-162px);
  }

  90% {
    transform: translateY(-180px);
  }
}

@keyframes hundredths-ones {
  0% {
    transform: translateY(-18px);
  }

  10% {
    transform: translateY(-36px);
  }

  20% {
    transform: translateY(-54px);
  }

  30% {
    transform: translateY(-72px);
  }

  40% {
    transform: translateY(-90px);
  }

  50% {
    transform: translateY(-108px);
  }

  60% {
    transform: translateY(-126px);
  }

  70% {
    transform: translateY(-144px);
  }

  80% {
    transform: translateY(-162px);
  }

  90% {
    transform: translateY(-180px);
  }
}

body {

  margin: 0;
  font-family: "Aldrich";
}

.wrapper {

  width: 400px;
  position: relative;
}

.wrapper:before,
.wrapper:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  height: 20px;
  z-index: 10;
}
</style>



<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue';
import { useCartStore } from '@/store/CartStore';


defineProps({
  cardsData: Array,
})

const swiperInst = ref()

function onSwiper(instanse) {
  swiperInst.value = instanse
}


const showBlock = ref(false)


function toggleBlock() {
  showBlock.value = !showBlock.value
}

function addToCart(item) {
    useCartStore().addProductToCart(item);
}
</script>