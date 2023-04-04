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
          <input 
            max="100" 
            type="number" 
            :class="{ err: !q.valiRes }"
            v-model="q.nowScore[index]"
            @focus="checkZero(i, index)" 
            @blur="check_100(i, index)" 
          />
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
  name: 'question-page',
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
    // 输入框聚焦时判断是否为0
    checkZero(i, index){
      const question = this.questions[i]
      const answer = question.nowScore[index]
      if(answer == 0){
        this.$set(this.questions[i].nowScore, index, '')  
      }
    },
    // 输入框失焦时判断本题总分
    check_100(i, index){
      const question = this.questions[i]
      const answer = question.nowScore[index]
      // 若没填，则本项置为0
      if(answer === '' || Number(answer) < 0){
        this.$set(this.questions[i].nowScore, index, 0)  
      }
      if(Number(answer) > 100){
        this.$set(this.questions[i].nowScore, index, 100)  
      }
      const sum = this.calQuestinoTotal(question.nowScore)
      if(sum === 100){
        question.valiRes = true
      }
      // if(sum > 100){
      //   question.valiRes = false
      //   this.$toast({
      //     message: '四项之和必须等于100',
      //     duration: 3000
      //   })
      // }
      // 在每题最后一项失焦时判断
      if(index === 3 && sum !== 100){
        question.valiRes = false
        this.$toast({
          message: '四项之和必须等于100',
          duration: 3000
        })
      }
    },
    // 计算数组所有元素之和
    calQuestinoTotal(arr){
      return arr.reduce((curr, num)=>curr + Number(num), 0)
    },
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
      this.$router.push({name: 'questionNaireNext', query: {id: this.$route.query.id}})
    }
  }
}
</script>

<style lang="scss" scoped>
.question-page {
  padding: 10px;
  .btns {
    height: 40px;
    display: flex;
    button {
      border-radius: 2px;
      flex: 1;
      font-size: 14px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      color: #fff;
      &.negative {
        border: 1px solid #1b91fe;
        color: #1b91fe;
        background-color: #fff;
      }
      &.primary {
        background-color: #1b91fe;
      }
      & + button {
        margin-left: 20px;
      }
    }
  }

  .intro {
    background: #fff;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5pxx;
    &-title {
      font-size: 16px;
      color: #1b91fe;
    }
  }
  .question {
    border-radius: 2px;
    overflow: hidden;
    background: #fff;
    margin-bottom: 20px;
    &-title {
      padding: 0 10px;
      color: #fff;
      line-height: 40px;
      font-size: 16px;
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
        &.err {
          color: red;
        }
      }
      .text {
        padding: 5px 10px;
        flex: 1;
        line-height: 20px;
      }
    }
  }
}
</style>