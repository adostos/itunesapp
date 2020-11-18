<template>
    <transition name="fade">
        <article class="tunes-song" v-cloak>

            <div class="inside">
                <h2>{{ song.name | shorten(50) }}</h2>
                <h4>{{ song.artist }}</h4>
                <hr />

                <div class="player-wrapper" >
                    <img v-if="song.cover" :src="song.cover" alt="obrazok">
                    <audio controls :src="song.url" />
                </div>
            </div>

            <footer class="meta">
                ALBUM: {{ song.album | shorten }}
                <!-- <p :class="active ? 'white' : 'red'" @click.prevent="loveSong(song)">
                    ❤
                </p> -->
            </footer>

        </article>
    </transition>
</template>

<script>
import { truncate } from 'lodash-es'

    export default {
        props: {
            song: {
                type: Object,
            },
        },
        data() {
            return {
                //active: true,
                lovesongs: []
            }
        },
        /* methods: {
            loveSong(song) {
                this.$root.$emit('love-song', song)
                this.active = !this.active
            }
        }, */
        filters: {
            shorten(str, len = 30) {
                return truncate(str, { length: len })
            }
        }
    }
</script>

<style lang="scss" scoped>
$green: #41B883;
$blue: #2c3e50;

.white {
  color: white;
}

p {
    cursor: pointer;
}

.red {
  color: red;
}

[v-cloak] {
    display: none;
}
.fade-enter-active {
    transition: all 0.2s ease;
}
.fade-enter {
    transform: scale(0.8);
}

.tunes-song {
    color: #fff;
    text-align: left;
    max-width: 24em;
    margin: 0 auto 2em;
    box-sizing: border-box;
    background-color: $green;
    border-radius: 0.75em;
    position: relative;
    transition: 0.1s;
}
.inside {
    padding: 0.8em 1.75em 1.3em;
    
    h4 {
        margin: 0;
    }
    hr {
        margin-top: 10px;
    }
}
h2 {
    font-size: inherit;
    line-height: 1.5em;
    margin: 0;
    font-size: 1.5em;
}
.player-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1.5em;
}
img {
    width: 5em;
    border: 3px solid white;
    border-radius: 0.5em;
}
audio {
    outline: none;
    max-width: 14em;
}
audio::-webkit-media-controls-panel {
    background-color: #fff;
}  
.meta {
    font-size: 0.75em;
    font-weight: 800;
    line-height: 1.5;
    color: #fff;

    padding: 1em 2.25em;
    background-color: #333;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;

    p {
        margin: 0;
        padding: 0;
        float: right;
        cursor: pointer;
    }
}

@media screen and (max-width: 520px) {
    .player-wrapper {
        flex-direction: column;

        audio {
            margin-top: 1.5em;
        }
    }
}
</style>