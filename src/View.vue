<template>
  <!-- $router.params.<router.jsで定義したパラメータ名>で参照できます。 -->
  <!-- このid部分をQuestion.vue要素に渡してください…！-->
  
  <div>画面{{ $route.params.id }}</div>
  <div id="add"> <!--ここのidはexport defaultのnameと対応-->
    <Question></Question> <!--このタグはcomponentにimportしたページ名に対応-->
  </div>
</template>
  
  <script>
// import Firestore from './components/dataget.vue';
// import Add from './components/dataadd.vue';
import Question from './components/pages/Question.vue';

export default {
  name: 'add',
  components: {
    Question
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