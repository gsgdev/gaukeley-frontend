<script>
	let username = '';
	let password = '';

	function handleSubmit() {
		console.log(`Username: ${username}, Password: ${password}`);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h1 class="login-header margin-bottom">Login</h1>
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

	<div class="underline margin-top login-center">
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
	<div class="submit-button-wrapper">
		<button class="submit-button" type="submit">Submit</button>
	</div>
</form>

<style lang="scss">
	$clr-login-button: #2172f2;

	.login-header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		text-align: center;
	}
	.margin-bottom {
		margin: 0 0 4rem 0;
	}
	.margin-top {
		margin: 1rem 0 0 0;
	}
	form {
		backdrop-filter: blur(10px);
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
	.icon {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	input {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
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
	.submit-button {
		width: 50%;
		margin: 2rem 0 0 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: white;
		border: 5px solid $clr-login-button;
		font-size: 2rem;
		color: $clr-login-button;
		border-radius: 10px;
		font-weight: bold;
		padding: 10px;
		transition: background-color 0.2s ease-in-out;
		cursor: pointer;
	}
	.submit-button:hover {
		background-color: $clr-login-button;
		color: white;
	}
	.submit-button-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>
