(() => {
  const questions = [
    {
      q: "Which is a common phishing red flag?",
      choices: ["A message asking you to verify your account urgently", "A friend sending you a normal photo", "A website showing a padlock icon only"],
      answer: 0,
      explain: "Urgency + requests for verification/login details are common phishing tactics."
    },
    {
      q: "What is the best practice for passwords?",
      choices: ["Reuse the same strong password everywhere", "Use a long unique passphrase for each site", "Write passwords on a sticky note on your monitor"],
      answer: 1,
      explain: "Unique long passphrases reduce the impact of breaches."
    },
    {
      q: "What does MFA (Multi-Factor Authentication) do?",
      choices: ["Makes your password shorter", "Adds another verification step beyond just a password", "Stops all viruses automatically"],
      answer: 1,
      explain: "MFA makes it harder for attackers even if they know your password."
    },
    {
      q: "You receive an unexpected attachment from a company. What should you do first?",
      choices: ["Open it quickly to see what it is", "Verify the sender using a trusted method before opening", "Forward it to everyone to ask if they got it"],
      answer: 1,
      explain: "Verify using official contact details or your known channel."
    },
    {
      q: "Public Wi-Fi is risky mainly because:",
      choices: ["It always installs malware automatically", "Attackers may intercept traffic or fake hotspots", "It makes your phone battery drain"],
      answer: 1,
      explain: "Untrusted networks can be monitored or spoofed."
    },
    {
      q: "Which is a safer MFA method (when available)?",
      choices: ["Authenticator app", "SMS code only", "No MFA"],
      answer: 0,
      explain: "Authenticator apps are generally stronger than SMS-based codes."
    },
    {
      q: "If you clicked a suspicious link, a good first step is:",
      choices: ["Do nothing and hope for the best", "Change passwords and enable MFA (starting with email)", "Post your details online to ask for help"],
      answer: 1,
      explain: "Secure your email first because it resets other accounts."
    },
    {
      q: "Why are updates important?",
      choices: ["They add new emojis", "They fix security vulnerabilities used by attackers", "They always make your device slower"],
      answer: 1,
      explain: "Patch updates close known security holes."
    },
    {
      q: "What should you do if you receive a suspicious email claiming to be from your bank?",
      choices: ["Click the link provided to verify your account", "Contact your bank directly using their official phone number", "Reply with your account details"],
      answer: 1,
      explain: "Never click links in suspicious emails. Always contact the company directly."
    },
    {
      q: "How often should you change your passwords?",
      choices: ["Every day", "Only when using a new device", "After a breach is discovered or if suspected compromise"],
      answer: 2,
      explain: "Regular changes aren't necessary, but change immediately after any sign of compromise."
    },
    {
      q: "What is the minimum password length recommended for strong security?",
      choices: ["6 characters", "12+ characters", "8 characters"],
      answer: 1,
      explain: "Longer passwords are significantly harder to crack."
    },
    {
      q: "Which of these is NOT a phishing tactic?",
      choices: ["Creating urgency with time pressure", "Asking for personal information", "Sending a message with proper grammar and correct branding"],
      answer: 2,
      explain: "Professional formatting alone doesn't mean it's legitimate, but poor grammar is often a sign."
    },
    {
      q: "What does VPN stand for?",
      choices: ["Virtual Private Network", "Very Personal News", "Verified Password Notification"],
      answer: 0,
      explain: "A VPN encrypts your internet connection and hides your IP address."
    },
    {
      q: "Which of these is a sign of a secure website?",
      choices: ["A padlock icon in the address bar", "The word 'secure' in the title", "Bright colors"],
      answer: 0,
      explain: "The padlock indicates an HTTPS connection, not that the site itself is trustworthy."
    },
    {
      q: "What should you do if you spot a phishing email?",
      choices: ["Delete it and move on", "Report it to your email provider", "Forward it to all your contacts"],
      answer: 1,
      explain: "Reporting helps protect others and improves email filters."
    },
    {
      q: "Which password is strongest?",
      choices: ["Password123", "MyDog2023", "BlueMoon#Sunshine47!Cat"],
      answer: 2,
      explain: "Longer, mixed-character passphrases are harder to crack than short passwords with predictable patterns."
    },
    {
      q: "What is a backup code used for in 2FA?",
      choices: ["To speed up login", "To access your account if you lose your authenticator device", "To replace your password"],
      answer: 1,
      explain: "Backup codes are emergency access methods stored separately from your authenticator."
    },
    {
      q: "Which social engineering tactic tries to build trust before asking for information?",
      choices: ["Phishing", "Pretexting", "Malware"],
      answer: 1,
      explain: "Pretexting creates a false scenario to build rapport before the attack."
    },
    {
      q: "What is ransomware?",
      choices: ["A type of spam email", "Malware that encrypts your files and demands payment to restore them", "A security feature on Windows"],
      answer: 1,
      explain: "Ransomware is a serious threat that requires backups and incident response."
    },
    {
      q: "How can you protect yourself from ransomware?",
      choices: ["By paying the ransom immediately", "By keeping regular offline backups", "By clicking suspicious links carefully"],
      answer: 1,
      explain: "Offline backups are your best defense against ransomware attacks."
    },
    {
      q: "What should you do on a public computer?",
      choices: ["Log into your email and accounts", "Avoid entering sensitive information or use a VPN", "Enable autofill for passwords"],
      answer: 1,
      explain: "Public computers may have malware or keyloggers."
    },
    {
      q: "Which statement about passwords is true?",
      choices: ["Writing them down is always bad", "A password manager is safer than writing them down", "Memorizing all passwords is most secure"],
      answer: 1,
      explain: "A password manager encrypts passwords; written notes are vulnerable to theft."
    },
    {
      q: "What is credential stuffing?",
      choices: ["Using too many passwords", "Using leaked username/password combinations on multiple sites", "Creating strong passwords"],
      answer: 1,
      explain: "This is why unique passwords per site are critical."
    },
    {
      q: "How should you handle a suspicious phone call claiming to be from your bank?",
      choices: ["Provide your account details", "Hang up and call your bank directly", "Give your PIN code"],
      answer: 1,
      explain: "Never provide details over unsolicited calls. Always call the company directly."
    },
    {
      q: "What is a zero-day vulnerability?",
      choices: ["A password that hasn't been used", "An unknown security flaw that hackers exploit before a patch", "A failed login attempt"],
      answer: 1,
      explain: "Zero-day exploits are particularly dangerous because there's no patch yet."
    },
    {
      q: "Which is the best response to a data breach notification?",
      choices: ["Ignore it as it's likely spam", "Change your password and monitor your accounts", "Pay a fee to 'restore' your data"],
      answer: 1,
      explain: "Legitimate companies won't ask for payment to fix breaches."
    },
    {
      q: "What does the 'https' in a URL mean?",
      choices: ["The website doesn't store data", "The connection is encrypted (HyperText Transfer Protocol Secure)", "The website is free"],
      answer: 1,
      explain: "HTTPS encrypts data between you and the website, but doesn't guarantee legitimacy."
    },
    {
      q: "Why should you enable backup authentication methods?",
      choices: ["To create more passwords to remember", "In case you lose access to your primary 2FA method", "To make logging in faster"],
      answer: 1,
      explain: "Backup methods prevent you from being locked out of your account."
    },
    {
      q: "What is the most common way accounts are compromised?",
      choices: ["Hacking through firewalls", "Weak or reused passwords", "Aliens stealing data"],
      answer: 1,
      explain: "Human error and weak passwords are the leading causes of account compromise."
    },
    {
      q: "How often should you review your account security settings?",
      choices: ["Once every 5 years", "Only after a breach", "At least annually or when you get account alerts"],
      answer: 2,
      explain: "Regular security reviews catch unauthorized access and keep your settings current."
    }
  ];

  // Quiz state
  let currentQuestion = 0;
  let score = 0;
  let userAnswers = {};
  let quizStarted = false;

  const startBtn = document.getElementById("startBtn");
  const nextBtn = document.getElementById("nextBtn");
  const retakeBtn = document.getElementById("retakeBtn");
  const quizStart = document.getElementById("quizStart");
  const quizContent = document.getElementById("quizContent");
  const quizResults = document.getElementById("quizResults");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const questionCounter = document.getElementById("questionCounter");
  const progressBar = document.getElementById("progressBar");
  const scoreText = document.getElementById("scoreText");
  const feedbackText = document.getElementById("feedbackText");

  function updateProgress() {
    const percent = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = percent + "%";
    questionCounter.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  }

  function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.q;
    optionsEl.innerHTML = "";

    q.choices.forEach((choice, idx) => {
      const label = document.createElement("label");
      label.className = "quiz-option";
      label.innerHTML = `
        <input type="radio" name="answer" value="${idx}" ${userAnswers[currentQuestion] === idx ? 'checked' : ''} />
        <span>${choice}</span>
      `;
      optionsEl.appendChild(label);
    });

    updateProgress();
    nextBtn.style.display = "block";
    nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question";

    // Add click handlers
    optionsEl.querySelectorAll("input").forEach(input => {
      input.addEventListener("change", (e) => {
        userAnswers[currentQuestion] = parseInt(e.target.value);
      });
    });
  }

  function finishQuiz() {
    quizContent.style.display = "none";
    quizResults.style.display = "block";

    // Calculate score
    score = 0;
    const details = [];
    questions.forEach((q, idx) => {
      const userAnswer = userAnswers[idx];
      const correct = q.answer;
      const isCorrect = userAnswer === correct;
      if (isCorrect) score++;

      details.push({
        num: idx + 1,
        question: q.q,
        userAnswer: userAnswer !== undefined ? q.choices[userAnswer] : "Not answered",
        correctAnswer: q.choices[correct],
        isCorrect: isCorrect,
        explain: q.explain
      });
    });

    const percent = Math.round((score / questions.length) * 100);
    
    // Enhanced feedback based on performance
    let feedback = "";
    let feedbackDetails = "";
    if (percent >= 90) {
      feedback = "🌟 Outstanding! You're a cyber security expert!";
      feedbackDetails = "You demonstrate excellent understanding of cyber security best practices. Keep up the great work and stay informed about emerging threats.";
    } else if (percent >= 80) {
      feedback = "✅ Excellent! You have strong cyber security awareness.";
      feedbackDetails = "You're well-prepared to protect yourself online. Review the areas where you struggled to further strengthen your knowledge.";
    } else if (percent >= 70) {
      feedback = "👍 Good job! You're on the right track.";
      feedbackDetails = "You have a solid understanding of cyber security, but there's room for improvement. Focus on the topics where you had difficulty.";
    } else if (percent >= 60) {
      feedback = "📚 Keep learning! You're making progress.";
      feedbackDetails = "You understand some important concepts, but review the areas where you struggled. Visit the Learn section for detailed explanations.";
    } else {
      feedback = "🔒 Don't worry, cyber security takes practice!";
      feedbackDetails = "This quiz highlights areas where you can improve. Start with the Learn section to build a solid foundation in cyber security basics.";
    }

    scoreText.textContent = `${score}/${questions.length} (${percent}%)`;
    feedbackText.textContent = feedback;
    document.getElementById("feedbackDetails").textContent = feedbackDetails;

    // Show review
    const reviewDiv = document.createElement("div");
    reviewDiv.id = "reviewDetails";
    details.forEach(d => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.marginTop = "12px";
      card.style.borderLeft = d.isCorrect ? "4px solid var(--accent2)" : "4px solid var(--danger)";
      card.innerHTML = `
        <strong>${d.num}. ${d.question}</strong><br/>
        <span style="color: ${d.isCorrect ? 'var(--accent2)' : 'var(--danger)'}; font-weight:700;">
          ${d.isCorrect ? '✓ Correct' : '✗ Incorrect'}
        </span>
        <p style="margin:6px 0;color:var(--muted);font-size:0.9em;">
          <strong>Your answer:</strong> ${d.userAnswer}<br/>
          <strong>Correct answer:</strong> ${d.correctAnswer}<br/>
          <strong>Why:</strong> ${d.explain}
        </p>
      `;
      reviewDiv.appendChild(card);
    });

    quizResults.appendChild(reviewDiv);
  }

  startBtn.addEventListener("click", () => {
    quizStarted = true;
    quizStart.style.display = "none";
    quizContent.style.display = "block";
    currentQuestion = 0;
    score = 0;
    userAnswers = {};
    loadQuestion();
  });

  nextBtn.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      finishQuiz();
    }
  });

  retakeBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    userAnswers = {};
    quizResults.style.display = "none";
    document.getElementById("reviewDetails").remove();
    quizStart.style.display = "block";
    window.scrollTo(0, 0);
  });
})();
