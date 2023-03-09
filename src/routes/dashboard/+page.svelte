<script lang="ts">
    import type { PageData } from './$types'

    export let data: PageData;
</script>

<svelte:head>
	<title>GSGBANK | DASHBOARD</title>
</svelte:head>

<h1>Your session id is: {data.post.session}</h1>
