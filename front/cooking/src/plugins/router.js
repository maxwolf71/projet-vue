import Vue from 'vue'
import VueRouter from 'vue-router'

import RecipeList from '../views/RecipeList.vue'
import Recipe from '../views/Recipe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: RecipeList
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: Recipe
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
