<template>
  <div class="not-found">
    <div class="m">404</div>
    <div class="s">NOT FOUNT</div>
    <router-link tag="a" to="/" class="btn">返回首页</router-link>
  </div>
</template>
<style scoped lang="scss">
  @import "css/def";
  .not-found {
    min-height: 100vh;
    text-align: center;
    line-height: 1;
    .m {
      font-size: size(80);
      font-weight: 900;
      margin-top: size(100);
    }
    .s {
      font-size: size(32);
      margin-top: size(10);
    }
    .btn {
      display: inline-block;
      margin-top: size(50);
      font-size: size(28);
      color: #fff;
      width: size(240);
      height: size(70);
      line-height: size(70);
      -webkit-border-radius: size(40);
      -moz-border-radius: size(40);
      border-radius: size(40);
      background-color: #03B097;
    }
  }
</style>
