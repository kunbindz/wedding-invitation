<template>
  <section class="w-full mb-12" style="position: relative;">
    <wave class="fill-red-300"></wave>
    <section class="container-section">
      <!-- <HeaderSection title="Những ngày đầu tiên"
        subtitle="Trước khi tiến đến hôn nhân, bọn mình đã quen biết nhau với tư cách là đồng nghiệp sau đó phát triển lên tình bạn và giờ là tình yêu 💖 ">
      </HeaderSection> -->
      <!-- <img class="frame top-0 left-0 animate__animated animate__fadeInLeft" src="@/assets/images/frame-mirror.png" alt="frame"> -->
    <!-- <img class="frame top-0 right-0 animate__animated animate__fadeInRight" src="@/assets/images/frame.png" alt="frame"> -->
    
    
    
    <Card title="Nguyễn Nhật Ánh">
      <template v-slot:body>
          <p class="text-sm pt-6 pl-6 pr-6 text-justify">
            ❝ Đôi khi bạn yêu mến một ai đó đơn giản chỉ vì người đó thật lòng yêu mến bạn. Tâm hồn chúng ta được sinh ra
            là để chờ đáp lại niềm yêu mến từ một tâm hồn khác. Nó giống như chiếc ống sáo, sẵn sàng reo lên khi ngọn
            gió mùa hè thổi qua. ❞
            <br>
            <h6 class="text-sm fill-gray-800 text-center"> - Nguyễn Nhật Ánh -</h6>
            <br>
          </p>

        </template>
        <template v-slot:footer>
          <img src="https://res.cloudinary.com/ecommerce-picture/image/upload/q_65/v1699115621/BIS08494_gmadbj.jpg" class="w-full" alt="">
        </template>
    </Card>
    <img class="frame bottom-0 left-0 rotate-180" src="@/assets/images/frame.png" alt="frame" style="position: absolute; bottom: -92px; width: 300px;">
      <!-- <img class="frame bottom-0 right-0 rotate-180" src="@/assets/images/frame-mirror.png" alt="frame"> -->
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import wave from '@/assets/svg/wave.svg'

</script>
