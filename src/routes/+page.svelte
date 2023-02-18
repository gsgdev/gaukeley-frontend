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
			<p class="circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1"
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
			<h1 class="qualities-heading">SICHER</h1>
			<p class="qualities-text">Unsere Bank ist sicherer als Al-Pachino seine Mudda</p>
		</div>

		<div class="secure-qualities fast">
			<p class="circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1"
					stroke="currentColor"
					class=""
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
					/>
				</svg>
			</p>
			<p class="qualities-heading">FAST</p>
			<p class="qualities-text">Schnelle als der Artz kommt.</p>
		</div>
		<div class="secure-qualities fast">
			<p class="circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
					/>
				</svg>
			</p>
			<p class="qualities-heading ">RELIABLE</p>
			<p class="qualities-text padding-10">
				Hier geht nichts kaputt oder verloren, außer es geht was kaputt oder verloren!
			</p>
		</div>
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
		margin: 0;
		padding-right: 10px;
		position: absolute;
		top: 100svh;
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.secure-qualities {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
		stroke-width: 0.9px;
		bottom: 5px;
	}
	.qualities-heading {
		margin-top: 0.75rem;
		margin-bottom: 0;
		padding: 0;
		font-size: 3rem;
	}
	.qualities-text {
		margin-top: 0.25rem;
		margin-bottom: 0;
		text-align: center;
		font-size: 1.5rem;
	}
	.fast {
		margin-top: 5rem;
		margin-bottom: 0;
	}
	.padding-10 {
		padding: 10px;
	}
</style>
