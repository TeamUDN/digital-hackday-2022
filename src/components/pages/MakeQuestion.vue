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
          <div class="radioFlex">
            <div>
              <input type="radio" id="Q1Choice1" name="Q1" value="required" checked>
              <label for="Q1Choice1">必須</label>
            </div>
            <div>
              <input type="radio" id="Q1Choice2" name="Q1" value="noRequired">
              <label for="Q1Choice2">任意</label>
            </div>
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
          <div class="radioFlex">
            <div>
              <input type="radio" id="Q2Choice1" name="Q2" value="required" checked>
              <label for="Q2Choice1">必須</label>
            </div>
            <div>
              <input type="radio" id="Q2Choice2" name="Q2" value="noRequired">
              <label for="Q2Choice2">任意</label>
            </div>
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
          <div class="radioFlex">
            <div>
              <input type="radio" id="Q3Choice1" name="Q3" value="required" checked>
              <label for="Q3Choice1">必須</label>
            </div>
            <div>
              <input type="radio" id="Q3Choice2" name="Q3" value="noRequired">
              <label for="Q3Choice2">任意</label>
            </div>
          </div>
        </div>
      </div>
      <div id="btn">
        <router-link to="/create-url">
          <Btn btn-text="URLを発行する"></Btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '../design/btn_design.vue'
import logoSmall from '../design/RightTopLogo.vue'
export default {
  components: {
    Btn,
    logoSmall,
  },
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
