<template>
  <logoSmall/>
  <div class="center">
    <div class="mainArea">
      <p>プロフィールカードの作成</p>
      <div class="whiteSquare">
        <p>質問に回答してください</p>
      </div>
      <div id="btn">
        <router-link to="/question/1234">
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
}
</script>

<style scoped lang="scss">
#btn {
  width: fit-content;
  margin: 0 auto;
}
</style>
