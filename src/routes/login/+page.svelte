<script lang="ts">
	let username = '';
	let password = '';

	function handleSubmit() {
		console.log(`Username: ${username}, Password: ${password}`);
	}
</script>

<svelte:head>
	<title>GSGBANK | LOGIN</title>
</svelte:head>

<h1 class="header">GSGBANK</h1>

<div class="login-wrapper">
	<form on:submit|preventDefault={handleSubmit}>
		<label for="username">Benutzername</label>
		<div class="underline">
			<div class="input-wrapper">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="icon"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>

				<input placeholder="Benutzername" type="text" id="username" bind:value={username} />
			</div>
		</div>
		<label for="password">Passwort</label>

		<div class="underline">
			<div class="input-wrapper">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="icon"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
					/>
				</svg>
				<input placeholder="Passwort" type="password" id="password" bind:value={password} />
			</div>
		</div>
		<button class="submit-button" type="submit">Submit</button>
	</form>
</div>

<style>
	:global(body) {
		width: 100%;
		height: 100%;
		background-image: url('/src/lib/images/gradient_background.svg');
		background-size: cover;
		overflow-x: hidden;
	}
	.header {
		width: 100%;
		/* position: absolute; */
		font-size: 3rem;
		text-align: center;
	}
	form {
		font-size: 3rem;
		position: static;
		display: block;
		width: auto;
		margin: 0 0.4rem 0 0.4rem;
	}
	input {
		width: 100%;
		padding: 1rem;
		border: none;
		font-size: 1.5rem;
	}
	.icon {
		background-color: white;
		width: 3rem;
		padding: 0 0 0 0.5rem;
	}
	.input-wrapper {
		display: flex;
		flex-direction: row;
		border-radius: 20px;
	}
	.underline::after {
		content: '';
		display: block;
		height: 2px;
		background: black;
		width: 0%;
		bottom: 0;
		transition: width 0.25s ease-in-out;
	}
	input:focus {
		border: none;
		outline: none;
	}
	.underline:focus-within::after {
		content: '';
		width: 100%;
	}
	label {
		font-size: 2rem;
	}

	.login-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 20% 0 0 0;
	}

	.submit-button {
		width: 100%;
		margin: 2rem 0 0 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		background-color: rgb(52, 165, 235);
		border: none;
		font-size: 4rem;
		color: white;
		border-radius: 10px;
		padding: 10px;
		transition: background-color 0.3s;
		cursor: pointer;
	}
	.submit-button:hover {
		background-color: blue;
	}
</style>
