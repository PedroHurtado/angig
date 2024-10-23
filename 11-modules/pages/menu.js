!(function menu() {
  document.addEventListener("click", async (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
    try {
      const node = ev
        .composedPath()
        .find((n) => n.dataset && "page" in n.dataset);
      if (node) {
        //const { page } = node.dataset;
        const page  = node.dataset.page;

        const module = await import(`./${page}`);
        module.default();
      }
    } catch (err) {
      console.log(err);
    }
  });
})();
