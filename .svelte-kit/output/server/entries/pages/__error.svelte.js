import { c as create_ssr_component, e as escape } from "../../chunks/index-51146efc.js";
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-17w3omn,p.svelte-17w3omn{margin:0 auto}h1.svelte-17w3omn{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-17w3omn{margin:1em auto}@media(min-width: 480px){h1.svelte-17w3omn{font-size:4em}}",
  map: null
};
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  console.log("status", status);
  let { error } = $$props;
  console.log("error", error);
  const dev = process.env.NODE_ENV === "development";
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(status)}</title>`, ""}`, ""}

<h1 class="${"svelte-17w3omn"}">${escape(status)}</h1>

<p class="${"svelte-17w3omn"}">${escape(error?.message)}</p>

${dev && error?.stack ? `<pre>${escape(error?.stack)}</pre>` : ``}`;
});
export { _error as default };
