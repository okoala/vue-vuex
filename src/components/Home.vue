<template>
<div class="red">
  Hello World!!
  <br/>
  {{show}}
</div>
</template>

<script>
export default {
  data () {
    return {
      show: 'Hot Replace is Cool!!!'
    }
  }
}
</script>
<style scoped>
.red {
  color: #f00;
}
</style>
