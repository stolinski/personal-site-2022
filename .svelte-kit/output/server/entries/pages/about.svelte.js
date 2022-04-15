import { c as create_ssr_component, e as escape } from "../../chunks/index-51146efc.js";
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-4wodr{max-width:900px}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About Scott Tolinski</title>`, ""}`, ""}

<div class="${"wrapper svelte-4wodr"}"><h1>About Scott</h1>

  <iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/Q9eh2iJsjxE"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; encrypted-media; gyroscope;\n    picture-in-picture"}" allowfullscreen></iframe>

  <p>Hi, I&#39;m Scott Tolinski.</p>
  <p>I own and make video tutorials teaching web development for
    <a target="${"_blank"}" href="${"http://www.youtube.com/user/LevelUpTuts/featured"}">Level Up Tutorials,
    </a>
    releasing a new premium series every month.
  </p>
  <p>I also co-host
    <a target="${"_blank"}" href="${"http://syntax.fm"}">Syntax.fm</a>
    with
    <a target="${"_blank"}" href="${"https://wesbos.com/"}">Wes Bos.</a>
    Syntax is a popular, light hearted web development podcast that teaches full
    stack topics while staying fun.
  </p>
  <p>I enjoy${escape(" ")}
    <a target="${"_blank"}" href="${"http://youtu.be/Zcoj4Zfj6_k?t=1m34s"}">bboying</a>
    ${escape(" ")} also known as breakdancing, and have been dancing for over 15 years doing
    shows for professional NFL and NBA teams. I&#39;m inspired by a hot cup of green
    tea, excellent music, and Shaw Bros. kung fu movies.
  </p>
</div>`;
});
export { About as default };
