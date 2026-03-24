// =============================================
// IVYAMBITION COLLEGE MATCH QUIZ — LOGIC
// =============================================

let currentQ = 0;
const answers = {};

// ─────────────────────────────────────────────
// SCREEN MANAGEMENT
// ─────────────────────────────────────────────

function showScreen(id) {
  document.querySelectorAll('.quiz-screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ─────────────────────────────────────────────
// QUIZ INITIALIZATION
// ─────────────────────────────────────────────

document.getElementById('startQuizBtn').addEventListener('click', () => {
  showScreen('screen-quiz');
  renderQuestion(0);
  buildDots();
});

document.getElementById('backBtn').addEventListener('click', () => {
  if (currentQ === 0) {
    showScreen('screen-intro');
    return;
  }
  currentQ--;
  renderQuestion(currentQ);
  updateProgress();
  updateDots();
});

document.getElementById('retakeBtn').addEventListener('click', () => {
  Object.keys(answers).forEach(k => delete answers[k]);
  currentQ = 0;
  showScreen('screen-intro');
});

// ─────────────────────────────────────────────
// RENDER QUESTION
// ─────────────────────────────────────────────

function renderQuestion(index) {
  const q = QUESTIONS[index];
  const card = document.getElementById('questionCard');

  // Trigger re-animation
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = '';

  document.getElementById('qNumber').textContent = String(index + 1).padStart(2, '0');
  document.getElementById('qText').textContent = q.text;
  document.getElementById('qSub').textContent = q.sub || '';

  const container = document.getElementById('optionsContainer');
  container.className = 'quiz-options' + (q.cols === 2 ? ' cols-2' : '');
  container.innerHTML = '';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option' + (answers[q.id] === opt.value ? ' selected' : '');
    btn.innerHTML = `
      <div class="quiz-option-indicator"></div>
      <div>
        <div class="quiz-option-label">${opt.label}</div>
        ${opt.desc ? `<div class="quiz-option-desc">${opt.desc}</div>` : ''}
      </div>
    `;
    btn.addEventListener('click', () => selectOption(q.id, opt.value, index));
    container.appendChild(btn);
  });

  document.getElementById('backBtn').disabled = false;
  updateProgress();
  updateDots();
}

// ─────────────────────────────────────────────
// OPTION SELECTION
// ─────────────────────────────────────────────

function selectOption(questionId, value, index) {
  answers[questionId] = value;

  // Update selection UI
  document.querySelectorAll('.quiz-option').forEach(btn => btn.classList.remove('selected'));
  event.currentTarget.classList.add('selected');

  // Brief pause then advance
  setTimeout(() => {
    if (index < QUESTIONS.length - 1) {
      currentQ = index + 1;
      renderQuestion(currentQ);
    } else {
      // All questions answered — compute and show results
      computeResults();
    }
  }, 280);
}

// ─────────────────────────────────────────────
// PROGRESS & DOTS
// ─────────────────────────────────────────────

function updateProgress() {
  const pct = Math.round((currentQ / QUESTIONS.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `Question ${currentQ + 1} of ${QUESTIONS.length}`;
  document.getElementById('progressPercent').textContent = pct + '%';
}

function buildDots() {
  const container = document.getElementById('quizDots');
  container.innerHTML = '';
  // Show max 15 dots
  QUESTIONS.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'quiz-dot';
    dot.id = `dot-${i}`;
    container.appendChild(dot);
  });
}

function updateDots() {
  QUESTIONS.forEach((_, i) => {
    const dot = document.getElementById(`dot-${i}`);
    if (!dot) return;
    if (i < currentQ) dot.className = 'quiz-dot done';
    else if (i === currentQ) dot.className = 'quiz-dot current';
    else dot.className = 'quiz-dot';
  });
}

// ─────────────────────────────────────────────
// SCORING ALGORITHM
// ─────────────────────────────────────────────

function buildStudentProfile() {
  // Academic score (0–50)
  const gpaScore = answers.gpa || 10;
  const testScore = answers.test || 10;
  let academicScore = gpaScore + testScore;

  // Exceptional ECs provide a small holistic boost (simulates the "tip" factor)
  if (answers.ec === 'exceptional') academicScore = Math.min(50, academicScore + 3);
  if (answers.ec === 'strong')      academicScore = Math.min(50, academicScore + 1);

  return {
    academicScore,
    major:       answers.major      || 'undecided',
    region:      answers.region     || 'any',
    size:        answers.size       || 'medium',
    setting:     answers.setting    || 'any',
    prestige:    answers.prestige   || 'somewhat',
    financialAid:answers.financialAid || 'medium',
    research:    answers.research   || 'medium',
    career:      answers.career     || 'medium',
    environment: answers.environment || 'balanced',
    sports:      answers.sports     || 'medium',
    studyAbroad: answers.studyAbroad || 'medium',
    vibe:        answers.vibe       || 'intellectual',
  };
}

function scoreSchool(school, profile) {
  let score = 0;

  // 1. Academic Fit (0–30) — most important factor
  const diff = profile.academicScore - school.academicMin;
  if      (diff >= 10) score += 30;   // safety — well above
  else if (diff >= 5)  score += 26;   // likely admit
  else if (diff >= 0)  score += 21;   // competitive target
  else if (diff >= -5) score += 13;   // slight reach
  else if (diff >= -10) score += 6;   // meaningful reach
  else                 score += 1;    // very long reach

  // 2. Region (0–10)
  if (profile.region === 'any' || school.region === profile.region) score += 10;
  else score += 1;

  // 3. Size (0–8)
  if (school.size === profile.size) score += 8;
  else if (school.size === 'medium') score += 4; // medium is compatible with anything

  // 4. Setting (0–8)
  if (profile.setting === 'any' || school.setting === profile.setting) score += 8;
  else score += 1;

  // 5. Major Strength (0–15)
  if (school.majors.includes(profile.major)) score += 15;
  else if (profile.major === 'undecided') score += 10; // undecided fits everywhere
  else score += 3;

  // 6. Prestige Alignment (0–8)
  if (profile.prestige === 'top20') {
    if (school.prestige >= 9) score += 8;
    else if (school.prestige >= 7) score += 3;
    else score += 0;
  } else if (profile.prestige === 'top50') {
    if (school.prestige >= 7) score += 8;
    else if (school.prestige >= 5) score += 5;
    else score += 2;
  } else if (profile.prestige === 'somewhat') {
    score += Math.min(8, school.prestige * 0.6 + 2);
  } else {
    score += 5; // prestige doesn't matter — all schools equal here
  }

  // 7. Financial Aid (0–7)
  if (profile.financialAid === 'critical') {
    if (school.meritAid) score += 7;
    else if (school.needAid) score += 4;
    else score -= 2;
  } else if (profile.financialAid === 'high') {
    if (school.meritAid) score += 6;
    else if (school.needAid) score += 3;
    else score += 1;
  } else if (profile.financialAid === 'medium') {
    score += 3;
  } else {
    score += 4; // not a factor — neutral
  }

  // 8. Research (0–6)
  if (profile.research === 'high') {
    score += Math.round(school.research * 0.6);
  } else if (profile.research === 'medium') {
    score += 3;
  } else {
    // Prefer lower research intensity
    score += Math.round((10 - school.research) * 0.3 + 1);
  }

  // 9. Career / Network (0–6)
  if (profile.career === 'critical') {
    score += Math.round(school.career * 0.6);
  } else if (profile.career === 'high') {
    score += Math.round(school.career * 0.45);
  } else {
    score += 3;
  }

  // 10. Academic Environment (0–7)
  const envMap = {
    intense:       { intense: 7, competitive: 5, collaborative: 2, balanced: 1 },
    competitive:   { competitive: 7, intense: 5, collaborative: 4, balanced: 2 },
    collaborative: { collaborative: 7, balanced: 6, competitive: 4, intense: 1 },
    balanced:      { balanced: 7, collaborative: 6, competitive: 3, intense: 1 },
    relaxed:       { balanced: 7, collaborative: 6, competitive: 2, intense: 0 },
  };
  const envPref = profile.environment;
  const envScore = (envMap[envPref] || {})[school.environment] || 2;
  score += envScore;

  // 11. Sports Culture (0–5)
  if (profile.sports === 'high') {
    score += Math.round(school.sportsCulture * 0.5);
  } else if (profile.sports === 'medium') {
    score += 3;
  } else {
    // prefer lower sports culture
    score += Math.round((10 - school.sportsCulture) * 0.3 + 1);
  }

  // 12. Study Abroad (0–4)
  if (profile.studyAbroad === 'high') {
    score += Math.round(school.studyAbroad * 0.4);
  } else {
    score += 2;
  }

  // 13. Vibe Alignment (0–6)
  if (school.vibe && school.vibe.includes(profile.vibe)) score += 6;
  else score += 2;

  return score;
}

function admitLabel(diff) {
  if (diff >= 10) return { label: 'Safety', cls: 'safety' };
  if (diff >= 5)  return { label: 'Likely', cls: 'likely' };
  if (diff >= 0)  return { label: 'Target', cls: 'target' };
  if (diff >= -10) return { label: 'Reach', cls: 'reach' };
  return { label: 'Reach', cls: 'reach' };
}

// ─────────────────────────────────────────────
// RESULTS COMPUTATION
// ─────────────────────────────────────────────

function computeResults() {
  const profile = buildStudentProfile();

  // Score all schools, filter out extreme long-shots
  const scored = SCHOOLS
    .map(school => ({
      ...school,
      score: scoreSchool(school, profile),
      diff:  profile.academicScore - school.academicMin,
    }))
    .filter(s => s.diff >= -12) // exclude extreme long-shots
    .sort((a, b) => b.score - a.score);

  // Split into academic bands for tier assignment
  const reaches  = scored.filter(s => s.diff >= -10 && s.diff < 0);
  const targets  = scored.filter(s => s.diff >= 0  && s.diff < 8);
  const safeties = scored.filter(s => s.diff >= 8);

  // Build each tier — 4–5 schools per tier, no duplicates
  const used = new Set();

  function pickTop(pool, n) {
    const result = [];
    for (const s of pool) {
      if (result.length >= n) break;
      if (!used.has(s.name)) {
        result.push(s);
        used.add(s.name);
      }
    }
    return result;
  }

  // S-tier: best reaches + best targets (dreamy schools)
  const sTier = pickTop([...reaches, ...targets].sort((a,b) => b.score - a.score), 5);

  // If S-tier is empty (student is academically strong, no reaches), use top overall
  if (sTier.length === 0) {
    pickTop(scored, 5).forEach(s => { sTier.push(s); used.add(s.name); });
  }

  // A-tier: next-best mix of targets and safeties
  const aTier = pickTop([...targets, ...safeties, ...reaches].sort((a,b) => b.score - a.score), 5);

  // B-tier: solid safeties, top fit
  const bTier = pickTop([...safeties, ...targets].sort((a,b) => b.score - a.score), 5);

  // Fallback: if any tier is empty, fill from remaining scored
  if (aTier.length < 3 || bTier.length < 3) {
    const remaining = scored.filter(s => !used.has(s.name));
    while (aTier.length < 4 && remaining.length > 0) {
      const s = remaining.shift();
      if (!used.has(s.name)) { aTier.push(s); used.add(s.name); }
    }
    while (bTier.length < 4 && remaining.length > 0) {
      const s = remaining.shift();
      if (!used.has(s.name)) { bTier.push(s); used.add(s.name); }
    }
  }

  renderResults({ sTier, aTier, bTier }, profile);
}

// ─────────────────────────────────────────────
// RENDER RESULTS
// ─────────────────────────────────────────────

function renderResults({ sTier, aTier, bTier }, profile) {
  // Update subheading
  const majorLabel = {
    stem: 'STEM', business: 'Business/Economics', humanities: 'Humanities/Social Sciences',
    premed: 'Pre-Med', prelaw: 'Pre-Law/Policy', arts: 'Arts & Design', undecided: 'Undecided',
  }[profile.major] || profile.major;

  document.getElementById('resultsSubheading').textContent =
    `Based on your academic profile, intended major in ${majorLabel}, and preferences — here's your personalized college list.`;

  const container = document.getElementById('resultsTiers');
  container.innerHTML = '';

  const tierDefs = [
    {
      key: 's',
      label: 'S-Tier',
      icon: '⭐',
      desc: 'Your dream schools — top fits where you should absolutely apply',
      schools: sTier,
    },
    {
      key: 'a',
      label: 'A-Tier',
      icon: '🎯',
      desc: 'Strong target schools — excellent fit, you\'re genuinely competitive',
      schools: aTier,
    },
    {
      key: 'b',
      label: 'B-Tier',
      icon: '✅',
      desc: 'Solid foundations — great schools where you\'re highly likely to get in',
      schools: bTier,
    },
  ];

  tierDefs.forEach(({ key, label, icon, desc, schools }) => {
    if (!schools.length) return;

    const tierEl = document.createElement('div');
    tierEl.className = 'results-tier';
    tierEl.innerHTML = `
      <div class="tier-label-row">
        <div class="tier-label-badge ${key}-tier">${icon} ${label}</div>
        <p class="tier-label-desc">${desc}</p>
      </div>
      <div class="tier-schools-grid" id="grid-${key}"></div>
    `;
    container.appendChild(tierEl);

    const grid = tierEl.querySelector(`#grid-${key}`);
    schools.forEach(school => {
      const admit = admitLabel(school.diff);
      grid.appendChild(buildSchoolCard(school, key, admit));
    });
  });

  showScreen('screen-results');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function buildSchoolCard(school, tierKey, admit) {
  const card = document.createElement('div');
  card.className = `school-card ${tierKey}-tier`;

  const sizeLabel  = { small: 'Small', medium: 'Medium', large: 'Large' }[school.size] || school.size;
  const settingLabel = { urban: 'City', suburban: 'Suburban', town: 'College Town' }[school.setting] || school.setting;

  const tagsHtml = (school.tags || []).slice(0, 3).map(t => `<span class="school-tag">${t}</span>`).join('');

  card.innerHTML = `
    <div class="school-card-top">
      <div class="school-name">${school.name}</div>
      <span class="admit-label ${admit.cls}">${admit.label}</span>
    </div>
    <div class="school-location">📍 ${school.location}</div>
    <div class="school-tags">
      <span class="school-tag">${sizeLabel}</span>
      <span class="school-tag">${settingLabel}</span>
      ${tagsHtml}
    </div>
    <div class="school-strengths"><strong>Best for:</strong> ${school.strength}</div>
  `;

  return card;
}
