<template>
  <div class="layout">
    <!-- <div class="top">
      {{ toolName }}
    </div> -->
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
// import {tool_get} from '@/api/index.js';
export default {
  name: 'layout-wrapper',
  watch:{
    $route:{
      handler(){
        if(!this.toolFlag){
          this.getTool()
        }
      },
      immediate: true
    }
  },
  mounted(){
    // this.getTool()
  },
  data(){
    return {
    }
  },
  computed:{
    toolName(){
      return this.$store.getters.toolName
    },
    toolFlag(){
      return this.$store.getters.toolFlag
    }

  },
  methods:{
    async getTool(){
      this.$store.commit('Set_ID', this.$route.query.id)
      this.$store.dispatch('getTool', this.$route.query.id)
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