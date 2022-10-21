<script lang="ts">
    import Button, {Label} from '@smui/button';
    import Textfield from '@smui/textfield';
    import {logged, settings} from '../storages.js'
    import {get} from "svelte/store";

    let fileVar:File[] = [];

    function upload() {
        let login = get(logged).login
        let uploadUrl = get(settings)['into_upload_file_url']

        const formData = new FormData();
        formData.append('file', fileVar[0], fileVar[0].name);
        formData.append('login', login);

        console.log('About to upload as "%s" file "%s" to %s', login, fileVar[0].name, uploadUrl)

        fetch(uploadUrl, {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
</script>

<div class="upload">
    <div>
        <Textfield
                class="shaped-outlined"
                variant="outlined"
                type="file"
                bind:files={fileVar}
                label="Upload"
        >
        </Textfield>
    </div>
    <br>
    <div class="horizontal-center">
        <Button on:click={upload} variant="raised" class="button-shaped-round">
            <Label>Upload</Label>
        </Button>
    </div>
</div>

<style>
</style>
