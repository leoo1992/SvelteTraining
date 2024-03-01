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
    if (isNaN(parseFloat(this.#valor)) || !isFinite(parseFloat(this.#valor))) {
      this.limparValores();
    }

    return this.#valor?.replace(".", ",") || "0";
  }

  numeroDigitado(novoValor: string) {
    if (this.#valor.length === 1 && this.#valor === "0" || this.#valor ==='Operação inválida' ) {
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
    return new CalculadoraModel(
      this.#valor === "Operação inválida" ? "0" : this.#valor?.slice(0, -1),
      this.#accumulador,
      this.#limparTela,
      this.#operacao
    );
  }

  operacaoDigitada(proximaOperacao: string) {
    return this.calcular(proximaOperacao);
  }

  calcular(proximaOperacao: string = null) {
    const acumulador = !this.#operacao
      ? parseFloat(this.#valor)
      : eval(` ${this.#accumulador} ${this.#operacao} ${this.#valor}`);

    const valor = !this.#operacao ? this.#valor : `${acumulador}`;

    return new CalculadoraModel(
      !valor || valor === "NaN" || valor === "Infinity"
        ? "Operação inválida"
        : valor,
      acumulador,
      proximaOperacao ? LIMPA_TELA : NAO_limparTela,
      proximaOperacao
    );
  }
}
