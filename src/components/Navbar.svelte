<script lang="ts">

	let mobileNavButton: any;
	let mobileNav: any;

	function toggleMobileNav() {
		if (mobileNavButton.getAttribute('aria-expanded') === 'true') {
			mobileNavButton.setAttribute('aria-expanded', 'false');
			mobileNav.setAttribute('aria-expanded', 'false');
		} else {
			mobileNavButton.setAttribute('aria-expanded', 'true');
			mobileNav.setAttribute('aria-expanded', 'true');
		}
		console.log(mobileNav.getAttribute('aria-expanded'));
	}
</script>

<nav>
	<svg
		on:click={toggleMobileNav}
		bind:this={mobileNavButton}
		on:keydown={() => {
			return;
		}}
		aria-expanded="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="mobile-nav-button-open"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
	</svg>

	<div class="left-nav">
		<p>logo</p>
	</div>
	<div
		on:click={toggleMobileNav}
		bind:this={mobileNav}
		on:keydown={() => {
			return;
		}}
		aria-expanded="true"
		class="right-nav"
	>
		<a href="#qualities">Features</a>
		<a href="/">Für Unternehmen</a>
		<a href="/login" class="login-button">Login</a>
	</div>
</nav>

<style>
	nav {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.right-nav {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 1000;
		backdrop-filter: blur(5px);
		display: flex;
		flex-direction: column;
		transform: translateX(0);
		transition: transform 0.4s ease-in-out;
	}
	.right-nav[aria-expanded='true'] {
		transform: translateX(-100%);
		transition: transform 0.3s ease-in-out;
	}
	.mobile-nav-button-open {
		position: fixed;
		top: 1rem;
		right: 1rem;
		width: 2.5rem;
		aspect-ratio: 1;
		z-index: 9999;
		transform: none;
		transition: transform 0.3s ease;
	}
	.mobile-nav-button-open[aria-expanded='true'] {
		z-index: 9999;
		transform: rotate(-135deg);
	}
	.right-nav > a {
		padding: 0.5rem 2.75rem 0.5rem 2.75rem;
		margin-top: 20dvh;
		background-color: blue;
		color: white;
		margin-inline: auto;
	}
	@media (min-width: 800px) {
		
		nav {
			position: static;
			display: flex;
			justify-content: space-between;
			margin: 0;
			padding: 0;
		}
		.right-nav {
			display: flex;
			position: static;
			flex-direction: row;
			transform: translateX(0);
			margin: 0;
			padding: 0;
			justify-content: flex-end;
			width: auto;
			height: auto;
		}
		.mobile-nav-button-open {
			display: none;
		}
		.right-nav > a {
			width: auto;
			height: auto;
			margin: 0;
			padding: 0;
		}
	}
</style>
