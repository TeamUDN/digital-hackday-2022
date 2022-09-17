<template>
  <logoSmall/>
  <div class="center">
    <div class="mainArea">
      <p>プロフィールカードの作成</p>
      <div class="whiteSquare">
        <p>質問に回答してください</p>
        <div>
          <p>アイコン選択</p>
          <div id="containerArea">
            <img alt="profile icon woman_1" src="../../assets/profile_icon/woman_1.png">
            <div id="container">
              <img alt="profile icon woman_1" src="../../assets/profile_icon/woman_1.png">
              <img alt="profile icon woman_2" src="../../assets/profile_icon/woman_2.png">
              <img alt="profile icon woman_3" src="../../assets/profile_icon/woman_3.png">
              <img alt="profile icon woman_4" src="../../assets/profile_icon/woman_4.png">
              <img alt="profile icon woman_5" src="../../assets/profile_icon/woman_5.png">
              <img alt="profile icon man_1" src="../../assets/profile_icon/man_1.png">
              <img alt="profile icon man_2" src="../../assets/profile_icon/man_2.png">
              <img alt="profile icon man_3" src="../../assets/profile_icon/man_3.png">
              <img alt="profile icon man_4" src="../../assets/profile_icon/man_4.png">
              <img alt="profile icon man_5" src="../../assets/profile_icon/man_5.png">
            </div>
          </div>
        </div>
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
  }
}
</style>
