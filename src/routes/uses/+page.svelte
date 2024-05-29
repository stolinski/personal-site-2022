<script>
  import { fadeIn, fadeOut } from "../../components/Fade";
  export let data;
  $: ({ html } = data);
</script>

<div class="content" in:fadeIn out:fadeOut>
  {@html html}
</div>
