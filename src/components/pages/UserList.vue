<template>
  <logoSmall/>
  <div class="center">
    <div class="mainArea">
      <p class="title">参加者のみなさまへの質問</p>
      <div class="whiteSquare userQuestion">
        <p>Q1. 交流会に参加した理由は？</p>
        <p>Q2. 日頃の業務内容を教えて下さい</p>
        <p>Q3. 学生時代の部活は何をしていましたか？</p>
      </div>
    </div>
  </div>
</template>

<script>
import logoSmall from '../design/RightTopLogo.vue'
export default {
  components: {
    logoSmall,
  },
}
</script>

<style scoped lang="scss">
.title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: -2.2rem;
}
.userQuestion {
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}
</style>
