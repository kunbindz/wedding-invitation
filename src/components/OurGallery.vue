<style scoped>

.btn {
  @apply active:scale-95 active:ring-gray-200 w-40 active:ring duration-300 rounded-3xl px-3 py-2 text-amber-500 bg-gray-800 inline-block mt-4 ;
}

</style>
<template>
  <section class="w-full bg-slate-100">
    <section class="w-full px-0">
      <viewer :images="galleries">
        <div class="flex flex-wrap">
          <template
            v-for="src in galleries" :key="src" data-aos="zoom-in">
            <div data-aos="fade-up" class="w-4/12">
              <img :src="src" class="w-full" :alt="src" />
            </div>
          </template>
          
        </div>
      </viewer>
      <!-- <section class="container-section bg-slate-100">
        <div class="text-center">

            <a target="_blank" class="btn" href="https://drive.google.com/drive/folders/1dkz2omUkYyJGqk8yYbAN4Uf597-q6cOK?usp=sharing">            
                View more
            </a>
          
        </div>
      </section> -->
      <!-- Our Story
      <OurStory class="mt-10 dynamo"></OurStory> -->
      <!-- Our Video -->
      <OurVideo class="mt-10"></OurVideo>
    </section>
  </section>
  
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import OurVideo from '@/components/OurVideo.vue'
import OurStory from '@/components/OurStory.vue'
import wave from '@/assets/svg/wave.svg'

const galleries = ref(null)
onMounted(() => {
  axios.get('contents/galleries.json')
    .then( res => galleries.value = res.data.galleries )
    .catch( err => alert(err) )
})

</script>
