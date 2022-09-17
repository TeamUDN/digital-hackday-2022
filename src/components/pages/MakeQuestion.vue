<template>
  <logoSmall/>
  <p>Make Question Page</p>
  <router-link to="/make-question">
    <Btn btn-text="URLを発行する"></Btn>
  </router-link>
</template>

<script>
import Btn from '../design/btn_design.vue'
import logoSmall from '../design/RightTopLogo.vue'
export default {
  components: {
    Btn,
    logoSmall,
  },
}
</script>

<style scoped lang="scss">
</style>
