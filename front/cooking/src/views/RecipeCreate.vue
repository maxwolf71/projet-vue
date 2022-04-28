<template>
  <section v-if="isUserConnected">
    <h1>Nouvelle Recette</h1>
    <form @submit="saveRecipe">
      <div>
        <label> Titre de la recette <input v-model="title" /> </label>
      </div>

      <div>
        <div v-for="type in types" :key="type.id">
          <label> <input type="radio" name="type" :value="type.id" v-model="selectedType" /> {{ type.name }} </label>
        </div>
      </div>

      <div>
        <label for="">
          Description <textarea v-model="description"></textarea>
        </label>
      </div>

      <div>
        <div v-for="ingredient in ingredients" :key="ingredient.id">
          <label> <input type="checkbox" :value="ingredient.id" v-model="selectedIngredients" /> {{ ingredient.name }} </label>
        </div>
      </div>

      <div>
          <button>Enregistrer</button>
      </div>
    </form>
  </section>
</template>

<script>
import recipeService from "../services/recipeService";
import userService from "../services/userService";

export default {
  name: "RecipeCreate",
  data() {
    return {
      isUserConnected: false,
      title: "",
      description: "",
      ingredients: [],
      types: [],
      selectedType: null,
      selectedIngredients: []
    };
  },
  async created() {
    const isTokenValid = await userService.isLoggedIn();
    if (!isTokenValid) {
      this.$router.push("login"); // if invalid token -> back to home page
    } else {
      this.isUserConnected = true;
    }

    this.loadIngredient();
    this.loadType();
  },
  methods: {
    async loadIngredient() {
      this.ingredients = await recipeService.loadRecipeIngredients();
    },
    async loadType() {
      this.types = await recipeService.loadRecipeTypes();
    },
    async saveRecipe(event) {
        event.preventDefault();
        const result = recipeService.saveRecipe(
            this.title,
            this.selectedType,
            this.description,
            this.selectedIngredients
        );

        console.log(result);
    }
  },
};
</script>