<template>
  <div class="history">
    <v-header>{{$route.meta.title}}</v-header>
    <div class="group">
      <div class="group-item">
        <div class="title">销售技巧</div>
        <div class="list">
          <div class="item">
            <div class="left"></div>
            <div class="right">
              <div class="title">销售技巧</div>
              <div class="progress">
                <v-progress :percentage="30" stroke-width="8" color="#1CBCFD" track-color="#EAEAEA"></v-progress>
              </div>
              <div class="progress-desc">已完成30%</div>
            </div>
          </div>
          <div class="item">
            <div class="left"></div>
            <div class="right">
              <div class="title">销售技巧</div>
              <div class="progress">
                <v-progress :percentage="30" stroke-width="8" color="#1CBCFD" track-color="#EAEAEA"></v-progress>
              </div>
              <div class="progress-desc">已完成30%</div>
            </div>
          </div>
          <div class="item">
            <div class="left"></div>
            <div class="right">
              <div class="title">销售技巧</div>
              <div class="progress">
                <v-progress :percentage="30" stroke-width="8" color="#1CBCFD" track-color="#EAEAEA"></v-progress>
              </div>
              <div class="progress-desc">已完成30%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="group-item">
        <div class="title">项目管理</div>
        <div class="list">
          <div class="item">
            <div class="left"></div>
            <div class="right">
              <div class="title">销售技巧</div>
              <div class="progress">
                <v-progress :percentage="30" stroke-width="8" color="#1CBCFD" track-color="#EAEAEA"></v-progress>
              </div>
              <div class="progress-desc">已完成30%</div>
            </div>
          </div>
          <div class="item">
            <div class="left"></div>
            <div class="right">
              <div class="title">销售技巧</div>
              <div class="progress">
                <v-progress :percentage="30" stroke-width="8" color="#1CBCFD" track-color="#EAEAEA"></v-progress>
              </div>
              <div class="progress-desc">已完成30%</div>
            </div>
          </div>
          <div class="item">
            <div class="left"></div>
            <div class="right">
              <div class="title">销售技巧</div>
              <div class="progress">
                <v-progress :percentage="30" stroke-width="8" color="#1CBCFD" track-color="#EAEAEA"></v-progress>
              </div>
              <div class="progress-desc">已完成30%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header'
import { Progress } from 'vant'
export default {
  components: {
    vHeader: Header,
    vProgress: Progress
  }
}
</script>

<style scoped lang="scss">
  @import "css/def";
  .history {
    min-height: 100vh;
    background-color: #FBFBFB;
    padding-top: size(90);
    line-height: 1;
    .group {
      width: 100%;
      padding-bottom: size(40);
      .group-item {
        margin-top: size(70);
        padding: 0 size(40);
        >.title {
          font-size: size(42);
          color: #484848;
          font-weight: 800;
        }
        .list {
          margin-top: size(40);
          >.item {
            margin-top: size(22);
            width: 100%;
            height: size(216);
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
            }
          }
        }
      }
    }
  }
</style>