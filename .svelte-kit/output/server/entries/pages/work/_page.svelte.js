import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-u1bkgf{font-size:2rem}ul.svelte-u1bkgf{padding:0;margin:0;list-style:none;display:flex;flex-direction:column;margin-top:60px}li.svelte-u1bkgf{margin-bottom:3rem;gap:30px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = [
    {
      title: "Level Up Tutorials",
      link: "https://www.leveluptutorials.com/",
      desc: '2000+ Web Dev Tutorials on: <a target="_blank" href="https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg">Youtube</a><br />Built With: Meteor, React, Apollo, MongoDB'
    },
    {
      title: "Syntax",
      link: "https://syntax.fm/",
      desc: "A popular web-dev podcast hosted by Wes Bos & Scott Tolinski"
    },
    {
      title: "Ford.com Global UX",
      link: "http://www.ford.com/",
      desc: "Design Prototypes and Interactive Digital Styleguide for the Ford.com Global Redesign:<br />Built With: Angular.js, Sass"
    },
    {
      title: "Q LTD",
      link: "http://qltd.com/",
      desc: 'Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Node.js, Express, MongoDB, Sass/Compass/Susy'
    },
    {
      title: "ACM SIGGRAPH",
      link: "http://www.siggraph.org/",
      desc: 'Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Drupal 7, Omega 3, Sass/Compass'
    }
  ];
  $$result.css.add(css);
  return `<div><h1>My Work</h1>
  <p>Here is some stuff I&#39;ve created or been a part of.</p>

  <ul class="svelte-u1bkgf">${each(projects, ({ title, desc, link }) => {
    return `<li${add_attribute("key", title, 0)} class="svelte-u1bkgf"><h3 class="project-title svelte-u1bkgf"><a target="_blank" rel="noopener noreferrer"${add_attribute("href", link, 0)}>${escape(title)}</a></h3>
        <p><!-- HTML_TAG_START -->${desc}<!-- HTML_TAG_END --></p>
      </li>`;
  })}</ul>
</div>`;
});
export {
  Page as default
};
