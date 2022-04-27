import axios from "axios";

const recipeService = {

  baseURI: process.env.VUE_APP_WORDPRESS_API_URL + '/wp/v2',

  async loadRecipes() {
    const response = await axios.get(recipeService.baseURI + "/recipe?_embed=true");
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

  // async getRecipeByTypes(selectedType) {
  //   const response = await axios.get(recipeService.baseURI + '/recipe?_embed=true&recipe-type=' + selectedType);
  //   return response.data;
  // },
  // async getRecipeByIngredients(selectedIngredient) {
  //   const response = await axios.get(recipeService.baseURI + '/recipe?_embed=true&ingredient=' + selectedIngredient);
  //   return response.data;
  // },
  
  async getRecipeById(recipeId) {
    const response = await axios.get(recipeService.baseURI + '/recipe/' + recipeId + '?_embed=true');
    return response.data;
  },
  async loadTerms(taxonomy) {
    const response = await axios.get(recipeService.baseURI + '/' + taxonomy);
    return response.data;
  },
  async getRecipesByTerm(taxonomy, termId) {
    const response = await axios.get(recipeService.baseURI + '/recipe?_embed=true&' + taxonomy + '=' + termId);
    return response.data;
  },
  async getRecipesByTerms(filters) {
    let url = recipeService.baseURI + '/recipe?_embed=true&' 
    for(let taxonomy in filters) {
      let termId = filters[taxonomy];
      if(termId){
        url += '&' + taxonomy + '=' + termId;
      }
    }

    const response = await axios.get(url);
    return response.data;
  }
};

export default recipeService;
