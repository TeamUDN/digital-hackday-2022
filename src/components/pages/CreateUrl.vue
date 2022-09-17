<template>
  <logoSmall/>
  <div class="center">
    <div class="whiteSquare">
      <p>URLが発行されました！</p>
      <p>https://aaaaaaaaaaaaaaaaaa</p>
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
.whiteSquare {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}
</style>
