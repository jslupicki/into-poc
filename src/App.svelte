<script lang="ts">
    import {logged, refreshSettings, settings, type SettingsType} from './lib/storages.js'
    import MainPage from './lib/Main.svelte';
    import LoginPage from './lib/Login.svelte';
/*  
    import BottomAppBar, {Section, AutoAdjust} from '@smui-extra/bottom-app-bar';
*/
    import logo from './assets/images/seba_logo.svg';
    import {onMount} from 'svelte';

/*
    let bottomAppBar: BottomAppBar;
*/
    let page = LoginPage
    let loggedValue
    let localSettings: SettingsType = {
        into_upload_file_url: '',
        environment: ''
    }

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

<div id="header">
    <img src={logo} alt=""/>
    <span>{localSettings.environment}</span>
</div>
<svelte:component this={page} on:logged={loggedEventArrive}/>
<!--
<AutoAdjust {bottomAppBar}>
    <svelte:component this={page} on:logged={loggedEventArrive}/>
</AutoAdjust>

<BottomAppBar bind:this={bottomAppBar}>
    <Section>
        <!--
        Settings: {JSON.stringify(localSettings)}
        -->
<!--
    </Section>
    <Section>
        User {loggedValue.login}
    </Section>
</BottomAppBar>
-->

<style>
    #header {
        display: flex;
    }
</style>
