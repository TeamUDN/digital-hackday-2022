<template>
    <div>
      <h1>Firestore Test</h1>
      <li v-for="(item, index) in data" :key="index">
        {{ item }}
      </li>
    </div>
   </template>

<script>
import db from "../firebase.js";

export default {
  name: "Firestore",
  data() {
    return {
      data: [],
    };
  },
  mounted: function () {
    db.collection("OnMeeP-Question")
      .get('1234')
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().name}`);
          this.data.push(doc.data().name);
        });
      });
  },
};
</script>