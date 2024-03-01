<script lang="ts">
  export let linhaTexto: boolean = false;
  export let noFinal: boolean = false;
</script>

<div class="linha" class:linhaTexto class:noFinal>
  <slot />
</div>

<style>
  .linha {
    display: flex;
    flex-basis: 100%;
  }

  .linhaTexto {
    text-align: center;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    align-self: center;
    align-content: center;
    margin-bottom: 10px;
  }

  .noFinal{
    justify-content: space-between !important;
    align-content: center !important;
  }
  
</style>
