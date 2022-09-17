<template>
  <div id="center">
    <div id="topArea">
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

<style lang="scss">
#center {
  width:100vw;
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
}
#topArea {
  width: fit-content;
  display: flex;
  flex-flow: column;
  gap: 10rem;
  margin: 0 auto;
}
#logo {
  width: 70%;
  margin: 0 auto;
}
#btn {
  width: fit-content;
  margin: 0 auto;
}
.whiteSquare {
  width: fit-content;
  background-color: #ffffff;
  border: 2px solid #0AB7E2;
  border-radius: 5px;
  padding: 2rem;
  margin: 0 auto;
}
</style>
