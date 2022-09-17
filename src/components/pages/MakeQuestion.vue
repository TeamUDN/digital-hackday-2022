<template>
  <logoSmall/>
  <div class="center">
    <div class="mainArea">
      <div class="whiteSquare">
      </div>
      <div id="btn">
        <router-link to="/make-question">
          <Btn btn-text="URLを発行する"></Btn>
        </router-link>
      </div>
    </div>
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
