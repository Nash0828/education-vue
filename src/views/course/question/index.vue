<template>
  <div class="question">
    <v-header></v-header>
    <div class="progress-wrap">
      <div class="num">答题
        <span><i>01</i>/20</span>
      </div>
      <div class="progress">
        <span class="primary"></span>
        <span class="primary"></span>
        <span class="danger"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="subject">
      <div class="title">下面选项中，哪种是最好的销售方式下面选项中下面选项中，哪种是最好的销售方式?</div>
      <div class="tip" v-if="false">
        <p>正确答案: </p>
        <div class="desc">正确</div>
      </div>
    </div>
    <div class="answer-wrap">
      <div class="list">
<!--        <type1 :data="questionList[0].answers" @change="handleType1Change"></type1>-->
        <type2 v-model="answer"></type2>
      </div>
    </div>
    <div class="action-bar">
      <div class="left">
        <div>
          <i class="iconfont icon-guanji"></i><span>结束</span>
        </div>
      </div>
      <div class="right">
        <a>检查</a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header'
import Type1 from './type1'
import Type2 from './type2'
export default {
  data() {
    return {
      answer: '10',
      type1Value: 0,
      questionList: [
        {
          type: 1,
          title: '下面选项中，哪种是最好的销售方式?',
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
        }
      ]
    }
  },
  methods: {
    handleType1Change(value) {
      this.type1Value = value
    }
  },
  components: {
    vHeader: Header,
    Type1,
    Type2
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
        .desc {
          text-align: center;
          font-size: size(48);
          color: #1CBCFD;
          line-height: 1.3;
          &.danger {
            color: #E02020;
          }
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
            &:active {
              opacity: .5;
            }
          }
        }
      }
    }
  }
</style>