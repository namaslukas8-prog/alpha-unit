(() => {
  const input = document.getElementById("searchInput");
  const topics = Array.from(document.querySelectorAll(".topic"));
  if (!input) return;

  const normalise = (s) => (s || "").toLowerCase().trim();

  function filter(){
    const q = normalise(input.value);
    topics.forEach(card => {
      const text = normalise(card.innerText);
      const keys = normalise(card.getAttribute("data-keywords"));
      const match = !q || text.includes(q) || keys.includes(q);
      card.style.display = match ? "" : "none";
    });
  }

  input.addEventListener("input", filter);
  filter();
})();
