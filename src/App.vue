<template>
  <div id="app">
    <vue-particles
      color="#45caf5"
      :particleOpacity="0.5"
      linesColor="#45caf5"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="3"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="5"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
      retina_detect="true"
    >
    </vue-particles>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  watch: {
    $route(to, from) {
      console.log("to=" + to + "from=" + from);
      this.$router.push(to);
    },
  },
}
</script>

<style lang="scss">
/* reset css */
p {
  width: fit-content;
  margin: 0;
}
a {
  text-decoration: none;
}
/* common css */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -999;
}
/* 上下中央 */
.center {
  width:100vw;
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
}
/* 全体のflex */
.mainArea {
  width: fit-content;
  display: flex;
  flex-flow: column;
  gap: 3rem;
  margin: 0 auto;
  align-items: center;
}
/* メインコンテンツの囲い */
.whiteSquare {
  width: fit-content;
  background-color: #ffffff;
  border: 2px solid #0AB7E2;
  border-radius: 5px;
  padding: 2.5rem;
  margin: 0 auto;
}
</style>
