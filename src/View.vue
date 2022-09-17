<template>
  <!-- $router.params.<router.jsで定義したパラメータ名>で参照できます。 -->
  <div>画面{{ $route.params.id }}</div>
  <div id="add">
    <Add></Add>
  <Firestore></Firestore>
  </div>
</template>
  
  <script>
import Firestore from './components/dataget.vue';
import Add from './components/dataadd.vue';
// import Add2 from './components/dataadd2.vue'
// import Get2 from './components/dataget2.vue'

export default {
  // name: "View",
  // components: {
  //   Firestore
  // },
  name: 'add',
  components: {
    Add
    ,Firestore
  }
};
</script>

<style>
  #view {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
  }
  </style>