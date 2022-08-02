<script lang="ts">
    import Card from "$components/Card.svelte";
    import { projects } from "$utils/projectsConfig";

</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<div class="card-container">
    {#each projects as project}
        <Card cardInfo="{project}"/>
    {/each}
</div>

<style lang="scss">
    .card-container{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 2rem;
    }
</style>