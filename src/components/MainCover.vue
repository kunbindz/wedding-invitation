<template>
  <section class="w-full bg-couples bg-cover h-screen">
    <section class="container-section h-screen grid content-end">
      <div
        class="animate__animated animate__fadeInUpBig text-gray-100 text-center bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-t-3xl py-10"
      >
        <p>Wedding Invitation</p>
        <div style="display:flex; justify-content: center;" class="pt-2">
          <img class="tw-mx-auto" src="@/assets/images/pemisah.png" alt="divider">
        </div>
        
        <h1 style="letter-spacing: 0px; font-size: 2.7rem" class="dancing-font font-bold text-amber-400">{{ couples.join(' & ') }}</h1>
        <decoration class="fill-amber-400 mx-auto w-3/12 mb-3"></decoration>
        <p class="text-sm">
          <!-- <p class="font-medium">Kepada Bapak/Ibu Yang Terhormat</p> -->
          <p style="letter-spacing: 2px" class="font-medium text-amber-400 my-2 text-lg">{{ query.to }}</p>
          <p class="font-medium text-lg mt-2 px-6">Trân trọng kính mời bạn cùng gia đình đến dự lễ thành hôn của chúng tôi</p>
        </p>
      </div>
    </section>
  </section>
</template>

<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import decoration from '@/assets/svg/decoration-2.svg'

const couples = ['Xuân Lộc', 'Hương Cúc']

const route = useRoute()
let query = computed(() => route.query)

if ( route.query.to === undefined ) query = { to: '04.09.2022' }

</script>
