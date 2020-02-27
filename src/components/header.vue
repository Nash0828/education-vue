<template>
  <div class="header">
    <div class="back" @click="back">
      <i class="iconfont icon-left"></i>
    </div>
    <div class="title">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    button: {
      type: String,
      default: ''
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang="scss">
  @import "css/def";
  .header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: #fff;
    width: 100%;
    padding: 0 size(32);
    height: size(90);
    line-height: size(90);
    font-size: size(32);
    display: flex;
    justify-content: space-between;
    .back{
      flex: .3;
    }
    .title{
      flex: 1.4;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: inherit;
      font-weight: 400;
    }
    .right{
      flex: .3;
      text-align: right;
    }
  }
</style>
