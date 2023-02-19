<nav>
	<div class="right-nav">
		<p>logo</p>
	</div>
	<div class="left-nav">
		<p>Features</p>
		<p>Fuer Unternehme</p>
		<p class="login-button">Login</p>
	</div>
</nav>

<style>
	nav {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border: 1px solid green;
	}
	.right-nav > p {
		vertical-align: middle;
	}

	.left-nav > p {
		margin-right: 1.25rem;
		text-decoration: underline;
	}
	.left-nav > p:hover {
		text-decoration: none;
		cursor: pointer;
	}
	.login-button {
		border: none;
		background-color: white;
		cursor: pointer;
		font-size: 1rem;
		margin-right: 0.5rem;
	}
	.left-nav {
		display: flex;
		flex-direction: row;
        vertical-align: middle;
	}
</style>
