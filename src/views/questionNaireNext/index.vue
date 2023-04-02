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
            <input @focus="checkZero(i, index)" @blur="check_100(i, index)" type="number" v-model="q.futureScore[index]">
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
    // 输入框聚焦时判断是否为0
    checkZero(i, index){
      const question = this.questions[i]
      const answer = question.futureScore[index]
      if(answer == 0){
        this.$set(this.questions[i].futureScore, index, '')  
      }
    },
    // 输入框失焦时判断本题总分
    check_100(i, index){
      const question = this.questions[i]
      const answer = question.futureScore[index]
      // 若没填，则本项置为0
      if(answer === ''){
        this.$set(this.questions[i].futureScore, index, 0)  
      }

      // 仅在每题最后一项失焦时判断
      if(index !== 3 || this.calQuestinoTotal(question.futureScore) === 100)return
      this.$toast({
        message: '四项之和应为100',
        duration: 1000
      })
    },
    // 计算数组所有元素之和
    calQuestinoTotal(arr){
      return arr.reduce((curr, num)=>curr + Number(num), 0)
    },
    toQuestion(){
      this.$router.push({name: 'questionNaire'})
    },
    back(){
      this.$router.go(-1)
    },
    async goNext(){
      // this.$router.push({name: 'over'})
      const res = await result_post(this.$store.getters.params)
      if(res.success){
        this.$router.push({name: 'over', query: {id: this.$route.query.id}})
      }else console.log(this);
    }
  }
}
</script>

<style lang="scss" scoped>
.question-page-next {
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
    background: #fff;
    margin-bottom: 20px;
    &-title {
      padding: 0 10px;
      color: #fff;
      line-height: 40px;
      font-size: 16px;
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
        line-height: 20px;
      }
    }
  }
}
</style>