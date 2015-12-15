<template>
  <div @click="ons(2)">
    compontents demo2
  </div>
  <ul>
    <li v-for="item in array">{{item}}</li>
  </ul>
</template>

<script>
import resApi form "../"
export default {
  data () {
    return {
      array: []
    }
  },
  compiled(){
    this.get()
  },

  methods: {
    ons(item){
      this.array = [3,4,5]
    },
    get(){
      let data = [1,2]
      this.array = data
    }
    post(){
      resApi.getCode.save()
    }
  }
}
</script>
<style lang="less">

</style>

