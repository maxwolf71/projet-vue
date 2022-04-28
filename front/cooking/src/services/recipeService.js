import axios from "axios";
import storage from "@/plugins/Storage";

const recipeService = {
  baseURI: process.env.VUE_APP_WORDPRESS_API_URL + "/wp/v2",
  cookingBaseURI: process.env.VUE_APP_WORDPRESS_API_URL + "/cooking/v1",

  async loadRecipes() {
    const response = await axios.get(
      recipeService.baseURI + "/recipe?_embed=true"
    );
    return response.data;
  },

  async loadRecipeTypes() {
    const response = await axios.get(recipeService.baseURI + "/recipe-type");
    return response.data;
  },
  async loadRecipeIngredients() {
    const response = await axios.get(recipeService.baseURI + "/ingredient");
    return response.data;
  },

  async getRecipeById(recipeId) {
    const response = await axios.get(
      recipeService.baseURI + "/recipe/" + recipeId + "?_embed=true"
    );
    return response.data;
  },
  async loadTerms(taxonomy) {
    const response = await axios.get(recipeService.baseURI + "/" + taxonomy);
    return response.data;
  },
  async getRecipesByTerm(taxonomy, termId) {
    const response = await axios.get(
      recipeService.baseURI + "/recipe?_embed=true&" + taxonomy + "=" + termId
    );
    return response.data;
  },
  async getRecipesByTerms(filters) {
    let url = recipeService.baseURI + "/recipe?_embed=true&";
    for (let taxonomy in filters) {
      let termId = filters[taxonomy];
      if (termId) {
        url += "&" + taxonomy + "=" + termId;
      }
    }

    const response = await axios.get(url);
    return response.data;
  },
  async saveRecipe(title, type, description, ingredients) {
    const userData = storage.get("userData");
    // is userData empty ?
    if (userData != null) {
      const token = userData.token;

      if (token) {
        const options = {
          headers: {
            Authorization: "Bearer" + token,
          },
        };

        const result = await axios.post(
          recipeService.cookingBaseURI + "/recipe-save",
          {
            title: title,
            type: type,
            description: description,
            ingredients: ingredients,
          },
          options
        ).catch((error) => { // if invalid token
          return false,
          console.log(error);
        })
        return result.data
      }
    }
    return false;
  },
};

export default recipeService;
