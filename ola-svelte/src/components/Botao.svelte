<script lang="ts">
  export let texto: string = " ";
  export let duplo: boolean = false;
  export let triplo: boolean = false;
  export let destacado: boolean = false;
  export let principal: boolean = false;
  export let vermelho: boolean = false;
  export let vazio: boolean = false;
  export let normal: boolean = false;
  export let alturaMaior: boolean = false;
  export let OnClick: (valor: string) => void = () => {};
</script>

<button
  class="botao"
  class:triplo
  class:duplo
  class:destacado
  class:principal
  class:vermelho
  class:vazio
  class:normal
  class:alturaMaior
  on:click={() => OnClick(texto)}
>
  {texto}
</button>

<style>
  .botao {
    background-color: transparent;
    color: rgb(0, 46, 253);
    flex-basis: 25%;
    border-radius: 10px;
    font-weight: bold;
    margin: 4px;
    font-size: medium;
    border: none;
  }

  .normal {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 1px 1px 1px rgba(0, 46, 253);
    cursor: pointer;
  }

  .triplo {
    flex-basis: 75%;
    box-shadow: 1px 1px 1px rgba(0, 46, 253);
    cursor: pointer;
  }

  .duplo {
    flex-basis: 50%;
    box-shadow: 1px 1px 1px rgba(0, 46, 253);
    cursor: pointer;
  }

  .destacado {
    background-color: rgb(95, 154, 255);
    color: rgb(255, 255, 255);
    font-size: large;
    box-shadow: 1px 1px 1px rgba(0, 46, 253);
    cursor: pointer;
  }

  .principal {
    background-color: rgba(0, 54, 250, 0.8);
    color: rgb(255, 255, 255);
    font-size: large;
    box-shadow: 1px 1px 1px rgba(0, 46, 253);
    cursor: pointer;
  }

  .vermelho {
    background-color: rgba(255, 14, 14, 0.613);
    box-shadow: 1px 1px 1px rgba(0, 46, 253);
    cursor: pointer;
  }

  .vazio {
    background-color: transparent;
  }

  .vazio:hover {
    background-color: transparent;
  }

  .alturaMaior {
    height: 120px;
  }


</style>
