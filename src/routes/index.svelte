<script>
  import { fadeIn, fadeOut } from "../components/Fade";
</script>

<svelte:head>
  <title>Scott Tolinski - Level Up Tutorials & Syntax - Web Developer</title>
</svelte:head>

<div in:fadeIn out:fadeOut>
  <div class="container">
    <h1>Scott Tolinski</h1>

    <h3>
      Web Developer | Creator of Level Up Tutorials | Co-host of Syntax.fm |
      Father of 2 | Bboy | Robotops Crew | Youtuber | Tea Drinker | Tutorial
      Maker | Fan of physical activity | Former Music Major | Denverite |
      Michigander | Shaw Brothers Kung Fu Film Watcher | Handstander |
      Stretching enthusiast
    </h3>
  </div>
</div>

<style>
  h1 {
    font-size: 5rem;
    color: black;
    font-style: italic;
    display: inline-block;
    font-weight: 900;
  }
  h3 {
    color: black;
    font-size: 2rem;
    line-height: 1.4;
  }

  .container {
    transform: rotate(-2deg);
    padding: 60px;
    background: #f1c40f;
  }
</style>
