import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import {tool_get} from '@/api/index';

export const store = new Vuex.Store({
  state: {
    id: '',
    toolName: '',
    questions: []
  },
  mutations:{
    Set_ID(state, val){
      state.id = val
    },
    Set_Tool_Name(state, val){
      state.toolName = val
    },
    Set_Questions(state, val){
      state.questions = val
    }
  },
  actions:{
    async getTool({commit}, id){
      const res = await tool_get({id})
      commit('Set_Tool_Name', res.data.toolName)

      const questions = res.data.question.map((item) => {
         return {
          ...item, 
          nowScore: [0, 0, 0, 0],
          futureScore: [0, 0, 0, 0],
         }
      })
      commit('Set_Questions', questions)
    }
  },
  getters:{
    params(state){
      const now = state.questions.map(item=>{
        return {score: item.nowScore}
      })
      const future = state.questions.map(item=>{
        return {score: item.futureScore}
      })
      return {
        evaluationRecordId: state.id,
        now,
        future
      }
    },
    toolName(state){
      return state.toolName
    }
  }
})