<template>
  <div>
    <u-form-grid :data="formGrid" ref="child"></u-form-grid>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        formGrid: {
          options: {
            url: {
              page: '/test06'
            }
          },
          tips: {'title': '功能提示', 'content': 'FormGrid是一个结合表单查询、修改、删除等全功能的组件。方便快速实现CRUD功能!'},
          form: {
            modal: {
              title: '个人信息'
            },
            columns: [
              {'label': '渠道', 'type': 'text', 'name': 'channel', required: true},
              {'label': '用户名', 'type': 'text', 'name': 'createTime', required: true},
              {'label': '消息', 'type': 'text', 'name': 'message', required: true},
              {'label': '发送方', 'type': 'text', 'name': 'sender', required: true},
              {'label': 'toUser', 'type': 'text', 'name': 'toUser', required: true},
            ]
          },
          table: {
            operation: {
              primaryKey: 'id'
            },
            columns: [
              {
                title: '渠道',
                key: 'channel',
                fixed: 'left',
                width: 100
              },
              {
                title: '会话时间',
                key: 'createTime'

              },
              {
                title: '用户名',
                key: 'fromUserName'

              },
              {
                title: '消息',
                key: 'message'

              },
              {
                title: '发送方',
                key: 'sender'
              },
              {
                title: 'toUser',
                key: 'toUser'
              }
            ]
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
