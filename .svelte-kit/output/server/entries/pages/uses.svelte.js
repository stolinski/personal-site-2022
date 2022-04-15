import { c as create_ssr_component } from "../../chunks/index-51146efc.js";
const Uses = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { html } = $$props;
  if ($$props.html === void 0 && $$bindings.html && html !== void 0)
    $$bindings.html(html);
  return `<div class="${"content"}"><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END --></div>`;
});
export { Uses as default };
