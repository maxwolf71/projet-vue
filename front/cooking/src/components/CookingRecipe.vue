<template>
    <article>
        <img :src="imageUrl" alt="">
        <h2>{{title}}</h2>
        <div>
            {{excerpt}}
        </div>
    </article>
</template>

<script>
export default {
    name: 'CookingRecipe',
    data() {
        return {
            imageUrl: 'https://picsum.photos/seed/picsum/200/300',
            title: 'Titre de la recette',
            excerpt: 'Résumé de la recette'
        }
    }
}
</script>

<style>

</style>