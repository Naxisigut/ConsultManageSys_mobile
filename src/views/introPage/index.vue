<template>
  <div class="intro-page">
    <div class="content">
      <div class="text-zone">
        <div class="text">
          您好，欢迎您参加公司内部的企业文化测评，该问卷采用不记名的方式，且仅供研究分析，不会另做他用，请放心填写。我们表示衷心的感谢！
        </div>
      </div>
      <div class="text-zone">
        <div class="title">
          介绍
        </div>
        <div class="text">
          OCAI共有六个问题，每个问题有四个选项，选项总分为100分。各选项的得分依据该选项的描述与组织文化的匹配程度，最高程度描述该组织文化的那个选项得分最高。
        </div>
        <div class="text">
          举例说明：A项描述高度匹配，B和C项描述中度匹配，D项描述低度匹配，每项的评分可以是：A项-55分、B项-20分、C项-20分、D项-5分，四个选项得分总和为100分。
        </div>
      </div>
    </div>

    <div class="btns">
      <button class="primary only" @click="toQuestion">开始测评</button>
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
    toQuestion(){
      this.$router.push({name: 'questionNaire', query: {id: this.$route.query.id}})
    }
  }
}
</script>

<style lang="scss" scoped>
.intro-page {
  padding: 10px;
  .btns {
    height: 36px;
    button {
      margin-top: 10px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 2px;
      color: #fff;
      &.only {
        width: 100%;
      }
      &.primary {
        background-color: rgba(245, 154, 35, 1);
      }
      &.cancel {
        background-color: rgba(215, 215, 215, 1);
      }
    }
  }

  .text-zone {
    .title {
      font-weight: 650;
      font-style: normal;
      font-size: 16px;
      color: #1b91fe;
      line-height: 36px;
    }
    .text {
      background-color: #fff;
      padding: 20px 10px;
      line-height: 20px;
      border-radius: 2px;
    }
  }
}
</style>