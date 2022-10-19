<script lang="ts">
    import {logged} from './lib/storages.js'
    import MainPage from './lib/Main.svelte';
    import LoginPage from './lib/Login.svelte';
    import BottomAppBar, {
        Section,
        AutoAdjust,
    } from '@smui-extra/bottom-app-bar';
    import logo from './assets/images/seba_logo.svg';
    import {onMount} from "svelte";

    let bottomAppBar: BottomAppBar;
    let page = LoginPage
    let loggedValue
	let settings = {}

    const loggedSubscription = logged.subscribe(value => {
        loggedValue = value;
    });

    function loggedEventArrive(event) {
        page = MainPage
        console.log('Got logged: ' + event.detail.login)
    }

    onMount(async () => {
        fetch("/api/Settings")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                settings = data;
            }).catch(error => {
            console.log(error);
            return [];
        });
    });
</script>

<div>
    <img src={logo}/>
    <AutoAdjust {bottomAppBar}>
        <svelte:component this={page} on:logged={loggedEventArrive}/>
    </AutoAdjust>

    <BottomAppBar bind:this={bottomAppBar}>
        <Section>
            User {loggedValue.login} Settings: {JSON.stringify(settings)}
        </Section>
    </BottomAppBar>
</div>
