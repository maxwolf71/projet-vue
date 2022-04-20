<template>
    <article>
        <img :src="getImageUrl">
        <h2>{{recipe.title.rendered}}</h2>
        <div v-html="recipe.excerpt.rendered">
        </div>
    </article>
</template>

<script>
export default {
    name: 'CookingRecipe',
    props: {
        recipe: Object,
    },

    computed: {
        getImageUrl() {
            if (this.recipe._embedded['wp:featuredmedia'] && this.recipe._embedded['wp:featuredmedia'][0].media_details && this.recipe._embedded['wp:featuredmedia'][0].media_details.sizes){
                return this.recipe._embedded['wp:featuredmedia'][0].source_url;
            } else {
                return 'https://picsum.photos/seed/picsum/200/300'
            }
        }
    }
}
</script>

<style>

</style>