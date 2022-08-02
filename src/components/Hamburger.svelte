<script lang="ts">

</script>

<div class="hamburger-container" on:click>
    <div class="hamburger-bar"></div>
    <div class="hamburger-bar"></div>
    <div class="hamburger-bar"></div>
</div>

<style lang="scss">
    .hamburger-bar{
        background: $main-gradient;
        width: 2.7rem;
        height: 0.4rem;
        border-radius: 50px;
        margin: 5px;
    }

    .hamburger-container{
        cursor: pointer;
        position: fixed;
        top: 0;
        right: 0;
        margin: 5px;
        background: $navbar-color-opaque;
        border-radius: 10rem;
        padding: 15px 10px 15px 10px;
    }
</style>