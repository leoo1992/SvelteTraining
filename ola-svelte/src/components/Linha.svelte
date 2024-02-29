<script lang="ts">
    export let noFinal: boolean = false;
</script>



<div class="linha" class:noFinal>
<slot />
</div>

<style>
    .linha {
        display: flex;
        flex-basis: 100%;
    }
</style>