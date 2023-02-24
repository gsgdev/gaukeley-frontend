<script lang="ts">
	let username = '';
	let password = '';

	function handleSubmit() {
		console.log(`Username: ${username}, Password: ${password}`);
	}
</script>

<h1 class="header">GSGBANK</h1>

<div class="login-wrapper">
	<form on:submit|preventDefault={handleSubmit}>
		<input placeholder="Benutzername" type="text" id="username" bind:value={username} />
		<input placeholder="Passwort" type="password" id="password" bind:value={password} />
		<button class="submit-button" type="submit">Submit</button>
	</form>
</div>

<style>
	:global(body) {
		width: 100dvw;
		height: 100dvh;
		background-image: url('/src/lib/images/gradient_background.svg');
		background-size: cover;
	}
	.header {
		width: 100dvw;
		position: absolute;
		font-size: 5rem;
		text-align: center;
	}
	form {
		font-size: 3rem;
		display: block;
		width: 70dvw;
	}
	input {
		width: 100%;
		padding: 1rem;
		border-radius: 10px;
		border: 3px solid black;
	}

	.login-wrapper {
		width: 100dvw;
		height: 100dvh;
		display: flex;
		justify-content: space-around;
		align-items: center;
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
