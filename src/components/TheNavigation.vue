<template>
    <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/tunes">Tunes</router-link> |
        <!-- <router-link to="/songs">Top</router-link> | -->
        <router-link to="/about">About</router-link>
        <!-- <router-view/> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav {
    margin: 2em auto 2.5em;
    padding: 0 1.25em;
    display: inline-block;

    vertical-align: middle;
    background: transparent;
    white-space: nowrap;

    border-bottom: 3px solid #2c3e50;
    border-radius: 1em;

    a {
        color: #2c3e50;
        font-size: 1.1em;
        font-weight: 800;
        text-decoration: none;

        cursor: pointer;
        padding: 0.575em 0.65em;
        display: inline-block;

        &.router-link-exact-active {
            color: #41B883;
        }
    }
}
</style>