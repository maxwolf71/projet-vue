<template>
    <section>
        <h2>Poster un commentaire</h2>
        <form>
            <textarea v-model="comment"></textarea>
        </form>
    </section>
</template>

<script>
export default {
    name: 'CommentForm',
    data() {
        return {
            comment: ''
        }
    }
}
</script>