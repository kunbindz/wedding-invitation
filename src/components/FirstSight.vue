<template>
  <section class="w-full mb-12">
    <wave class="fill-gray-800"></wave>
    <section class="container-section">
      <!-- <HeaderSection title="Những ngày đầu tiên"
        subtitle="Trước khi tiến đến hôn nhân, bọn mình đã quen biết nhau với tư cách là đồng nghiệp sau đó phát triển lên tình bạn và giờ là tình yêu 💖 ">
      </HeaderSection> -->
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
          <img src="https:///res-console.cloudinary.com/ecommerce-picture/thumbnails/transform/v1/image/upload//v1699094219/QklTMDg0OTRfZ21hZGJq/drilldown" class="w-full" alt="">
        </template>
      </Card>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import wave from '@/assets/svg/wave.svg'

</script>
