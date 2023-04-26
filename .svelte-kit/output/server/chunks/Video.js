import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
const Video_svelte_svelte_type_style_lang = "";
const css = {
  code: ".video_embed.svelte-to7ki4{color:var(--primary);display:block;border:1px solid var(--primary);padding:20px}iframe.svelte-to7ki4{box-shadow:0px 0px 15px black;width:100%}span.svelte-to7ki4{display:block}",
  map: null
};
const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { videoId } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.videoId === void 0 && $$bindings.videoId && videoId !== void 0)
    $$bindings.videoId(videoId);
  $$result.css.add(css);
  return `<div class="video_embed svelte-to7ki4"><iframe title="2fast" width="auto" height="315"${add_attribute("src", `https://www.youtube.com/embed/${videoId}`, 0)} frameborder="0" allow="accelerometer; encrypted-media; gyroscope;
    picture-in-picture" allowfullscreen class="svelte-to7ki4"></iframe>
  <span class="svelte-to7ki4">${escape(title)}</span>
</div>`;
});
export {
  Video as V
};
