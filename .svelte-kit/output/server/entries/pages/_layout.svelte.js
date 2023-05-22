import { g as getContext, c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'ul.svelte-1j1q658{list-style:none;padding:0;margin:0;display:flex;justify-content:space-around}li.svelte-1j1q658{font-size:1.2rem;margin:0}[aria-current="true"].svelte-1j1q658{position:relative;display:inline-block;opacity:0.5}[aria-current="true"].svelte-1j1q658::after{position:absolute;content:"";width:calc(100% - 1em);height:2px;background-color:var(--blue);display:block;bottom:-1px}a.svelte-1j1q658{text-decoration:none;padding:1em 0.5em;display:block}@media(min-width: 480px){ul.svelte-1j1q658{justify-content:flex-start}}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav><ul class="svelte-1j1q658"><li class="svelte-1j1q658"><a${add_attribute("aria-current", $page.url.pathname === "/", 0)} href="." class="svelte-1j1q658">home </a></li>
    <li class="svelte-1j1q658"><a${add_attribute("aria-current", $page.url.pathname.includes("about"), 0)} href="/about" class="svelte-1j1q658">about
      </a></li>
    <li class="svelte-1j1q658"><a${add_attribute("aria-current", $page.url.pathname.includes("speaking"), 0)} href="/speaking" class="svelte-1j1q658">speaking
      </a></li>

    <li class="svelte-1j1q658"><a${add_attribute("aria-current", $page.url.pathname.includes("work"), 0)} href="/work" class="svelte-1j1q658">work
      </a></li>

    <li class="svelte-1j1q658"><a${add_attribute("aria-current", $page.url.pathname.includes("uses"), 0)} href="/uses" class="svelte-1j1q658">uses
      </a></li></ul>
</nav>`;
});
const global = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{color:#fff;font-weight:normal;word-wrap:break-word;font-kerning:normal;font-feature-settings:"kern", "liga", "clig", "calt";background:#111;line-height:1.5;font-family:"Space Mono", monospace}p > a{background:var(--blue)}main.svelte-1rdayfr{padding:2rem 2rem 0;display:grid}.theme.svelte-1rdayfr{--yellow:#f1c40f;--black:#111;--bg:var(--black);--primary:var(--yellow)}.theme.rad{--primary:#a8fe39}.theme.lut{--primary:#82d8d8}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="theme svelte-1rdayfr">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

  <main class="svelte-1rdayfr">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
