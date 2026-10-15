/**
 * Vinit's Full Stack Development Portfolio - Interactive Controller
 */

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const filterChips = document.querySelectorAll(".filter-chip");
  const projectCards = document.querySelectorAll(".project-card");
  const visibleCounter = document.getElementById("visibleCounter");
  const noResultsBox = document.getElementById("noResultsBox");
  const resetSearchBtn = document.getElementById("resetSearchBtn");

  let activeCategory = "all";

  /**
   * Filters project cards based on search input and active category chip.
   */
  function filterProjects() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const title = card.querySelector(".card-title")?.textContent.toLowerCase() || "";
      const desc = card.querySelector(".card-description")?.textContent.toLowerCase() || "";
      const category = card.dataset.category?.toLowerCase() || "";
      
      // Also search through skill tags if available
      const skillTags = Array.from(card.querySelectorAll(".skill-tag"))
        .map((tag) => tag.textContent.toLowerCase())
        .join(" ");

      const matchesSearch =
        !searchTerm ||
        title.includes(searchTerm) ||
        desc.includes(searchTerm) ||
        category.includes(searchTerm) ||
        skillTags.includes(searchTerm);

      const matchesCategory =
        activeCategory === "all" || card.dataset.category === activeCategory;

      const shouldShow = matchesSearch && matchesCategory;

      if (shouldShow) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Update Counter Display
    if (visibleCounter) {
      visibleCounter.textContent = String(visibleCount).padStart(2, "0");
    }

    // Toggle Empty Results State
    if (noResultsBox) {
      noResultsBox.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  // Live Search Input Listener
  if (searchInput) {
    searchInput.addEventListener("input", filterProjects);
  }

  // Category Filter Chips Listeners
  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.category || "all";
      filterProjects();
    });
  });

  // Reset Button Listener
  if (resetSearchBtn) {
    resetSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      activeCategory = "all";
      filterChips.forEach((c) => {
        if (c.dataset.category === "all") c.classList.add("active");
        else c.classList.remove("active");
      });
      filterProjects();
      if (searchInput) searchInput.focus();
    });
  }

  // Keyboard Shortcuts (Ctrl/Cmd + K to focus search, Esc to reset)
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }

    if (e.key === "Escape" && document.activeElement === searchInput) {
      if (searchInput.value !== "") {
        searchInput.value = "";
        filterProjects();
      } else {
        searchInput.blur();
      }
    }
  });

  // Enable whole-card click navigation for intuitive interaction
  projectCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Don't trigger if user specifically clicked a link inside
      if (e.target.closest("a")) return;
      const launchLink = card.querySelector(".launch-btn");
      if (launchLink && launchLink.href) {
        window.location.href = launchLink.href;
      }
    });
    // Add visual pointer cursor to card
    card.style.cursor = "pointer";
  });

  // Initial Filter Pass
  filterProjects();
});
