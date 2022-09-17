<template>
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
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>App</h1>
  <router-link to="/view/1">画面1</router-link>
  <router-link to="/view/2">画面2</router-link>
  <router-view />
</template>

<script>
  export default {
    name: "App",
    watch: {
      $route(to, from) {
        console.log("to=" + to + "from=" + from);
        this.$router.push(to);
      },
    },
  };
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  p{
    color: red;
  }
}
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -999;
}
</style>
