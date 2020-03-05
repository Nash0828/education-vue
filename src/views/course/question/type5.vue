<template>
  <div class="type5">
<!--    <div class="selected-wrap" :class="{'primary': (disabled&&isRight), 'danger animated shake': (disabled&&!isRight)}">-->
    <div class="selected-wrap">
      <div class="list">
<!--        <span v-for="(item, index) in picked" :key="index" @click="del(index)">{{data.questions_option[item].name}}</span>-->
        <div class="item">
          <span>你好世界哈哈哈哈哈</span>
          <span>你好世界</span>
        </div>
        <div class="item">
          <span>你好世界哈哈哈哈哈</span>
          <span>你好世界</span>
        </div>
      </div>
      <i class="iconfont"></i>
    </div>
    <div class="answers answers-a">
      <div v-for="(item, index) in data.questions_option.groupA" :key="index">
        <input class="checkbox" type="checkbox" v-model="pickedA" :value="index" :id="'checkboxA_'+index" :disabled="disabled">
        <label :for="'checkboxA_'+index">{{item.name}}</label>
      </div>
    </div>
    <div class="answers answers-b">
      <div v-for="(item, index) in data.questions_option.groupB" :key="index">
        <input class="checkbox" type="checkbox" v-model="pickedB" :value="index" :id="'checkboxB_'+index" :disabled="disabled">
        <label :for="'checkboxB_'+index">{{item.name}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    props: 'value',
    event: 'input'
  },
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      type: 5,
      picked: [],
      pickedA: [],
      pickedB: [],
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
        if (this.picked.length === 0) {
          this.$toast('请选择')
          // eslint-disable-next-line
          reject({
            type: 1,
            msg: '没有选择选项'
          })
        } else {
          this.disabled = true
          // 比对已选择的答案和正确答案
          if (this.picked.length !== this.data.right_key.length) {
            this.isRight = false
            // eslint-disable-next-line
            reject({
              type: 2,
              msg: '与正确答案个数不一致, 答案错误',
              data: {
                answer: this.data.right_key
              }
            })
          } else {
            let _picked = JSON.parse(JSON.stringify(this.picked))
            let rightAnswer = JSON.parse(JSON.stringify(this.data.right_key))
            let count = 0
            for (const i in _picked) {
              for (const j in rightAnswer) {
                if (_picked[i] === rightAnswer[j]) {
                  count++
                  break
                }
              }
            }
            if (count === rightAnswer.length) {
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
        }
      })
    },
    del(index) {
      if (!this.disabled) {
        this.picked.splice(index, 1)
      }
    }
  },
  watch: {
    picked(val) {
      this.$emit('input', val)
    },
    pickedA(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "css/def";
  .type5 {
    width: 100%;
    .selected-wrap {
      width: 100%;
      min-height: size(220);
      border: 1px solid #676D8B;
      border-radius: size(28);
      padding: size(26) size(26) size(26) size(26);
      position: relative;
      .list {
        .item {
          width: 100%;
          background-color: #f7f7f7;
          padding: size(20) size(20) 0 size(20);
          border-radius: size(20);
          margin-bottom: size(20);
          &:last-child {
            margin-bottom: 0;
          }
          span {
            display: inline-block;
            min-height: size(60);
            line-height: 1.2;
            border-radius: size(30);
            border: 1px solid #1FB7F5;
            color: #1CBCFD;
            font-size: size(30);
            padding: size(10) size(18);
            margin-right: size(20);
            margin-bottom: size(20);
            background-color: #E1F6FE;
          }
        }
      }
      .iconfont {
        position: absolute;
        bottom: 0;
        right: size(28);
        bottom: size(28);
        font-size: size(40);
        display: none;
      }
      &.danger {
        border: 1px solid #E02020;
        .iconfont {
          display: inline-block;
          color: #E02020;
          &:before {
            content: "\E61E"  !important;
          }
        }
      }
      &.primary {
        border: 1px solid #1CBCFD;
        .iconfont {
          color: #1CBCFD;
          display: inline-block;
          &:before {
            content: "\E656"  !important;
          }
        }
      }
    }
    .answers {
      width: 100%;
      margin-top: size(56);
      @include flex();
      justify-content: flex-start;
      flex-wrap: wrap;
      &.answers-a{
        @include border('bottom');
        padding-bottom: size(30)
      }
      &.answers-b{
        margin-top: size(50);
      }
      >div {
        .checkbox {
          display: none;
          &:checked + label{
            background-color: #F6F6F6;
            border: 1px solid #F6F6F6;
            color: #F6F6F6;
          }
        }
        label {
          @include flex();
          min-height: size(60);
          line-height: 1.2;
          border-radius: size(30);
          border: 1px solid #BEBEBE;
          color: #040404;
          font-size: size(30);
          padding: size(10) size(18);
          margin-right: size(20);
          margin-bottom: size(20);
        }
      }
    }
  }
</style>
