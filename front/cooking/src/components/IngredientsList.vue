<template>
    <select 
    v-if="recipeIngredients.length" 
    v-model="selectedOption"
    @change="selectIngredient">

        <option>Choisir un ingrédient</option>
        <option 
            v-for="ingredient in recipeIngredients" 
            :key="ingredient.id"
            :value="ingredient.id"
        >
            {{ingredient.name}}
        </option>
    </select>
</template>

<script>
import recipeService  from '../services/recipeService.js'

export default {
    async created() {
        this.recipeIngredients = await recipeService.loadRecipeIngredients();
    },
    name: 'IngredientsList',
    data() {
        return {
            recipeIngredients: [],
            selectedOption: null
        }
    },
    methods: {
        selectIngredient(event) {
            event.preventDefault()
            this.$emit('recipe-ingredient-selected', this.selectedOption)
        }
    }
}
</script>