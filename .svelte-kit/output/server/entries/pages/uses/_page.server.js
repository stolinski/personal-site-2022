async function load() {
  let { attributes, html } = await import("../../../chunks/uses.js");
  return {
    attributes,
    html
  };
}
export {
  load
};
