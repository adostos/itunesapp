<template>

    <form @submit.prevent="getMusic()">
        <input
            @keyup="search()"
            type="text"
            v-model="query"
            ref="searchInput"
        />
    </form>

</template>

<script>
import axios from 'axios'
import { debounce } from 'lodash-es'    // eslint-disable-line
// all: import _ from 'lodash'

    export default {
        data() {
            return {
                query: '',
                limit: 5,
                //songs: []
            }
        },
        methods: {
            search: debounce(function() {
                //this.$log(this.query)
                this.getMusic()
            }, 150),
            getMusic() {
                axios
                .get(`https://itunes.apple.com/search?term=${encodeURI(this.query)}&entity=musicTrack&limit=${this.limit}`)
                .then(response => {
                    let iTunesSongs = response.data.results
                        .filter(song => song.kind === 'song')
                        .map(song => this.extractData(song))

                    this.$emit('add-new-songs', iTunesSongs)
                })
            },
            extractData({ 
                trackId: id,
                artistName: artist,
                previewUrl: url,
                artworkUrl100: cover,
                trackName: name,
                collectionName: album 
            }) {    // object destructuring
                return { id, artist, url, cover, name, album }
            }
        },
        mounted() {
            this.$refs.searchInput.focus()
        },
    }
</script>

<style lang="scss" scoped>
input {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    display: block;

    padding: 0.2em;
    text-align: center;

    color: #2c3e50;
    font-size: 1.5em;
    font-weight: 700;

    border: 1px solid #2c3e50;
    border-radius: 0.5em;
    background-color: white;
    box-sizing: border-box;

    outline: none;
    appearance: none;
}

@media screen and (max-width: 520px) {
    input {
        font-size: 1.15em;
    }
}
</style>