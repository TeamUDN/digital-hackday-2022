<template>
    <!-- $router.params.<router.jsで定義したパラメータ名>で参照できます。 -->
    <div>画面{{ $route.params.id }}</div>
  </template>
  
  <script>
    export default {
      name: "View",
    };
  </script>