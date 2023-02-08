<script lang="ts">
    import type { LayoutActionData } from './$types';
    import { enhance } from '$app/forms';

    // LayoutActionData includes all layout form actions from the
    // current file tree (just like page data)
    export let form: LayoutActionData;
</script>

<main>
    <slot />
</main>

<footer>
    <!--
        this action is posted to whatever pathname we are currently at
        we don´t actually care about the pathname at all.

        '/' is the route.id to the layout action
        '/suscribeNews' is the actual action name
    -->
    <form action="?/=/subscribeNews" method="post" use:enhance>
        <input type="email" name="email" />
        <button type="submit">Subscribe to newsletter</button>
    </form>
</footer>

<style>
    :global(body) {
        display: grid;
        grid-template-rows: 1fr auto;
        min-height: 100vh;
        margin: 0;
    }

    main,
    footer {
        padding: 2em;
    }
    footer {
        border-top: 1px solid #aaa;
    }
</style>
