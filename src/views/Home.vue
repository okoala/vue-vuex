<template>
<div class="p-home">
  <div class="topbar">
    <span class="location"></span>
  </div>
  <div>

  </div>
  <slider class="banner" :items="banner"></slider>
</div>
</template>

<script>
import Slider from '../components/Slider.vue'

export default {
  data () {
    return {
      show: 'Hot Replace is Cool!!!',
      banner: [
        {
          imageUrl: 'http://gw.alicdn.com/tps/i4/TB1bjzwLpXXXXXHXpXXdIns_XXX-1125-352.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://gw.alicdn.com/simba/img/TB1o1KLLXXXXXc2XXXXSutbFXXX.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://gw.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://gw.alicdn.com/tps/i1/TB1eqPcLpXXXXXPaXXXdIns_XXX-1125-352.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://img.alicdn.com/tps/TB1t4uJLpXXXXXsXXXXXXXXXXXX-1125-352.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://img.alicdn.com/tps/TB1m06KLpXXXXbXXpXXXXXXXXXX-1125-352.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://gw.alicdn.com/tps/i4/TB1WVPlLpXXXXasaXXXdIns_XXX-1125-352.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://img.alicdn.com/tps/TB1u85QLpXXXXX4XXXXXXXXXXXX-1125-352.jpg_q50.jpg'
        }
      ]
    }
  },

  components: { Slider }
}
</script>

<style scoped>

</style>
