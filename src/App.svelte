<script lang="ts">
    import {logged, refreshSettings, settings} from './lib/storages.js'
    import MainPage from './lib/Main.svelte';
    import LoginPage from './lib/Login.svelte';
    import BottomAppBar, {Section, AutoAdjust} from '@smui-extra/bottom-app-bar';
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

    onMount(async () => refreshSettings());
</script>

<img src={logo}/>
<AutoAdjust {bottomAppBar}>
    <svelte:component this={page} on:logged={loggedEventArrive}/>
</AutoAdjust>

<BottomAppBar bind:this={bottomAppBar}>
    <Section>
        <!--
        Settings: {JSON.stringify(localSettings)}
        -->
    </Section>
    <Section>
        User {loggedValue.login}
    </Section>
</BottomAppBar>
