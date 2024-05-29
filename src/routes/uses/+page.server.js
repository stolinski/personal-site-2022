export async function load() {
  let { attributes, html } = await import("$lib/content/uses.md");

  return {
    attributes,
    html,
  };
}
