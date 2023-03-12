<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import Qualities from '../components/Qualities.svelte';
	import Line from '../components/Line.svelte';
	import Quotes from '../components/Quotes.svelte';
</script>

<svelte:head>
	<title>GSGBANK</title>
</svelte:head>

<Navbar />

<Hero />
<Line />

<div id="content-wrapper" class="content-wrapper">
	<Qualities />

	<Quotes />
</div>

<div class="ad-box" />

<style>
	.content-wrapper {
		margin-top: 5rem;
		margin-bottom: -1;
		position: absolute;
		top: 105dvh;
		width: 99%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	:global(body) {
		background-image: url('/src/lib/images/gradient_background.svg');
		background-size: cover;
	}
	@media (min-width: 1200px) {
		.ad-box {
			display: none;
			background-color: black;
			width: 25rem;
			height: 19rem;
			position: fixed;
			bottom: 10px;
			right: 10px;
			border-radius: 10px;
		}
	}
</style>
