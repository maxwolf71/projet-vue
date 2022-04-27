<template>
  <section>
    <h1>Recettes</h1>
    <div>
      <Filters v-on:recipes-loaded="handleLoadedRecipes" />
    </div>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">
        <RecipeCard :recipe="recipe" />
      </li>
    </ul>
  </section>
</template>

<script>
import RecipeCard from "../components/RecipeCard.vue";
import recipeService from "../services/recipeService.js";
import Filters from "../components/Filters";

export default {
  name: "RecipeList",
  async created() {
    this.recipes = await recipeService.loadRecipes();
  },
  data() {
    return {
      recipes: [],
    };
  },
  components: {
    RecipeCard,
    Filters
  },
  methods: {
    handleLoadedRecipes(recipes) {
      this.recipes = recipes
    }
  }
};
</script>
