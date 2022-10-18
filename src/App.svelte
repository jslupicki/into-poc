<script lang="ts">
	import {logged} from './lib/storages.js'
	import MainPage from './lib/Main.svelte';
	import LoginPage from './lib/Login.svelte';

	let page = LoginPage
	let loggedValue

	const unsubscribe = logged.subscribe(value => {
		loggedValue = value;
	});

	function loggedEventArrive(event) {
		page = MainPage
		console.log('Got logged: ' + event.detail.login)
	}

</script>

<main>
	<div>
		Currently logged: {loggedValue.login} / {loggedValue.password}
	</div>
	<svelte:component this={page} on:logged={loggedEventArrive}/>
</main>

<style>
</style>
