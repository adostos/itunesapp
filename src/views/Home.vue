<template>
	<section class="home">
		<img
			alt="Vue logo"
			src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F585bbb3acb11b227491c32b0.png&f=1&nofb=1"
		/>
		<the-home />
	</section>
</template>

<script>
// @ is an alias to /src
import TheHome from '@/components/home/TheHome.vue'

export default {
	name: 'Home',
	components: {
		TheHome
	}
}
</script>

<style lang="scss" scoped>
img {
	width: 25%;
	margin: 4em 0 3em 0;
}
</style>