<script lang="ts">
  export let textoResultado: string;

  $: fonteTexto =
    textoResultado.length > 23
      ? "f-pequena"
      : textoResultado.length > 13
        ? "f-media"
        : "";
</script>

<input
  maxlength="26"
  bind:value={textoResultado}
  on:change={(e) => {
    textoResultado = e.currentTarget.value;
  }}
  on:input={(e) => {
    textoResultado = e.currentTarget.value;
  }}
  class={`botaoInput ${fonteTexto}`}
  type="text"
/>

<style>
  .botaoInput {
    background-color: #ffffff4e;
    color: rgb(0, 46, 253);
    width: 100%;
    display: flex;
    flex: 1;
    flex-basis: 100%;
    border-radius: 10px;
    font-weight: bold;
    font-size: xx-large;
    text-align: end;
    box-shadow: 0px 0px 1px rgba(0, 46, 253, 0.9);
    border: 1px solid rgba(0, 46, 253, 0.1);
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    padding-left: 10px;
    height: 60px;
  }

  .f-media {
    font-size: large;
  }
  .f-pequena {
    font-size: medium;
  }
</style>
