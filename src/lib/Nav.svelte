<script>
  import { page } from "$app/stores";
</script>

<nav>
  <ul>
    <li>
      <a aria-current={$page.url.pathname === "/"} href="."> home </a>
    </li>
    <li>
      <a aria-current={$page.url.pathname.includes("about")} href="/about">
        about
      </a>
    </li>
    <li>
      <a
        aria-current={$page.url.pathname.includes("speaking")}
        href="/speaking"
      >
        speaking
      </a>
    </li>

    <li>
      <a aria-current={$page.url.pathname.includes("work")} href="/work">
        work
      </a>
    </li>

    <li>
      <a aria-current={$page.url.pathname.includes("uses")} href="/uses">
        uses
      </a>
    </li>
  </ul>
</nav>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    font-size: 0.7rem;
    margin: 0;
  }

  [aria-current="true"] {
    position: relative;
    display: inline-block;
    opacity: 0.5;
  }

  [aria-current="true"]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: var(--blue);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
