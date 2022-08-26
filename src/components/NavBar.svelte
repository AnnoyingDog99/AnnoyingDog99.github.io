<script lang="ts">
	import NavBarElement from '$components/NavBarElement.svelte';
</script>

<nav>
	<ul>
		<NavBarElement path={'/'}>Home</NavBarElement>
		<NavBarElement path={'/projects'}>Projects</NavBarElement>
		<NavBarElement path={'/resume'}>Resume</NavBarElement>
		<NavBarElement path={'/contact'}>Contact</NavBarElement>
	</ul>
</nav>

<style lang="scss">
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-around;
	}
</style>
