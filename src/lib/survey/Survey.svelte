<script lang="ts">
    import {onMount} from 'svelte';

    onMount(async () => renderSurvey('embed_survey', 'Jan', 'Kowalski', 'en-US', 'US'));
</script>

Survey<br><br>
<div id="embed_survey"></div>

<style>
    #embed_survey {
        /*
                height: 800px;
                width: 700px;

         */
        height: inherit;
        margin-left: auto;
        margin-right: auto;
    }
</style>
