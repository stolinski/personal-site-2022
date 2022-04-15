<script>
  import { fadeIn, fadeOut } from "../../components/Fade";
</script>

<div in:fadeIn out:fadeOut>
  <!-- {#each speaking as talk}
    <h1>{talk.title}</h1>

    <div class="content">
      {@html talk.html}
    </div>
  {/each} -->

  <iframe
    title="2fast"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/xK3BhwDRuL8"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen
  />

  <iframe
    title="some"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/L3UokgyCr4A"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen
  />

  <iframe
    title="yo"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/keynw6xAsqo"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen
  />

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/5o6bP9sX248"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen
  />

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/2sKfhEi72jg"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen
  />
</div>
