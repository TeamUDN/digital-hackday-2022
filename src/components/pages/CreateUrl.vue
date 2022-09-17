<template>
  <logoSmall/>
  <div class="center">
    <div class="whiteSquare">
      <p>URLが発行されました！</p>
      <p>
        <router-link :to="`/question/${urlStr}`" target="_blank">https://udon-digital-hackday-2022.web.app/question/{{urlStr}}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import logoSmall from '../design/RightTopLogo.vue'
export default {
  components: {
    logoSmall,
  },
  data() {
    return {
      urlStr: 'AqqSJYdzQLfi',//sample str
    }
  },
  mounted() {
    console.log('mounted!')
    // TODO:ここにDBからURLを取得する処理を追加
  }
}
</script>

<style scoped lang="scss">
.whiteSquare {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  p {
    font-size: 1.3rem;
  }
}
</style>
