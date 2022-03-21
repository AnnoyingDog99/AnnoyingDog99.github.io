<script lang="ts">
    export let pages: Map<string, string> = new Map([
        ["Home", "/"],
        ["About", "/about"],
        ["Projects", "/projects"],
        ["Contact", "/contact"]
    ]);
</script>

<nav >
    <ul class="flex items-center justify-between text-white text-2xl px-40 py-3">
        {#each [...pages] as [pageName, page]}
            <li><a href="{page}">{pageName}</a></li>
        {/each}
    </ul>
</nav>