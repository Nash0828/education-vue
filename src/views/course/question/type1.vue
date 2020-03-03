<template>
  <div class="type1">
    <div v-for="(item, index) in data.questions_option" :key="index">
      <input class="radio" type="radio" v-model="picked" :value="index" :id="'radio_'+index" :disabled="disabled">
      <label :for="'radio_'+index" class="item" :class="{'primary': (disabled && picked == index && isRight), 'danger animated shake': (disabled && picked == index && !isRight)}">
        <div class="text">
          <span>{{item.name}}</span>
        </div>
        <i class="iconfont"></i>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    props: 'value',
    event: 'change'
  },
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      // 已选择的项
      picked: -1,
      // 选项不可点击
      disabled: false,
      isRight: false
    }
  },
  created() {
  },
  methods: {
    check() {
      return new Promise((resolve, reject) => {
        // 没有选择选项
        if (this.picked === -1) {
          this.$toast('请选择选项')
          // eslint-disable-next-line
          reject({
            type: 1,
            msg: '没有选择选项'
          })
        } else {
          // 选项不可点击
          this.disabled = true
          // 如果选的答案正确
          if (this.data.right_key === this.picked) {
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
  watch: {
    picked(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "css/def";
  .type1 {
    width: 100%;
    .item {
      display: block;
      min-height: size(92);
      border: 1px solid #676D8B;
      border-radius: size(28);
      margin-bottom: size(44);
      position: relative;
      padding-top: size(10);
      padding-bottom: size(10);
      &.primary {
        border: 1px solid #1CBCFD  !important;
        .iconfont {
          display: inline-block;
          color: #1CBCFD  !important;
          &:before {
            content: "\E656" !important;
          }
        }
      }
      &.danger {
        border: 1px solid #E02020 !important;
        .iconfont {
          display: inline-block;
          color: #E02020  !important;
          &:before {
            content: "\E61E"  !important;
          }
        }
      }
      .text {
        min-height: size(92);
        width: 100%;
        @include flex();
        justify-content: flex-start;
        padding: 0 size(88) 0 size(40);
        font-size: size(32);
        color: #959AAD;
        line-height: 1.2;
      }
      .iconfont {
        position: absolute;
        top: 50%;
        right: size(28);
        font-size: size(40);
        transform: translateY(-50%);
        &:before {
          content: "\eb94";
        }
      }
    }
    .radio {
      display: none;
      &:checked + .item {
        border: 1px solid #1CBCFD;
        .iconfont {
          display: inline-block;
          color: #1CBCFD;
          &:before {
            content: "\e9a6";
          }
        }
      }
    }
  }
</style>