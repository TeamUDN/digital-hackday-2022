<template>
  <logoSmall/>
  <div class="whiteSquare">
  </div>
  <div id="btn">
    <router-link to="/make-question">
      <Btn btn-text="URLを発行する"></Btn>
    </router-link>
  </div>
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
#btn {
  width: fit-content;
  margin: 0 auto;
}
</style>
