<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';

    export let form: ActionData;
</script>

<pre>{JSON.stringify(form, null, 2)}</pre>

<form action="?" method="post" use:enhance>
    <button type="submit">Submit with JS</button>
</form>

<form action="?" method="post">
    <button type="submit">Submit without JS</button>
</form>
