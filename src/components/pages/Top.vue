<template>
  <img id="logo" alt="OnMeeP logo" src="../../assets/onmeep_logo.png">
  <router-link to="/make-question">
    <Btn btn-text="名刺テンプレートを作る"></Btn>
  </router-link>
</template>

<script>
import Btn from '../design/btn_design.vue'
export default {
  components: {
    Btn,
  },
}
</script>

<style scoped lang="scss">
#logo {
  width: 50%;
  margin: 0 auto;
}
</style>
