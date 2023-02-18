<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="body">
	<Navbar />
	<section class="hero">
		<h1 class="hero-title">SUSBANK</h1>
		<p class="hero-subtitle">Das Bank kann mehere.</p>
	</section>
	<section class="qualities">
		<div class="secure-qualities">
				<p class="circle"><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="lock-icon"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
				/>
			</svg>
		</p>
		<h1 class="qualities-heading">SECURE</h1>
		<p class="qualities-text">Unsere Bank ist sicherer als Al-Pachino</p>
	</div>
		
			
		<div>FAST</div>
		<div>reliable</div>
	</section>
</div>

<style>
	.hero {
		text-align: center;
		margin-top: 40svh;
	}
	.hero-title {
		font-size: 4rem;
	}
	.qualities {
		position: absolute;
		top: 100svh;
		width: 100svw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid green;
	}
	.secure-qualities {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid red;
	}
	.circle {
		position: relative;
		width: 10em;
		height: 10em;
		border: 5px solid black;
		border-radius: 50%;
		margin: 0;
	}
	.lock-icon {
		position: absolute;
		width: 10rem;
		aspect-ratio: 1;
		stroke-width: 0.90px;
		bottom: 5px
	}
</style>
