<script lang="ts">
  import Calculadora from "./components/Calculadora.svelte";
</script>

<main>
  <Calculadora />
</main>

<style>
  :global(body) {
    background: rgb(98, 106, 255);
    background: -moz-linear-gradient(
      245deg,
      rgba(98, 106, 255, 1) 0%,
      rgba(175, 215, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      245deg,
      rgba(98, 106, 255, 1) 0%,
      rgba(175, 215, 255, 1) 100%
    );
    background: linear-gradient(
      245deg,
      rgba(98, 106, 255, 1) 0%,
      rgba(175, 215, 255, 1) 100%
    );
    overflow: hidden;
    text-align: center;
    height: 100vh;
  }

  main {
    text-align: center;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
