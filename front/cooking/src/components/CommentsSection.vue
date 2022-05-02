<template>
    <section>
        <h2>Commentaires</h2>
        <CommentForm v-if="user" />
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
    }
}
</script>