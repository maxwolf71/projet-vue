<template>
  <div id="app" :style="style">
    <Header />
    <main>
      <router-view 
        v-on:recipe-type-selected="debugTypeSelected"
        :key="$route.fullPath"/> 
    </main>
    <!-- <main>
      <CookingRecipeList v-on:recipe-type-selected="debugTypeSelected" />
    </main> -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import CookingRecipeList  from './components/CookingRecipeList.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // CookingRecipeList,
  },
  methods: {
    debugTypeSelected(selectedType) {
      console.log(selectedType);
      this.style = 'background-color: #555'
    }
  },
  data() {
    return {
      style: ''
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
