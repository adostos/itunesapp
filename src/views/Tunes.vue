<template>
    <div>
        <h1>iTunes</h1>
        <p>Find your favorite song:</p>
        <tunes-search-form @add-new-songs="songs = $event" />
        <tunes-list :new-songs="songs" />
    </div>
</template>

<script>
import TunesSearchForm from '@/components/tunes/TunesSearchForm.vue';
import TunesList from '@/components/tunes/TunesList.vue';

    export default {
        components: {
            TunesSearchForm,
            TunesList
        },
        data() {
            return {
                songs: []
            }
        },
    }
</script>

<style lang="scss" scoped>
* {
    color: #2c3e50;
}

h1 {
    margin-bottom: 5px;
}
p {
    margin: 5px 0 30px;
    font-weight: normal;
}
</style>