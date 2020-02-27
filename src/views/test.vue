<template>
  <div class="test">
    <div class="big">1</div>
  </div>
</template>
<style scoped="true" lang="scss">
  @import "css/def";
  .test{
    width: 100%;
    position: relative;
    .big{
      width: 100%;
      height: 100px;
      position: relative;
      overflow: hidden;
    }
    .big::after{
      content: '';
      width: 140%;
      height: 100px;
      position: absolute;
      left: -20%;
      top: 0;
      z-index: 1;
      border-radius: 0 0 100% 100%;
      background: #1496f1;
    }
  }
</style>
