<template>
  <section class="container-video  bg-slate-100">
    <HeaderSection title="Video ngắn của chúng tôi" />
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/xMRGXvocwxc?si=LCBWe26p53-Xvdg_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </section>
</template>

<script setup>

import VueVideoPlayer from 'vue3-player-video'
import HeaderSection from '@/components/HeaderSection.vue'

const source = 'https://dl.dropbox.com/s/ggu2nnvsddf45he/Tretan%20Muslim%20_%20Luna%20Prewedding%20Video%20%28%20720%20X%201280%20%29.mp4?dl=2'

</script>
