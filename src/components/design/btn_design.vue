<template>
  <div class="btnBase">
    <p class="btnText">{{ btnText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.btnBase {
  width: fit-content;
  height: fit-content;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  box-shadow: 3px 3px 3px #dddddd;
  cursor: pointer;
  background-color: #0AB7E2;
  color: #ffffff;
  font-weight: bold;
}
.btnText {
  font-size: 1rem;
}
</style>
