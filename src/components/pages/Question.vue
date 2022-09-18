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
            v-model="name"
          />
        </div>
        <div>
          <p>アイコン選択</p>
          <div id="containerArea">
            <img
              v-if="icon_number"
              alt="profile icon woman_1"
              :src="require(`@/assets/profile_icon//${icon_number}.png`)"
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
            <label for="Answer1" v-if="data[0]?.question1_required === true">必須</label>
            <label for="Answer1" v-if="data[0]?.question1_required === false">任意</label>
            <input
              id="Answer1"
              name="Answer1"
              placeholder="回答を入力してください"
              v-model="Answer1"
            />
          </div>
        </div>
        <!-- answer 2 -->
        <div class="questionFlex">
          <p>Q2. {{data[0]?.question2}}</p>
          <div class="inputFlex">
            <!-- TODO:必須or任意のチェックを行う -->
            <label for="Answer2" v-if="data[0]?.question2_required === true">必須</label>
            <label for="Answer2" v-if="data[0]?.question2_required === false">任意</label>
            <input
              id="Answer2"
              name="Answer2"
              placeholder="回答を入力してください"
              v-model="Answer2"
            />
          </div>
        </div>
        <!-- answer 3 -->
        <div class="questionFlex">
          <p>Q3. {{data[0]?.question3}}</p>
          <div class="inputFlex">
            <label for="Answer3" v-if="data[0]?.question3_required === true">必須</label>
            <label for="Answer3" v-if="data[0]?.question3_required === false">任意</label>
            <input
              id="Answer3"
              name="Answer3"
              placeholder="回答を入力してください"
              v-model="Answer3"
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
      name: "",
      icon_number: "woman_1",
      Answer1: "",
      Answer2: "",
      Answer3: "",
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
      this.icon_number = value;
    },
    insertProfileData() {
      console.log(this.name);
      console.log(this.icon_number);
      console.log(this.Answer1);
      console.log(this.Answer2);
      console.log(this.Answer3);
      var self = this
      db.collection("OnMeeP-Question")
      .add({
        name: self.name,
        icon_number: self.icon_number,
        Answer1: self.Answer1,
        Answer2: selt.Answer2,
        Answer3: self.Answer3,
        
        question_url:rand_str
      })
      .then(function () {
        // 追加に成功したら、name を空にする
        console.log("動いてるよ")
        self.$router.push(`/create-url/${rand_str}`)
      })
      .catch(function (e) {
        // エラー時の処理
        console.log(e+"失敗した！！")
      })
      // TODO:必須の項目が全て記入されているか確認し、不備があればエラーを表示する
      // TODO:DBに値を挿入してからページ遷移を行うように修正する
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
