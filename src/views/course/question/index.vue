<template>
  <div class="question">
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
        <v-progress :percentage="((currentQuestionIndex)/questionList.length) * 100" stroke-width="6" color="#1CBCFD" track-color="#F2F2F2"></v-progress>
      </div>
    </div>
    <div class="subject">
      <div class="title">{{questionList[currentQuestionIndex].title}}</div>
      <div class="tip" v-if="checkFinished">
        <p>正确答案: </p>
        <div class="right" v-if="isRight">正确</div>
        <div class="desc" v-else-if="!isRight">{{rightAnswer}}</div>
      </div>
    </div>
    <div class="answer-wrap">
      <div class="list">
<!--        <type1 ref="type1" :answers="questionList[0].answers" :answer="1"></type1>-->
<!--                <type2 ref="type2" v-model="answer" answer="10"></type2>-->
<!--        <type3 ref="type3" :answers="questionList[2].answers" :answer="1"></type3>-->
<!--        <type4 ref="type4" :answers="questionList[1].answers" :answer="questionList[1].answer"></type4>-->
        <!-- 单项文字选择题 -->
        <template v-if="questionList[currentQuestionIndex].type === 1">
          <type1 ref="questionType" :answers="questionList[currentQuestionIndex].answers" :answer="questionList[currentQuestionIndex].answer"></type1>
        </template>
        <!-- 填空题 -->
        <template v-else-if="questionList[currentQuestionIndex].type === 2">
          <type2 ref="questionType" v-model="currentAnswer" :answer="questionList[currentQuestionIndex].answer" :unit="questionList[currentQuestionIndex]"></type2>
        </template>
        <!-- 图片单选题 -->
        <template v-if="questionList[currentQuestionIndex].type === 3">
          <type3 ref="questionType" :answers="questionList[currentQuestionIndex].answers" :answer="questionList[currentQuestionIndex].answer"></type3>
        </template>
        <!-- 多选题 -->
        <template v-if="questionList[currentQuestionIndex].type === 4">
          <type4 ref="questionType" :answers="questionList[currentQuestionIndex].answers" :answer="questionList[currentQuestionIndex].answer"></type4>
        </template>
      </div>
    </div>
    <div class="action-bar">
      <div class="left">
        <div>
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
import { Progress } from 'vant'
import Type1 from './type1'
import Type2 from './type2'
import Type3 from './type3'
import Type4 from './type4'
export default {
  data() {
    return {
      // 当前问题下标
      currentQuestionIndex: 0,
      // 当前问题的答案
      currentAnswer: null,
      // 问题的正确答案
      rightAnswer: null,
      // 回答是否正确
      isRight: true,
      // 答案是否已经检查
      checkFinished: false,
      // 按钮是否被禁用
      buttonDisabled: false,
      /* eslint-disable */
      questionList: [
        /*
        {
          "id": 1,
          "curriculum_id": "1",
          "type": 1,
          "questions": "下列哪一项不属于X-431移动诊断中心的功能？",
          "questions_option": {
            "A": "提供一站式诊断解决方案",
            "B": "支持ADAS校准",
            "C": "手动升降调节显示屏高度",
            "D": "支持示波器、传感器、电瓶检测、内窥镜、热成像仪的扩展"
          },
          "right_key": "C",
          "language": 1,
          "createtime": 1582946105,
          "updatetime": 1582946105
        },
        */
        {
          // 文字选择题
          type: 1,
          title: '下面选项中，哪种是最好的销售方式?',
          // 正确答案, answers的数组下标
          answer: 1,
          answers: [
            {
              text: '邮件',
              value: 1
            },
            {
              text: '电话沟通',
              value: 2
            },
            {
              text: '面谈',
              value: 3
            },
            {
              text: '书信',
              value: 4
            }
          ]
        },
        {
          // 填空题
          type: 2,
          title: '光速有多快?',
          // 单位
          unit: 'km/s',
          // 正确答案
          answer: 30
        },
        {
          // 图片选择题
          type: 3,
          title: '以下哪一款设备是可视化空调清洗内窥镜?',
          // 正确答案, 值是answers的下标
          answer: 0,
          answers: [
            {
              text: '',
              value: 1,
              url: require('image/temp_01.png')
            },
            {
              text: '',
              value: 2,
              url: require('image/temp_02.png')
            },
            {
              text: '',
              value: 3,
              url: require('image/temp_03.png')
            },
            {
              text: '',
              value: 4,
              url: require('image/temp_04.png')
            }
          ]
        },
        {
          // 多选题
          type: 4,
          title: '目前元征所拥有的移动式3D四轮定位仪有哪些？',
          // 正确答案, 值是answers数组下标
          answer: [0, 3, 4],
          answers: [
            {
              text: 'X-431',
              value: 1
            },
            {
              text: 'X-531',
              value: 2
            },
            {
              text: 'X-631',
              value: 3
            },
            {
              text: 'X-731',
              value: 4
            },
            {
              text: 'X-831',
              value: 5
            }
          ]
        }
      ],
      // 所做过的题的答题情况
      resultArr: [],
      // 连对了多少题
      evenRight: 0
    }
  },
  methods: {
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
          console.log('执行了finnally')
        })
      } else {
        // 下一题的索引递增
        this.currentQuestionIndex += 1
        // 下一题还没有检查答案
        this.checkFinished = false
        this.$forceUpdate()
      }
    }
  },
  components: {
    vHeader: Header,
    vProgress: Progress,
    Type1,
    Type2,
    Type3,
    Type4
  },
  watch: {
    resultArr(val) {
      this.evenRight = val.slice(val.lastIndexOf(false) + 1, val.length).length
    }
  }
}
</script>

<style scoped lang="scss">
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
      }
    }
    .subject {
      width: 100%;
      min-height: size(380);
      padding: 0 size(60);
      @include flex();
      flex-wrap: wrap;
      .title {
        color: #555555;
        font-size: size(34);
        line-height: 1.6;
        font-weight: 600;
        padding: size(20) 0;
        width: 100%;
        position: relative;
        top: size(8);
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
  }
</style>