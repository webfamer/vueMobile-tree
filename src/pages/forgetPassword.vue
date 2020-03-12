<template>
  <div class="personal">
    <div class="personal-c">
      <div class="head">
        <div class="avatar"></div>
      </div>
      <div class="main">
        <div class="tips">
          <span>忘记密码</span>
        </div>
        <div class="main-head">
          <span>输入您的手机号</span>
          <span>已有账号登录</span>
        </div>
        <div class="form">
          <Input v-model="registInfo.phone" placeholder="手机号" @on-blur="checkTel"/>
          <Input v-model="registInfo.password" placeholder="新密码" type="password" password/>
          <Input v-model="registInfo.verifyCode" placeholder="验证码">
            <span slot="suffix" @click="getVerifyCode">获取验证码</span>
          </Input>
        </div>
        <div class="btn">
          <Button type="success" long @click="changePassword">登录</Button>
          <div>
            <span class="clickRegister" @click="toRegister">没有账号？点击立即注册</span>
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
import api from '../api/api'
export default {
  data() {
    return {
     registInfo:{}
    };
  },
  methods:{
    changePassword(){
    api.changePassword({...this.registInfo}).then(res=>{
           if(res.code===1){
      this.background("success",'获取成功');
        }else{
      this.background("error",'获取失败');
        }
      })
    },
     background(type,msg) {
      //提示信息
      this.$Message[type]({
        background: true,
        content: msg
      });
    },
      checkTel(){
      api.checkTel(this.registInfo.phone).then(res=>{
        if(res.code===1){
          this.background("error",'该手机号不存在');
        }
      })
    },
   toRegister(){
      console.log(111)
      this.$router.push('/register')
    },
       getVerifyCode() {
      api.getVerifyCode(this.registInfo.phone).then(res => {
         if(res.code===1){
      this.background("success",'获取成功');
        }else{
      this.background("error",'获取失败');
        }
      });
    }
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
      .avatar {
        width: 200px;
        height: 72px;
        margin: 0 auto;
        padding-top: 128px;
        background: url("../assets/imgs/avatar.png") no-repeat center;
        background-size: contain;
      }
    }
    .main {
      width: 100%;
      overflow: hidden;
      .tips {
        overflow: hidden;
        span {
          float: left;
          // width: 132px;
          height: 62px;
          font-size: 44px;
          font-family: PingFang SC;
          font-weight: 500;
          line-height: 62px;
          color: rgba(21, 21, 21, 1);
          opacity: 1;
          margin-bottom: 36px;
        }
      }
      .main-head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 14px;
        span {
          width: 196px;
          height: 40px;
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 500;
          line-height: 30px;
          color: rgba(21, 21, 21, 1);
          opacity: 1;
        }
        span:last-child {
          width: 168px;
          height: 40px;
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 30px;
          color: rgba(126, 126, 126, 1);
          opacity: 1;
        }
      }
      /deep/.form {
        .ivu-input {
          height: 102px;
          margin: 14px 0px;
          font-size: 28px;
          padding-left: 24px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(126, 126, 126, 1);
        }
        .ivu-input-suffix {
          width: 170px;
          display: block;
          line-height: 120px;
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(21, 21, 21, 1);
        }
        .ivu-input-suffix i{
          display: inline-block;
          font-size:66px;
          margin-top: 50px;
        }
      }
      .btn {
        margin-top: 29px;
        overflow: hidden;
        .ivu-btn-success {
          background-image: linear-gradient(to right, #648324, #7ba22b);
          border: none;
          height: 102px;
          font-size: 32px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          opacity: 1;
        }
        .clickRegister {
          height: 40px;
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 44px;
          color: rgba(56, 170, 253, 1);
          opacity: 1;
          float: right;
          margin-top: 36px;
        }
      }
      .tel {
        overflow: hidden;
        margin: 0 auto;
        margin-top: 492px;
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