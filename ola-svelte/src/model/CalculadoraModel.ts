const NAO_limparTela = false;
const LIMPA_TELA = true;

export default class CalculadoraModel {
  #valor: string;
  #accumulador: number;
  #limparTela: boolean;
  #operacao: string;

  constructor(
    valor: string = "0",
    accumulador: number = null,
    limparTela: boolean = false,
    operacao: string = null
  ) {
    this.#valor = valor;
    this.#accumulador = accumulador;
    this.#limparTela = limparTela;
    this.#operacao = operacao;
  }

  getValor() {
    if (
      isNaN(parseFloat(this.#valor)) ||
      !isFinite(parseFloat(this.#valor)) ||
      !this.#valor
    ) {
      new CalculadoraModel();
      return (this.#valor = "Operação inválida");
    }

    if (this.#valor.length === 20) {
      return this.#valor.substring(0, 20).replace(".", ",");
    }

    return this.#valor.replace(".", ",") || "0";
  }

  numeroDigitado(novoValor: string) {
    if (this.#valor == "Operação inválida") {
      return new CalculadoraModel();
    }

    if (this.#valor.length === 20) {
      return (this.#valor = this.#valor?.substring(0, 20));
    }

    if (
      (this.#valor.length === 1 && this.#valor === "0") ||
      this.#valor === "Operação inválida" ||
      this.#valor === "[object Object]"
    ) {
      return new CalculadoraModel(
        novoValor,
        this.#accumulador,
        NAO_limparTela,
        this.#operacao
      );
    } else
      return new CalculadoraModel(
        this.#limparTela || !this.#valor ? novoValor : this.#valor + novoValor,
        this.#accumulador,
        NAO_limparTela,
        this.#operacao
      );
  }
  virgulaDigitada() {
    if (this.#valor == "Operação inválida") {
      return new CalculadoraModel();
    }

    return new CalculadoraModel(
      this.#valor?.includes(".") ? this.#valor : this.#valor + ".",
      this.#accumulador,
      NAO_limparTela,
      this.#operacao
    );
  }

  limparValores() {
    return new CalculadoraModel();
  }

  deletarUltimoDigitado() {
    if (this.#valor == "Operação inválida") {
      return new CalculadoraModel();
    }

    if (!this.#valor?.slice(0, -1)) {
      return new CalculadoraModel();
    }

    return new CalculadoraModel(
      this.#valor == "Operação inválida" ||
      !this.#valor ||
      this.#valor == "[object Object]"
        ? "0"
        : this.#valor?.slice(0, -1),
      this.#accumulador,
      this.#limparTela,
      this.#operacao
    );
  }

  operacaoDigitada(proximaOperacao: string) {
    if (this.#valor == "Operação inválida") {
      return new CalculadoraModel();
    }
    return this.calcular(proximaOperacao);
  }

  calcular(proximaOperacao: string = null) {
    const aviso = "Operação inválida";

    if (this.#valor == "Operação inválida") {
      return new CalculadoraModel();
    }

    if (this.#operacao === "/" && parseFloat(this.#valor) === 0) {
      return new CalculadoraModel(aviso, null, NAO_limparTela, null);
    }

    let acumulador = this.#accumulador;
    if (!this.#operacao) {
      acumulador = parseFloat(this.#valor);
    } else {
      switch (this.#operacao) {
        case "+":
          acumulador += parseFloat(this.#valor);
          break;
        case "-":
          acumulador -= parseFloat(this.#valor);
          break;
        case "*":
          acumulador *= parseFloat(this.#valor);
          break;
        case "/":
          if (parseFloat(this.#valor) === 0) {
            return new CalculadoraModel(
              "Operação inválida",
              null,
              LIMPA_TELA,
              null
            );
          }
          acumulador /= parseFloat(this.#valor);
          break;
        default:
          return new CalculadoraModel("0", null, NAO_limparTela, null);
      }
    }

    let valor = acumulador.toString();
    if (valor.length > 20) {
      valor = valor.substring(0, 20);
    }

    return new CalculadoraModel(
      !valor || valor === "NaN" || valor === "Infinity"
        ? "Operação inválida"
        : valor,
      acumulador,
      proximaOperacao ? LIMPA_TELA : NAO_limparTela,
      proximaOperacao
    );
  }
}
