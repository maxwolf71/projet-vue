<template>
    <footer>
        <nav>
            <router-link 
                :to="{
                    name: 'home'
                }"
            >
                Liste des recettes</router-link>
                
            <router-link 
                :to="{
                    name: 'recipe-create'
                }"
            >
                Nouvelle recette</router-link>

            <router-link 
                :to="{
                    name: 'register'
                }"
                >
                Inscription
            </router-link>

            <router-link 
                :to="{
                    name: 'login'
                }"
                >
                Connexion
            </router-link>

            <router-link 
                :to="{
                    name: 'logout'
                }"
                >
                Déconnexion
            </router-link>

        </nav>
    </footer>
</template>

<script>
export default {
    name: 'FooterView'
}
</script>

<style>

</style>