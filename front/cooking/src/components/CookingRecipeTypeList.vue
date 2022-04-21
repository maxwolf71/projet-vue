<template>
    <select>
        <option 
            v-for="type in recipeTypes" 
            :key="type.id"
            :value="type.id"
        >
            {{type.name}}
        </option>
    </select>
</template>

<script>
import recipeService  from '../services/recipeService.js'

export default {
    async created() {
        this.recipeTypes = await recipeService.loadRecipeTypes();
    },
    name: 'CookingRecipeTypeList',
    data() {
        return {
            recipeTypes: []
        }
    }
}
</script>