<template>
  <div class="question-page">
    <div class="content">
      <div class="intro">
        <div class="intro-title">企业当下的文化现状</div>
        <div class="intro-text">请根据当下的组织文化情况，进行如实填写。</div>
      </div>

      <div class="question" v-for="q, i in questions" :key="i">
        <div class="question-title">{{ q.title }}</div>
        <div class="question-select" v-for="a, index in q.answer" :key="index">
          <div class="text">{{ a }}</div>
          <input type="number" v-model="q.nowScore[index]">
        </div>
      </div>
    </div>

    <div class="btns">
      <button class="negative" @click="back">返回</button>
      <button class="primary" @click="goNext">最后一页</button>
    </div>
  </div>
</template>

<script>
import {tool_get} from '@/api/index.js';
export default {
  name: 'intro-page',
  mounted(){
    // this.getTool()
  },
  data(){
    return {
      // questions:[]
    }
  },
  computed:{
    questions(){
      return this.$store.state.questions
    }
  },
  methods:{
    toQuestion(){
      this.$router.push({name: 'questionNaire'})
    },
    async getTool(){
      const res = await tool_get({id: '1'})
      this.questions = res.data.question
      this.questions.forEach((item) => {
         this.$set(item, 'nowScore', [0, 0, 0, 0])
      })
    },
    back(){
      this.$router.go(-1)
    },
    goNext(){
      this.$router.push({name: 'questionNaireNext'})
    }
  }
}
</script>

<style lang="scss" scoped>
.question-page {
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  padding: 10px;
  // justify-content: space-between;
  .content {
    flex: 1;
    overflow: auto;
  }
  .btns {
    height: 40px;
    display: flex;
    button {
      border-radius: 2px;
      flex: 1;
      font-size: 13px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      color: #fff;
      &.negative {
        background-color: rgba(215, 215, 215, 1);
      }
      &.primary {
        background-color: rgba(245, 154, 35, 1);
      }
      & + button {
        margin-left: 20px;
      }
    }
  }

  .text-zone {
    .title {
      font-weight: 650;
      font-style: normal;
      font-size: 14px;
      color: #1b91fe;
      line-height: 30px;
    }
    .text {
      background-color: #fff;
      padding: 20px 10px;
      line-height: 20px;
      border-radius: 2px;
    }
  }

  .intro {
    background: #fff;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5pxx;
    &-title {
      font-size: 14px;
      color: #1b91fe;
    }
  }
  .question {
    background: #fff;
    margin-bottom: 20px;
    &-title {
      padding: 0 10px;
      color: #fff;
      line-height: 40px;
      font-size: 14px;
      background: #1b91fe;
    }
    &-select {
      display: flex;
      min-height: 50px;
      input {
        width: 40px;
        background: #f2f2f27f;
        border: none;
        text-align: center;
      }
      .text {
        padding: 5px 10px;
        flex: 1;
        line-height: 16px;
      }
    }
  }
}
</style>