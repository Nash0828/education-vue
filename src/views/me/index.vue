<template>
  <div class="me">
    <header class="header">
      <div class="right"><i class="iconfont icon-setting"></i></div>
    </header>
    <div class="main">
      <div>
        <div class="nickname">夏季末</div>
        <div class="empirical">223经验</div>
        <router-link tag="div" to="./profile" class="avatar">
          <img v-lazy="">
        </router-link>
      </div>
    </div>
    <div class="group">
      <div class="group-item group-item1">
        <div class="list">
          <div class="row">
            <div class="left">1</div>
            <div class="right">
              <div>
                <div class="l">等级称号</div>
                <div class="r">
                  <span>2个等级称号</span> <i class="iconfont icon-right"></i>
                </div>
              </div>
            </div>
          </div>
          <router-link tag="div" to="./certificate" class="row">
            <div class="left">2</div>
            <div class="right">
              <div>
                <div class="l">等级证书</div>
                <div class="r">
                  <span>1张证书</span> <i class="iconfont icon-right"></i>
                </div>
              </div>
            </div>
          </router-link>
          <router-link tag="div" to="./history" class="row">
            <div class="left">3</div>
            <div class="right">
              <div>
                <div class="l">历史课程</div>
                <div class="r">
                  <span>9个课程</span> <i class="iconfont icon-right"></i>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  @import "css/def";
  .me {
    min-height: 100vh;
    line-height: 1;
    padding-top: size(90);
    background-color: #FBFBFB;
    .header {
      height: size(90);
      width: 100%;
      @include flex();
      justify-content: flex-end;
      padding: 0 size(40);
      background-color: #1CBCFD;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      i {
        color: #fff;
        font-size: size(50);
      }
    }
    .main {
      height: size(330);
      width: 100%;
      padding: 0 size(40);
      background-color: #1CBCFD;
      border-radius:0 0 size(64) size(64);
      text-align: center;
      color: #fff;
      @include flex();
      align-items: flex-start;
      position: relative;
      z-index: 2;
      > div {
        .nickname {
          font-size: size(68);
          line-height: 1;
          margin-top: size(40);
        }
        .empirical {
          font-size: size(26);
          color: #D0E8FF;
          margin-top: size(24);
        }
        .avatar {
          position: absolute;
          z-index: 3;
          bottom: size(-105);
          left: 50%;
          display: inline-block;
          width: size(212);
          height: size(212);
          background-color: #fff;
          border-radius: size(106);
          transform: translateX(-50%);
          img {
            vertical-align: bottom;
            width: size(202);
            height: size(202);
            border-radius: size(101);
            margin-left: size(5);
            margin-right: size(5);
            display: inline-block;
          }
        }
      }
    }
    .group {
      width: 100%;
      margin-bottom: size(250);
      .group-item {
        background-color: #fff;
        &.group-item1 {
          padding-top: size(150)
        }
        .list {
          margin-bottom: size(20);
          .row {
            height: size(100);
            width: 100%;
            padding: 0 size(40);
            @include flex();
            justify-content: space-between;
            &:active {
              background-color: #f1f1f1;
            }
            .left {
              width: size(68);
            }
            .right {
              width: calc(100% - #{size(68)});
              height: 100%;
              @include border('bottom');
              >div {
                width: 100%;
                height: 100%;
                @include flex();
                justify-content: space-between;
                .l {
                  color: #1A1A1A;
                  font-size: size(30);
                }
                .r {
                  font-size: size(26);
                  color: #B6B6B6;
                  i {
                    font-size: size(26);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>