<template>
  <div class="edit">
    <div class="row">
      <v-field v-model="name" clearable placeholder="收货人姓名" class="input"/>
    </div>
    <div class="row">
      <v-field v-model="phone" type="number" clearable placeholder="收货人电话" class="input"/>
    </div>
    <div class="row area" @click="showAreaPopup=true">
      <div>
        <span class="placeholder" v-if="!area.length">选择地区</span>
        <span v-if="area.length"><span v-for="(item, index) in area" :key="index">{{item.name}} </span></span>
      </div>
      <div><i class="iconfont icon-right"></i></div>
    </div>
    <div class="row">
      <v-field v-model="detail" type="textarea" placeholder="详细地址" class="textarea" autosize/>
    </div>
    <div class="action-bar" @click="submit" v-if="pass && !submitting">
      <a>保存</a>
    </div>
    <div class="action-bar disabled" v-if="!pass || submitting">
      <a>保存</a>
    </div>
    <v-popup v-model="showAreaPopup" position="bottom" :close-on-click-overlay="false">
      <v-area :area-list="areaList" @confirm="areaConfirm" @cancel="areaCancel" @change="areaChange" :value="countyValue"/>
    </v-popup>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { Field, Area, Popup, Dialog } from 'vant'
import AreaList from './area'
import { getCountyValue } from './utils'
import { getAddress, editAddress } from 'api/address'
Vue.use(Field)
Vue.use(Area)
Vue.use(Popup)
export default {
  data() {
    return {
      // 编辑还是新增
      isNew: true,
      id: '',
      name: '',
      phone: '',
      detail: '',
      areaList: AreaList,
      showAreaPopup: false,
      area: [],
      countyValue: '110101',
      // 提交中
      submitting: false
    }
  },
  computed: {
    pass() {
      return this.name && this.phone && this.area.length && this.detail
    }
  },
  created() {
    this.$showLoading()
    getAddress().then(res => {
      console.log(res)
      if (res.data.length) {
        this.isNew = false
        let data = res.data[0]
        this.id = data.id
        this.name = data.real_name
        this.phone = data.phone
        this.detail = data.detail
        this.area.push({name: data.province})
        this.area.push({name: data.city})
        this.area.push({name: data.district})
        // 根据城市名和地区名, 获取行政区划区域代码值
        this.countyValue = getCountyValue(data.city, data.district)
      } else {
        this.isNew = true
      }
      this.$hideLoading()
    }).catch(() => {
      this.$hideLoading()
    })
  },
  methods: {
    areaConfirm(value) {
      this.showAreaPopup = false
      console.log(value)
      this.area = value
    },
    areaCancel() {
      this.showAreaPopup = false
    },
    areaChange() {},
    submit() {
      this.$showLoading()
      this.submitting = true
      let data = {
        addressId: this.id,
        real_name: this.name,
        phone: this.phone,
        province: this.area[0].name,
        city: this.area[1].name,
        district: this.area[2].name,
        detail: this.detail
      }
      editAddress(this.isNew, data).then(res => {
        this.$hideLoading()
        console.log(res)
        this.submitting = false
        Dialog.alert({
          title: '提示',
          message: '保存成功'
        }).then(() => {
          // this.$router.replace('/goods/prepay/1')
          this.$router.back()
        })
      }).catch(() => {
        this.$hideLoading()
        this.submitting = false
      })
    }
  },
  components: {
    vField: Field,
    vArea: Area,
    vPopup: Popup
  }
}
</script>
<style scoped lang="scss">
  @import "css/def";
  .edit{
    min-height: 100vh;
    background-color: #F5F5F5;
    .row{
      @include border('bottom');
      .input{
        align-items: center;
        height: size(84);
        padding: size(20);
        /deep/ input{
          color: #333;
          font-size: size(28);
          &::placeholder{
            color: #C4C4C6;
          }
        }
      }
      .textarea{
        min-height: size(234);
        padding: size(20);
        /deep/ textarea{
          color: #333;
          font-size: size(28);
          &::placeholder{
            color: #C4C4C6;
          }
        }
      }
    }
    .row.area{
      height: size(84);
      padding: size(20);
      font-size: size(28);
      @include flex();
      width: 100%;
      background-color: #fff;
      justify-content: space-between;
      span{
        color: #333;
      }
      span.placeholder{
        color: #C4C4C6;
      }
      i{
        color: #333333;
        font-size: size(20);
      }
      &:active{
        background-color: #f1f1f1;
      }
    }
    .action-bar{
      height: size(100);
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99;
      text-align: center;
      @include flex();
      background-color: #03B097;
      &:active, &.disabled{
        opacity: .5;
      }
      a{
        color: #fff;
        font-size: size(32);
      }
    }
  }
</style>
