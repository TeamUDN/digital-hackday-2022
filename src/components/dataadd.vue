<template>
  <div>
    <h1>New TODO ver1</h1>
    <div>
      <ul>
        <li><input v-model="name"></li>
        <li>{{name}}</li>
        <li><button v-on:click="addTodo">Add</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import db from "../firebase.js";

export default {
  name: 'Add',
  data() {
    return {
      name: '',
    }
  },
  methods: {
  addTodo:function () {
    var self = this
    db.collection("OnMeeP")
    .add({
        name: self.name
      })
      .then(function () {
        // 追加に成功したら、name を空にする
        self.name = ''
        console.log("動いてるよ")
      })
      .catch(function (e) {
        // エラー時の処理
        console.log(e+"失敗した！！")
      })
  }
}

  // data: function () {
  //   return {
  //     db: null,
  //     name: ''
  //   }
  // },
  // created: function() {
  //   this.db = firebase.firestore()
  // },
  // methods: {
  //   addTodo: function () {
  //     var _this = this

  //     // todos コレクションにドキュメントを追加
  //     this.db.collection('todos').add({
  //       name: _this.name
  //     })
  //     .then(function () {
  //       // 追加に成功したら、name を空にする
  //       _this.name = ''
  //     })
  //     .catch(function () {
  //       // エラー時の処理
  //     })
  //   }
  // }
}
</script>
