<script lang="ts">
	import { onMount } from 'svelte';

	export let query:
		| '(min-width: 576px)'
		| '(min-width: 768px)'
		| '(min-width: 992px)'
		| '(min-width: 1200px)';

	let mql: MediaQueryList;
	let wasMounted = false;
	let matches = false;

	onMount(() => {
		wasMounted = true;
		return () => {
			removeActiveListener();
		};
	});

	$: {
		if (wasMounted) {
			removeActiveListener();
			addNewListener(query);
		}
	}

	function addNewListener(query: string) {
		mql = window.matchMedia(query);
		mql.addEventListener('change', mqlListener);
		matches = mql.matches;
	}

	function removeActiveListener() {
		if (mql && mqlListener) {
			mql.removeEventListener('change', mqlListener);
		}
	}

	function mqlListener(v: MediaQueryListEvent) {
		matches = v.matches;
	}
</script>

<slot {matches} />
