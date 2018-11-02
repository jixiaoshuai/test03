<template>
<div>
  <div class="out">
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <group>
      <x-switch title="一般使用" v-model="show1"></x-switch>
      <x-switch title="Android Theme" v-model="show2"></x-switch>
      <x-switch title="Show cancel menu" v-model="show3"></x-switch>
      <x-switch title="使用数组定义菜单" v-model="show4"></x-switch>
    </group>
    <group title='点击遮罩区域不自动关闭'>
      <x-switch title="haoren" v-model="show5"></x-switch>
    </group>
    <group>
      <x-switch title="显示提示文字" v-model="show6"></x-switch>
      <x-switch title="使用 header slot" v-model="show7"></x-switch>
      <x-switch title="不自动关闭" v-model="show8"></x-switch>
    </group>
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></actionsheet>

    <actionsheet v-model="show2" :menus="menu7" theme="android" @on-click-menu="click">
    </actionsheet>

    <actionsheet v-model="show3" :menus="menus1" :close-on-clicking-mask="true" show-cancel @on-click-menu="actionsheet1" @on-click-mask="maskclick"></actionsheet>

    <actionsheet v-model="show4" :menus="menus5" :close-on-clicking-mask="false"  @on-click-menu="click"></actionsheet>

    <actionsheet v-model="show5" :menus="menus5" :close-on-clicking-mask="false"  @on-click-menu="click"></actionsheet>

    <actionsheet v-model="show6" :menus="menus3"  @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    <actionsheet v-model="show7" :menus="menus1">
      <p slot="header">123</p>
    </actionsheet>
  </div>
</div>
</template>

<script>
import {Group, Cell, XSwitch, Actionsheet} from 'vux'

export default {
  components: {
    Group,
    Cell,
    XSwitch,
    Actionsheet
  },
  data () {
    return {
      msg: 'Hello World!',
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      show6:false,
      show7:false,
      show8:false,
      menus1: {
        menu1: 'Share to friends',
        menu2: 'Share to timeline'
      },
      menus3: {
        'title.noop': '确定吗？',
        delete: '<span style="color:red">Delete</span>',
        sure:'<span style="color:black">sure</span>'
      },
      menus5: [{
        label: 'actionsheet header',
        type: 'info'
      }, {
        label: 'Primary',
        type: 'primary',
        value: 'primary',
        otherProp: 'hey'
      }, {
        label: 'Warn',
        type: 'warn',
        value: 'warn',
      }, {
        label: 'Disabled',
        type: 'disabled'
      }, {
        label: 'Default',
        value: 'Default',
      }],
      menu7: {
        menu1: '北京烤鸭',
        menu2: '陕西油泼面',
        menu3: '西安肉夹馍'
      }
    }
  },
  methods: {
    click (key) {
      console.log(key)
    },
    actionsheet1 (key) {
      // /*this.show1 = !this.show1*/
      console.log(key)
    },
    maskclick () {
      console.log('maskclick')
    },
    onDelete () {
      console.log('onDelete')
    }
  }
}
</script>

<style scoped>
.out{
}
</style>
