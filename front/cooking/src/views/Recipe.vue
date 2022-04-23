<template>
    <article>
        Recette
    </article>
</template>

<script>
export default ({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Recipe',
    created() {
        this.recipeId = this.$route.params.id
    },
    data() {
        return {
            recipeId: null
        }
    }
})
</script>