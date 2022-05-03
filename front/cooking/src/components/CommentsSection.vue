<template>
    <section>
        <h2>Commentaires</h2>
        <CommentForm v-if="user" :recipe="recipe" />
    </section>
</template>

<script>
import CommentForm from '../components/CommentForm';

export default {
    name: 'CommentsSection',
    components: {
        CommentForm,
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    props: {
        recipe: Object
    }
}
</script>