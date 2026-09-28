<script lang="ts">
  import Calculadora from "./components/Calculadora.svelte";
</script>

<main>
  <Calculadora />
  <div class="area">
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css?family=Exo:400,600,700");
  :global(*){box-sizing:border-box}
  :global(html),:global(body){margin:0;min-width:320px;min-height:100%;font-family:Exo,system-ui,sans-serif}
  :global(body){min-height:100dvh;overflow:hidden;background:#090d1d}
  main{position:relative;isolation:isolate;width:100vw;min-height:100dvh;display:flex;align-items:center;justify-content:center;padding:clamp(16px,4vw,48px);overflow:hidden}
  main>:global(:not(.area)){position:relative;z-index:2;max-width:100%}
  .area{position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at 20% 20%,#7078ff 0,transparent 34%),linear-gradient(145deg,#171d4b,#4e54c8 55%,#20265c)}
  .circles{position:absolute;inset:0;margin:0;padding:0;overflow:hidden}
  .circles li{position:absolute;display:block;list-style:none;width:20px;height:20px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.16);animation:animate 18s linear infinite;bottom:-160px;border-radius:24%}
  .circles li:nth-child(1){left:25%;width:80px;height:80px}.circles li:nth-child(2){left:10%;animation-delay:2s;animation-duration:12s}.circles li:nth-child(3){left:70%;animation-delay:4s}.circles li:nth-child(4){left:40%;width:60px;height:60px;animation-duration:15s}.circles li:nth-child(5){left:65%}.circles li:nth-child(6){left:75%;width:110px;height:110px;animation-delay:3s}.circles li:nth-child(7){left:35%;width:140px;height:140px;animation-delay:7s}.circles li:nth-child(8){left:50%;width:25px;height:25px;animation-delay:8s}.circles li:nth-child(9){left:20%;width:15px;height:15px;animation-delay:2s}.circles li:nth-child(10){left:85%;width:120px;height:120px;animation-duration:10s}
  @keyframes animate{0%{transform:translateY(0) rotate(0);opacity:.9}100%{transform:translateY(-115vh) rotate(540deg);opacity:0;border-radius:50%}}
  @media(max-width:520px){main{padding:12px}.circles li:nth-child(7),.circles li:nth-child(10){width:80px;height:80px}}
  @media(prefers-reduced-motion:reduce){.circles li{animation:none}}
</style>
