<script lang="ts">
	import Input from '$components/Input.svelte';
	import Button from '$components/Button.svelte';
	import Spinner from '$components/Spinner.svelte';

	export let title = 'Leave a message!';
	export let value = "";

	let name = '';
	let email = '';
	let message = '';
	let subject = '';


	let waiting = false;

	function submit(e: Event) {
		e.preventDefault();
		//check if honeypot empty
		if(value){
			window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
			return;
		}
		waiting = true;
		fetch(
			'https://script.google.com/macros/s/AKfycbwhA1JpQS2SBQoLeXhYMzizbBeDIglXCE5GB02m7Q_jOsGzLOCjNIWU_JUfL6MW9UbATA/exec',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: `name=${name}&email=${email}&message=${message}&subject=${subject}`
			}
		)
			.then((response) => response.json())
			.then(() => {
				waiting = false;
				alert('Thank you for your message!');
			})
			.catch(() => {
				waiting = false;
				alert('Error sending message');
			});
	}
</script>

{#if waiting}
	<Spinner />
{:else}
	<form
		class="gform"
		method="POST"
		data-email="jan.vlasman99+portfolio@gmail.com"
		on:submit={submit}
	>
		<div class="container">
			<h1>{title}</h1>
			<div class="stripe" />
			<div class="text">
				<Input label="Name:" name="name" bind:value={name} />
				<Input label="Email" name="email" bind:value={email} />
				<Input label="Subject" name="subject" bind:value={subject} />
				<Input textarea={true} label="Message" name="message" bind:value={message} />
				<div class="honey">
					<label for="honeypot">yummy</label>
					<input id="honeypot" type="text" name="honeypot" bind:value>
				</div>
				<div class="button-container">
					<Button width="100%" type="submit">Send</Button>
				</div>
			</div>
		</div>
	</form>
{/if}

<style lang="scss">
	.button-container {
		margin-top: 2em;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.text {
		margin-bottom: 1rem;
		width: 80%;
	}
	form {
		width: 100%;
		max-width: 900px;
	}

	.stripe {
		width: 80%;
		border-radius: 40em;
		height: 3px;
		background: $main-gradient;
		margin-bottom: 1rem;
	}

	h1 {
		font-size: 2.2rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}

	.honey{
		display: none;
	}
</style>
