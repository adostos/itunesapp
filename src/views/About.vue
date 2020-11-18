<template>
    <article class="about">
        
        <h2>
            Overview
        </h2>
        <p>
            The Search API allows you to place search fields in your website to search for content within the iTunes Store and Apple Books Store. You can search for a variety of content; including books, movies, podcasts, music, music videos, audiobooks, and TV shows. You can also call an ID-based lookup request to create mappings between your content library and the digital catalog. Developers may use promotional content in the API, including previews of songs, music videos, album art and App icons only to promote store content and not for entertainment purposes. Use of sound samples and other assets from the API must be proximate to a store badge. Terms and conditions apply.
        </p>

        <br />

        <h2>
            Why do we use it?
        </h2>
        <p>
            To search for content from a field in your website and display the results in your website, you must create a search field that passes a fully-qualified URL content request to the iTunes Store, parse the JavaScript Object Notation (JSON) format returned from the search, and display the results in your website.
        </p>


    </article>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.about {
    margin: 0 auto;
    width: 90%;
    max-width: 700px;
}
p {
    text-align: left;
    line-height: 2;
}
</style>