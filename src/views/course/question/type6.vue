<template>
  <div class="type3">
    <div v-for="(item, index) in data.questions_option" :key="index">
      <div>
        <input class="radio" type="radio" v-model="picked" :value="index" :id="'radio_'+index" :disabled="disabled">
        <label :for="'radio_'+index" class="item" :class="{'primary': (disabled && picked == index && isRight), 'danger': (disabled && picked == index && !isRight)}">
          <img class="img" v-lazy="item.url" />
          <div class="text" v-if="item.name">
            <span>{{item.name}}</span>
          </div>
          <i class="iconfont"></i>
        </label>
      </div>
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
      // 已选择的项, 下标从0开始
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
            msg: '请选择选项'
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
  .type3 {
    width: 100%;
    @include flex();
    flex-wrap: wrap;
    justify-content: space-between;
    >div {
      width: 46.5%;
      border-radius: size(28);
      position: relative;
      padding-bottom: 50%;
      margin-bottom: 7%;
      >div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .radio {
          display: none;
          &:checked + .item {
            img {
              border: 1px solid #1CBCFD;
              border-radius: size(28);
            }
            .iconfont {
              display: inline-block;
              color: #1CBCFD;
              &:before {
                content: "\e9a6";
              }
            }
          }
        }
        .item {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          img {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 2;
            border: 1px solid #676D8B;
            border-radius: size(28);
          }
          &.primary {
            img {
              border: 1px solid #1CBCFD  !important;
              border-radius: size(28);
            }
            .iconfont {
              display: inline-block;
              color: #1CBCFD  !important;
              &:before {
                content: "\E656" !important;
              }
            }
          }
          &.danger {
            img {
              border: 1px solid #E02020 !important;
              border-radius: size(28);
            }
            .iconfont {
              display: inline-block;
              color: #E02020  !important;
              &:before {
                content: "\E61E"  !important;
              }
            }
          }
          .text {
            position: relative;
            z-index: 3;
            width: 100%;
            padding: size(28) size(44);
            font-size: size(32);
            color: #fff;
            line-height: 1.3;
          }
          .iconfont {
            position: absolute;
            top: size(28);
            right: size(28);
            font-size: size(40);
            color: #676D8B;
            z-index: 4;
            &:before {
              content: "\eb94";
            }
          }
        }
      }
    }
  }
</style>
