<nav>
	<div class="right-nav">
        logo
    </div>
	<div class="left-nav">
		<p>Features</p>
		<p>Fuer Unternehme</p>
		<button class="login-button">Login</button>
	</div>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between; 
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
    }

</style>
