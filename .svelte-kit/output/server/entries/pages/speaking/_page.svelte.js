import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { V as Video } from "../../../chunks/Video.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-1s0qyd9{display:flex;flex-direction:column;gap:20px}a.svelte-1s0qyd9{color:var(--primary);display:block;border:1px solid var(--primary);padding:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content svelte-1s0qyd9"><h1>Speaking &amp; Appearances</h1>
  <a target="_blank" rel="noreferrer" href="https://devjourney.info/Guests/116-ScottTolinski" class="svelte-1s0qyd9">Dev Journey Podcast ⤴
  </a>

  ${validate_component(Video, "Video").$$render(
    $$result,
    {
      title: "Fast & Furious Learning",
      videoId: "xK3BhwDRuL8"
    },
    {},
    {}
  )}
  ${validate_component(Video, "Video").$$render(
    $$result,
    {
      title: "Syntax Live",
      videoId: "L3UokgyCr4A"
    },
    {},
    {}
  )}
  ${validate_component(Video, "Video").$$render(
    $$result,
    {
      title: "Syntax Live at Reactathon",
      videoId: "keynw6xAsqo"
    },
    {},
    {}
  )}
  ${validate_component(Video, "Video").$$render(
    $$result,
    {
      title: "Reactive Online Meetup",
      videoId: "5o6bP9sX248"
    },
    {},
    {}
  )}
</div>`;
});
export {
  Page as default
};
