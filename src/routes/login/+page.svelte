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
		<button type="submit">Submit</button>
	</form>
</div>

<style>
	:global(body) {
		background-image: none;
	}
	form {
		display: block;
	}
	.login-wrapper {
		margin: auto auto auto auto;
	}
</style>
