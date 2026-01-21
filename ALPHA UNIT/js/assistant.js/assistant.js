(() => {
  // Goat Assistant
  const fab = document.getElementById("goatFab");
  const panel = document.getElementById("goatPanel");
  const closeBtn = document.getElementById("closeGoat");
  const input = document.getElementById("goatInput");
  const chat = document.getElementById("goatChat");

  if (!panel || !chat) return;

  const openPanel = () => {
    panel.classList.add("open");
    setTimeout(() => input?.focus(), 100);
  };

  const closePanel = () => {
    panel.classList.remove("open");
  };

  fab?.addEventListener("click", () => {
    panel.classList.contains("open") ? closePanel() : openPanel();
  });

  closeBtn?.addEventListener("click", closePanel);

  const botSay = (html) => {
    const div = document.createElement("div");
    div.className = "msg bot";
    div.innerHTML = html;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
  };

  const userSay = (text) => {
    const div = document.createElement("div");
    div.className = "msg user";
    div.textContent = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
  };

  const reply = (qRaw) => {
    const q = (qRaw || "").toLowerCase().trim();
    const goHelp = `If this feels urgent, open <a href="assistance.html">Assistance</a>.`;
    const goLearn = `Use <a href="learn.html">Learn</a> for more topics.`;

    if (!q) return botSay(`Ask me about phishing, passwords, MFA, scams, Wi-Fi, or being hacked. ${goLearn}`);

    if (q.includes("phish") || q.includes("email") || q.includes("link")) {
      return botSay(`
        <strong>Phishing  quick check:</strong>
        <ul class="list">
          <li>Check the sender domain carefully.</li>
          <li>Urgency ("act now") is a red flag.</li>
          <li>Don't click links  type the official website yourself.</li>
        </ul>
        ${goHelp}
      `);
    }

    if (q.includes("password")) {
      return botSay(`
        <strong>Passwords:</strong>
        <ul class="list">
          <li>Use long passphrases (1216+ characters).</li>
          <li>Never reuse passwords across sites.</li>
          <li>Consider a password manager.</li>
        </ul>
        ${goLearn}
      `);
    }

    if (q.includes("mfa") || q.includes("2fa") || q.includes("authenticator")) {
      return botSay(`
        <strong>MFA / 2FA:</strong>
        <ul class="list">
          <li>Turn on MFA for your email first.</li>
          <li>Authenticator apps are usually stronger than SMS.</li>
          <li>Store backup codes safely (offline).</li>
        </ul>
      `);
    }

    if (q.includes("hacked") || q.includes("compromise") || q.includes("account")) {
      return botSay(`
        <strong>If you think you''re hacked:</strong>
        <ol class="list">
          <li>Change your email password first.</li>
          <li>Enable MFA.</li>
          <li>Sign out of all sessions/devices.</li>
          <li>Check recovery options + recent logins.</li>
        </ol>
        ${goHelp}
      `);
    }

    if (q.includes("clicked") || q.includes("attachment") || q.includes("download")) {
      return botSay(`
        <strong>If you clicked/opened something suspicious:</strong>
        <ul class="list">
          <li>Close it and don''t enter details.</li>
          <li>Run a full antivirus scan.</li>
          <li>Update your device.</li>
          <li>Change passwords + enable MFA (starting with email).</li>
        </ul>
        ${goHelp}
      `);
    }

    return botSay(`
      I can help with phishing, passwords, MFA, scams, Wi-Fi, and "what to do if hacked".
      <br/><br/>
      ${goLearn} | <a href="resources.html">Trusted Resources</a>
    `);
  };

  // Initialize with welcome message
  if (!chat.dataset.welcomed) {
    chat.dataset.welcomed = "1";
    botSay(`Hi! I'm Goat Assistant AI 🐐 Ask me about phishing, passwords, MFA, scams, Wi-Fi safety, or what to do if you're hacked.`);
  }

  const sendMessage = () => {
    const text = input.value.trim();
    if (!text) return;
    userSay(text);
    input.value = "";
    reply(text);
  };

  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
})();
