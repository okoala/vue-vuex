<template>
<div>
  <router-view></router-view>
  <navigator></navigator>
</div>
</template>

<script>
import Navigator from '../components/Navigator.vue'

export default {
  components: { Navigator }
}
</script>
