<template>
  <div id='app'>
    <img alt='Vue logo' src='./assets/logo.png'>
    <HelloWorld msg='Welcome to Your Vue.js App' />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import cp from 'lottery-all'

let lottery = new cp('ssc', 'cn', 'dg#qwrru89qa8@0128')
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    console.log(lottery)
    lottery.switchRule('qiansan-qita-teshuhaoma')
    lottery.selectedBall('豹子', 0)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
