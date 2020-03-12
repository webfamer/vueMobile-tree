<template>
  <div class="personal">
    <div class="personal-c">
      <div class="head">
        <div class="title">
         <Icon type="ios-arrow-back" size=26 color="#000000"></Icon>
          <span class="concatUs">联系我们</span>
          <span></span>
        </div>
        <div class="avatar"></div>
        <div>
          <span class="name">树</span>
        </div>
      </div>
      <div class="main">
        <div class="contactWay">
          <div class="line">
            <span>联系电话</span>
            <span style="color:#38AAFD">028-65868883</span>
          </div>
          <div class="line">
            <span>微信号</span>
            <span style="color:#151515">UBD999</span>
          </div>
          <div class="QRcode">
            <div>微信二维码</div>
            <img src="../assets/imgs/qrcode.png" alt />
          </div>
        </div>
        <div class="tel">
          <span>需要更多帮助？立即致电</span>
          <br />
          <span>028-65868883</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: ""
    };
  }
};
</script>

<style lang='scss' scoped>
.personal {
  .personal-c {
    width: 660px;
    margin: 0 auto;
    .head {
      height: 186px;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 73px;
        .concatUs {
          font-size: 34px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 30px;
          color: rgba(21, 21, 21, 1);
          opacity: 1;
        }
      }
      .avatar {
        width: 200px;
        height: 72px;
        margin: 0 auto;
        padding-top: 128px;
        background: url("../assets/imgs/avatar.png") no-repeat center;
        background-size: contain;
      }
      .name {
        margin-top: 9px;
        width: 50px;
        height: 70px;
        font-size: 50px;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 30px;
        color: rgba(21, 21, 21, 1);
        opacity: 1;
      }
    }
    .main {
      width: 100%;
      margin-top: 99px;
      overflow: hidden;
      .line {
        height: 102px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(217, 217, 217, 1);
        align-items: center;
        span {
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 30px;
          color: rgba(126, 126, 126, 1);
          opacity: 1;
        }
      }
      .QRcode {
        div {
          margin-top: 60px;
          margin-bottom: 51px;
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 30px;
          color: rgba(126, 126, 126, 1);
          opacity: 1;
        }
        img {
          width: 278px;
          height: 270px;
        }
      }
      .tel {
        overflow: hidden;
        margin: 0 auto;
        margin-top: 227px;
        span:first-child {
          font-size: 28px;
          color: #151515;
        }
        span {
          width: 308px;
          height: 85px;
          font-size: 32px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 44px;
          color: rgba(56, 170, 253, 1);
          opacity: 1;
        }
      }
    }
  }
}
</style>