<template>
  <div class="layout">
    <div class="top">
      {{ ToolName }}
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import {tool_get} from '@/api/index.js';
export default {
  name: 'layout-wrapper',
  mounted(){
    // this.getTool()
  },
  data(){
    return {
      ToolName: '企业文化测评'
    }
  },
  methods:{
    async getTool(){
      const res = await tool_get({id: this.$route.query.id})
      console.log(res);
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  .top {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
  .main {
    background-color: rgba(242, 242, 242, 1);
    // padding: 10px;
  }
}
</style>