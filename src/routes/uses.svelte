<script>
  import { fadeIn, fadeOut } from "../components/Fade";
  export let html;
</script>

<div class="content" in:fadeIn out:fadeOut>
  {@html html}
</div>
