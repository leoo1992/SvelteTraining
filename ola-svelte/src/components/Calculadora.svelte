<script lang="ts">
  import Botao from "./Botao.svelte";
  import InputResultado from "./InputResultado.svelte";
  import Linha from "./Linha.svelte";

  let valor: string = "0";

  function handleOnClick(texto: string) {
    if (!valor || !texto) {
      valor = "0";
    }

    if (texto === "0" && valor === "0") {
      valor = "0";
      return;
    }

    if (valor === "0") {
      valor = texto;
      return;
    }

    if (valor.length > 23) {
      return;
    }
    valor = valor + texto;
  }

  function handleLimpar() {
    valor = "0";
  }

  function handleDeletar() {
    if (valor.length === 1 || !valor || valor === "0") {
      valor = 0;
      return;
    }

    valor = valor.slice(0, -1);
  }
</script>

<div class="calculadora">
  <Linha>
    <InputResultado textoResultado={valor} />
  </Linha>

  <Linha>
    <Botao texto=" " destacado />
    <Botao vermelho texto="Del" destacado OnClick={handleDeletar} />
    <Botao texto="%" destacado OnClick={handleOnClick} />
    <Botao texto="/" destacado OnClick={handleOnClick} />
  </Linha>

  <Linha>
    <Botao texto="7" OnClick={handleOnClick} />
    <Botao texto="8" OnClick={handleOnClick} />
    <Botao texto="9" OnClick={handleOnClick} />
    <Botao texto="x" destacado OnClick={handleOnClick} />
  </Linha>

  <Linha>
    <Botao texto="4" OnClick={handleOnClick} />
    <Botao texto="5" OnClick={handleOnClick} />
    <Botao texto="6" OnClick={handleOnClick} />
    <Botao texto="+" destacado OnClick={handleOnClick} />
  </Linha>

  <Linha>
    <Botao texto="1" OnClick={handleOnClick} />
    <Botao texto="2" OnClick={handleOnClick} />
    <Botao texto="3" OnClick={handleOnClick} />
    <Botao texto="-" destacado OnClick={handleOnClick} />
  </Linha>

  <Linha>
    <Botao texto="C" principal OnClick={handleLimpar} />
    <Botao texto="0" OnClick={handleOnClick} />
    <Botao texto="," destacado OnClick={handleOnClick} />
    <Botao texto="=" principal OnClick={handleOnClick} />
  </Linha>
</div>

<style class="calculadora">
  .calculadora {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 400px;
    width: 320px;
    background: rgba(85, 129, 251, 0.697);
    border-radius: 10px;
    vertical-align: middle;
    justify-content: center;
    align-content: center;
    box-shadow: 0px 0px 200px rgba(84, 0, 253, 0.407);
    border: none;
  }
</style>
