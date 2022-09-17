<template>
  <logoSmall />
  <div class="center">
    <div class="mainArea">
      <p class="title">プロフィールカードの作成</p>
      <div class="whiteSquare">
        <!--<p>質問に回答してください</p>-->
        <!-- TODO:add progress bar here -->
        <!-- TODO:入力完了したらチェックマークを表示させる -->
        <div class="inputFlex">
          <label for="name"><p>名前 or ニックネーム</p></label>
          <input
            id="name"
            name="name"
            placeholder="名前 or ニックネーム"
            v-model="userName"
          />
        </div>
        <div>
          <p>アイコン選択</p>
          <div id="containerArea">
            <img
              v-if="imgURL"
              alt="profile icon woman_1"
              :src="require(`@/assets/profile_icon//${imgURL}.png`)"
            />
            <div id="container">
              <img
                alt="profile icon woman_1"
                src="../../assets/profile_icon/woman_1.png"
                @click="iconSelect('woman_1')"
              />
              <img
                alt="profile icon woman_2"
                src="../../assets/profile_icon/woman_2.png"
                @click="iconSelect('woman_2')"
              />
              <img
                alt="profile icon woman_3"
                src="../../assets/profile_icon/woman_3.png"
                @click="iconSelect('woman_3')"
              />
              <img
                alt="profile icon woman_4"
                src="../../assets/profile_icon/woman_4.png"
                @click="iconSelect('woman_4')"
              />
              <img
                alt="profile icon woman_5"
                src="../../assets/profile_icon/woman_5.png"
                @click="iconSelect('woman_5')"
              />
              <img
                alt="profile icon man_1"
                src="../../assets/profile_icon/man_1.png"
                @click="iconSelect('man_1')"
              />
              <img
                alt="profile icon man_2"
                src="../../assets/profile_icon/man_2.png"
                @click="iconSelect('man_2')"
              />
              <img
                alt="profile icon man_3"
                src="../../assets/profile_icon/man_3.png"
                @click="iconSelect('man_3')"
              />
              <img
                alt="profile icon man_4"
                src="../../assets/profile_icon/man_4.png"
                @click="iconSelect('man_4')"
              />
              <img
                alt="profile icon man_5"
                src="../../assets/profile_icon/man_5.png"
                @click="iconSelect('man_5')"
              />
            </div>
          </div>
        </div>
        <!-- TODO:v-forで自動生成する -->
        <!-- answer 1 -->
        <div class="questionFlex">
          <p>Q1. {{data[0]?.question1}}</p>
          <div class="inputFlex">
            <label for="answer1" v-if="data[0]?.question1_required === true">必須</label>
            <label for="answer1" v-if="data[0]?.question1_required === false">任意</label>
            <input
              id="answer1"
              name="answer1"
              placeholder="回答を入力してください"
              v-model="answer1"
            />
          </div>
        </div>
        <!-- answer 2 -->
        <div class="questionFlex">
          <p>Q2. {{data[0]?.question2}}</p>
          <div class="inputFlex">
            <!-- TODO:必須or任意のチェックを行う -->
            <label for="answer2" v-if="data[0]?.question2_required === true">必須</label>
            <label for="answer2" v-if="data[0]?.question2_required === false">任意</label>
            <input
              id="answer2"
              name="answer2"
              placeholder="回答を入力してください"
              v-model="answer2"
            />
          </div>
        </div>
        <!-- answer 3 -->
        <div class="questionFlex">
          <p>Q3. {{data[0]?.question3}}</p>
          <div class="inputFlex">
            <label for="answer3" v-if="data[0]?.question3_required === true">必須</label>
            <label for="answer3" v-if="data[0]?.question3_required === false">任意</label>
            <input
              id="answer3"
              name="answer3"
              placeholder="回答を入力してください"
              v-model="answer3"
            />
          </div>
        </div>
      </div>
      <!-- TODO:ページ遷移する前にDBに値を挿入する処理を挟むように修正する -->
      <div id="btn">
        <button type="button" @click="insertProfileData()">
          <Btn btn-text="プロフィールカードを作成する"></Btn>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import logoSmall from "../design/RightTopLogo.vue";
import Btn from "../design/btn_design.vue";

import db from "../../firebase.js"; //add database

export default {
  name: "Firestore",
  components: {
    logoSmall,
    Btn,
  },
  data() {
    return {
      userName: "",
      imgURL: "woman_1",
      answer1: "",
      answer2: "",
      answer3: "",
      data: [],
    };
  },
  mounted() {
    db.collection("OnMeeP-Question")
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
    iconSelect(value) {
      this.imgURL = value;
    },
    insertProfileData() {
      console.log(this.userName);
      console.log(this.imgURL);
      console.log(this.answer1);
      console.log(this.answer2);
      console.log(this.answer3);
      // TODO:必須の項目が全て記入されているか確認し、不備があればエラーを表示する
      // TODO:DBに値を挿入してからthis.$router.push('/user-list/1234')を行うように修正する
      setTimeout(() => {
        this.$router.push(`/user-list/${this.$route.params.id}`);
      }, 5000);
    },
  },
  }
</script>

<style scoped lang="scss">
.title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: -2.2rem;
}
#btn {
  width: fit-content;
  margin: 0 auto;
}
.whiteSquare {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}
#containerArea {
  width: fit-content;
  display: flex;
  gap: 2rem;
  margin: 0 auto;
  align-items: center;
  img {
    width: 7rem;
  }
}
#container {
  width: 25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1rem;
  img {
    width: calc(5rem - 1rem);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      opacity: 0.6;
      filter: brightness(100%);
    }
  }
}
.questionFlex {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
}
.inputFlex {
  width: fit-content;
  display: flex;
  gap: 1rem;
  align-items: center;
  input {
    width: 30rem;
    padding: 0.3rem 0.5rem;
  }
  #name {
    width: 20rem;
  }
}
</style>
