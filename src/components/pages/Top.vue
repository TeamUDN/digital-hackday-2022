<template>
  <div class="center">
    <div class="mainArea">
      <img id="logo" alt="OnMeeP logo" src="../../assets/onmeep_logo.png">
      <div id="btn">
        <router-link to="/make-question">
          <Btn btn-text="プロフィールカードのテンプレートを作成する"></Btn>
        </router-link>
        <div class="passwordFlex">
          <label for="urlParam"><p>パスワードを入力</p></label>
          <input id="urlParam" name="urlParam" v-model="urlParam" placeholder="パスワードを入力" />
        </div>
        <div id="btn">
        <button type="button" @click="loginURL()">
          <Btn btn-text="招待された部屋に入室する"></Btn>
        </button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '../design/btn_design.vue'
export default {
  components: {
    Btn,
  },
  data() {
    return {
      urlParam: '',
    }
  },
  methods: {
    loginURL() {
      this.$router.push(`/question/${this.urlParam}`);
    }
  }
}
</script>

<style scoped lang="scss">
#logo {
  width: 70%;
  margin: 0 auto 1rem;
}
#btn {
  width: fit-content;
  margin: 0 auto;
}
.passwordFlex {
  width: fit-content;
  display: flex;
  gap: 1rem;
  margin: 5rem auto 2rem;
  align-items: center;
  input {
    padding: 0.5rem;
  }
}
</style>
