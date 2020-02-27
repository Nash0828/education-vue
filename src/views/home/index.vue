<template>
  <div class="index">
    <vHeader class="header">
      <span>课程</span>
      <router-link tag="div" to="/course/filter" slot="right" class="switch">
        <i class="iconfont icon-switch"></i>
      </router-link>
    </vHeader>
    <pull-refresh v-model="refreshing" @refresh="onRefresh">
      <list class="list" v-model="loading" :finished="finished" @load="onLoad" finished-text="没有更多了">
        <router-link tag="div" to="/course/question" class="item" v-for="(item, index) in list" :key="index">
          <div class="left"></div>
          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="progress">
              <v-progress :percentage="item.percentage" stroke-width="8" color="#1CBCFD" track-color="#EAEAEA"></v-progress>
            </div>
            <div class="progress-desc">已完成{{item.percentage}}%</div>
            <div class="footer">
              <div class="left">
                <i class="iconfont icon-star2" v-for="index in item.star" :key="index"></i>
                <span>{{item.score}}分</span>
              </div>
              <div class="right">
                <span>{{item.people}}学过</span>
              </div>
            </div>
          </div>
        </router-link>
      </list>
    </pull-refresh>
    <div class="home-nav">
      <div class="item item1">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from 'components/header'
import { Progress, List, PullRefresh } from 'vant'
Vue.use(PullRefresh)
export default {
  data() {
    return {
      list: [
        {
          title: '销售课程第一节',
          percentage: 20,
          star: 3,
          score: 6,
          people: 8979
        },
        {
          title: '销售课程第二节: 《Hello World》',
          percentage: 60,
          star: 4,
          score: 8,
          people: 1234
        },
        {
          title: '销售课程第三节: 《Oracle从删库到跑路》',
          percentage: 10,
          star: 5,
          score: 10,
          people: 556
        },
        {
          title: '销售课程第四节: 《JAVA从入门到放弃到跳楼到投胎》',
          percentage: 90,
          star: 3,
          score: 6,
          people: 112
        },
        {
          title: '销售课程第五节: 《javascript从入门到放弃》',
          percentage: 100,
          star: 5,
          score: 10,
          people: 1662
        }
      ],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    onLoad() {
      console.log('滚动到底部')
      setTimeout(() => {
        this.list = this.list.concat([{
          title: '销售课程第一节',
          percentage: 20,
          star: 3,
          score: 6,
          people: 8979
        },
        {
          title: '销售课程第二节: 《Hello World》',
          percentage: 60,
          star: 4,
          score: 8,
          people: 1234
        },
        {
          title: '销售课程第三节: 《Oracle从删库到跑路》',
          percentage: 10,
          star: 5,
          score: 10,
          people: 556
        },
        {
          title: '销售课程第四节: 《JAVA从入门到放弃到跳楼到投胎》',
          percentage: 90,
          star: 3,
          score: 6,
          people: 112
        },
        {
          title: '销售课程第五节: 《javascript从入门到放弃》',
          percentage: 100,
          star: 5,
          score: 10,
          people: 1662
        }])
        this.loading = false
        this.refreshing = false
        if (this.list.length > 10) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh() {
      this.finished = false
      this.loading = true
      this.onLoad()
    }
  },
  components: {
    vHeader: Header,
    vProgress: Progress,
    List,
    PullRefresh
  }
}
</script>

<style scoped lang="scss">
  @import "css/def";
  .index {
    min-height: 100vh;
    background-color: #FBFBFB;
    padding-top: size(90);
    .header {
      .switch {
        i {
          font-size: size(40);
        }
      }
    }
    .list {
      padding: size(28) size(26);
      >.item {
        margin-bottom: size(28);
        width: 100%;
        height: size(286);
        background-color: #fff;
        border-radius: size(14);
        overflow: hidden;
        @include flex();
        >.left {
          width: size(216);
          height: 100%;
          background-color: #ffd0d0;
        }
        >.right {
          width: calc(100% - #{size(216)});
          height: 100%;
          position: relative;
          padding: size(24) size(30);
          .title {
            @include txt-overflow(2);
            line-height: 1.3;
            color: #212121;
            font-size: size(36);
          }
          .progress {
            margin-top: size(20);
            /deep/ .van-progress__pivot {
              display: none;
            }
          }
          .progress-desc {
            color: #757575;
            font-size: size(28);
            margin-top: size(10);
          }
          .footer {
            position: absolute;
            bottom: size(24);
            left: size(28);
            right: size(28);
            @include flex();
            justify-content: space-between;
            font-size: size(26);
            color: #757575;
            line-height: 1;
            i {
              color: #F6A30B;
            }
          }
        }
      }
    }
  }

</style>