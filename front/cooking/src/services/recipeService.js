import axios from "axios";

const recipeService = {
  async loadRecipes() {
    const response = await axios.get(
      "http://localhost:8080/projet-vue/back/wordpress/wp-json/wp/v2/recipe/?_embed=true"
    );
    return response.data;
  },
};

export default recipeService;
