<script lang="ts">
    export let texto: string = ' ';
    export let duplo: boolean = false;
    export let triplo: boolean = false;
    export let destacado: boolean = false;
    export let principal: boolean = false;
    export let vermelho: boolean = false;
    export let OnClick: (valor: string) => void = () => {};
</script>

<button 
class="botao" 
class:triplo 
class:duplo 
class:destacado 
class:principal
class:vermelho
on:click={() => OnClick(texto)}
>
    {texto}
</button>

<style>
    .botao {
        background-color: rgba(255, 255, 255, 0.5);
        color: rgb(0, 46, 253);
        flex-basis: 25%;
        border-radius: 10px;
        font-weight: bold;
        cursor: pointer;
        margin: 4px;
        box-shadow: 1px 1px 1px rgba(0, 46, 253);
        font-size: medium;
        border: none;
    }

    .triplo {
        flex-basis: 75%;
    }

    .duplo {
        flex-basis: 50%;
    }

    .destacado {
        background-color: rgb(95, 154, 255);
        color: rgb(255, 255, 255);
        font-size: large;
    }
    
    .principal {
        background-color: rgba(0, 54, 250, 0.8);
        color: rgb(255, 255, 255);
        font-size: large;
    }

    .vermelho{
        background-color: rgba(255, 14, 14, 0.613);
        box-shadow: 1px 1px 1px rgba(0, 46, 253);
    }

</style>