<script lang="ts">
	import { Header, LoginImage } from '../../components/login';
	import { LoginForm } from '../../components/login/form/';
</script>

<svelte:head>
	<title>GSGBANK | LOGIN</title>
</svelte:head>

<div class="flex-horizontal-center">
	<div class="content-wrapper">
		<Header />

		<LoginImage />

		<div class="login-wrapper">
			<LoginForm />
		</div>
	</div>
</div>

<style lang="scss">
	:global(body) {
		height: 100vh;
		background-image: url('/src/lib/images/gradient_background.svg');
		background-size: cover;
		overflow-x: hidden;
	}
	.flex-horizontal-center {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.content-wrapper {
		width: 100%;
		height: 100%;
	}

	.login-wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 0.5rem 0 0.5rem;
	}

	@media (min-width: 1200px) {
		:global(body) {
			backdrop-filter: blur(10px);
		}
		.flex-horizontal-center {
			padding: 5%;
		}

		.content-wrapper {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			border: 5px solid red;
		}
		.login-wrapper {
			padding: 5%;
		}
	}
</style>
