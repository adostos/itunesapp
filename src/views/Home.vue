<template>
	<section class="home">
		<img alt="Vue logo" src="../assets/logo.png">
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

</style>