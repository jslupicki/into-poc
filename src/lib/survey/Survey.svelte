<script lang="ts">
    import {onMount} from 'svelte';

    onMount(async () => renderSurvey('embed_survey', 'Jan', 'Kowalski', 'en-US', 'US'));
</script>

<div>
    Survey<br><br>
    <div id="embed_survey"></div>
</div>

<style>
    #embed_survey {
        height: 800px;
        width: 700px;
        margin-left: auto;
        margin-right: auto
    }
</style>
