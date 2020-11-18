<template>
    <div id="app">
        
        <header>
            <the-navigation />
        </header>

        <main class="content">
            <router-view />
        </main>

    </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'

export default {
    components: {
        TheNavigation
    }
}
</script>

<style lang="scss">
@import './main.scss';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
