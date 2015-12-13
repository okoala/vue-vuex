<template>
<div>
  Hello World!!
  <br/>
  <span class="red">{{show}}</span>
  <br/>
  <com-a></com-a>
  <com-b></com-b>
  <counter></counter>
</div>
</template>

<script>
import Counter from './Counter.vue'
import ComA from './ComA.vue'
import ComB from './ComB.vue'

export default {
  data () {
    return {
      show: 'Hot Replace is Cool!!!'
    }
  },

  components: { Counter, ComA, ComB }
}
</script>
<style scoped>
.red {
  color: #f00;
}
</style>
