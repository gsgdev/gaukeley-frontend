<script lang="ts">
	import { onMount } from 'svelte';

	let card: HTMLElement;

	onMount(() => {
		document.addEventListener('mousemove', (e: MouseEvent) => {
            rotateElement(e, card);
		});
		
	});

	function rotateElement(event: MouseEvent, element: HTMLElement) {
		// get mouse position
		const x = event.clientX;
		const y = event.clientY;
		// console.log(x, y)

		// find the middle
		const middleX = window.innerWidth / 2;
		const middleY = window.innerHeight / 2;
		// console.log(middleX, middleY)

		// get offset from middle as a percentage
		// and tone it down a little
		const offsetX = ((x - middleX) / middleX) * 15;
		const offsetY = ((y - middleY) / middleY) * 15;
		// console.log(offsetX, offsetY);

		// set rotation
		element.style.setProperty('--rotateX', offsetX + 'deg');
		element.style.setProperty('--rotateY', -1 * offsetY + 'deg');
	}
</script>

<section id="hero" class="hero">
	<div class="hero-content-wrapper">
		<h1 class="hero-title">GSGBANK</h1>
		<p class="hero-subtitle">Die Bank ihres Vertrauens.</p>
	</div>

	<div bind:this={card} class="card-wrapper">
		<img class="card" src="/schollkassenkarte_new.png" alt="Schollkassen Karte" />
	</div>
</section>

<style>
	.hero {
		position: absolute;
		width: 100%;
		text-align: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.hero-title {
		font-size: 4rem;
	}
	.hero-subtitle {
		font-size: 1.75rem;
		padding-left: 10px;
		padding-right: 10px;
	}
	.card-wrapper {
		display: none;
	}
	@media (min-width: 800px) {
		.hero {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}
		.hero-title {
			font-size: 6rem;
		}
		.hero-subtitle {
			font-size: 2.75rem;
		}
		.card-wrapper {
			display: flex;
		}
        .hero-content-wrapper {
            margin: 0 0 0 10dvw;
        }
		.card {
			width: auto;
			height: auto;
			max-height: 20dvw;
            transform: perspective(5000px) rotateY(var(--rotateX)) rotateX(var(--rotateY));

		}
	}
</style>
