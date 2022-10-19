<script lang="ts">
    import {logged, settings} from './lib/storages.js'
    import MainPage from './lib/Main.svelte';
    import LoginPage from './lib/Login.svelte';
    import BottomAppBar, { Section, AutoAdjust } from '@smui-extra/bottom-app-bar';
    import logo from './assets/images/seba_logo.svg';
    import {onMount} from 'svelte';

    let bottomAppBar: BottomAppBar;
    let page = LoginPage
    let loggedValue
    let localSettings = {}

    const loggedSubscription = logged.subscribe(value => {
        loggedValue = value;
    });
    const settingsSubscription = settings.subscribe(value => {
        localSettings = value;
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
                settings.update(_ => data);
            })
            .catch(error => {
                console.log(error);
                let env = {
                    test: import.meta.env.VITE_test
                };
                settings.update(_ => env);
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
            Settings: {JSON.stringify(localSettings)}
        </Section>
        <Section>
            User {loggedValue.login}
        </Section>
    </BottomAppBar>
</div>
