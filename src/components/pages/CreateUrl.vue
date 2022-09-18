<template>
  <logoSmall/>
  <div class="center">
    <div class="whiteSquare">
      <p>URLが発行されました！</p>
      <p class="urlFlex">
        <router-link :to="`/question/${urlStr}`" target="_blank">https://udon-digital-hackday-2022.web.app/question/{{urlStr}}</router-link>
        <fa icon="copy" class="fa-icon" @click="copyToClipboard()"/>
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
  },
  methods: {
    copyToClipboard() {
      let copyText = `https://udon-digital-hackday-2022.web.app/question/${this.urlStr}`
      navigator.clipboard.writeText(copyText)
        .then(() => {
          // TODO:copyed!表示を出す
          console.log("copied!")
        })
        .catch(e => {
          console.error(e)
        })
    }
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
.urlFlex {
  width: fit-content;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  a {
    color: #0a72e2;
    font-size: 1.4rem;
    &:hover{
      color: #0AB7E2;
    }
  }
  .fa-icon {
    cursor: pointer;
    &:hover{
      color: #0AB7E2;
    }
  }
}
</style>
