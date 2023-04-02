<template>
  <div class="question-page-next">
    <div class="content">
      <div class="intro">
        <div class="intro-title">企业未来5年后的文化现状</div>
        <div class="intro-text">请根据5年后你期待的企业文化情况，进行填写。</div>
      </div>

      <!-- <template v-if="questions.length"> -->
        <div class="question" v-for="q, i in questions" :key="i">
          <div class="question-title">{{ q.title }}</div>
          <div class="question-select" v-for="a, index in q.answer" :key="index">
            <div class="text">{{ a }}</div>
            <input type="number" v-model="q.futureScore[index]">
          </div>
        </div>
      <!-- </template> -->
    </div>

    <div class="btns">
      <button class="negative" @click="back">上一页</button>
      <button class="primary" @click="goNext">提交</button>
    </div>
  </div>
</template>

<script>
import {result_post} from '@/api/index';
export default {
  name: 'question-page-next',
  mounted(){
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
    back(){
      this.$router.go(-1)
    },
    async goNext(){
      const res =await result_post(this.$store.getters.params)
      if(res.success){
        this.$router.push({name: 'over'})
      }else console.log(this);
    }
  }
}
</script>

<style lang="scss" scoped>
.question-page-next {
  // height: calc(100vh - 50px);
  // display: flex;
  // flex-direction: column;
  padding: 10px;
  // justify-content: space-between;
  .content {
    // flex: 1;
    // overflow: auto;
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
      background: rgba(194, 128, 255, 1);
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