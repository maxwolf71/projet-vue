<template>
    <article class="card" v-if="recipe">
        <img :src="getImageUrl">
        <h2>{{recipe.title.rendered}}</h2>
        <div class="card__content" v-html="recipe.content.rendered">
        </div>
        <div>
            <router-link 
            :to="{
                name: 'home',
            }">
                Retour sur la page d'accueil
            </router-link>
        </div>
    </article>
</template>

<script>

export default ({
    
    name: 'RecipeView',
    async created() {
        this.recipeId = this.$route.params.id

        this.recipe = await this.$store.state.services.recipe.getRecipeById(this.recipeId);
    },
    data() {
        return {
            recipeId: null,
            recipe: null
        }
    },
    computed: {
        getImageUrl() {
            if (this.recipe._embedded['wp:featuredmedia']){
                return this.recipe._embedded['wp:featuredmedia'][0].source_url;
            } else {
                return 'https://picsum.photos/seed/picsum/400/300'
            }
        }
    }
})
</script>