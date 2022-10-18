<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import {logged} from "./storages.js";
    import Button, { Label } from '@smui/button';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';

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

<div>
    <div>
        <Textfield
            class="shaped-outlined"
            variant="outlined"
            bind:value={login}
            label="Login"
        >
        </Textfield>
    </div>
    <div style="margin-top: 1em; margin-bottom: 1em;">
        <Textfield
            class="shaped-outlined"
            variant="outlined"
            bind:value={password}
            label="Password"
            type="password"
        >
        </Textfield>
    </div>
    <div>
        <Button on:click={submit} variant="raised" class="button-shaped-round">
            <Label>Login</Label>
        </Button>
    </div>
</div>
