<script>
  import Nav from "$lib/Nav.svelte";
  import "./global.css";
</script>

<div class="theme">
  <Nav />

  <main>
    <slot />
  </main>
</div>

<style>
  :global(body) {
    color: #fff;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    background: #111;
    line-height: 1.5;
    font-family: "Space Mono", monospace;
  }

  :global(p > a) {
    background: var(--blue);
  }

  main {
    padding: 2rem 2rem 0;
    display: grid;
  }

  .theme {
    --yellow: #f1c40f;
    --black: #111;
    --bg: var(--black);
    --primary: var(--yellow);
  }

  :global(.theme.rad) {
    --primary: #a8fe39;
  }

  :global(.theme.lut) {
    --primary: #82d8d8;
  }
</style>
