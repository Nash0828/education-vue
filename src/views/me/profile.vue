<template>
  <div class="profile">
    <v-header>个人资料</v-header>
    <div class="group">
      <div class="group-item">
        <div class="row row-avatar">
          <div class="left">头像</div>
          <div class="right">
            <img v-lazy=""><i class="iconfont icon-right"></i>
          </div>
        </div>
        <div class="row">
          <div class="left">昵称</div>
          <div class="right">
            <span>夏季末</span><i class="iconfont icon-right"></i>
          </div>
        </div>
        <div class="row">
          <div class="left">账号</div>
          <div class="right">
            <span>liningxu001</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header'
export default {
  components: {
    vHeader: Header
  }
}
</script>

<style scoped lang="scss">
  @import "css/def";
  .profile {
    background-color: #FBFBFB;
    min-height: 100vh;
    padding-top: size(90);
    .group {
      width: 100%;
      .group-item {
        background-color: #fff;
        width: 100%;
        margin-top: size(20);
        .row {
          height: size(100);
          width: 100%;
          padding: 0 size(40);
          @include flex();
          justify-content: space-between;
          @include border('bottom');
          &:after {
            width: auto;
            left: size(40);
            right: size(40);
          }
          &:active {
            background-color: #f1f1f1;
          }
          .left {
            color: #1A1A1A;
            font-size: size(30);
          }
          .right {
            color: #B6B6B6;
            font-size: size(26);
            @include flex();
            justify-content: flex-end;
            i {
              font-size: size(26);
              margin-left: size(18);
            }
          }
          &.row-avatar {
            img {
              vertical-align: bottom;
              display: inline-block;
              width: size(60);
              height: size(60);
              border-radius: size(30);
            }
          }
        }
      }
    }
  }
</style>