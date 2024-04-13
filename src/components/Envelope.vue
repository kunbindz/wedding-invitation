<template>
  <section class="w-full bg-slate-100 pt-12 pb-5">
    <section class="section-container">
      <HeaderSection title="Digital Gift" subtitle=" Lời chúc của bạn là một món quà vô cùng ý nghĩa đối với chúng tôi và nếu việc tặng quà là thể hiện tình cảm của bạn, bạn có thể tặng một món quà không dùng hiện kim
"></HeaderSection>
      <section class="">
        <template v-for="(wallet, x) in wallets" :key="x">
          <div data-aos="zoom-in"
            class="w-8/12 text-center border border-gray-200 mx-auto p-5 mb-5 bg-gray-100 shadow-lg rounded-tl-3xl rounded-br-3xl">
            <p class="text-md mb-3">Gửi quà mừng tới cho {{ wallet.name }}</p>
            <img :src="wallet.img" alt="mb bank" class="w-5/12 mx-auto mb-3">
            <Clipboard :content="wallet.number"></Clipboard>
          </div>
        </template>
      </section>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Clipboard from '@/components/Clipboard.vue'

const wallets = [
  {
    img: 'https://res.cloudinary.com/ecommerce-picture/image/upload/v1713022334/Screenshot_2024-04-13_222707_jspyjc.png',
    name: 'chú rể',
    number: '20418081998',
  },
  {
    img: 'https://res.cloudinary.com/ecommerce-picture/image/upload/v1713022333/Screenshot_2024-04-13_222730_emabrm.png',
    name: 'cô dâu',
    number: '0011004437376',
  }
]
</script>
