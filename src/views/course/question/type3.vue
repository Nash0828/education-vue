<template>
  <div class="type2">
    <div class="row" :class="{'primary': (disabled&&isRight), 'danger': (disabled&&!isRight)}">
      <v-field v-model="content" placeholder="请输入答案" class="input" @input="handleInput" :disabled="disabled"/>
      <span>{{data.questions_option.unit}}</span>
      <i class="iconfont"></i>
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
  props: ['value', 'data'],
  data() {
    return {
      content: '',
      disabled: false,
      // 回答是否正确
      isRight: false
    }
  },
  created() {
    this.content = this.value
  },
  methods: {
    handleInput() {
      this.$emit('input', this.val)
    },
    check() {
      return new Promise((resolve, reject) => {
        if (!this.content) {
          this.$toast('请填写答案')
          // eslint-disable-next-line
          reject({
            type: 1,
            msg: '没有选择选项'
          })
        } else {
          this.disabled = true
          // 判断回答是否正确
          if (this.content === String(this.data.right_key)) {
            this.isRight = true
            resolve()
          } else {
            this.isRight = false
            // eslint-disable-next-line
            reject({
              type: 2,
              msg: '回答错误',
              data: {
                answer: this.data.right_key
              }
            })
          }
        }
      })
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
      justify-content: space-between;
      padding: 0 size(28) 0 size(44);
      position: relative;
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
        display: inline-block;
        width: 30%;
        text-align: right;
        color: #444444;
        font-size: size(40);
      }
      &.primary {
        border: 1px solid #1CBCFD;
        >span {
          display: none;
        }
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
        >span {
          display: none;
        }
        .iconfont {
          display: inline-block;
          color: #E02020;
          &:before {
            content: "\E61E";
          }
        }
      }
      .iconfont {
        position: absolute;
        top: 50%;
        right: size(28);
        font-size: size(40);
        transform: translateY(-50%);
        display: none;
      }
    }
  }
</style>
<style>
  .van-cell:not(:last-child)::after {
    display: none;
  }
</style>