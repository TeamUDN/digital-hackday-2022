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
      <p class="title">プロフィールカード一覧</p>
      <!-- TODO:DBから取得したデータをv-forで回してプロフィールカードを自動生成する -->
      <div class="profileCardArea">
        <!-- カード1 -->
        <div class="whiteSquare">
          <img class="profileIcon" alt="profile icon woman_1" src="../../assets/profile_icon/woman_1.png">
          <div class="profileText">
            <p class="cardName">しろくま</p>
            <div class="userQuestion">
              <p>A1. 他部署の社員との交流を深めたいと思ったから</p>
              <p>A2. Webアプリのフロントエンドを中心に開発しています</p>
              <p>A3. 吹奏楽部でバスクラリネットを担当していました</p>
            </div>
          </div>
        </div>
        <!-- カード2 -->
        <div class="whiteSquare">
          <img class="profileIcon" alt="profile icon woman_1" src="../../assets/profile_icon/woman_1.png">
          <div class="profileText">
            <p class="cardName">しろくま</p>
            <div class="userQuestion">
              <p>A1. 他部署の社員との交流を深めたいと思ったから</p>
              <p>A2. Webアプリのフロントエンドを中心に開発しています</p>
              <p>A3. 吹奏楽部でバスクラリネットを担当していました</p>
            </div>
          </div>
        </div>
        <!-- カード3 -->
        <div class="whiteSquare">
          <img class="profileIcon" alt="profile icon woman_1" src="../../assets/profile_icon/woman_1.png">
          <div class="profileText">
            <p class="cardName">しろくま</p>
            <div class="userQuestion">
              <p>A1. 他部署の社員との交流を深めたいと思ったから</p>
              <p>A2. Webアプリのフロントエンドを中心に開発しています</p>
              <p>A3. 吹奏楽部でバスクラリネットを担当していました</p>
            </div>
          </div>
        </div>
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
.center {
  height: auto;
}
.mainArea {
  margin: 5rem 0;
}
.title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: -2.2rem;
}
.profileCardArea {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.whiteSquare {
  width: fit-content;
  padding: 1.5rem 2rem;
  display: flex;
  gap: 2rem;
  align-items: start;
  img {
    width: 6rem;
    height: 6rem;
    margin-top: 0.3rem;
  }
}
.userQuestion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}
.cardName {
  font-size: 1.5rem;
}
.profileText {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}
</style>
