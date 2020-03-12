<template>
  <div class="personal">
    <div class="head-bg">
      <div class="personal-c">
        <div class="title">
          <span></span>
          <span class="concatUs">我的</span>
          <Icon type="ios-settings" size="20" color="#fff" />
        </div>
      </div>
    </div>
    <div class="main">
      <div class="nickname">
        <Upload
          action="/api/user"
          :on-success="handleSuccess"
          　　:headers="{'token':token}"
          :show-upload-list="false"
        >
          <img src="../assets/imgs/headlogo.png" ref="logo" alt />
        </Upload>
        <div class="personalInf">
          <span>这是我的昵称</span>
          <Icon type="md-color-filter" @click="editName" size="24" />
          <br />
          <span v-show="showName">{{userData.username}}</span>
          <Input
            v-model="userData.username"
            @on-blur="saveName"
            v-show="!showName"
            ref="input"
            :placeholder="userData.username"
            style="width: 60px"
          />
        </div>
        <div class="money">
          <div class="balance">
            <span>{{userData.money.toFixed(1)}}元</span>
            <br />
            <span>余额</span>
          </div>
          <div class="bounty">
            <span>{{userData.bonus.toFixed(1)}}元</span>
            <br />
            <span>奖励金</span>
          </div>
        </div>
      </div>
      <div class="inviteCode">
        <div class="myInviteCode">
          <span>我的邀请码</span>
          <Button type="warning" shape="circle">复制</Button>
        </div>
        <div class="wordCode">
          <span>{{userData.code}}</span>
          <br />
          <span>已使用{{userData.codeCount}}次</span>
        </div>
      </div>
      <div class="inviteCode">
        <div class="myInviteCode" style="margin-top:20px;">
          <span>我的超级邀请码</span>
          <Button type="warning" shape="circle">复制</Button>
        </div>
        <div class="wordCode">
          <span>{{userData.superCode}}</span>
          <br />
          <span>已使用{{userData.superCount}}次，间接使用{{userData.ISuperCount}}次</span>
        </div>
      </div>
      <div class="callUs">
        <span>联系我们</span>
        <Icon type="ios-arrow-forward" size="20" color="#D9D9D9" />
      </div>
      <div class="guild">
        <div>
          <span>树App郑重承诺：</span>
          <br />1、永久免费推送服务
          <br />2、产品上线前通过个人邀请码注册用户，个人能获得1元/次的邀请奖励。使用次数不限。
          <br />3、产品上线前通过超级邀请码注册用户，个人除能获得1元/次的邀请奖励外，该邀请用户直接邀请的所有用户你都能获得0.6元/人的邀请奖励。使用次数仅限6次。
          <br />4、该被邀请用户直接邀请（用超级邀请或邀请码）的所有用户，你都还能获得1元/人的邀请奖励。超级邀请码使用次数限6次。
          <br />5、加入我们，拥有不限次数的超级邀请码。
          <br />
        </div>
        <span>蜀ICP备17036674号</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
      userData: {},
      showName: true
    };
  },
  methods: {
    handleSuccess(res, file) {
      if (res.code === 1) {
        //把请求到的头像url数据赋给img
        this.$refs.logo.src = res.data;
      }
    },
    editName() {
      this.showName = false;
      this.$nextTick(()=>{
     this.$refs.input.focus(); //聚焦
      })
    },
    saveName() {
      this.showName = !this.showName;
      api.changeName({username:this.userData.username}).then(res=>{
        console.log(res)
      }) //提交修改的用户昵称
    }
  },
  created() {
    api.getUserInfo().then(res => {
      if (res.code === 1) {
        this.userData = res.data;
      } else {
        console.log(res.message);
      }
    });
    console.log(this.userData, "1111");
  }
};
</script>

<style lang="scss" scoped>
.personal {
  background: #fcfafa;
  .head-bg {
    width: 100%;
    height: 300px;
    background: #678426;
  }
  .personal-c {
    width: 700px;
    margin: 0 auto;
    .title {
      display: flex;
      padding-top: 20px;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 73px;
      .concatUs {
        font-size: 34px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 29px;
        padding-left: 22px;
        color: rgba(255, 252, 252, 1);
        opacity: 1;
      }
    }
  }
  .main {
    width: 700px;
    margin: 0 auto;
    position: relative;

    .nickname {
      position: relative;
      top: -70px;
      width: 100%;
      background: #fff;
      border-radius: 12px;
      img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        margin-top: -70px;
      }
      .personalInf {
        margin-top: 18px;
        span:first-child {
          font-size: 36px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 29px;
          color: rgba(21, 21, 21, 1);
          opacity: 1;
        }
        span:last-child {
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 50px;
          color: rgba(126, 126, 126, 1);
          opacity: 1;
        }
      }
      .money {
        overflow: hidden;
        div {
          float: left;
          width: 50%;
          text-align: center;
          margin-top: 63px;
        }
        .balance {
          border-right: 1px solid #d9d9d9;
        }
        div span:first-child {
          font-size: 44px;
          font-family: PingFang SC;
          font-weight: 500;
          line-height: 29px;
          color: rgba(21, 21, 21, 1);
          opacity: 1;
        }
        div span:last-child {
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 48px;
          color: rgba(126, 126, 126, 1);
          opacity: 1;
        }
      }
    }
    .inviteCode {
      background: #fff;
      clear: both;
      /deep/.myInviteCode {
        height: 110px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px 41px;
        border-bottom: 1px solid #d9d9d9;
        span:first-child {
          font-size: 32px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 29px;
          color: rgba(126, 126, 126, 1);
          opacity: 1;
        }
        .ivu-btn-warning {
          height: 70px;
          width: 140px;
          line-height: 80px;
          text-align: center;
          border: none;
          background-image: linear-gradient(to right, #fc9630, #ffc80f);
          span {
            color: #fff;
          }
        }
      }
      .wordCode {
        height: 191px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        span:first-child {
          font-size: 44px;
          font-family: PingFang SC;
          font-weight: 500;
          line-height: 29px;
          color: rgba(21, 21, 21, 1);
          opacity: 1;
        }
        span:last-child {
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 29px;
          color: rgba(56, 170, 253, 1);
          opacity: 1;
        }
      }
    }
    .callUs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 110px;
      background: #fff;
      margin-top: 20px;
      padding: 0px 41px;
      span {
        font-size: 32px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 29px;
        color: rgba(126, 126, 126, 1);
        opacity: 1;
      }
    }
    .guild {
      text-align: center;
      margin-top: 20px;
      div {
        text-align: left;
        width: 634px;
        margin: 0 auto;
        margin-bottom: 43px;

        font-size: 26px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 29px;
        color: rgba(21, 21, 21, 1);
        opacity: 1;
        span {
          display: block;
          margin-bottom: 8px;
        }
        span {
          font-size: 26px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 29px;
          color: rgba(21, 21, 21, 1);
          opacity: 1;
        }
      }
    }
  }
}
</style>