<template>
  <div class="login">
    <vHeader></vHeader>
    <div class="title">手机登陆</div>
    <div class="form">
      <div class="row">
        <v-field v-model="mobile" clearable placeholder="输入手机号码" class="input"/>
      </div>
      <div class="row code-wrap">
        <div class="col-1">
          <v-field v-model="code" placeholder="输入验证码" class="input"/>
        </div>
        <div class="col-2">
          <a v-if="!timer" @click="_sendCode">获取验证码</a>
          <a class="disabled" v-if="timer">重新发送({{seconds}}s)</a>
        </div>
      </div>
      <div class="terms">
        <input type="checkbox" name="checkbox" id="checkbox" v-model="isAgree">
        <label for="checkbox" class="iconfont icon-circle"></label>
        <span>我已阅读并同意 <a>《用户协议》</a>和 <a>《隐私协议》</a></span>
      </div>
      <div class="btn-wrap">
        <a class="active" @click="_mobileLogin" v-if="formPass && !formSubmitting">登陆</a>
        <a class="disabled" v-if="!formPass || formSubmitting">登陆</a>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { Field } from 'vant'
import { sendCode, mobileLogin } from 'api/main'
import Cookies from 'js-cookie'
import { config } from '@/utils/request'
import Header from 'components/header'
export default {
  data() {
    return {
      mobile: '',
      code: '',
      seconds: 60,
      timer: null,
      formSubmitting: false,
      account: '',
      password: '',
      accountFormSubmitting: false,
      isAgree: true
    }
  },
  created() {
  },
  computed: {
    formPass() {
      return this.mobile && this.code && this.isAgree
    }
  },
  methods: {
    _sendCode() {
      if (!this.mobile) {
        this.$toast('手机号不能为空')
        return false
      }
      this.$showLoading()
      sendCode(this.mobile).then(res => {
        this.$hideLoading()
        this.timer = setInterval(() => {
          this.seconds--
          if (this.seconds === 0) {
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
        console.log(res)
      }).catch(err => {
        this.$hideLoading()
        console.log(err)
      })
    },
    _mobileLogin() {
      if (!this.mobile) {
        this.$toast('手机号不能为空')
        return false
      }
      if (!this.code) {
        this.$toast('验证码不能为空')
        return false
      }
      this.$showLoading()
      this.formSubmitting = true
      mobileLogin(this.mobile, this.code).then(res => {
        this.$hideLoading()
        this.formSubmitting = false
        console.log(res)
        this.success(res)
      }).catch(err => {
        this.$hideLoading()
        this.formSubmitting = false
        console.log(err)
      })
    },
    success(res) {
      const token = res.data.userinfo.token
      Cookies.set('token', token)
      this.$store.commit('SET_TOKEN', token)
      config.headers['token'] = token
      console.log('+++++++token', token)
      this.$store.dispatch('GetUserInfo').then(() => {
        if (this.$route.query.redirect) {
          this.$router.replace(this.$route.query.redirect)
          // location.href = location.href.split('#')[0] + '#' + this.$route.query.redirect
        } else {
          this.$router.replace('/')
        }
      })
    }
  },
  components: {
    vField: Field,
    vHeader: Header
  },
  beforeDestory() {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>
<style scoped="true" lang="scss">
  @import "css/def";
  .login {
    min-height: 100vh;
    background-color: #fff;
    padding-top: size(90);
    >.title{
      font-size: size(56);
      color: #333;
      @include flex();
      height: size(300);
      width: 100%;
      text-align: center;
      font-weight: 800;
    }
    >.form{
      padding: 0 size(100);
      .row{
        width: 100%;
        height: size(90);
        margin-top: size(24);
        @include border('bottom');
        @include flex();
        .input{
          line-height: 1;
          align-items: center;
          height: size(50);
          padding: 0;
          /deep/ input{
            color: #333;
            font-size: size(40);
            /*height: size(40);*/
            /*line-height: size(40);*/
            &::placeholder{
              color: #CCCCCC;
            }
            &:-webkit-autofill {
              -webkit-box-shadow: 0 0 0px 1000px white inset;
              // border: 1px solid #CCC!important;
            }
            &::placeholder{
              position: relative;
              top: size(6);
            }
          }
        }
        &.code-wrap{
          width: 100%;
          justify-content: space-between;
          .col-1{
            width: calc(100% - #{size(220)})
          }
          .col-2{
            width: size(220);
            text-align: right;
            font-size: size(30);
            color: #5B92E1;
            a{
              font-size: size(30);
              &.disabled{
                color: #CCCCCC;
              }
            }
          }
        }
      }
    }
    .btn-wrap{
      text-align: center;
      margin-top: size(90);
      a{
        @include flex();
        height: size(90);
        color: #fff;
        background-color: #1CBCFD;
        -webkit-border-radius: size(45);
        -moz-border-radius: size(45);
        border-radius: size(45);
        text-align: center;
        font-size: size(36);
        &.active:active{
          opacity: .5;
        }
        &.disabled{
          background-color: #E6E6E6;
        }
      }
    }
    .terms {
      font-size: size(24);
      margin-top: size(38);
      label.iconfont {
        display: inline-block;
        font-size: size(28);
        position: relative;
        top: size(2);
      }
      input {
        margin: 0;
        display: none;
        &:checked + label:before{
          content: "\e656";
          color: #1CBCFD;
        }
      }
      a {
        color: #1CBCFD;
        font-size: size(24);
      }
    }
  }
</style>
