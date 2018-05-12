<template>
 		<div>
 			<index></index>
  	<index1></index1>
 		</div>
  

</template>

<script>
	import index from './components/index'
	import index1 from './components/index1'
	import axios from 'axios'

export default {
  name: 'App',
  components:{
  	index,
  	index1
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
 