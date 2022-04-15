import { g as getContext, c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/index-51146efc.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'ul.svelte-15fl6vt{list-style:none;padding:0;margin:0;display:flex}li.svelte-15fl6vt{font-size:0.7rem;margin:0}[aria-current="true"].svelte-15fl6vt{position:relative;display:inline-block;opacity:0.5}[aria-current="true"].svelte-15fl6vt::after{position:absolute;content:"";width:calc(100% - 1em);height:2px;background-color:var(--blue);display:block;bottom:-1px}a.svelte-15fl6vt{text-decoration:none;padding:1em 0.5em;display:block}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav><ul class="${"svelte-15fl6vt"}"><li class="${"svelte-15fl6vt"}"><a${add_attribute("aria-current", $page.url.pathname === "/", 0)} href="${"."}" class="${"svelte-15fl6vt"}">home </a></li>
    <li class="${"svelte-15fl6vt"}"><a${add_attribute("aria-current", $page.url.pathname.includes("about"), 0)} href="${"/about"}" class="${"svelte-15fl6vt"}">about
      </a></li>
    <li class="${"svelte-15fl6vt"}"><a${add_attribute("aria-current", $page.url.pathname.includes("speaking"), 0)} href="${"/speaking"}" class="${"svelte-15fl6vt"}">speaking
      </a></li>

    <li class="${"svelte-15fl6vt"}"><a${add_attribute("aria-current", $page.url.pathname.includes("work"), 0)} href="${"/work"}" class="${"svelte-15fl6vt"}">work
      </a></li>

    <li class="${"svelte-15fl6vt"}"><a${add_attribute("aria-current", $page.url.pathname.includes("uses"), 0)} href="${"/uses"}" class="${"svelte-15fl6vt"}">uses
      </a></li></ul>
</nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{color:#fff;font-weight:normal;word-wrap:break-word;font-kerning:normal;-moz-font-feature-settings:"kern", "liga", "clig", "calt";-ms-font-feature-settings:"kern", "liga", "clig", "calt";-webkit-font-feature-settings:"kern", "liga", "clig", "calt";font-feature-settings:"kern", "liga", "clig", "calt";background:#111;line-height:1.5;font-family:"Space Mono", monospace}p > a{background:var(--blue)}main.svelte-l5omue{padding:4rem 2rem}',
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

<main class="${"svelte-l5omue"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export { _layout as default };
