<template>
    <section>
        <h1>Recettes</h1>
        <div>
            <TypeList  
                v-on:recipe-type-selected="handleRecipeTypeSelected" 
            />
            <IngredientsList />
        </div>
        <ul>
            <li 
                v-for="recipe in recipes" 
                :key="recipe.id"><RecipeCard 
                :recipe="recipe"/>
            </li>
        </ul>
    </section>
</template>

<script>
import RecipeCard  from '../components/RecipeCard.vue'
import TypeList   from '../components/TypeList.vue'
import IngredientsList from '../components/IngredientsList.vue'
import recipeService  from '../services/recipeService.js'

export default {
    name: 'RecipeList',
    async created() {
        this.recipes = await recipeService.loadRecipes();
    },
    data() {
        return {
            recipes: [],
        }
    },
    components: {
        RecipeCard,
        TypeList , 
        IngredientsList
    }, 
    methods: {
        async handleRecipeTypeSelected(selectedType) {
            this.$emit("recipe-type-selected", selectedType);

            this.recipes = await recipeService.getRecipeByTypes(selectedType);
        }
    }
    
}
</script>

<style scoped lang=scss>


</style>