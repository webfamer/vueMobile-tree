<template>
  <div class="bigBg">
    <div class="rankList">
      <img class="rankTitle" src="../assets/imgs/rankTitle.png" />
      <div class="mainContain">
        <div class="rankOne">
          <img src="../assets/imgs/rankOne.png" alt="" class="rankPanel" />
          <div class="scoreTips">
            <div class="name">{{rankData[0]?rankData[0].name:''}}</div>
            <div class="score">{{rankData[0]?rankData[0].score:''}}</div>
          </div>
        </div>
        <div class="rankTwo">
          <img src="../assets/imgs/rankTwo.png" alt="" class="rankPanel" />
          <div class="scoreTips scoreTipsTow">
            <div class="name">{{rankData[1].name?rankData[1].name:''}}</div>
            <div class="score">{{rankData[1].name?rankData[1].score:''}}</div>
          </div>
        </div>
        <div class="rankThree">
          <img src="../assets/imgs/rankThree.png" alt="" class="rankPanel" />
          <div class="scoreTips scoreTipsThree">
            <div class="name">{{rankData[2]?rankData[2].name:''}}</div>
            <div class="score">{{rankData[2]?rankData[2].score:''}}</div>
          </div>
        </div>
         <div class="rankFour">
          <img src="../assets/imgs/rankFour.png" alt="" class="otherPanel" />
          <div class="scoreTips scoreTipsFive">
            <div class="name">{{rankData[3]?rankData[3].name:''}}</div>
            <div class="score">{{rankData[3]?rankData[3].score:''}}</div>
          </div>
        </div>
        <div class="rankFive">
          <img src="../assets/imgs/rankFive.png" alt="" class="otherPanel" />
          <div class="scoreTips scoreTipsFive">
            <div class="name">{{rankData[4]?rankData[4].name:''}}</div>
            <div class="score">{{rankData[4]?rankData[4].score:''}}</div>
          </div>
        </div>  
        <!-- <img src="../assets/imgs/rankReword.png" class="rankReword" /> -->
      </div>
      <div style="overflow：hidden;height:50px"></div>
      <ul class="scoreList">
        <li v-for="item in ulData" :key="item.rank">
          <div class="list-left">
            <span>{{item.rank}}</span>
            <span>{{item.name}}</span>
          </div>
          <span>{{item.score}}</span>
        </li>
      </ul>
      <img src="../assets/imgs/again.png" alt="" class="gameAgain" @click="playAgain"/>
    </div>
  </div>
</template>

<script>
import bus from "../utils/eventBus";
import { getRankData } from "../api/api";
export default {
  data() {
    return {
      rankData: [],
      ulData:[]
    };
  },
  methods: {
    getRankData() {
      console.log(this.$store)
      let data = {
        name: window.decodeURI(this.$store.state.name),
      };
      getRankData(data).then((res) => {
        this.rankData = res.data
        if(res.data.length>5){
          this.ulData = res.data.slice(5)
        }
      });
    },
    playAgain(){
      this.$router.push('game')
      bus.$emit('playGame')
    }
  },
  created () {
    this.getRankData();
  },
};
</script>

<style lang="scss" scoped>
.bigBg {
  width: 100%;
  height: 100vh;
  background: url(../assets/imgs/totalBg.png) no-repeat center;
  background-size: contain;
}
.rankList {
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  background: rgba(0, 0, 0, 0.7);
  .rankTitle {
    margin: 0 auto;
    width: 531px;
    height: 184px;
  }
  
  .mainContain {
    width: 727px;
    height: 363px;
    background:url('../assets/imgs/rankReword.png') no-repeat center bottom;
    background-size: contain;
    position: relative;
    left:50%;
    top: 10%;
    transform:translateX(-50%);
    .rankReword {
      width: 649px;
      height: 349px;      
    }
    .rankPanel {
      width: 183px;
      height: 93px;
      background-size: cover;
    }
    .scoreTips {
      position: absolute;
      left: 70px;
      top: 43px;
      .name {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
        line-height: 53px;
        text-align: center;
      }
      .score {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ffffff;
        line-height: 73px;
        text-align: center;
      }
    }
    .scoreTipsTow {
      left: 70px;
    }
    .scoreTipsThree {
      left: 70px;
      top: 46px;
    }
    .scoreTipsFour {
      width: 100%;
      left: 50px;
      top: -3px;
    }
    .scoreTipsFive {
      left: 70px;
      top: 0px;
    }
    .rankOne {
     
      position: absolute;
      left:250px;
      top: -140px;
    }
    .rankTwo {
      z-index: 1;
     position: absolute;
      left:100px;
      top: -80px;
    }
    .otherPanel {
      width: 172px;
      height: 44px;
    }
    .rankThree {
      z-index: 1;
      position: absolute;
      left:450px;
      top: -60px;
    }
    .rankFour {
      position: absolute;
      left:10px;
      top: 40px;
    }
    .rankFive {
      position: absolute;
      left:560px;
      top: 80px;
    }
  }
  .scoreList {
    padding-bottom: 30px;
    overflow-y:scroll;
    height:450px;
    li {
      display: flex;
      box-sizing: border-box;
      margin: 0 auto;
      padding-left: 60px;
      padding-right: 60px;
      justify-content: space-between;
      .list-left {
        width: 40%;
        display: flex;
        justify-content: space-between;
      }
      span {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ffffff;
        line-height: 73px;
      }
    }
  }
  .gameAgain {
    width: 265px;
    height: 81px;
  }
}
</style>
