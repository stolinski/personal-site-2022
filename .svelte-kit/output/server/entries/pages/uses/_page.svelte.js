import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let html;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ html } = data);
  return `<div class="${"content"}"><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END --></div>`;
});
export {
  Page as default
};
