<template>
  <div class="level">
    <v-header></v-header>
    <div class="title">选择课程的难易程度</div>
    <div class="list">
      <router-link tag="div" to="/home" class="item" v-for="(item, index) in list" :key="index">
        <div class="left"></div>
        <div class="right">
          <div>
            <span>{{item.name}}</span>
            <div>
              <i class="iconfont icon-right"></i>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Header from 'components/header'
export default {
  data() {
    return {
      list: [
        {
          name: '基础课程'
        },
        {
          name: '初级课程'
        },
        {
          name: '中级课程'
        },
        {
          name: '高级课程'
        },
        {
          name: '资深级课程'
        }
      ]
    }
  },
  components: {
    vHeader: Header
  }
}
</script>
<style scoped lang="scss">
  @import "css/def";
  .level {
    background-color: #fff;
    line-height: 1;
    padding-top: size(90);
    >.title {
      text-align: center;
      font-size: size(40);
      color: #030303;
      margin: size(30) 0 size(120);
    }
    >.list {
      padding: 0 size(58);
      >.item {
        width: 100%;
        height: size(172);
        @include flex();
        justify-content: flex-start;
        align-items: flex-end;
        margin-bottom: size(48);
        .left {
          width: size(172);
          height: size(172);
          background-color: #ffd6db;
          border-radius: size(36);
          overflow: hidden;
          position: relative;
          z-index: 4;
        }
        .right {
          height: size(144);
          width: calc(100% - #{size(144)});
          background-color: #F6F6F9;
          border-top-right-radius: size(40);
          border-bottom-right-radius: size(40);
          position: relative;
          z-index: 3;
          >div {
            @include flex();
            justify-content: space-between;
            align-items: center;
            height: 100%;
            position: relative;
            z-index: 2;
            padding-left: size(40);
            >span {
              color: #000A10;
              font-size: size(36);
              font-weight: 800;
              line-height: 1;
            }
            >div {
              width: size(48);
              height: size(64);
              background-color: #1CBCFD;
              border-radius: size(16);
              margin-right: size(-24);
              i {
                color: #fff;
                height: size(64);
                line-height: size(64);
                text-align: center;
                width: 100%;
                display: inline-block;
                font-size: size(28);
              }
            }
          }
          &:after {
            content: '';
            position: absolute;
            display: block;
            width: size(100);
            height: size(100);
            bottom: 0;
            left: size(-50);
            background-color: #F6F6F9;
            z-index: 1;
          }
        }
      }
    }
  }
</style>