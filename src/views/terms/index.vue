<template>
  <div class="terms">
    <div class="title">感谢您使用智能培训！</div>
    <div class="content">
      <p>为了更好的保障您的个人权益，请认证阅读《服务协议》、《隐私政策》的全部内容，同意并接受全部条款后开始使用我们的产品和服务。</p>
      <p>若选择不同意，将无法使用我们的产品和服务，并退出应用。</p>
      <p>查看完整 <router-link to="./agreement">《用户协议》</router-link>和<router-link to="./privacy">《隐私政策》</router-link></p>
    </div>
    <div class="btns">
      <a @click="agree">同意并继续</a>
      <p>暂不同意，退出使用</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  methods: {
    agree() {
      this.$router.push('/course')
    }
  }
}
</script>
<style scoped lang="scss">
  @import "css/def";
  .terms {
    min-height: 100vh;
    background-color: #fff;
    >.title {
      color: #3E3E3E;
      font-size: size(48);
      padding: size(40) size(70);
      font-weight: 700;
    }
    >.content {
      padding: size(20) size(70);
      color: #666;
      font-size: size(30);
      p {
        line-height: 1.3;
        margin-bottom: size(24);
        a {
          color: #1CBCFD;
        }
      }
    }
    >.btns {
      width: 100%;
      text-align: center;
      margin-top: size(200);
      padding: 0 size(30);
      a {
        display: block;
        height: size(90);
        line-height: size(90);
        background-color: #1CBCFD;
        color: #fff;
        font-size: size(30) ;
        border-radius: size(46);
        &:active {
          opacity: .5;
        }
      }
      p {
        color: #666;
        font-size: size(26);
        height: size(90);
        line-height: size(90);
      }
    }
  }
</style>
