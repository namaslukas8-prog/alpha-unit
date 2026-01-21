(() => {
  const hcBtn = document.getElementById("btnHC");
  const incBtn = document.getElementById("btnInc");
  const decBtn = document.getElementById("btnDec");

  const load = () => {
    const hc = localStorage.getItem("alpha_hc") === "1";
    const fs = localStorage.getItem("alpha_fs") || "1";
    document.body.classList.toggle("hc", hc);
    document.body.classList.remove("fs-1","fs-2","fs-3");
    document.body.classList.add(`fs-${fs}`);
  };

  const saveHC = (val) => localStorage.setItem("alpha_hc", val ? "1" : "0");
  const saveFS = (val) => localStorage.setItem("alpha_fs", String(val));

  hcBtn?.addEventListener("click", () => {
    const now = !document.body.classList.contains("hc");
    document.body.classList.toggle("hc", now);
    saveHC(now);
  });

  incBtn?.addEventListener("click", () => {
    const cur = Number((localStorage.getItem("alpha_fs") || "1"));
    const next = Math.min(3, cur + 1);
    saveFS(next);
    load();
  });

  decBtn?.addEventListener("click", () => {
    const cur = Number((localStorage.getItem("alpha_fs") || "1"));
    const next = Math.max(1, cur - 1);
    saveFS(next);
    load();
  });

  load();
})();
