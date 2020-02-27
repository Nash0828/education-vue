<template>
  <div class="type2">
    <div class="row primary">
      <v-field v-model="val" placeholder="请输入答案" class="input" @input="handleInput" border="false"/>
      <span>kg</span>
    </div>
  </div>
</template>

<script>
import { Field } from 'vant'
export default {
  model: {
    props: 'value',
    event: 'input'
  },
  props: ['value'],
  data() {
    return {
      val: ''
    }
  },
  created() {
    this.val = this.value
  },
  methods: {
    handleInput() {
      this.$emit('input', this.val)
    }
  },
  components: {
    vField: Field
  }
}
</script>

<style scoped lang="scss">
  @import "css/def";
  .type2 {
    width: 100%;
    >div.row {
      width: 100%;
      height: size(94);
      border: 1px solid #676D8B;
      border-radius: size(28);
      overflow: hidden;
      @include flex();
      padding: 0 size(28) 0 size(44);
      .input{
        line-height: 1;
        align-items: center;
        height: size(50);
        padding: 0;
        width: 70%;
        /deep/ input{
          color: #333;
          font-size: size(32);
          color: #959AAD;
          &::placeholder{
            color: #CCCCCC;
          }
          &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px white inset;
            // border: 1px solid #CCC!important;
          }
          &::placeholder{
            position: relative;
            // top: size(6);
          }
        }
      }
      >span {
        width: 30%;
        text-align: right;
        color: #444444;
        font-size: size(40);
      }
      &.primary {
        border: 1px solid #1CBCFD;
        .iconfont {
          display: inline-block;
          color: #1CBCFD;
          &:before {
            content: "\E656";
          }
        }
      }
      &.danger {
        border: 1px solid #E02020;
        .iconfont {
          display: inline-block;
          color: #E02020;
          &:before {
            content: "\E61E";
          }
        }
      }
    }
  }
</style>
<style>
  .van-cell:not(:last-child)::after {
    display: none;
  }
</style>