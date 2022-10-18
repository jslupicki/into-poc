<script lang="ts">
	import {logged} from './lib/storages.js'
	import MainPage from './lib/Main.svelte';
	import LoginPage from './lib/Login.svelte';
	import BottomAppBar, {
    	Section,
    	AutoAdjust,
	} from '@smui-extra/bottom-app-bar';
	import IconButton from '@smui/icon-button';

	let bottomAppBar: BottomAppBar;
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

<div>
	<AutoAdjust {bottomAppBar}>
		<svelte:component this={page} on:logged={loggedEventArrive}/>
	</AutoAdjust>

	<BottomAppBar bind:this={bottomAppBar}>
		<Section>
			Currently logged: {loggedValue.login} / {loggedValue.password}
		</Section>
	</BottomAppBar>
</div>

<style>
</style>
