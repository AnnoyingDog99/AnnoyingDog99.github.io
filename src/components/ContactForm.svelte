<script lang="ts">
	import Input from '$components/Input.svelte';
    import Button from '$components/Button.svelte';
import MediaQuery from './utilComponents/MediaQuery.svelte';
</script>

<form>
	<div class="container">
        <div class="text">
            <Input inputType="text" label="Name:" />
            <Input inputType="email" label="Email" />
            <Input inputType="text" label="Subject" />
            <Input textarea={true} label="Message" />
        </div>
        <Button width="80%" type="submit">Send</Button>
	</div>
</form>

<style lang="scss">
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .text{
        margin-bottom: 1rem;
        width: 80%;
    }
    form{
        width: 100%;
        max-width: 900px;
    }

</style>
