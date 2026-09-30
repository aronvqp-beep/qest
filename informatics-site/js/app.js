const STORAGE_KEY = 'informatics_quest_v2';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }
function isDone(id) { return !!loadProgress()[id]; }
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
    done += p.done; total += p.total;
  }
  return { done, total };
}

const app = document.getElementById('app');
let selectedIdx = null;
let currentEx = null;

function showHome() {
  const stats = getOverallStats();
  const colors = ['g6','g7','g8','g9','g10','g11'];
  let cards = '';
  for (let g = 6; g <= 11; g++) {
    cards += `<div class="grade-card ${colors[g-6]}" onclick="showGrade(${g})">
      <div class="num">${g}</div>
      <div class="label">класс</div>
    </div>`;
  }
  app.innerHTML = `
    <section class="hero">
      <div class="gamepad">🎮</div>
      <h1>Квест по информатике</h1>
      <p class="subtitle">Выбери свой класс и начни приключение</p>
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
  const prog = getGradeProgress(grade);

  let list = data.items.map((ex, i) => {
    const done = isDone(ex.id);
    const badge = ex.type === 'code' ? '<span class="badge-type badge-code">код</span>' :
                  ex.type === 'quiz' ? '<span class="badge-type badge-quiz">тест</span>' :
                  '<span class="badge-type badge-quiz">ответ</span>';
    return `<div class="exercise-item ${done?'done':''}" onclick="showExercise(${grade},'${ex.id}',false)">
      <div class="num">${i+1}</div>
      <div class="title">${ex.title}</div>
      ${badge}
      <div class="status">${done?'✓ Готово':'Не начато'}</div>
    </div>`;
  }).join('');

  let adv = '';
  if (data.advanced && data.advanced.length) {
    const advList = data.advanced.map((ex, i) => {
      const done = isDone(ex.id);
      const badge = ex.type === 'code' ? '<span class="badge-type badge-code">код</span>' :
                    '<span class="badge-type badge-adv">★</span>';
      return `<div class="exercise-item ${done?'done':''}" onclick="showExercise(${grade},'${ex.id}',true)">
        <div class="num">★${i+1}</div>
        <div class="title">${ex.title}</div>
        ${badge}
        <div class="status">${done?'✓ Готово':'Не начато'}</div>
      </div>`;
    }).join('');
    adv = `<h3 class="section-title">★ Усложнённые задания</h3><div class="exercises-list">${advList}</div>`;
  }

  app.innerHTML = `
    <div class="page-header">
      <div>
        <h1>${data.title}</h1>
        <p style="color:var(--text-muted)">${data.subtitle} · ${prog.done}/${prog.total}</p>
      </div>
      <button class="back-btn" onclick="showHome()">← К уровням</button>
    </div>
    <h3 class="section-title">Задания</h3>
    <div class="exercises-list">${list}</div>
    ${adv}
  `;
  updateNav(grade);
}

function showExercise(grade, id, isAdvanced) {
  const data = EXERCISES[grade];
  const list = isAdvanced ? data.advanced : data.items;
  const ex = list.find(e => e.id === id);
  if (!ex) return;
  currentEx = ex;
  selectedIdx = null;

  const typeLabel = ex.type === 'code' ? 'Написание кода' :
                    ex.type === 'quiz' ? 'Тест' : 'Ввод ответа';
  const typeClass = ex.type === 'code' ? 'code' : 'quiz';

  const theoryHtml = ex.theory ? `<div class="theory-box"><h4>📚 Теория</h4><p>${esc(ex.theory)}</p></div>` : '';
  const exampleHtml = ex.example ? `<div class="example-box"><h4>💡 Пример</h4><p>${esc(ex.example)}</p></div>` : '';
  const hintHtml = ex.hint ? `<div class="hint-box" id="hintBox"><h4>💡 Подсказка</h4><p>${esc(ex.hint)}</p></div>` : '';

  let body = '';
  if (ex.type === 'code') {
    body = `
      <div class="code-layout">
        <div class="code-task-panel">
          ${theoryHtml}
          ${exampleHtml}
          ${hintHtml}
          <div class="question">${esc(ex.question)}</div>
          <div class="actions">
            <button class="btn" onclick="runCode()">▶ Запустить</button>
            ${ex.hint ? '<button class="btn btn-hint" onclick="showHint()">Показать подсказку</button>' : ''}
            <button class="btn btn-secondary" onclick="showGrade(${grade})">← К уровням</button>
          </div>
          <div class="feedback" id="feedback"></div>
        </div>
        <div class="code-editor-wrap">
          <div class="code-editor-header"><span>main.py</span><span>Python</span></div>
          <textarea id="codeEditor" spellcheck="false">${ex.starter || ''}</textarea>
          <div class="output-area" id="outputArea"><div class="label">Вывод:</div></div>
        </div>
      </div>`;
  } else if (ex.type === 'quiz') {
    body = `
      ${theoryHtml}${exampleHtml}
      <div class="question">${esc(ex.question)}</div>
      <div class="options" id="options">
        ${ex.options.map((opt,i) => `<button class="option" data-idx="${i}" onclick="selectOption(this,${i})">${esc(opt)}</button>`).join('')}
      </div>
      <div class="actions">
        <button class="btn btn-primary" id="checkBtn" onclick="checkQuiz()">Проверить</button>
        <button class="btn btn-secondary" onclick="showGrade(${grade})">← К уровням</button>
      </div>
      <div class="feedback" id="feedback"></div>`;
  } else {
    body = `
      ${theoryHtml}${exampleHtml}
      <div class="question">${esc(ex.question)}</div>
      <input type="text" class="input-answer" id="userAnswer" placeholder="Введите ответ..." autocomplete="off">
      <div class="actions">
        <button class="btn btn-primary" id="checkBtn" onclick="checkInput()">Проверить</button>
        <button class="btn btn-secondary" onclick="showGrade(${grade})">← К уровням</button>
      </div>
      <div class="feedback" id="feedback"></div>`;
  }

  app.innerHTML = `
    <div class="page-header">
      <div><h1 style="font-size:1.3rem">${esc(ex.title)}</h1></div>
      <button class="back-btn" onclick="showGrade(${grade})">← Назад</button>
    </div>
    <div class="exercise-view">
      <span class="type-badge ${typeClass}">${typeLabel}</span>
      ${body}
    </div>
  `;
  updateNav(grade);

  const input = document.getElementById('userAnswer');
  if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') checkInput(); });

  const editor = document.getElementById('codeEditor');
  if (editor) {
    editor.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const s = editor.selectionStart;
        editor.value = editor.value.substring(0,s) + '    ' + editor.value.substring(editor.selectionEnd);
        editor.selectionStart = editor.selectionEnd = s + 4;
      }
    });
  }
}

function esc(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
}

function selectOption(btn, idx) {
  document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  btn.classList.add('selected');
  selectedIdx = idx;
}

function checkQuiz() {
  if (!currentEx || selectedIdx === null) { alert('Выберите вариант'); return; }
  const options = document.querySelectorAll('.option');
  options.forEach(o => o.disabled = true);
  options[currentEx.answer].classList.add('correct');
  if (selectedIdx !== currentEx.answer) options[selectedIdx].classList.add('wrong');
  const fb = document.getElementById('feedback');
  if (selectedIdx === currentEx.answer) {
    fb.className = 'feedback show correct';
    fb.innerHTML = '✓ Верно! ' + (currentEx.explanation || '');
    markDone(currentEx.id);
  } else {
    fb.className = 'feedback show wrong';
    fb.innerHTML = '✗ Неверно. ' + (currentEx.explanation || '');
  }
  document.getElementById('checkBtn').disabled = true;
}

function checkInput() {
  if (!currentEx) return;
  const val = (document.getElementById('userAnswer').value || '').trim();
  if (!val) { alert('Введите ответ'); return; }
  const accept = currentEx.accept || [currentEx.answer];
  const norm = v => String(v).toLowerCase().replace(/\s+/g,'');
  const ok = accept.some(a => norm(a) === norm(val));
  const fb = document.getElementById('feedback');
  if (ok) {
    fb.className = 'feedback show correct';
    fb.innerHTML = '✓ Верно! ' + (currentEx.explanation || '');
    markDone(currentEx.id);
  } else {
    fb.className = 'feedback show wrong';
    fb.innerHTML = '✗ Неверно. Правильный ответ: <strong>' + currentEx.answer + '</strong>. ' + (currentEx.explanation || '');
  }
  document.getElementById('checkBtn').disabled = true;
  document.getElementById('userAnswer').disabled = true;
}

function showHint() {
  const box = document.getElementById('hintBox');
  if (box) box.classList.add('show');
}

/* ---- Simple Python-like runner for school tasks ---- */
function runCode() {
  if (!currentEx) return;
  const code = document.getElementById('codeEditor').value;
  const out = document.getElementById('outputArea');
  const fb = document.getElementById('feedback');
  try {
    const result = simulatePython(code);
    out.className = 'output-area';
    out.innerHTML = '<div class="label">Вывод:</div>' + esc(result).replace(/&lt;br&gt;/g, '\n').replace(/<br>/g, '\n');
    // show as text with newlines
    out.textContent = '';
    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = 'Вывод:';
    out.appendChild(label);
    out.appendChild(document.createTextNode(result || '(пусто)'));

    const expected = (currentEx.expectedOutput || '').replace(/\r\n/g, '\n').trim();
    const got = result.replace(/\r\n/g, '\n').trim();
    // flexible compare: also allow list repr without spaces
    const normOut = s => s.replace(/\s+/g, ' ').trim();
    const ok = got === expected || normOut(got) === normOut(expected) ||
               got.replace(/,\s+/g, ', ') === expected.replace(/,\s+/g, ', ');

    if (ok) {
      fb.className = 'feedback show correct';
      fb.innerHTML = '✓ Верно! Отличный код. ' + (currentEx.explanation || '');
      markDone(currentEx.id);
    } else {
      fb.className = 'feedback show wrong';
      fb.innerHTML = '✗ Пока не то. Ожидался вывод:<br><code style="background:#fee2e2;padding:2px 6px;border-radius:4px">' +
        esc(expected).replace(/<br>/g, ' | ') + '</code><br>' + (currentEx.explanation || 'Попробуй ещё раз или открой подсказку.');
    }
  } catch (e) {
    out.className = 'output-area error';
    out.textContent = '';
    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = 'Ошибка:';
    out.appendChild(label);
    out.appendChild(document.createTextNode(e.message));
    fb.className = 'feedback show wrong';
    fb.innerHTML = '✗ Ошибка в коде: ' + e.message;
  }
}

function simulatePython(code) {
  // Very small educational interpreter: print, assignments, if/else, for range, while, lists, basic ops, def+return, len, %
  const lines = code.replace(/\t/g, '    ').split('\n');
  const vars = Object.create(null);
  const output = [];
  let i = 0;

  function evalExpr(expr) {
    expr = expr.trim();
    if (!expr) return undefined;

    // string literals
    if ((expr[0] === '"' && expr.endsWith('"')) || (expr[0] === "'" && expr.endsWith("'")))
      return expr.slice(1, -1);

    // list literal
    if (expr[0] === '[' && expr.endsWith(']')) {
      const inner = expr.slice(1, -1).trim();
      if (!inner) return [];
      return splitArgs(inner).map(evalExpr);
    }

    // function call: name(...)
    const callM = expr.match(/^([a-zA-Z_]\w*)\((.*)\)$/s);
    if (callM) {
      const fname = callM[1];
      const argsStr = callM[2];
      const args = argsStr.trim() ? splitArgs(argsStr).map(evalExpr) : [];
      if (fname === 'len') return (args[0] && args[0].length !== undefined) ? args[0].length : 0;
      if (fname === 'range') {
        let a = 0, b = 0, step = 1;
        if (args.length === 1) { b = args[0]; }
        else if (args.length >= 2) { a = args[0]; b = args[1]; if (args[2] !== undefined) step = args[2]; }
        const arr = [];
        if (step > 0) for (let x = a; x < b; x += step) arr.push(x);
        else for (let x = a; x > b; x += step) arr.push(x);
        return arr;
      }
      if (fname === 'str') return String(args[0]);
      if (fname === 'int') return parseInt(args[0], 10);
      if (vars['__fn_' + fname]) {
        return callUserFn(fname, args);
      }
      throw new Error('Неизвестная функция: ' + fname);
    }

    // indexing: name[idx] or name[start:end] or name[::-1]
    const idxM = expr.match(/^([a-zA-Z_]\w*)\[(.+)\]$/);
    if (idxM) {
      const arr = vars[idxM[1]];
      if (arr === undefined) throw new Error('Нет переменной: ' + idxM[1]);
      const key = idxM[2].trim();
      if (key.includes(':')) {
        const parts = key.split(':');
        let start = parts[0] === '' ? 0 : evalExpr(parts[0]);
        let end = parts[1] === '' || parts[1] === undefined ? arr.length : evalExpr(parts[1]);
        let step = parts[2] !== undefined && parts[2] !== '' ? evalExpr(parts[2]) : 1;
        if (typeof arr === 'string') {
          if (step === -1 && parts[0] === '' && parts[1] === '') return arr.split('').reverse().join('');
          return arr.slice(start, end);
        }
        if (step === -1 && (parts[0] === '' && (parts[1] === '' || parts[1] === undefined))) {
          return arr.slice().reverse();
        }
        return arr.slice(start, end);
      }
      const idx = evalExpr(key);
      return arr[idx];
    }

    // boolean
    if (expr === 'True' || expr === 'true') return true;
    if (expr === 'False' || expr === 'false') return false;

    // number
    if (/^-?\d+(\.\d+)?$/.test(expr)) return Number(expr);

    // variable
    if (/^[a-zA-Z_]\w*$/.test(expr)) {
      if (expr in vars) return vars[expr];
      throw new Error('Нет переменной: ' + expr);
    }

    // replace variables and evaluate with Function carefully
    // handle comparison and arithmetic
    let e = expr;
    // not in
    e = e.replace(/(\S+)\s+not\s+in\s+(\S+)/g, (_,a,b) => {
      const av = evalExpr(a); const bv = evalExpr(b);
      return (Array.isArray(bv) ? bv.indexOf(av) === -1 : String(bv).indexOf(String(av)) === -1) ? 'True' : 'False';
    });
    e = e.replace(/(\S+)\s+in\s+(\S+)/g, (_,a,b) => {
      const av = evalExpr(a); const bv = evalExpr(b);
      return (Array.isArray(bv) ? bv.indexOf(av) !== -1 : String(bv).indexOf(String(av)) !== -1) ? 'True' : 'False';
    });

    // binary ops - recursive for simple cases
    const ops = ['==','!=','<=','>=','<','>','%','//','+','-','*','/'];
    // try split by comparison first
    for (const op of ['==','!=','<=','>=','<','>']) {
      const pos = findOp(e, op);
      if (pos !== -1) {
        const L = evalExpr(e.slice(0, pos));
        const R = evalExpr(e.slice(pos + op.length));
        if (op === '==') return L == R;
        if (op === '!=') return L != R;
        if (op === '<=') return L <= R;
        if (op === '>=') return L >= R;
        if (op === '<') return L < R;
        if (op === '>') return L > R;
      }
    }
    for (const op of ['+','-']) {
      const pos = findOp(e, op);
      if (pos > 0) {
        const L = evalExpr(e.slice(0, pos));
        const R = evalExpr(e.slice(pos + 1));
        if (op === '+') {
          if (typeof L === 'string' || typeof R === 'string') return String(L) + String(R);
          return L + R;
        }
        return L - R;
      }
    }
    for (const op of ['*','/','%','//']) {
      const pos = findOp(e, op);
      if (pos !== -1) {
        const L = evalExpr(e.slice(0, pos));
        const R = evalExpr(e.slice(pos + op.length));
        if (op === '*') return L * R;
        if (op === '/') return L / R;
        if (op === '%') return L % R;
        if (op === '//') return Math.floor(L / R);
      }
    }

    throw new Error('Не могу вычислить: ' + expr);
  }

  function findOp(s, op) {
    let depth = 0;
    for (let j = 0; j < s.length; j++) {
      const c = s[j];
      if (c === '(' || c === '[') depth++;
      else if (c === ')' || c === ']') depth--;
      else if (depth === 0 && s.slice(j, j + op.length) === op) {
        // avoid negative number at start
        if (op === '-' && j === 0) continue;
        return j;
      }
    }
    return -1;
  }

  function splitArgs(s) {
    const res = [];
    let cur = '', depth = 0, quote = null;
    for (let j = 0; j < s.length; j++) {
      const c = s[j];
      if (quote) {
        cur += c;
        if (c === quote) quote = null;
        continue;
      }
      if (c === '"' || c === "'") { quote = c; cur += c; continue; }
      if (c === '(' || c === '[') { depth++; cur += c; continue; }
      if (c === ')' || c === ']') { depth--; cur += c; continue; }
      if (c === ',' && depth === 0) { res.push(cur.trim()); cur = ''; continue; }
      cur += c;
    }
    if (cur.trim()) res.push(cur.trim());
    return res;
  }

  function getIndent(line) {
    let n = 0;
    while (n < line.length && line[n] === ' ') n++;
    return n;
  }

  function skipBlock(from, baseIndent) {
    let j = from;
    while (j < lines.length) {
      const t = lines[j].trim();
      if (t === '' || t.startsWith('#')) { j++; continue; }
      if (getIndent(lines[j]) <= baseIndent) break;
      j++;
    }
    return j;
  }

  function runBlock(from, baseIndent, localVars) {
    const saved = vars;
    // use same vars object (simple scope)
    let j = from;
    while (j < lines.length) {
      let line = lines[j];
      const trimmed = line.trim();
      if (trimmed === '' || trimmed.startsWith('#')) { j++; continue; }
      const ind = getIndent(line);
      if (ind < baseIndent) break;
      if (ind > baseIndent && baseIndent >= 0) {
        // should not happen if caller correct
      }
      j = execLine(j, baseIndent);
    }
    return j;
  }

  const functions = Object.create(null);

  function callUserFn(name, args) {
    const fn = functions[name];
    if (!fn) throw new Error('Нет функции ' + name);
    const backup = {};
    fn.params.forEach((p, idx) => {
      backup[p] = vars[p];
      vars[p] = args[idx];
    });
    let ret = undefined;
    const oldOutLen = output.length;
    try {
      // run body
      let j = fn.start;
      while (j < fn.end) {
        j = execLine(j, fn.indent);
        if (vars.__return !== undefined) {
          ret = vars.__return;
          delete vars.__return;
          break;
        }
      }
    } finally {
      fn.params.forEach(p => {
        if (backup[p] === undefined) delete vars[p];
        else vars[p] = backup[p];
      });
    }
    return ret;
  }

  function execLine(j, minIndent) {
    let line = lines[j];
    const trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith('#')) return j + 1;
    const ind = getIndent(line);
    if (ind < minIndent) return j;

    // def
    const defM = trimmed.match(/^def\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)\s*:/);
    if (defM) {
      const name = defM[1];
      const params = defM[2].split(',').map(s => s.trim()).filter(Boolean);
      const bodyStart = j + 1;
      const bodyEnd = skipBlock(bodyStart, ind);
      functions[name] = { params, start: bodyStart, end: bodyEnd, indent: ind + 4 };
      vars['__fn_' + name] = true;
      return bodyEnd;
    }

    // return
    if (trimmed.startsWith('return ') || trimmed === 'return') {
      const expr = trimmed === 'return' ? 'None' : trimmed.slice(7).trim();
      vars.__return = expr === 'None' ? undefined : evalExpr(expr);
      return j + 1;
    }

    // if
    if (trimmed.startsWith('if ') && trimmed.endsWith(':')) {
      const cond = evalExpr(trimmed.slice(3, -1).trim());
      const thenStart = j + 1;
      let thenEnd = skipBlock(thenStart, ind);
      let elseStart = -1, elseEnd = -1;
      if (thenEnd < lines.length && lines[thenEnd].trim() === 'else:' && getIndent(lines[thenEnd]) === ind) {
        elseStart = thenEnd + 1;
        elseEnd = skipBlock(elseStart, ind);
      }
      if (cond) {
        let k = thenStart;
        while (k < thenEnd) k = execLine(k, ind + 1);
      } else if (elseStart !== -1) {
        let k = elseStart;
        while (k < elseEnd) k = execLine(k, ind + 1);
      }
      return elseEnd !== -1 ? elseEnd : thenEnd;
    }

    // for
    const forM = trimmed.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+(.+):$/);
    if (forM) {
      const vname = forM[1];
      const iterable = evalExpr(forM[2].trim());
      const bodyStart = j + 1;
      const bodyEnd = skipBlock(bodyStart, ind);
      const arr = Array.isArray(iterable) ? iterable :
        (typeof iterable === 'string' ? iterable.split('') : []);
      for (const item of arr) {
        vars[vname] = item;
        let k = bodyStart;
        while (k < bodyEnd) k = execLine(k, ind + 1);
        if (vars.__return !== undefined) break;
      }
      return bodyEnd;
    }

    // while
    if (trimmed.startsWith('while ') && trimmed.endsWith(':')) {
      const condExpr = trimmed.slice(6, -1).trim();
      const bodyStart = j + 1;
      const bodyEnd = skipBlock(bodyStart, ind);
      let guard = 0;
      while (evalExpr(condExpr)) {
        let k = bodyStart;
        while (k < bodyEnd) k = execLine(k, ind + 1);
        if (++guard > 10000) throw new Error('Слишком много итераций цикла');
        if (vars.__return !== undefined) break;
      }
      return bodyEnd;
    }

    // print
    if (trimmed.startsWith('print(') && trimmed.endsWith(')')) {
      const inside = trimmed.slice(6, -1);
      if (!inside.trim()) { output.push(''); return j + 1; }
      const parts = splitArgs(inside).map(p => {
        // sep handling simplified
        const v = evalExpr(p);
        if (Array.isArray(v)) return '[' + v.join(', ') + ']';
        if (v === true) return 'True';
        if (v === false) return 'False';
        return String(v);
      });
      output.push(parts.join(' '));
      return j + 1;
    }

    // assignment (including a, b = ...)
    if (trimmed.includes('=') && !trimmed.startsWith('==') && !/[=!<>]=/.test(trimmed.split('=')[0] + '==')) {
      // check not comparison
      const eqPos = findOp(trimmed, '=');
      if (eqPos !== -1 && trimmed[eqPos+1] !== '=') {
        const left = trimmed.slice(0, eqPos).trim();
        const right = trimmed.slice(eqPos + 1).trim();
        if (left.includes(',')) {
          const names = left.split(',').map(s => s.trim());
          // tuple assign: a, b = b, a+b
          const rights = splitArgs(right).map(evalExpr);
          if (rights.length === 1 && Array.isArray(rights[0])) {
            names.forEach((n, idx) => { vars[n] = rights[0][idx]; });
          } else {
            names.forEach((n, idx) => { vars[n] = rights[idx]; });
          }
        } else {
          vars[left] = evalExpr(right);
        }
        return j + 1;
      }
    }

    // bare expression (e.g. function call)
    try { evalExpr(trimmed); } catch (e) { /* ignore */ }
    return j + 1;
  }

  // main run
  i = 0;
  while (i < lines.length) {
    i = execLine(i, 0);
    if (vars.__return !== undefined) break;
  }

  return output.join('\n');
}

function updateNav(activeGrade) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const g = btn.dataset.grade;
    btn.classList.toggle('active', g && parseInt(g) === activeGrade);
  });
}

document.addEventListener('DOMContentLoaded', () => showHome());
