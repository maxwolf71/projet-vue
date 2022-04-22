<template>
  <div id="app">
    <CookingHeader />
    <main>
      <CookingRecipeList v-on:recipe-type-selected="debugTypeSelected" />
    </main>
    <CookingFooter />
  </div>
</template>

<script>
import CookingHeader from './components/CookingHeader.vue'
import CookingFooter from './components/CookingFooter.vue'
import CookingRecipeList  from './components/CookingRecipeList.vue'

export default {
  name: 'App',
  components: {
    CookingHeader,
    CookingFooter,
    CookingRecipeList,
  },
  methods: {
    debugTypeSelected(selectedType) {
      console.log(selectedType);
    }
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
