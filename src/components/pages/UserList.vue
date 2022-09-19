<template>
  <logoSmall/>
  <div class="center">
    <div class="mainArea">
      <button @click="getUserCard()"><fa icon="rotate-right" style="cursor:pointer;position:fixed;top:10rem;right:10rem;z-index:100;"/></button>
      <div class="smoke"></div>
      <div class="questionArea">
        <p class="title">参加者のみなさまへの質問</p>
        <div class="whiteSquare userQuestion">
          <p>Q1. 交流会に参加した理由は？</p>
          <p>Q2. 日頃の業務内容を教えて下さい</p>
          <p>Q3. 学生時代の部活は何をしていましたか？</p>
        </div>
      </div>
      <div class="profileArea">
        <p class="title profileTitle">プロフィールカード一覧</p>
        <!-- TODO:DBから取得したデータをv-forで回してプロフィールカードを自動生成する -->
        <div class="profileCardArea">
          <div class="whiteSquare profileCard" v-for="(item, index) in data" :key="index">
            <img class="profileIcon" alt="profile icon woman_1"  :src="require('../../assets/profile_icon/' + item.icon_number + '.png')" >
            <div class="profileText">
              <p class="cardName">{{item.name}}</p>
              <div class="userQuestion">
                <p>A1. {{item.Answer1}}</p>
                <p>A2. {{item.Answer2}}</p>
                <p>A3. {{item.Answer3}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoSmall from '../design/RightTopLogo.vue'
import db from "../../firebase.js";

export default {
  components: {
    logoSmall,
  },

  name: "Firestore",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    db.collection("OnMeeP-Answer")
    .where('question_url', '==', this.$route.params.id)
    .get()
    .then((querysnapshot) =>{
      if(querysnapshot.empty){console.log("データないよ！！")}
      querysnapshot.forEach((doc) => {
        this.data.push(doc.data())
        console.log(doc.id, "=>", doc.data());
      });
    });
  },
  methods: {
    getUserCard() {
      console.log('reload')
      var self = this;
      db.collection("OnMeeP-Answer")
      .where('question_url', '==', this.$route.params.id)
      .get()
      .then((querysnapshot) =>{
        if(querysnapshot.empty){console.log("データないよ！！")}
        self.data = []
        querysnapshot.forEach((doc) => {
          self.data.push(doc.data())
          console.log(doc.id, "=>", doc.data());
        });
      });
    }
  }

}
</script>

<style scoped lang="scss">
  .center {
    height: auto;
  }
  .smoke {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(0deg, transparent 0 55%, #fff 100%);
    position: fixed;
    margin-top: -5rem;
    z-index:10;
  }
  .mainArea {
    margin: 5rem 0;
  }
  .questionArea {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    position: fixed;
    margin: -2rem;
    z-index:15;
  }
  .profileArea {
    margin-top: 15rem;
  }
  .title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: -2.2rem;
  }
  .profileCardArea {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .whiteSquare {
    width: fit-content;
    padding: 1.5rem 2rem;
    display: flex;
    gap: 2rem;
    align-items: start;
    img {
      width: 6rem;
      height: 6rem;
      margin-top: 0.3rem;
    }
  }
  .userQuestion {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .cardName {
    font-size: 1.5rem;
  }
  .profileText {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .profileTitle {
    margin: 0 auto 1.5rem;
  }
  </style>
  