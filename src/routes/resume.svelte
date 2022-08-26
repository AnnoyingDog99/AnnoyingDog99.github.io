<script lang="ts">
	import Resume from '../../static/files/Resume.pdf';

	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<div in:fade={{ delay: 250 }}>
		<iframe src={Resume} width="100%" height="100" title="resume" class="iframe">
			Browser does not support iframes
		</iframe>
	</div>
{/if}

<style lang="scss">
	div {
		height: 100%;
	}

	.iframe {
		border: none;
		height: 100vh;
	}
</style>
