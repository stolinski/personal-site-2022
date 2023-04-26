import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
import { V as Video } from "../../../chunks/Video.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1e0smhv{max-width:900px}.space.svelte-1e0smhv{padding:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-12nkp9w_START -->${$$result.title = `<title>About Scott Tolinski</title>`, ""}<!-- HEAD_svelte-12nkp9w_END -->`, ""}

<div class="wrapper svelte-1e0smhv"><h1>About Scott</h1>

  ${validate_component(Video, "Video").$$render(
    $$result,
    {
      title: "Scott Tolinski and the Origins of LevelUpTuts",
      videoId: "Q9eh2iJsjxE"
    },
    {},
    {}
  )}
  <div class="space svelte-1e0smhv"></div>
  <p>I own and make video tutorials teaching web development for
    <a target="_blank" href="http://www.youtube.com/user/LevelUpTuts/featured">Level Up Tutorials,
    </a>
    releasing a new premium series every month.
  </p>
  <p>I also co-host
    <a target="_blank" href="http://syntax.fm">Syntax.fm</a>
    with
    <a target="_blank" href="https://wesbos.com/">Wes Bos.</a>
    Syntax is a popular, light hearted web development podcast that teaches full
    stack topics while staying fun.
  </p>
  <p>I enjoy${escape(" ")}
    <a target="_blank" href="http://youtu.be/Zcoj4Zfj6_k?t=1m34s">breaking</a>
    ${escape(" ")} also known as breakdancing, and have been dancing for over 15 years doing
    shows for professional NFL and NBA teams. I&#39;m inspired by a hot cup of green
    tea, excellent music, and Shaw Bros. kung fu movies.
  </p>
</div>`;
});
export {
  Page as default
};
