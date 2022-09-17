<template>
  <logoSmall/>
  <div class="center">
    <div class="mainArea">
      <p class="title">プロフィールカードの作成</p>
      <div class="whiteSquare">
        <p>質問に回答してください</p>
        <!-- TODO:add progress bar here -->
        <div class="inputFlex">
          <label for="name"><p>名前 or ニックネーム</p></label>
          <input id="name" name="name" placeholder="名前 or ニックネーム" v-model="userName"/>
        </div>
        <div>
          <p>アイコン選択</p>
          <!-- TODO:icon img click choice -->
          <div id="containerArea">
            <img v-if="imgURL" alt="profile icon woman_1" :src="require(`@/assets/profile_icon//${imgURL}.png`)">
            <div id="container">
              <img alt="profile icon woman_1" src="../../assets/profile_icon/woman_1.png" @click="iconSelect('woman_1')">
              <img alt="profile icon woman_2" src="../../assets/profile_icon/woman_2.png" @click="iconSelect('woman_2')">
              <img alt="profile icon woman_3" src="../../assets/profile_icon/woman_3.png" @click="iconSelect('woman_3')">
              <img alt="profile icon woman_4" src="../../assets/profile_icon/woman_4.png" @click="iconSelect('woman_4')">
              <img alt="profile icon woman_5" src="../../assets/profile_icon/woman_5.png" @click="iconSelect('woman_5')">
              <img alt="profile icon man_1" src="../../assets/profile_icon/man_1.png" @click="iconSelect('man_1')">
              <img alt="profile icon man_2" src="../../assets/profile_icon/man_2.png" @click="iconSelect('man_2')">
              <img alt="profile icon man_3" src="../../assets/profile_icon/man_3.png" @click="iconSelect('man_3')">
              <img alt="profile icon man_4" src="../../assets/profile_icon/man_4.png" @click="iconSelect('man_4')">
              <img alt="profile icon man_5" src="../../assets/profile_icon/man_5.png" @click="iconSelect('man_5')">
            </div>
          </div>
        </div>
        <!-- TODO:v-forで自動生成 -->
        <!-- answer 1 -->
        <div class="questionFlex">
          <p>Q1. 交流会に参加した理由は？</p>
          <div class="inputFlex">
            <label for="answer1">必須</label>
            <input id="answer1" name="answer1" placeholder="回答を入力してください" v-model="answer1"/>
          </div>
        </div>
        <!-- answer 2 -->
        <div class="questionFlex">
          <p>Q2. 日頃の業務内容を教えて下さい</p>
          <div class="inputFlex">
            <label for="answer2">必須</label>
            <input id="answer2" name="answer2" placeholder="回答を入力してください" v-model="answer2"/>
          </div>
        </div>
        <!-- answer 3 -->
        <div class="questionFlex">
          <p>Q3. 学生時代の部活は何をしていましたか？</p>
          <div class="inputFlex">
            <label for="answer3">必須</label>
            <input id="answer3" name="answer3" placeholder="回答を入力してください" v-model="answer3"/>
          </div>
        </div>
      </div>
      <div id="btn">
        <router-link to="/user-list/1234">
          <Btn btn-text="プロフィールカードを作成する"></Btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import logoSmall from '../design/RightTopLogo.vue'
import Btn from '../design/btn_design.vue'
export default {
  components: {
    logoSmall,
    Btn,
  },
  data() {
    return {
      // userName,answer1,answer2,answer3は値が入力されると自動で各変数に代入されます
      // imgURLはユーザがアイコンの画像を押すと、各画像に対応した値が変数に代入されます
      userName: '',
      imgURL: 'woman_1',
      answer1: '',
      answer2: '',
      answer3: '',
    }
  },
  methods: {
    iconSelect(value) {
      this.imgURL = value
    }
    // TODO:「プロフィールカードを作成する」ボタンを押したときに5つの変数の値をDBに挿入する関数を書く
  }
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
    transition: all .3s;
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
  gap:0.8rem;
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
