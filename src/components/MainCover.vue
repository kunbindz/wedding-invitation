<template>
  <section class="w-full bg-couples bg-cover h-screen">
    <section class="container-section h-screen grid content-end">
      <div
        class="animate__animated animate__fadeInUpBig text-gray-100 text-center bg-red-300 backdrop-blur-sm rounded-t-3xl py-10 bg-opacity-60 "
      >
        <p>Wedding Invitation</p>
        <div style="display:flex; justify-content: center;" class="pt-2">
          <!-- <img class="tw-mx-auto fill-amber-400" src="@/assets/images/pemisah.png" alt="divider"> -->
        </div>
        
        <h1 style="letter-spacing: -1px; font-size: 2.6rem" class="dancing-font font-bold text-orange-50">{{ couples.join(' & ') }}</h1>
        <decoration class="fill-yellow-300 mx-auto w-3/12 mb-3"></decoration>
        <p class="text-sm">
          <!-- <p class="font-medium">Kepada Bapak/Ibu Yang Terhormat</p> -->
          <p style="letter-spacing: 2px" class="font-medium text-orange-50 my-2 text-2xl	">{{ query.to }}</p>
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

const couples = ['Đức Anh', 'Vũ Phương Thảo']

const route = useRoute()
let query = computed(() => route.query)

if ( route.query.to === undefined ) query = { to: '28/04/2024' }

</script>
