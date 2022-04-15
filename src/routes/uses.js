export async function get() {
  let { attributes, html } = await import("../lib/content/uses.md");
  return {
    body: {
      attributes,
      html,
    },
  };
}
