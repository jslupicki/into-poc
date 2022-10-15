<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { logged } from "../global_storages.js";

  const dispatch = createEventDispatcher();
  let login: string;
  let password: string;

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
  Login Page
  <div>
    Login:
    <input bind:value={login} placeholder="enter your login" />
  </div>
  <div>
    Password:
    <input type="password" bind:value={password} placeholder="enter your password" />
  </div>
  <button on:click={submit}>LOGIN</button>
</div>
