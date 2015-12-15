<template>
<div class="p-home">
  <div class="topbar">
    <span class="location"></span>
  </div>
  <div>

  </div>
  <carousel></carousel>
</div>
</template>

<script>
import Carousel from '../components/Carousel.vue'

export default {
  data () {
    return {
      show: 'Hot Replace is Cool!!!'
    }
  },

  components: { Carousel }
}
</script>

<style scoped>

</style>
