<script>
  export let title;
  export let videoId;
</script>

<div class="video_embed">
  <iframe
    title="2fast"
    width="auto"
    height="315"
    src={`https://www.youtube.com/embed/${videoId}`}
    frameborder="0"
    allow="accelerometer; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen
  />
  <span>{title}</span>
</div>

<style>
  .video_embed {
    color: var(--primary);
    display: block;
    border: 1px solid var(--primary);
    padding: 20px;
  }
  iframe {
    box-shadow: 0px 0px 15px black;
    width: 100%;
  }

  span {
    display: block;
  }
</style>
