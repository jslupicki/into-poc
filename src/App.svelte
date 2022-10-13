<script lang="ts">
	export let name: string;
	export let surname: string;
	export let counter: number = 0;
	let color = "red";

	function increment() {
		counter += 1;
		console.log(`Set counter to ${counter}`)
	}
	function decrement() {
		counter -= 1;
		console.log(`Set counter to ${counter}`)
	}
</script>

<main>
	<h1>Hello {name} {surname} {counter}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={increment}>+</button>
	<button on:click={decrement}>-</button>
	<h2 on:mouseenter={() => color = "red"} on:mouseleave={() => color = "green"} style="color: {color};">HELLO</h2>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
