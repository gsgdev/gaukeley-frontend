<script lang="ts">
    let username = '';
    let password = '';
  
    function handleSubmit() {   
       console.log(`Username: ${username}, Password: ${password}`);
    }

</script>
  
<form on:submit|preventDefault={handleSubmit}>
<label for="username">Username:</label>
<input type="text" id="username" bind:value={username} />

<label for="password">Password:</label>
<input type="password" id="password" bind:value={password} />

<button type="submit">Submit</button>
</form>
  