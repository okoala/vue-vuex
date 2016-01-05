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
          imageUrl: 'http://res.ikaibei.com/uploadtest/img/kb/adv/62588603-e783-451b-9325-f03deff2fc27.png'
        },
        {
          imageUrl: 'http://res.ikaibei.com/uploadtest/img/kb/adv/62588603-e783-451b-9325-f03deff2fc27.png'
        }
      ]
    }
  },

  components: { Slider }
}
</script>

<style scoped>

</style>
