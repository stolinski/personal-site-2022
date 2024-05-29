<script>
  import { fadeIn, fadeOut } from "../../components/Fade";
  import Video from "./Video.svelte";
</script>

<div class="content" in:fadeIn out:fadeOut>
  <h1>Speaking & Appearances</h1>
  <a
    target="_blank"
    rel="noreferrer"
    href="https://devjourney.info/Guests/116-ScottTolinski"
    >Dev Journey Podcast ⤴
  </a>

  <Video title="Fast & Furious Learning" videoId="xK3BhwDRuL8" />
  <Video title="Syntax Live" videoId="L3UokgyCr4A" />
  <Video title="Syntax Live at Reactathon" videoId="keynw6xAsqo" />
  <Video title="Reactive Online Meetup" videoId="5o6bP9sX248" />
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  a {
    color: var(--primary);
    display: block;
    border: 1px solid var(--primary);
    padding: 20px;
  }
</style>
