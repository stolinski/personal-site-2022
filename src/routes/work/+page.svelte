<script>
  import { fadeIn, fadeOut } from "../../components/Fade";
  const projects = [
    {
      title: "Level Up Tutorials",
      link: "https://www.leveluptutorials.com/",
      desc: '2000+ Web Dev Tutorials on: <a target="_blank" href="https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg">Youtube</a><br />Built With: Meteor, React, Apollo, MongoDB',
    },
    {
      title: "Syntax",
      link: "https://syntax.fm/",
      desc: "A popular web-dev podcast hosted by Wes Bos & Scott Tolinski",
    },
    {
      title: "Ford.com Global UX",
      link: "http://www.ford.com/",
      desc: "Design Prototypes and Interactive Digital Styleguide for the Ford.com Global Redesign:<br />Built With: Angular.js, Sass",
    },
    {
      title: "Q LTD",
      link: "http://qltd.com/",
      desc: 'Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Node.js, Express, MongoDB, Sass/Compass/Susy',
    },
    {
      title: "ACM SIGGRAPH",
      link: "http://www.siggraph.org/",
      desc: 'Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Drupal 7, Omega 3, Sass/Compass',
    },
  ];
</script>

<div in:fadeIn out:fadeOut>
  <h1>My Work</h1>
  <p>Here is some stuff I've created or been a part of.</p>

  <ul>
    {#each projects as { title, desc, link }}
      <li key={title}>
        <h3 class="project-title">
          <a target="_blank" rel="noopener noreferrer" href={link}>{title}</a>
        </h3>
        <p>
          {@html desc}
        </p>
      </li>
    {/each}
  </ul>
</div>

<style>
  h3 {
    font-size: 2rem;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }
  li {
    margin-bottom: 3rem;
    gap: 30px;
  }
</style>
