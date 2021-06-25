<template>
  <div class="bigBg">
    <div class="login" v-show="showLogin">
      <div class="toolbar">
        <img
          src="../assets/imgs/toRank.png"
          alt=""
          class="rankList"
          @click="gotoRank"
        />
        <img
          :src="musicSign[musicSignId]"
          alt=""
          class="vioce"
          @click="playBgMusic"
        />
      </div>
      <img src="../assets/imgs/title.png" alt="" class="title" />
      <div class="nameInput">
        <input type="text" v-model="name" />
        <img
          src="../assets/imgs/dice.png"
          alt=""
          class="dice"
          @click="getRandomName"
        />
        <img src="../assets/imgs/underLine.png" alt="" class="underLine" />
      </div>
      <img
        src="../assets/imgs/start.png"
        alt=""
        class="startBtn"
        @click="startGame"
      />
    </div>
  </div>
</template>

<script>
import { getName } from "../api/api";
import $ from "jquery";
import bus from '../utils/eventBus'
let playBgMusicSign = require("../assets/imgs/voice.png");
let closeBgMusicSign = require("../assets/imgs/closeVoice.png");
export default {
  data() {
    return {
      name: "",
      showLogin: true,
      isPlayMusic: true,
      musicSign: {
        1: playBgMusicSign,
        2: closeBgMusicSign,
      },
      musicSignId: 1,
      flag: true,
    };
  },
  methods: {
    startGame() {
      this.$store.commit("setName", this.name);
      this.$router.push("game");
      bus.$emit('playGame')
    },
    getRandomName() {
      getName().then((res) => {
        this.name = res.data;
      });
    },
    gotoRank() {
      this.$router.push("rankList");
    },
    playBgMusic() {
      if (this.flag) {
        $("#bgMusic")[0].play();
        this.musicSignId = 2;
        this.flag = false;
      } else {
        $("#bgMusic")[0].pause();
        this.musicSignId = 1;
        this.flag = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.bigBg {
  width: 100%;
  height: 100vh;
  background: url(../assets/imgs/loginBg.png) no-repeat center;
  background-size: contain;
}
.login {
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  background: rgba(0, 0, 0, 0.7);
  .toolbar {
    padding-left: 39px;
    padding-right: 39px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .rankList {
      width: 101px;
      height: 102px;
    }
    .vioce {
      width: 101px;
      height: 102px;
    }
  }
  .title {
    width: 730px;
    height: 616px;
  }
  .nameInput {
    width: 402px;
    height: 116px;
    background: url("../assets/imgs/nameInput.png") no-repeat center;
    background-size: contain;
    border-radius: 58px;
    margin: 0 auto;
    margin-bottom: 69px;
    margin-top: 50px;
    position: relative;
    .dice {
      width: 66px;
      height: 72px;
      position: absolute;
      right: 60px;
      top: 20px;
    }
    .underLine {
      width: 221px;
      height: 19px;
      position: absolute;
      bottom: 20px;
      left: 40px;
    }
    input {
      width: 166px;
      height: 50px;
      background: rgba(182, 69, 69, 0.1);
      border-radius: 49px;
      margin: 0 auto;
      text-indent: 0.693333rem;
      font-size: 0.466667rem;
      border: 0px;
      outline: none;
      color: #fff;
      margin-top: 0.333333rem;
      margin-bottom: 0.333333rem;
      position: absolute;
      left: 80px;
    }
    input ::-webkit-input-placeholder {
      /* WebKit, Blink, Edge */
      color: rgba(255, 255, 255, 0.4);
    }
    input :-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: rgba(255, 255, 255, 0.4);
    }
    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: rgba(255, 255, 255, 0.4);
    }
    input :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(255, 255, 255, 0.4);
    }
  }
  .startBtn {
    width: 146px;
    height: 141px;
  }
}
</style>