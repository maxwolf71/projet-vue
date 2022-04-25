<template>
    <section>
        <form action="">
            <Label>
                Login 
                <input v-model="login" name="login" /></Label>
            <Label>
                Mot de passe 
                <input v-model="password" name="password" type="password" /></Label>
            <button>Se connecter</button>
        </form>
    </section>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'login',
    data() {
        return {
            login: '',
            password: ''
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/main.scss'; 
form {
    background-color: lightblue;
    box-shadow: 8px 8px 12px #aaa;
    display: flex;
    flex-direction: column;
    border: $borderStyle;
    border-radius: $border-radius;
    padding: $gutter;
    margin: $gutter;

    label {
        margin-bottom: $gutter;
    }
}
</style>