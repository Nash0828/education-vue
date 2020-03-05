<template>
  <div class="question" v-if="questionList.length">
    <v-header></v-header>
<!--    <div class="progress-wrap">-->
<!--      <div class="num">答题-->
<!--        <span><i>01</i>/20</span>-->
<!--      </div>-->
<!--      <div class="progress">-->
<!--        <span class="primary"></span>-->
<!--        <span class="primary"></span>-->
<!--        <span class="danger"></span>-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--      </div>-->
<!--    </div>-->
    <div class="progress-wrap2">
      <div class="desc" v-if="evenRight>=3">连对{{evenRight}}题</div>
      <div class="progress">
        <v-progress :percentage="((currentQuestionIndex + 1)/questionList.length) * 100" stroke-width="6" color="#1CBCFD" track-color="#F2F2F2"></v-progress>
      </div>
    </div>

    <div class="subject" :class="{'type5': this.currentQuestionType == '5'}">
      <div class="title">{{questionList[currentQuestionIndex].questions}}</div>
      <transition name="tip">
      <div class="tip" v-if="checkFinished">
        <p>正确答案: </p>
        <div class="right" v-if="isRight">正确</div>
        <div class="desc" v-else-if="!isRight">{{rightAnswer}}</div>
      </div>
      </transition>
    </div>
    <div class="answer-wrap">
      <div class="list">
        <transition name="slide">
        <type ref="questionType" v-model="currentAnswer" :data="questionList[currentQuestionIndex]" :key="currentQuestionIndex"></type>
        </transition>
      </div>
    </div>
    <div class="action-bar">
      <div class="left">
        <div @click="$router.back()">
          <i class="iconfont icon-guanji"></i><span>结束</span>
        </div>
      </div>
      <div class="right">
        <a @click="check" :class="{'disabled': buttonDisabled}">{{checkFinished?'继续': '检查'}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header'
import { getQuestionList } from 'api/course'
import { Progress } from 'vant'
// 文字单选题
import Type1 from './type1'
// 文字多选题
import Type2 from './type2'
// 填空题
import Type3 from './type3'
// 图片单选题
import Type6 from './type6'
import Type from './type'

/* eslint-disable */
export default {
  data() {
    return {
      // 当前问题下标
      currentQuestionIndex: 40,
      // 用户所选的答案
      currentAnswer: null,
      // 问题的正确答案
      rightAnswer: null,
      // 回答是否正确
      isRight: true,
      // 答案是否已经检查
      checkFinished: false,
      // 按钮是否被禁用
      buttonDisabled: false,
      // 所有题目列表
      questionList: [],
      // 所做过的题的答题情况
      resultArr: [],
      // 连对了多少题
      evenRight: 0
    }
  },
  computed: {
    // 当前问题的题目类型
    currentQuestionType() {
      return this.questionList[this.currentQuestionIndex].type
    }
  },
  created() {
    this._getQuestionList()
    // this.questionList.unshift({"id":44,"curriculum_id":"1","type":5,"questions":"请为以下产品和特点进行配对","questions_option":{"groupA":{"A":{"name":"闪测 "},"B":{"name":"BST-800蓄电池检测仪"},"C":{"name":"TLT440W四柱举升机"},"D":{"name":"X-931非接触式四轮定位仪"}},"groupB":{"A":{"name":"直接打印检测结果 "},"B":{"name":"即插即用，直接查看检测报告"},"C":{"name":"无需拆装轮夹和标靶"},"D":{"name":"可配合非接触四轮定位仪使用"}}},"right_key":"A-B,B-A,C-D,D-C","language":1,"createtime":1582946105,"updatetime":1582946105})
  },
  mounted() {
  },
  methods: {
    // 检查答案
    check() {
      // 判断按钮是否被禁用
      if (this.buttonDisabled) {
        return
      }
      // 判断点击类型是检查答案还是下一题
      if (!this.checkFinished) {
        // 按钮被禁用, 防止多次点击
        this.buttonDisabled = true
        // 如果是检查答案
        this.$refs.questionType.check().then(() => {
          console.log('回答正确')
          this.isRight = true
          this.checkFinished = true
          this.resultArr.push(this.isRight)
        }).catch(err => {
          console.log(err)
          // 非空检查没通过不跳下一题
          if (err.type === 1) {
            this.checkFinished = false
          } else {
            this.isRight = false
            this.rightAnswer = err.data.answer
            // 回答错误, 下一道题作答
            this.checkFinished = true
            this.resultArr.push(this.isRight)
          }
        }).finally(() => {
          // 按钮可以被点击
          this.buttonDisabled = false
        })
      } else {
        // 下一题的索引递增
        this.currentQuestionIndex += 1
        // 下一题还没有检查答案
        this.checkFinished = false
        this.currentAnswer = null
        this.$forceUpdate()
      }
    },
    _getQuestionList() {
      this.$showLoading()
      getQuestionList().then(res => {
        console.log(res)
        this.questionList = res.data.questions
        // this.questionList.unshift({"id":44,"curriculum_id":"1","type":5,"questions":"请为以下产品和特点进行配对","questions_option":{"groupA":{"A":{"name":"闪测 "},"B":{"name":"BST-800蓄电池检测仪"},"C":{"name":"TLT440W四柱举升机"},"D":{"name":"X-931非接触式四轮定位仪"}},"groupB":{"A":{"name":"直接打印检测结果 "},"B":{"name":"即插即用，直接查看检测报告"},"C":{"name":"无需拆装轮夹和标靶"},"D":{"name":"可配合非接触四轮定位仪使用"}}},"right_key":"A-B,B-A,C-D,D-C","language":1,"createtime":1582946105,"updatetime":1582946105})
        // this.currentQuestionIndex = res.data.answer.length
      }).catch(err => {
        console.log(res)
      }).finally(() => {
        this.$hideLoading()
      })
    }
  },
  components: {
    vHeader: Header,
    vProgress: Progress,
    Type,
    Type1,
    Type2,
    Type3,
    Type6
  },
  watch: {
    resultArr(val) {
      this.evenRight = val.slice(val.lastIndexOf(false) + 1, val.length).length
    }
  }
}
</script>

<style scoped lang='scss'>
  @import "css/def";
  .question {
    min-height: 100vh;
    background-color: #fff;
    padding-top: size(90);
    line-height: 1;
    .progress-wrap {
      padding: 0 size(60);
      margin-top: size(80);
      width: 100%;
      .num {
        font-size: size(50);
        color: #666666;
        font-weight: 800;
        line-height: 1;
        span {
          font-weight: normal;
          font-size: size(46);
          display: inline-block;
          margin-left: size(22);
          i {
            font-style: normal;
            font-size: size(60);
            font-weight: 800;
          }
        }
      }
      .progress {
        width: 100%;
        @include flex();
        justify-content: space-between;
        margin-top: size(46);
        span {
          display: inline-block;
          height: size(4);
          background-color: #717895;
          margin-right: size(10);
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
          &.primary {
            background-color: #1CBCFD;
          }
          &.danger {
            background-color: #E02020;
          }
        }
      }
    }
    .progress-wrap2 {
      padding: 0 size(60);
      margin-top: size(20);
      width: 100%;
      >.desc {
        color: #999999;
        font-size: size(34);
        text-align: right;
        width: 100%;
        line-height: 1;
      }
      .progress {
        margin-top: size(30);
        /deep/ .van-progress__pivot {
          display: none;
        }
        /deep/ .van-progress__portion {
          transition: all .3s;
        }
      }
    }
    .subject {
      width: 100%;
      min-height: size(380);
      padding: 0 size(60);
      @include flex();
      flex-wrap: wrap;
      transition: all .5s;
      &.type5 {
        min-height: size(150);
      }
      .title {
        color: #555555;
        font-size: size(34);
        line-height: 1.6;
        font-weight: 600;
        padding: size(20) 0;
        width: 100%;
        position: relative;
        top: size(8);
        transition: all .5s;
      }
      .tip {
        height: size(160);
        width: 100%;
        padding: size(20) 0;
        border-top: 1px solid #757D9A;
        p {
          color: #666666;
          font-size: size(28);
        }
        .right {
          text-align: center;
          font-size: size(48);
          color: #1CBCFD;
          line-height: 1.3;
        }
        .desc {
          padding: size(20) 0;
          text-align: center;
          font-size: size(32);
          color: #333;
          line-height: 1.3;
        }
      }
    }
    .answer-wrap {
      width: 100%;
      padding: 0 size(60) size(200);
      >.list {
        position: relative;
      }
    }
    .action-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #fff;
      z-index: 99;
      @include flex();
      justify-content: space-between;
      padding-bottom: size(56);
      padding-top: size(20);
      padding-left: size(54);
      padding-right: size(54);
      >div {
        width: 50%;
        &.left {
          font-size: size(32);
          color: #BFC0C3;
          .iconfont {
            font-size: size(40);
            position: relative;
            top: size(4);
          }
          span {
            display: inline-block;
            margin-left: size(10);
          }
        }
        &.right {
          a {
            display: block;
            height: size(114);
            line-height: size(114);
            background-color: #1CBCFD;
            border-radius: size(26);
            color: #fff;
            text-align: center;
            font-size: size(34);
            &:active, &.disabled {
              opacity: .5;
            }
          }
        }
      }
    }
    .slide-enter-active,.slide-leave-active {
      will-change: transform;
      -webkit-transition: all .5s;
      transition: all .5s;
      position: absolute
    }
    .slide-enter-to {
      opacity: 1;
    }
    .slide-leave-to {
      opacity: 0;
    }
    .slide-enter {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    .slide-leave-active {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    .tip-enter-active {
      -webkit-transition: all 1s;
      transition: all 1s;
    }
    .tip-leave {
      opacity: 0;
    }
    .tip-enter {
      opacity: 0;
    }
  }
</style>