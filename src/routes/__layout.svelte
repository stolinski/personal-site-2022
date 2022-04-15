<script>
  import Nav from "$lib/Nav.svelte";
</script>

<Nav />

<main>
  <slot />
</main>

<style>
  :global(body) {
    color: #fff;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    background: #111;
    line-height: 1.5;
    font-family: "Space Mono", monospace;
  }

  :global(p > a) {
    background: var(--blue);
  }

  main {
    padding: 4rem 2rem;
  }
</style>
