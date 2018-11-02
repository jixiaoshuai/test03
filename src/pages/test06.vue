<template>
  <div>
    <h2>我是父组件</h2>
    <p>开始传值了</p>
    <test-div :log="logList" @transferUser="getUser"></test-div>
    <p>用户名为：{{user}}</p>
    <TestDiv :log="logList" @transferUser="getUser"></TestDiv>
  </div>
</template>

<script>
  import TestDiv from '../components/test01'
  export default {
    components: {TestDiv},
    data () {
      return {
        logList: 'abc',
        user: ''
      }
    },
    methods: {
      getUser (msg) {
        this.user = msg
      }
    }
  }
</script>

<style>
  .ximg-demo {
    width: 100%;
    height: auto;
  }
  .ximg-error {
    background-color: yellow;
  }
  .ximg-error:after {
    content: '加载失败';
    color: red;
  }
</style>
