<template>
    <section>
        <h1>Recettes</h1>
        <ul>
            <li><RecipeCard /></li>
            <li><RecipeCard /></li>
            <li><RecipeCard /></li>
        </ul>
    </section>
</template>

<script>
import RecipeCard  from './CookingRecipe.vue'

import axios from 'axios'

export default {
    name: 'CookingRecipeList',
    components: {
        RecipeCard
    }, 
    methods: {
        async loadRecipes() {
            axios.get()
        }
    }
}
</script>

<style>

</style>