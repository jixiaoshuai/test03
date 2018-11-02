<template>
  <div>
    <h2>我是子组件</h2>
    <p>{{log}}</p>
    <span>用户名：</span>
    <input v-model="username" @change="setUser"/>
  </div>
</template>

<script>
  export default {
    name: 'testDiv',
    props: ['log'],
    data () {
      return {
        username: ''
      }
    },
    methods: {
      setUser: function () {
        this.$emit('transferUser', this.username)
      }
    }

  }
</script>

<style>

</style>
