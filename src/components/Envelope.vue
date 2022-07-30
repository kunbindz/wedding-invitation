<template>
  <section class="w-full bg-slate-100 pt-12 pb-5">
    <section class="section-container">
      <HeaderSection title="Digital Gift" subtitle=" Lời chúc của bạn là một món quà vô cùng ý nghĩa đối với chúng tôi và nếu việc tặng quà là thể hiện tình cảm của bạn, bạn có thể tặng một món quà không dùng tiền mặt
"></HeaderSection>
      <section class="">
        <template v-for="(wallet, x) in wallets" :key="x">
          <div data-aos="zoom-in"
            class="w-8/12 text-center border border-gray-200 mx-auto p-5 mb-5 bg-gray-100 shadow-lg rounded-tl-3xl rounded-br-3xl">
            <img src="@/assets/images/mb.png" alt="mb bank" class="w-5/12 mx-auto mb-3">
            <p class="text-xl">Gửi quà mừng tới cho {{ wallet.name }}</p>
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
    name: 'chú rể',
    number: '0505120238888',
  },
  {
    name: 'cô dâu',
    number: '290519986688',
  }
]
</script>
