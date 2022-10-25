<script lang="ts">
    import {onMount} from 'svelte';
    import {renderSurvey} from '../common';

    onMount(async () => renderSurvey('embed_survey', 'Jan', 'Kowalski', 'en-US', 'US'));
</script>

Survey<br><br>
<div id="embed_survey"></div>

<style>
    #embed_survey {
        height: -webkit-fill-available;
        padding: 1em;
        overflow: hidden;
    }
</style>
