<!-- <template>
  <div>
    <router-link to="/test-page01">Test Page01</router-link>
    <router-link to="/test-page02">Test Page02</router-link>
    
  </div>
  <router-view></router-view>
</template>

<script>

import TestPage01 from './components/TestPage01.vue'
import TestPage02 from './components/TestPage02.vue'

export default {
  name: 'App',
  components: {
    TestPage01, TestPage02
  },
}
</script> --> 

<template>
  <div>
    <h1>App</h1>
    <router-link to="/view/1">画面1</router-link>
    <router-link to="/view/2">画面2</router-link>
    <router-view />
  </div>
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