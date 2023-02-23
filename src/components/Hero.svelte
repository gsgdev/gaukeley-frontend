<script lang="ts">
	import { onMount } from 'svelte';

	let card: HTMLElement | null;
	let heroContent: any;

	onMount(() => {
		document.addEventListener('mousemove', (e: MouseEvent) => {
			rotateElement(e, card);
		});

		let observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log(entry);
					entry.target.classList.add('hero-content-wrapper');
					console.log(entry.target.classList);
				}
			});
		});

		// TODO: welcher type hat diese element, es it kein HTMLElement

		observer.observe(heroContent);
	});

	function rotateElement(event: MouseEvent, element: HTMLElement | null) {
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
		element?.style.setProperty('--rotateX', offsetX + 'deg');
		element?.style.setProperty('--rotateY', -1 * offsetY + 'deg');
	}
</script>

<section id="hero" class="hero">
	<div bind:this={heroContent} class=" hero-content-wrapper-before-intersecting">
		<h1 class="hero-title">GSGBANK</h1>
		<p class="hero-subtitle">Die Bank ihres Vertrauens.</p>
	</div>

	<div bind:this={card} class="card-wrapper">
		<img class="card" src="/schollkassenkarte_new.png" alt="Schollkassen Karte" />
	</div>
</section>

<p class="hero-content-wrapper" style="display: none;" />

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
	.hero-content-wrapper-before-intersecting {
		opacity: 0;
		transform: translateY(1rem);
		/* filter: blur(1 px); */
		transition: all 1s ease-in-out;
		margin: 0 0 0 10dvw;

	}
	.hero-content-wrapper {
		opacity: 1;
		filter: blur(0);
		transform: translateY(0);
	}
	@media (min-width: 800px) {
		.hero-title {
			font-size: 6rem;
		}
		.hero-subtitle {
			font-size: 2.75rem;
		}
	}
	@media (min-width: 1250px) {
		.hero {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}

		.card-wrapper {
			display: flex;
			margin: auto 0 auto 0;
		}
		.card {
			top: 70rem;
			width: auto;
			height: auto;
			max-height: 20dvw;
			transform: perspective(5000px) rotateY(var(--rotateX)) rotateX(var(--rotateY));
		}
	}
</style>
