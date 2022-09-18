<template>
  <logoSmall/>
  <div class="center">
    <div class="mainArea">
      <div class="whiteSquare">
        <p>質問を選んでください</p>
        <!-- TODO:add progress bar here -->
        <!-- TODO:v-forで自動生成する -->
        <!-- 質問1 -->
        <div class="questionRowFlex">
          <div class="questionInputFlex">
            <label for="question1"><p>Q1.</p></label>
            <input list="question1_data" id="question1" name="question1" placeholder="自由記述 or 選択肢から選択してください" />
            <datalist id="question1_data">
              <option value="このイベントに参加した理由は？"></option>
              <option value="日頃の業務内容を教えて下さい"></option>
              <option value="学生時代の部活は何をしていましたか？"></option>
            </datalist>
          </div>
          <div class="radioFlex" id="Q1Choices">
            <div>
              <input type="radio" id="Q1Choice1" value="true" checked v-model="question1_required">
              <label for="Q1Choice1">必須</label>
            </div>
            <div>
              <input type="radio" id="Q1Choice2" value="false" v-model="question1_required">
              <label for="Q1Choice2">任意</label>
            </div>
              <span>洗濯オプション：{{question1_required}}</span>
          </div>
        </div>
        <!-- 質問2 -->
        <div class="questionRowFlex">
          <div class="questionInputFlex">
            <label for="question2"><p>Q2.</p></label>
            <input list="question2_data" id="question2" name="question2" placeholder="自由記述 or 選択肢から選択してください" />
            <datalist id="question2_data">
              <option value="このイベントに参加した理由は？"></option>
              <option value="日頃の業務内容を教えて下さい"></option>
              <option value="学生時代の部活は何をしていましたか？"></option>
            </datalist>
          </div>
          <div class="radioFlex" id="Q2Choices">
            <div>
              <input type="radio" id="Q2Choice1" name="Q2" value="true" checked v-model="question2_required">
              <label for="Q2Choice1">必須</label>
            </div>
            <div>
              <input type="radio" id="Q2Choice2" name="Q2" value="false" v-model="question2_required">
              <label for="Q2Choice2">任意</label>
            </div>
            <span>洗濯オプション：{{question2_required}}</span>
          </div>
        </div>
        <!-- 質問3 -->
        <div class="questionRowFlex">
          <div class="questionInputFlex">
            <label for="question3"><p>Q3.</p></label>
            <input list="question3_data" id="question3" name="question3" placeholder="自由記述 or 選択肢から選択してください" />
            <datalist id="question3_data">
              <option value="このイベントに参加した理由は？"></option>
              <option value="日頃の業務内容を教えて下さい"></option>
              <option value="学生時代の部活は何をしていましたか？"></option>
            </datalist>
          </div>
          <div class="radioFlex" id="Q3Choices">
            <div>
              <input type="radio" id="Q3Choice1" name="Q3" value="true" checked v-model="question3_required">
              <label for="Q3Choice1">必須</label>
            </div>
            <div>
              <input type="radio" id="Q3Choice2" name="Q3" value="false" v-model="question3_required"> 
              <label for="Q3Choice2">任意</label>
            </div>
            <span>洗濯オプション：{{question3_required}}</span>
          </div>
        </div>
      </div>
      <div id="btn">
        <router-link to="/create-url" v-on:click="addTodo">
          <Btn btn-text="URLを発行する"></Btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '../design/btn_design.vue'
import logoSmall from '../design/RightTopLogo.vue'
import db from "../../firebase.js";

export default {
  components: {
    Btn,
    logoSmall,
  },
  //データ挿入用
  name: 'Add',
  data() {
    return {
      question1: '',
      question2: '',
      question3: '',
      question1_required: 'true',
      question2_required: 'false',
      question3_required: 'false',
      question_url:'1234',
    }
  },
  methods: {
  addTodo:function () {
    var self = this
    db.collection("OnMeeP-Question")
    .add({
        question1: self.question1.value,
        question2: self.question2.value,
        question3: self.question3.value,
        // question1_required: self.document.getElemtentById('Q1Choices').element['Q1'].value,
        // question2_required: self.document.getElemtentById('Q2Choices').element['Q2'].value,
        // question3_required: self.document.getElemtentById('Q3Choices').element['Q3'].value,
        // question1_required: self.pickedQ1,
        // question2_required: self.pickedQ2,
        // question3_required: self.pickedQ3,

      })
      .then(function () {
        // 追加に成功したら、name を空にする
        console.log("動いてるよ")
      })
      .catch(function (e) {
        // エラー時の処理
        console.log(e+"失敗した！！")
      })
  }
}
}


</script>

<style scoped lang="scss">
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
.questionRowFlex {
  width: fit-content;
  display: flex;
  gap: 1rem;
  align-items: center;
}
.questionInputFlex {
  width: fit-content;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  input {
    width: 20rem;
    padding: 0.3rem 0.5rem;
  }
}
.radioFlex {
  width: fit-content;
  display: flex;
  gap:1rem;
  align-items: center;
  div{
    label{
      cursor: pointer;
    }
  }
}
</style>
