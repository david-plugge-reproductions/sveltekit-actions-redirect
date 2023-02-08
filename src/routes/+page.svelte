<script lang="ts">
    import { enhance } from '$app/forms';
</script>

<form action="/signin" method="post" use:enhance>
    <button type="submit">Submit with JS</button>
</form>

<form action="/signin" method="post">
    <button type="submit">Submit without JS</button>
</form>
