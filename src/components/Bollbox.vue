<template>
  <div v-show="problemData.optionName">
    <div @click="checkAnswer">
    <div :class="[randomClass,'contentTips']" :id="id">
      {{ problemData.optionName }}
    </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      originTop: 100,
      scrollHeight: 0,
      scrollWidth: 0,
      timer: null,
      problemBoxWidth: 0,
      classGather:{
        1:'problem',
        2:'rightBg2',
      }
    };
  },
  methods: {
    fly() {
      this.originTop += 1;

      if ($("#" + this.id)[0] === undefined) {
        clearInterval(this.timer);
      } else {
        this.$nextTick(() => {
          $("#" + this.id)[0].style.top = this.originTop + "px";
        });
      }
    },
    init() {
      this.originTop = 100;
      this.scrollHeight = document.documentElement.clientHeight;
      this.scrollWidth = document.documentElement.clientWidth;
      this.problemBoxWidth = $("#" + this.id).width();
      this.left = (
        Math.random() *
        (this.scrollWidth - this.problemBoxWidth)
      ).toFixed(2);
      $("#" + this.id)[0].style.left = this.left + "px";
    },
    checkAnswer() {
      if (this.problemData.right === true) {
        $("#" + this.id)[0].remove();
        clearInterval(this.timer);
        $("#rightMusic")[0].play();
        this.$emit("getScore", 10);
      } else {
        $("#" + this.id).addClass("errorBg");
        $("#errorMusic")[0].play();
        this.$emit("getScore", -5);
      }
    },
  },
  computed: {
    randomClass() {
      return this.classGather[Math.floor((Math.random()*2))+1]
    }
  },
  props: {
    id: {
      type: String,
      default: null,
    },
    problemData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  mounted() {
    this.init();
    this.timer = setInterval(() => {
      this.fly();
      if (this.originTop >= this.scrollHeight) {
        clearInterval(this.timer);
        $("#" + this.id)[0].remove();
        console.log("我是气球滑动定时器，我呗清楚了");
      }
    }, 5);
  },
};
</script>

<style scoped lang="scss">
.problem {
  min-width: 50%;
  background: url("../assets/imgs/titleright1.png") no-repeat center;
  box-sizing: border-box;
  padding: 32px;
  background-size: cover;
  position: absolute;
  left: 50px;
  font-size: 39px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
  line-height: 39px;
  border-radius: 40px 40px 0px 0px;
  text-shadow: 0px 4px 1px rgba(148, 2, 0, 0.76);
  /* no */
  @media screen and (min-width: 1200px) {
    min-width:20%;
  }
}
.contentTips{
  font-size: 39px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
  line-height: 39px;
  border-radius: 40px 40px 0px 0px;
  text-shadow: 0px 4px 1px rgba(148, 2, 0, 0.76);
  cursor: pointer;
  user-select: none;
}
.rightBg2{
   min-width: 50%;
  background: url("../assets/imgs/titleright2.png") no-repeat center;
  box-sizing: border-box;
  padding: 32px;
  background-size: cover;
  position: absolute;
  left: 50px;
  font-size: 39px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
  line-height: 39px;
  border-radius: 40px 40px 0px 0px;
  text-shadow: 0px 4px 1px rgba(148, 2, 0, 0.76);
   @media screen and (min-width: 1200px) {
    min-width:20%;
  }
}
.hexagon {
  //六边形
 width: 200px;
 background: #73c204;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: -50px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 50px solid #73c204;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-top: 50px solid #73c204;
  }
}

.oval {
  //椭圆形
position: absolute;
  width: 300px;
  height: 150px;
  background: #73c204;
  -moz-border-radius: 150px / 75px;
  -webkit-border-radius: 150px / 75px;
  border-radius: 150px / 75px;
  padding-top: 40px;
  box-sizing: border-box;
}
.trapezoid {
  $traWidth:160px;
  position: absolute;
  border-bottom: $traWidth solid #73c204;
  border-left: $traWidth/2 solid transparent;
  border-right: $traWidth/2 solid transparent;
  height: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.parallelogram {
  position: absolute;
  //平行四边形
  width: 200px;
  height: 133px;
  -webkit-transform: skew(20deg);
  -moz-transform: skew(20deg);
  -o-transform: skew(20deg);
  background: #73c204;
  box-sizing: border-box;
  padding:10px;
}
.errorBg {
  background: url('../assets/imgs/titleErrorBg.png')  no-repeat center;
}
</style>