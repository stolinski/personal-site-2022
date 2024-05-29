<script>
  import { fadeIn, fadeOut } from "../components/Fade";
</script>

<svelte:head>
  <title>Scott Tolinski - Level Up Tutorials & Syntax - Web Developer</title>
</svelte:head>

<div in:fadeIn out:fadeOut>
  <div class="container">
    <h1>Scott Tolinski</h1>

    <ul>
      <li>
        <a rel="noreferrer" href="https://levelup.video" target="_blank"
          >Level Up Tutorials</a
        >
      </li>
      <li>
        <a
          rel="noreferrer"
          href="https://youtube.com/leveluptuts"
          target="_blank">Youtube</a
        >
      </li>
      <li>
        <a rel="noreferrer" href="https://syntax.fm/" target="_blank"
          >Syntax Podcast</a
        >
      </li>
      <li>
        <a
          rel="noreferrer"
          href="https://www.tiktok.com/@leveluptuts"
          target="_blank">TikTok</a
        >
      </li>
      <li>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/leveluptutorials/"
          target="_blank"
        >
          Instagram
        </a>
      </li>
      <li>
        <a rel="noreferrer" href="https://twitter.com/stolinski" target="_blank"
          >Twitter</a
        >
      </li>
    </ul>

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
    font-size: 4rem;
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

  ul {
    list-style: none;
    margin: 1rem 0 2rem;
    padding: 0;
    display: flex;
    gap: 10px 20px;
    flex-wrap: wrap;
  }

  li {
    margin: 0;
  }

  ul a {
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .container {
    padding: 20px;
    background: var(--primary);
    margin: 0 -30px;
    transition: all 0.3s ease;
  }

  @media (min-width: 480px) {
    .container {
      transform: rotate(-2deg);
      padding: 40px;
      max-width: 1000px;
      margin: 0 auto;
    }
  }
</style>
