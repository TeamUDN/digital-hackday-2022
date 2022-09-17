<template>
    <p>Make Question Page</p>
    <router-link to="/make-question">
      <Btn btn-text="URLを発行する"></Btn>
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
</style>
