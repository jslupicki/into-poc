<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import {logged} from "./storages.js";
    import Button, { Label } from '@smui/button';
    import Textfield from '@smui/textfield';

    const dispatch = createEventDispatcher();
    let login: string = '';
    let password: string = '';

    function submit() {
        let loggedStruct = {
            login: login,
            password: password
        }
        logged.update(_ => loggedStruct)
        dispatch('logged', loggedStruct);
    }
</script>

<div class="login">
    <div>
        <Textfield
            class="shaped-outlined"
            variant="outlined"
            bind:value={login}
            label="Login"
        >
        </Textfield>
    </div>
    <div>
        <Textfield
            class="shaped-outlined"
            variant="outlined"
            bind:value={password}
            label="Password"
            type="password"
        >
        </Textfield>
    </div>
    <div class="horizontal-center">
        <Button on:click={submit} variant="raised" class="button-shaped-round">
            <Label>Login</Label>
        </Button>
    </div>
</div>

<style>
    .login {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .login > * {
        display: block;
        margin-top: 1em;
    }

    .login > *:first-child {
        margin-top: 0px;
    }

    .horizontal-center {
        display: flex;
        justify-content: center;
    }
</style>
