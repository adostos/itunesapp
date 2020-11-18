<template>
    <ul>
        <tunes-song v-for="item in newSongs" :key="item.id" :song="item" />
    </ul>
</template>

<script>
import TunesSong from '@/components/tunes/TunesSong.vue';

    export default {
        components: {
            TunesSong
        },
        props: [
            'new-songs'
        ],
        data() {
            return {

            }
        }, 
    }
</script>

<style lang="scss" scoped>
ul {
    margin-top: 3em;
    padding-left: 0;
    list-style: none;
}
</style>