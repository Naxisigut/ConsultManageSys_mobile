<template>
  <div class="over-page">
    <div class="content">
      <img src="../../assets/u1001.svg" alt="">
      <div>提交成功，感谢您的配合！</div>
    </div>
  </div>
</template>

<script>
// import {tool_get} from '@/api/index.js';
export default {
  name: 'intro-page',
  mounted(){
  },
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
.over-page {
  height: calc(100vh - 50px);
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 60px;
    img {
      margin-bottom: 20px;
    }
  }
}
</style>