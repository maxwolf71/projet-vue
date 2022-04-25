<template>
  <section>
    <h1>Recettes</h1>
    <div>
      <TypeList v-on:recipe-type-selected="handleRecipeTypeSelected" />
      <IngredientList v-on:recipe-ingredient-selected="handleRecipeIngredientSelected" />
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
import TypeList from "../components/TypeList.vue";
import IngredientList from "../components/IngredientList.vue";
import recipeService from "../services/recipeService.js";

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
    TypeList,
    IngredientList,
  },
  methods: {
    async handleRecipeTypeSelected(selectedType) {
      if (parseInt(selectedType)) { // convert string to number
        this.$emit(
        "recipe-type-selected", // name of event
         selectedType, //info in the event
         );
         this.recipes = await recipeService.getRecipeByTypes(selectedType);
      } else {
        this.recipes = await recipeService.loadRecipes();
      }
    },
    async handleRecipeIngredientSelected(selectedIngredient) {
      if (parseInt(selectedIngredient)) { // convert string to number
        this.$emit(
        "recipe-ingredient-selected", // name of event
         selectedIngredient, //info in the event
         );
         this.recipes = await recipeService.getRecipeByIngredients(selectedIngredient);
      } else {
        this.recipes = await recipeService.loadRecipes();
      }
    },
  },
};
</script>

<style scoped lang=scss>
</style>