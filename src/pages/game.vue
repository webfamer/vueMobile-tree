<template>
  <div>
    <div class="ballGame" id="ballGame">
      <div :class="titleClass">
        <span class="titleWord">{{ titleName }}</span>
      </div>
      <div class="toolbar">
        <div class="timeClock">
          <span class="clockWord">{{ count + "s" }}</span>
        </div>
        <div class="score">
          <span class="scoreWord">{{ score }}</span>
        </div>
      </div>
      <!-- <div class="problem">
        
      </div> -->
      <Bollbox
        v-for="(item, index) in bollArr"
        :key="index"
        :id="'my' + item.id"
        :problemData="item"
        @getScore="getScore"
      ></Bollbox>
    </div>
  </div>
</template>

<script>
import Bollbox from "../components/Bollbox";
import bus from "../utils/eventBus";
import { getGameData, saveResult } from "../api/api";
import $ from 'jquery'
export default {
  data() {
    return {
      loginInfo: {},
      bollArr: [],
      gameData: [],
      titleData: [],
      timer: null,
      score: 0,
      count: 40,
      resdata:[{option:[]}]
    };
  },
  computed: {
    titleName() {
      return this.bollArr.length >= this.resdata[0].option.length+1 ? this.titleData[1] : this.titleData[0];
      // return this.titleData[0]
    },
    titleClass(){
           return this.bollArr.length >= this.resdata[0].option.length+1 ? 'titlebar2' : 'titlebar1';
    }
  },
  components: {
    Bollbox,
  },
  methods: {
    // createBall(){
    //  new ball()
    // }
    createBall(data) {
      console.log(this.gameData.length)
      this.bollArr.push(this.gameData.shift());
    },
    getGameData() {
      getGameData().then((res) => {
        this.resdata = res.data;
        this.countTime(); //开始倒计时
        res.data.forEach((item) => {
          this.gameData.push(...item.option);
          this.titleData.push(item.title);
        });
        this.gameData.splice(6,0,{optionName: null,id:990,right: false})
        this.gameData.splice(6,0,{optionName: null,id:991,right: false})
       console.log(this.gameData)
        let timer = setInterval(() => {
          this.createBall();
          if (this.gameData.length <= 0) {
            clearInterval(timer);
            console.log("我是生成气球定时器，我呗清楚了");
          }
        }, 2000);
      });
    },
    getScore(data) {
      this.score = this.score + Number(data);
    },
    saveScore() {
      let data = {
        name: this.$store.state.name,
        score: this.score,
        duration: 15,
      };
      saveResult(data).then((res) => {
        console.log(res);
      });
    },
    countTime() {
      let countTimer = setInterval(() => {
        this.count--;
        if (this.count <= 0) {
          clearInterval(countTimer);
          this.saveScore();
          this.$router.push("rankList");
        }
      }, 1000);
    },
  },
  mounted() {
    bus.$on("playGame", this.getGameData());
  },
};
</script>

<style lang='scss' scoped>
.ballGame {
  background: url("../assets/imgs/bg.png") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  .titlebar1 {
    margin: 0 auto;
    width: 570px;
    height: 156px;
    background: url("../assets/imgs/titleBar.png") no-repeat center;
    background-size: contain;
    position: relative;
    .titleWord {
      width: 100%;
      font-size: 32px;
      font-family: HappyZcool-2016;
      font-weight: bold;
      color: #fefdf7;
      line-height: 73px;
      text-shadow: 0px 4px 0px #91410c;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .titlebar2{
     margin: 0 auto;
    width: 570px;
    height: 156px;
    background: url("../assets/imgs/titleBar2.png") no-repeat center;
    background-size: contain;
    position: relative;
    .titleWord {
      width: 100%;
      font-size: 32px;
      font-family: HappyZcool-2016;
      font-weight: bold;
      color: #fefdf7;
      line-height: 73px;
      text-shadow: 0px 4px 0px #91410c;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .toolbar {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
    right: 16px;
    font-size: 48px;
    font-family: YouSheBiaoTiHei;
    font-weight: bold;
    color: #935226;
    line-height: 73px;
    .timeClock {
      width: 181px;
      height: 189px;
      background: url("../assets/imgs/clock.png") no-repeat center;
      background-size: contain;
      margin-bottom: 26px;
      position: relative;
      .clockWord {
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .score {
      width: 127px;
      height: 167px;
      background: url("../assets/imgs/score.png") no-repeat center;
      background-size: contain;
      position: relative;
      .scoreWord {
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>