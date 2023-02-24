<script lang="ts">
	let username = '';
	let password = '';

	function handleSubmit() {
		console.log(`Username: ${username}, Password: ${password}`);
	}
</script>

<div class="login-wrapper">
	<form on:submit|preventDefault={handleSubmit}>
		<div>
			<label for="username">Username:</label>
			<input type="text" id="username" bind:value={username} />
		</div>
		<div>
			<label for="password">Password:</label>
			<input type="password" id="password" bind:value={password} />
		</div>
		<button class="submit-button" type="submit">Submit</button>
	</form>
</div>

<style>
	:global(body) {
		background-image: none;
	}
	form {
		font-size: 3rem;
		display: block;
	}
	label {
		padding: 1rem 1rem 1rem 1rem;
	}

	.login-wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 50dvh;
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
	}
	.submit-button:hover {
		background-color: blue;
	}
</style>
