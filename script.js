const filterButtons = document.querySelectorAll(".filter-button");
const repoCards = document.querySelectorAll(".repo-card");
const repoCount = document.querySelector(".repo-count");
const repoSearch = document.querySelector("#repo-search");
const emptyState = document.querySelector(".empty-state");
let activeFilter = "all";

function updateRepos() {
  if (!repoSearch || !repoCount || !emptyState) return;

  const searchText = repoSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  repoCards.forEach((card) => {
    const matchesFilter = activeFilter === "all" || card.dataset.kind === activeFilter;
    const matchesSearch = card.textContent.toLowerCase().includes(searchText);
    const shouldShow = matchesFilter && matchesSearch;
    card.classList.toggle("hidden", !shouldShow);
    if (shouldShow) visibleCount += 1;
  });

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const filterLabel = activeFilter === "all" ? "repos" : `${activeFilter} repos`;
  repoCount.textContent = `Showing ${visibleCount} ${filterLabel}`;
  emptyState.hidden = visibleCount > 0;
}

function setFilter(filter) {
  activeFilter = filter;
  updateRepos();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

if (repoSearch) {
  repoSearch.addEventListener("input", updateRepos);
}

updateRepos();
