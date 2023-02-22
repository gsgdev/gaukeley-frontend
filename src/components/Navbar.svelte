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
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		/>
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
		<a href="/login" id="login-button">LOGIN</a>
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
		transform: rotate(90deg);
		transition: transform 0.3s ease;
	}
	.mobile-nav-button-open[aria-expanded='true'] {
		z-index: 9999;
		transform: rotate(0);
	}
	.right-nav > a {
		padding: 0.5rem 2.75rem 0.5rem 2.75rem;
		margin-top: 20dvh;
		background-color: white;
		color: black;
		margin-inline: auto;
		border-radius: 10px;
		border: 1px solid black;
		padding: 1rem 1rem 1rem 1rem;
		-webkit-box-shadow: 5px 5px 19px 3px rgba(0, 0, 0, 0.55);
		box-shadow: 5px 5px 19px 3px rgba(0, 0, 0, 0.55);
	}
	.right-nav > a:hover {
		text-decoration: none;
	}
	#login-button {
		text-decoration: none;
		font-weight: bold;
		font-size: 1.25rem;
		border: 5px solid rgb(240, 68, 108);
		background-color: white;
		color: rgb(240, 68, 108);
		transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
	}
	@media (min-width: 800px) {
		nav {
			position: static;
			display: flex;
			justify-content: space-between;
			margin: 0;
			padding: 1rem 0.5rem 1rem 1rem;
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
			display: flex;
			margin: auto 1.75rem auto 0;
			border-radius: 10px;
			vertical-align: middle;
			-webkit-box-shadow: 5px 5px 19px 3px rgba(0, 0, 0, 0.55);
			box-shadow: 5px 5px 19px 3px rgba(0, 0, 0, 0.55);
			transition: box-shadow 0.3s ease, -webkit-box-shadow 0.3s ease;
		}
		.right-nav > a:hover {
			-webkit-box-shadow: 6px 5px 15px -3px rgba(0, 0, 0, 0.67);
			box-shadow: 6px 5px 15px -3px rgba(0, 0, 0, 0.67);
		}
		.right-nav[aria-expanded='true'] {
			transform: translateX(0);
		}
		#login-button {
			margin: auto 1rem auto 0;
			text-decoration: none;
			font-weight: bold;
			font-size: 1.25rem;
			border: 5px solid rgb(240, 68, 108);
			background-color: white;
			color: rgb(240, 68, 108);
			transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
		}
		#login-button:hover {
			color: white;
			background-color: rgb(240, 68, 108);
		}
	}
</style>
