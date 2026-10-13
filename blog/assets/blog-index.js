// Topic filter for the blog index. Without JavaScript the chips stay hidden
// and every post is shown.
(function () {
  const chips = Array.from(document.querySelectorAll(".filters .chip"));
  const posts = Array.from(document.querySelectorAll("[data-topics]"));
  const emptyNote = document.querySelector(".empty-note");

  function apply(topic) {
    let shown = 0;
    posts.forEach((post) => {
      const match = topic === "all" || post.dataset.topics.split(" ").includes(topic);
      post.hidden = !match;
      if (match) shown += 1;
    });
    // Equal tiles while filtering, so the grid has no gaps.
    document.querySelector(".bento").classList.toggle("is-filtered", topic !== "all");
    chips.forEach((chip) => chip.setAttribute("aria-pressed", String(chip.dataset.filter === topic)));
    emptyNote.hidden = shown > 0;
  }

  chips.forEach((chip) => chip.addEventListener("click", () => apply(chip.dataset.filter)));
})();
