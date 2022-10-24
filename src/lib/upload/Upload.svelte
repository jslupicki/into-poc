<script lang="ts">
    import Button, {Label} from '@smui/button';
    import {logged, settings} from '../storages.js'
    import {get} from "svelte/store";
    import Dropzone from "svelte-file-dropzone";
    import Snackbar, {Actions} from '@smui/snackbar';
    import IconButton from '@smui/icon-button';
    import DataTable, {Body, Cell, Head, Row} from '@smui/data-table';

    let files = {
        accepted: [],
        rejected: []
    };
    let snackbarSuccess: Snackbar;
    let snackbarError: Snackbar;
    let snackbarMessage = '';

    function handleFilesSelect(e) {
        const {acceptedFiles, fileRejections} = e.detail;
        files.accepted = [...files.accepted, ...acceptedFiles];
        files.rejected = [...files.rejected, ...fileRejections];
    }

    async function uploadFile(file: File): Promise<Response> {
        const login = get(logged).login
        const uploadUrl = get(settings)['into_upload_file_url']

        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('login', login);

        console.log('About to upload as "%s" file "%s" to %s', login, file.name, uploadUrl)

        return fetch(uploadUrl, {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        })
    }

    function uploadFromDropzone() {
        let uploadPromise
        files.accepted.forEach(file => {
            if (!uploadPromise) {
                uploadPromise = uploadFile(file)
            } else {
                uploadPromise.then(response => uploadFile(file))
            }
            uploadPromise.then(response => {
                console.log('Uploaded %s successfully', file.name);
                snackbarMessage = `File ${file.name} was successfully uploaded`
                snackbarSuccess.open();
                response
            })
        })
    }
</script>

<Dropzone on:drop={handleFilesSelect}/>
<br>
{#if files.accepted.length > 0}
    <DataTable style="max-width: 100%;">
        <Head>
            <Row>
                <Cell>File name</Cell>
                <Cell numeric>Size</Cell>
            </Row>
            <title>Files to upload</title>
        </Head>
        <Body>
        {#each files.accepted as item}
            <Row>
                <Cell>{item.name}</Cell>
                <Cell numeric>{item.size}</Cell>
            </Row>
        {/each}
        </Body>
    </DataTable>
{/if}
<br>
<div class="horizontal-center">
    <Button on:click={uploadFromDropzone} variant="raised" class="button-shaped-round">
        <Label>Upload</Label>
    </Button>
</div>


<Snackbar bind:this={snackbarSuccess} class="snackbar-success">
    <Label>{snackbarMessage}</Label>
    <Actions>
        <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
</Snackbar>

<Snackbar bind:this={snackbarError} class="snackbar-error">
    <Label>{snackbarMessage}</Label>
    <Actions>
        <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
</Snackbar>

<style>
</style>
