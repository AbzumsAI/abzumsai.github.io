const filterButtons = document.querySelectorAll(".filter-button");
const repoCards = document.querySelectorAll(".repo-card");
const repoCount = document.querySelector(".repo-count");

function setFilter(filter) {
  let visibleCount = 0;

  repoCards.forEach((card) => {
    const shouldShow = filter === "all" || card.dataset.kind === filter;
    card.classList.toggle("hidden", !shouldShow);
    if (shouldShow) visibleCount += 1;
  });

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });

  repoCount.textContent = filter === "all"
    ? `Showing ${visibleCount} repos`
    : `Showing ${visibleCount} ${filter} repos`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

setFilter("all");
