<template>
    <header>

        <router-link 
            :to="{
                name: 'home',
            }">
                <img class="logo" src="../assets/images/oven.svg">
                <span>10 minutes </span>
                <span>O' four</span>
            </router-link>

        <router-link 
            v-if="user"
            :to="{
                name: 'profile',
            }">
                {{ user.user_display_name }}
            </router-link>

        <router-link 
            v-if="!user"
            :to="{
                name: 'login',
            }">
                Connexion
            </router-link>


    </header>
</template>

<script>
export default {
    name: 'HeaderWiew',
    computed: {
        user() {
            return this.$store.state.user;
        }
    }
}
</script>

<style scoped lang=scss>
@import "../assets/scss/main.scss";
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $gutter;
    line-height: $gutter * 3;

    .logo {
        height: 3rem;
    }
}
</style>