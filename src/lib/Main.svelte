<script lang="ts">
    import Drawer, {AppContent, Content} from '@smui/drawer';
    import List, {Item, Text} from '@smui/list';
    import survey from "./survey/Survey.svelte"
    import upload from "./upload/Upload.svelte"

    let page = survey;
</script>

<div class="drawer-container">
    <Drawer class="main-drawer">
        <Content>
            <List>
                <Item on:click={() => (page = survey)} >
                    <Text>Survey</Text>
                </Item>
                <Item on:click={() => (page = upload)} >
                    <Text>Upload files</Text>
                </Item>
            </List>
        </Content>
    </Drawer>

    <AppContent class="app-content">
        <main class="main-content">
            <svelte:component this={page}/>
        </main>
    </AppContent>
</div>

<style>
    /* These classes are only needed because the
      drawer is in a container on the page. */
    .drawer-container {
        position: relative;
        display: flex;
        overflow: hidden;
        z-index: 0;
        height: 100%;
    }

    * :global(.app-content) {
        flex: auto;
        overflow: auto;
        position: relative;
        flex-grow: 1;
    }

    * :global(.main-drawer) {
        height: min-content;
    }

    .main-content {
        overflow: auto;
        padding: 16px;
        box-sizing: border-box;
        background-color: white;
        height: 100%;
    }

</style>
