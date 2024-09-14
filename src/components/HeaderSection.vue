<template>
  <section data-aos="fade-up" :class="props.textColor" class="w-full px-4 mb-6 text-center">
    <decoration class="fill-yellow-300 mx-auto w-3/12 mb-3"></decoration>
    <h1 class="dancing-font text-4xl font-medium mb-5">{{ props.title }}</h1>
    <p class="text-sm">{{ subtitle }}</p>
  </section>
</template>

<script setup>

import decoration from '@/assets/svg/decoration-2.svg'

const props = defineProps({
  title: {
    type: String,
    default: ''
  }, 
  subtitle: {
    type: String,
    // default: 'Lưu giữ những khoảnh khắc bên nhau.'
    default: ''
  },
  textColor: {
    type: String,
    default: 'text-slate-800'
  }
})

</script>
