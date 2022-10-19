<script lang="ts">
	import {logged} from './lib/storages.js'
	import MainPage from './lib/Main.svelte';
	import LoginPage from './lib/Login.svelte';
	import BottomAppBar, {
    	Section,
    	AutoAdjust,
	} from '@smui-extra/bottom-app-bar';
	import logo from './assets/images/seba_logo.svg';

	let bottomAppBar: BottomAppBar;
	let page = LoginPage
	let loggedValue

	const loggedSubscription = logged.subscribe(value => {
		loggedValue = value;
	});

	let testConfig = 'unknown';

	try {
		let testConfig = process.env.test;
	} catch (e: Error) {
		console.log('Got error: ' + e.message)
	}

	function loggedEventArrive(event) {
		page = MainPage
		console.log('Got logged: ' + event.detail.login)
	}

</script>

<div>
	<img src={logo}/>
	<AutoAdjust {bottomAppBar}>
		<svelte:component this={page} on:logged={loggedEventArrive}/>
	</AutoAdjust>

	<BottomAppBar bind:this={bottomAppBar}>
		<Section>
			User {loggedValue.login} [{testConfig}]
		</Section>
	</BottomAppBar>
</div>
