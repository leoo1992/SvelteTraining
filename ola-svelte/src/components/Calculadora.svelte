<script lang="ts">
  import CalculadoraModel from "../model/CalculadoraModel";
  import Botao from "./Botao.svelte";
  import InputResultado from "./InputResultado.svelte";
  import Linha from "./Linha.svelte";

  let calc: CalculadoraModel = new CalculadoraModel();
  const numeroDigitado = (num: string) => (calc = calc.numeroDigitado(num));
  const virgulaDigitada = () => (calc = calc.virgulaDigitada());
  const limparValores = () => (calc = calc.limparValores());
  const deletarUltimoDigitado = () => (calc = calc.deletarUltimoDigitado());
  const operacaoDigitada = (op: string) => (calc = calc.operacaoDigitada(op));
  const calcular = () => (calc = calc.calcular());
</script>

<div class="calculadora">
  <Linha linhaTexto>
    <label class="labelCalculadora">Calculadora</label>
  </Linha>

  <Linha>
    <InputResultado textoResultado={calc.getValor()} />
  </Linha>

  <Linha>
    <Botao normal texto="7" OnClick={numeroDigitado} />
    <Botao normal texto="8" OnClick={numeroDigitado} />
    <Botao normal texto="9" OnClick={numeroDigitado} />
    <Botao texto="*" destacado OnClick={operacaoDigitada} />
  </Linha>

  <Linha>
    <Botao normal texto="4" OnClick={numeroDigitado} />
    <Botao normal texto="5" OnClick={numeroDigitado} />
    <Botao normal texto="6" OnClick={numeroDigitado} />
    <Botao destacado texto="/" OnClick={operacaoDigitada} />
  </Linha>

  <Linha>
    <Botao normal texto="1" OnClick={numeroDigitado} />
    <Botao normal texto="2" OnClick={numeroDigitado} />
    <Botao normal texto="3" OnClick={numeroDigitado} />
    <Botao texto="-" destacado OnClick={operacaoDigitada} />
  </Linha>

  <Linha>
    <Botao vazio texto="" />
    <Botao normal texto="0" OnClick={numeroDigitado} />
    <Botao texto="," normal OnClick={virgulaDigitada} />
    <Botao texto="+" destacado OnClick={operacaoDigitada} />
  </Linha>
  
  <Linha noFinal>
    <Botao vermelho texto="Del" destacado OnClick={deletarUltimoDigitado} />
    <Botao texto="C" principal OnClick={limparValores} />
    <Botao duplo texto="=" principal OnClick={calcular} />
  </Linha>
</div>

<style class="calculadora">
  .calculadora {
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 400px;
    width: 320px;
    background: rgba(112, 150, 255, 0.664);
    border-radius: 10px;
    vertical-align: middle;
    justify-content: center;
    align-content: center;
    box-shadow: 0px 0px 100px rgb(84, 0, 253);
    border: 2px solid rgba(84, 0, 253, 0.648);
    margin: 20px;
  }

  .labelCalculadora {
    font-weight: bold;
    color: rgb(0, 46, 253);
    font-size: x-large;
    font-family: "Montserrat", sans-serif;
  }
</style>
