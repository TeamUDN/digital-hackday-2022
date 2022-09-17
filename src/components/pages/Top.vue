<template>
  <div class="center">
    <div class="mainArea">
      <img id="logo" alt="OnMeeP logo" src="../../assets/onmeep_logo.png">
      <div id="btn">
        <router-link to="/make-question">
          <Btn btn-text="名刺テンプレートを作る"></Btn>
        </router-link>
      </div>
    </div>
  </div>
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
  width: 70%;
  margin: 0 auto 7rem;
}
#btn {
  width: fit-content;
  margin: 0 auto;
}
</style>
