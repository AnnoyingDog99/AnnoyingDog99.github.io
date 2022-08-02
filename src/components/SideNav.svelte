<script lang="ts">
    import { fly } from 'svelte/transition';
    import NavBarElement from "$components/NavBarElement.svelte";

    export let visible = false;
    
</script>

{#if visible}
    <nav transition:fly="{{ x: -300, duration: 1000 }}">
        <ul>
            <NavBarElement path={"/"}>Home</NavBarElement>
            <NavBarElement path={"/about"}>About</NavBarElement>
            <NavBarElement path={"/projects"}>Projects</NavBarElement>
            <NavBarElement path={"/resume"}>Resume</NavBarElement>
            <NavBarElement path={"/contact"}>Contact</NavBarElement>
        </ul>
    </nav>
{/if}


<style lang="scss">
    nav{
        position: fixed;
        top: 0;
        left: 0;
        background-color: $navbar-color;
        height: 100vh;
        width: 50%;
        border: 10px solid;
        border-image-slice: 1;
        border-width: 0 5px 0 0;
        border-image-source: $main-gradient;
        overflow: hidden;
        z-index: 2;
    }

    ul{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
</style>