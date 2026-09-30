// Логика приложения
const STORAGE_KEY = 'informatics_progress_v1';

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function isDone(id) {
  return !!loadProgress()[id];
}

function markDone(id) {
  const p = loadProgress();
  p[id] = true;
  saveProgress(p);
}

function getGradeProgress(grade) {
  const data = EXERCISES[grade];
  if (!data) return { done: 0, total: 0 };
  let total = data.items.length;
  let done = data.items.filter(e => isDone(e.id)).length;
  if (data.advanced) {
    total += data.advanced.length;
    done += data.advanced.filter(e => isDone(e.id)).length;
  }
  return { done, total };
}

function getOverallStats() {
  let done = 0, total = 0;
  for (let g = 6; g <= 11; g++) {
    const p = getGradeProgress(g);
    done += p.done;
    total += p.total;
  }
  return { done, total };
}

// Рендер
const app = document.getElementById('app');

function showHome() {
  const stats = getOverallStats();
  let cards = '';
  for (let g = 6; g <= 11; g++) {
    const data = EXERCISES[g];
    const prog = getGradeProgress(g);
    const pct = prog.total ? Math.round((prog.done / prog.total) * 100) : 0;
    const hasAdv = data.advanced ? `<span class="badge">+ усложнённые</span>` : '';
    cards += `
      <div class="grade-card" onclick="showGrade(${g})">
        <h2>${data.title}</h2>
        <div class="meta">${data.subtitle}</div>
        <div class="meta">${prog.done} / ${prog.total} выполнено</div>
        ${hasAdv}
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>`;
  }

  app.innerHTML = `
    <section class="hero">
      <h1>Информатика 6–11 класс</h1>
      <p>Интерактивные упражнения по школьной программе. Решай задачи, проверяй знания и готовься к урокам и экзаменам.</p>
      <div class="stats">
        <div class="stat"><div class="num">${stats.done}</div><div class="label">выполнено</div></div>
        <div class="stat"><div class="num">${stats.total}</div><div class="label">всего заданий</div></div>
        <div class="stat"><div class="num">${stats.total ? Math.round(stats.done/stats.total*100) : 0}%</div><div class="label">прогресс</div></div>
      </div>
    </section>
    <div class="grades-grid">${cards}</div>
  `;
  updateNav(null);
}

function showGrade(grade) {
  const data = EXERCISES[grade];
  if (!data) return;

  let list = data.items.map((ex, i) => {
    const done = isDone(ex.id);
    return `
      <div class="exercise-item ${done ? 'done' : ''}" onclick="showExercise(${grade}, '${ex.id}', false)">
        <div class="num">${i + 1}</div>
        <div class="title">${ex.title}</div>
        <div class="status">${done ? '✓ Выполнено' : 'Не начато'}</div>
      </div>`;
  }).join('');

  let advSection = '';
  if (data.advanced && data.advanced.length) {
    const advList = data.advanced.map((ex, i) => {
      const done = isDone(ex.id);
      return `
        <div class="exercise-item ${done ? 'done' : ''}" onclick="showExercise(${grade}, '${ex.id}', true)">
          <div class="num">★${i + 1}</div>
          <div class="title">${ex.title}</div>
          <div class="status">${done ? '✓ Выполнено' : 'Не начато'}</div>
        </div>`;
    }).join('');
    advSection = `
      <h3 class="section-title">★ Усложнённые задания</h3>
      <div class="exercises-list">${advList}</div>`;
  }

  app.innerHTML = `
    <div class="page-header">
      <div>
        <h1>${data.title}</h1>
        <p style="color:var(--text-muted)">${data.subtitle}</p>
      </div>
      <button class="back-btn" onclick="showHome()">← На главную</button>
    </div>
    <h3 class="section-title">Основные упражнения (12)</h3>
    <div class="exercises-list">${list}</div>
    ${advSection}
  `;
  updateNav(grade);
}

function showExercise(grade, id, isAdvanced) {
  const data = EXERCISES[grade];
  const list = isAdvanced ? data.advanced : data.items;
  const ex = list.find(e => e.id === id);
  if (!ex) return;

  const typeLabel = {
    quiz: 'Тест (выбор ответа)',
    input: 'Ввод ответа'
  }[ex.type] || 'Задание';

  const theoryHtml = ex.theory ? `
    <div class="theory-box">
      <h4>📚 Теория</h4>
      <p>${ex.theory.replace(/\n/g, '<br>')}</p>
    </div>` : '';

  const exampleHtml = ex.example ? `
    <div class="example-box">
      <h4>💡 Пример</h4>
      <p>${ex.example.replace(/\n/g, '<br>')}</p>
    </div>` : '';

  let body = '';
  if (ex.type === 'quiz') {
    body = `
      ${theoryHtml}
      ${exampleHtml}
      <div class="question">${ex.question.replace(/\n/g, '<br>')}</div>
      <div class="options" id="options">
        ${ex.options.map((opt, i) => `
          <button class="option" data-idx="${i}" onclick="selectOption(this, ${i})">${opt}</button>
        `).join('')}
      </div>
      <div class="actions">
        <button class="btn" id="checkBtn" onclick="checkQuiz('${ex.id}', ${ex.answer}, \`${escapeHtml(ex.explanation)}\`)">Проверить</button>
        <button class="btn btn-secondary" onclick="showGrade(${grade})">К списку</button>
      </div>
      <div class="feedback" id="feedback"></div>`;
  } else {
    body = `
      ${theoryHtml}
      ${exampleHtml}
      <div class="question">${ex.question.replace(/\n/g, '<br>')}</div>
      <input type="text" class="input-answer" id="userAnswer" placeholder="Введите ответ..." autocomplete="off">
      <div class="actions">
        <button class="btn" id="checkBtn" onclick="checkInput('${ex.id}', ${JSON.stringify(ex.answer)}, ${JSON.stringify(ex.accept || [ex.answer])}, \`${escapeHtml(ex.explanation)}\`)">Проверить</button>
        <button class="btn btn-secondary" onclick="showGrade(${grade})">К списку</button>
      </div>
      <div class="feedback" id="feedback"></div>`;
  }

  app.innerHTML = `
    <div class="page-header">
      <div>
        <h1 style="font-size:1.3rem">${ex.title}</h1>
      </div>
      <button class="back-btn" onclick="showGrade(${grade})">← Назад</button>
    </div>
    <div class="exercise-view">
      <span class="type-badge">${typeLabel}</span>
      ${body}
    </div>
  `;
  updateNav(grade);

  // Enter key for input
  const input = document.getElementById('userAnswer');
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('checkBtn').click();
    });
  }
}

function escapeHtml(str) {
  return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

let selectedIdx = null;

function selectOption(btn, idx) {
  document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  btn.classList.add('selected');
  selectedIdx = idx;
}

function checkQuiz(id, correctIdx, explanation) {
  if (selectedIdx === null) {
    alert('Выберите вариант ответа');
    return;
  }
  const options = document.querySelectorAll('.option');
  options.forEach(o => o.disabled = true);
  options[correctIdx].classList.add('correct');
  if (selectedIdx !== correctIdx) {
    options[selectedIdx].classList.add('wrong');
  }

  const fb = document.getElementById('feedback');
  if (selectedIdx === correctIdx) {
    fb.className = 'feedback show correct';
    fb.innerHTML = '✓ Верно! ' + explanation;
    markDone(id);
  } else {
    fb.className = 'feedback show wrong';
    fb.innerHTML = '✗ Неверно. ' + explanation;
  }
  document.getElementById('checkBtn').disabled = true;
}

function checkInput(id, correct, acceptList, explanation) {
  const val = document.getElementById('userAnswer').value.trim();
  if (!val) {
    alert('Введите ответ');
    return;
  }
  const normalized = val.toLowerCase().replace(/\s+/g, '');
  const ok = acceptList.some(a => a.toLowerCase().replace(/\s+/g, '') === normalized) ||
             normalized === String(correct).toLowerCase().replace(/\s+/g, '');

  const fb = document.getElementById('feedback');
  if (ok) {
    fb.className = 'feedback show correct';
    fb.innerHTML = '✓ Верно! ' + explanation;
    markDone(id);
  } else {
    fb.className = 'feedback show wrong';
    fb.innerHTML = '✗ Неверно. Правильный ответ: <strong>' + correct + '</strong>. ' + explanation;
  }
  document.getElementById('checkBtn').disabled = true;
  document.getElementById('userAnswer').disabled = true;
}

function updateNav(activeGrade) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const g = btn.dataset.grade;
    btn.classList.toggle('active', g && parseInt(g) === activeGrade);
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  showHome();
});