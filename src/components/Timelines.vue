<style scoped>

.btn {
  @apply active:scale-95 active:ring-gray-200 active:ring duration-300 rounded-3xl px-3 py-2 text-orange-50 bg-red-300 inline-block w-10/12 mt-4;
}

</style>

<template>
  <section class="w-full bg-gradient-to-b from-red-300 to-red-300">
    <section class="container-section pb-12">
      <HeaderSection text-color="text-orange-100" subtitle="Bằng tất cả sự tôn trọng, chúng tôi kính mời bạn đến tham dự chuỗi sự kiện cùng chúng tôi" title="Sự Kiện"></HeaderSection>
      <Card>
        <template v-slot:body>
          <div class="bg-orange-50 px-6 py-8 pb-4 text-center text-sm font-medium" v-for="(timeline, index) in timelines" :key="index">
            <section data-aos="fade-up">
              <h1 class="text-2xl dancing-font text-red-300">{{ timeline.title }}</h1>
              <p class="font-medium text-neutral-500">{{ timeline.date }} </p>
              <p class="font-medium text-neutral-500">{{ timeline.time }} </p>
              <decoration class="w-2/12 mx-auto my-2 fill-amber-500"></decoration>
              <p class="text-red-300">{{ timeline.location }}</p>
              <p class="text-neutral-500">{{ timeline.address }}</p>
              <a target="_blank" class="btn" :href="timeline.map">
                <i class="fa-solid fa-map"></i>
                Via Google Map
              </a>
              <decoration class="w-2/12 mx-auto my-2 fill-amber-500 rotate-180"></decoration>
            </section>
          </div>
        </template>
        <template v-slot:footer>
          <section class="bg-orange-50">
            <Countdown></Countdown>
            <!-- Button to Guest Book -->
            <div class="px-6 pt-5 pb-8 text-center">
              <!-- <p class="text-sm text-gray-100">✍ : Không cần lên đồ lộng lẫy vì chính sự có mặt của bạn đã là trang sức tuyệt vời nhất cho buổi lễ 😄 </p> -->
              <button onclick="location.href='https://calendar.google.com/calendar/u/0/r'" class="btn">
                <i class="fa-solid fa-bookmark"></i>
                Save the date
              </button>
            </div>
            <img src="https://res.cloudinary.com/ecommerce-picture/image/upload/v1700294457/IMG_8825_zzwg5u.jpg" alt="">
          </section>
        </template>
      </Card>
    </section>
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import Countdown from '@/components/Countdown.vue'
import decoration from '@/assets/svg/decoration-2.svg'

const timelines = ref(null)
onMounted(() => {
  axios.get('contents/timelines.json')
    .then( res => timelines.value = res.data.timelines )
    .catch( err => alert(err) )
})

// Handler for navigate to guest book
const emits = defineEmits(['goToGuestBook'])
const savethedate = () => {

}

const goToGuestBook = () => setTimeout(() => { emits('goToGuestBook') }, 300)

</script>
