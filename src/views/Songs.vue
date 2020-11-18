<template>
    <div>
        <tunes-list :new-songs="songs" />
    </div>
</template>

<script>
import TunesList from '../components/tunes/TunesList.vue'
    export default {
        components: {
            TunesList
        },
        data() {
            return {
                songs: [
                    { id: 1, artist: 'asdf', url: 'asd', cover: 'adf', name: 'asdf', album: 'adsf' },
                    { id: 2, artist: 'asdfadgdf', url: 'asbfd', cover: 'aadfdf', name: 'asdfadf', album: 'adadsfsf' },
                ],
                songs2: []
            }
        },
        mounted() {
            //this.$root.$on('love-song', data => console.log(data))
            this.$root.$on('love-song', song => this.pushSong(song))
        },
        methods: {
            pushSong(song) {
                this.songs.push(song)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>