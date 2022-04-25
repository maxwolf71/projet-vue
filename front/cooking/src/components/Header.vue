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
    </header>
</template>

<script>
export default {
    name: 'HeaderWiew'
}
</script>

<style scoped lang=scss>
header {
    .logo {
        height: 3rem;
    }
}
</style>