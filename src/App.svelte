<script lang="ts">
	import {logged} from './global_storages.js'
	import MainPage from './main/Main.svelte';
	import LoginPage from './login/Login.svelte';

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
		Currently logged:
		<div>Login: {loggedValue.login}</div>
		<div>Password: {loggedValue.password}</div>
	</div>
	<svelte:component this={page} on:logged={loggedEventArrive}/>
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
