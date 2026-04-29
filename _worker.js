const DEFAULT_OPENAI_MODEL = "gpt-4.1-mini";
const DEFAULT_OPENAI_TEMPERATURE = 0.3;
const DEFAULT_OPENAI_MAX_TOKENS = 1900;

const AC_CONFIG = {
  action: "https://sixminds88525.activehosted.com/proc.php",
  hidden: {
    u: "73",
    f: "73",
    s: "",
    c: "0",
    m: "0",
    act: "sub",
    v: "2",
    or: "48e16451-12a4-47ca-a0fc-09b468274299",
  },
  privacyLabel: "Acepto las condiciones de uso y política de privacidad",
  commsLabel: "Acepto recibir de INESDI comunicaciones promocionales de productos y/o actividades de terceras entidades.",
};

const AC_PRIVACY_LABEL = "Acepto las condiciones de uso y pol\u00edtica de privacidad";
const AC_COMMS_LABEL = "Acepto recibir de INESDI comunicaciones promocionales de productos y/o actividades de terceras entidades (tanto propias del Grupo Planeta como ajenas).";

// Fill these ActiveCampaign custom field IDs once they exist in the form builder.
// Example: score: "31" means submitLead will send field[31] with the diagnosis score.
const AC_DIAG_FIELD_MAP = {
  score: "",
  benchmark: "",
  summary: "",
  bestFirstMove: "",
  priorities: "",
  roadmap: "",
  courses: "",
  cta: "",
};

const OBJECTIVE_MAP = {
  save_time: "Ahorrar tiempo en tareas repetitivas",
  productivity: "Mejorar la productividad del equipo",
  reduce_costs: "Reducir costes operativos",
  sales_leads: "Generar más ventas o leads",
  quality: "Mejorar la calidad del trabajo",
  customer_service: "Mejorar la atención al cliente",
  speed_processes: "Acelerar procesos internos",
  explore: "Explorar oportunidades sin objetivo claro",
};

const IMPACT_AREA_MAP = {
  marketing: "Marketing",
  sales: "Ventas",
  support: "Atención al cliente",
  ops: "Operaciones",
  hr: "RRHH",
  admin: "Administración / back office",
  management: "Dirección / estrategia",
  product: "Producto / innovación",
  finance: "Finanzas / control de gestión",
  it_data: "IT / datos",
  procurement: "Compras / logística",
  legal: "Legal / compliance",
  unclear: "No lo tenemos claro aún",
};

const AI_SITUATION_MAP = {
  none: "No usamos IA actualmente",
  individual: "Algunas personas la usan por su cuenta",
  pilots: "Hemos hecho pruebas o pequeños pilotos",
  regular: "Ya la usamos en algunos procesos de forma regular",
  embedded: "La IA forma parte del trabajo habitual de varios equipos",
};

const AI_USERS_MAP = {
  nobody: "Nadie",
  management: "Solo dirección / managers",
  few_people: "Solo algunas personas concretas",
  one_department: "Un único departamento",
  several_departments: "Varios departamentos",
  company_wide: "Prácticamente toda la empresa",
};

const AI_TOOL_MAP = {
  chatgpt: "ChatGPT",
  copilot: "Microsoft Copilot",
  gemini: "Gemini",
  claude: "Claude",
  canva: "Canva / herramientas creativas con IA",
  automations: "Automatizaciones con IA",
  notion: "Notion AI / asistentes internos",
  crm_ai: "CRM o herramientas comerciales con IA",
  perplexity: "Perplexity / research con IA",
  meeting_ai: "Asistentes de reuniones / transcripción",
  bi_ai: "BI o analítica con IA",
  internal_agents: "Agentes o bots internos",
  specific: "Otras herramientas específicas",
  none: "No usamos ninguna",
};

const TASK_MAP = {
  writing: "Redacción de contenidos o documentos",
  creative_assets: "Creatividades, diseños o piezas visuales",
  analysis: "Análisis de información / datos",
  reports: "Presentaciones, resúmenes o reportes",
  customer_replies: "Atención a clientes / respuestas repetitivas",
  admin: "Tareas administrativas",
  sales_prospecting: "Prospección comercial / ventas",
  proposals: "Ofertas, propuestas o presupuestos",
  crm_erp: "Actualización de CRM / ERP",
  coordination: "Organización y coordinación interna",
  training_docs: "Formación / documentación interna",
  email_meetings: "Emails, reuniones y seguimiento",
  knowledge_search: "Búsqueda de información en documentos",
  data_entry: "Clasificación o entrada manual de datos",
  planning: "Planificación de proyectos o tareas",
  quality_review: "Revisión de calidad / control de errores",
  unclear: "No lo tenemos claro todavía",
};

const USAGE_MAP = {
  "0_5": "0 - 5 horas / empleado / semana",
  "5_10": "5 - 10 horas / empleado / semana",
  "10_15": "10 - 15 horas / empleado / semana",
  "15_25": "15 - 20 horas / empleado / semana",
  "20_30": "20 - 30 horas / empleado / semana",
  "30_plus": "Más de 30 horas / empleado / semana",
};

const NEW_BLOCKER_MAP = {
  start: "No sabemos por dónde empezar",
  training: "Falta de formación del equipo",
  time: "Falta de tiempo",
  strategy: "Falta de estrategia clara",
  tools: "Dudas sobre herramientas",
  privacy: "Dudas sobre privacidad / seguridad",
  use_cases: "No vemos aún casos de uso claros",
  data_quality: "Datos desordenados o poco accesibles",
  system_silos: "Sistemas desconectados / silos",
  process_clarity: "Procesos poco definidos",
  leadership: "Falta de apoyo interno / liderazgo",
  ownership: "No hay owner claro",
  measurement: "No sabemos medir impacto / ROI",
  change_management: "Resistencia al cambio del equipo",
  budget: "Presupuesto limitado",
};

const PRIORITY_MAP = {
  training: "Formar al equipo",
  use_cases: "Detectar casos de uso concretos",
  automate: "Automatizar tareas",
  personal_productivity: "Mejorar productividad individual",
  department_roadmap: "Crear un roadmap por departamentos",
  tools: "Elegir herramientas adecuadas",
  adoption_strategy: "Diseñar una estrategia de adopción interna",
};

const COURSE_URLS = {
  "Automatizaciones con IA": "https://www.sixminds.com/curso-automatizaciones-con-ia",
  "IA para Marketing": "https://www.sixminds.com/curso-ia-para-marketing",
  "IA Generativa para Imagen y Video": "https://www.sixminds.com/curso-ia-generativa-visual",
  "IA para crear Aplicaciones Web": "https://www.sixminds.com/curso-especializado-aplicaciones-web",
  "Productividad con IA para RRHH": "https://www.sixminds.com/curso-especializado-en-productividad-de-la-inteligencia-artificial-para-rhh",
};
const COURSE_NAMES = Object.keys(COURSE_URLS);

function bucketEmployees(value) {
  if (["1-9", "10-49", "50-249", "+250"].includes(String(value || ""))) return String(value);
  const count = Number(String(value || "").replace(/[^\d]/g, ""));
  if (!count || count <= 9) return "1-9";
  if (count <= 49) return "10-49";
  if (count <= 249) return "50-249";
  return "+250";
}

function deriveAcSector(payload) {
  const areas = (payload?.chips?.areas || []).filter(item => item && item !== "unclear");
  const sectorMap = {
    marketing: "Marketing",
    sales: "Ventas",
    support: "Atención al cliente",
    ops: "Operaciones",
    hr: "RRHH",
    admin: "Administración / back office",
    management: "Dirección / estrategia",
    product: "Producto / innovación",
    finance: "Finanzas / control de gestión",
    it_data: "IT / datos",
    procurement: "Compras / logística",
    legal: "Legal / compliance",
  };
  const labels = areas.map(item => sectorMap[item]).filter(Boolean);
  return labels.length ? labels.join(", ") : "No indicado";
}

function buildAcDebug(payload) {
  const contact = payload?.contact || {};
  return {
    company: contact.company || "",
    role: contact.role || "",
    sector: deriveAcSector(payload),
    employees: bucketEmployees(contact.employees),
    hasPhone: !!contact.phone,
    hasPrivacy: true,
    hasComms: !!contact.comms,
  };
}

function buildAcDiagnosisFields(analysis) {
  const priorities = Array.isArray(analysis?.priorities) ? analysis.priorities.slice(0, 3) : [];
  const roadmap = Array.isArray(analysis?.roadmap) ? analysis.roadmap.slice(0, 3) : [];
  const courses = Array.isArray(analysis?.courses) ? analysis.courses.slice(0, 2) : [];
  const cta = analysis?.cta || {};
  const bestMove = analysis?.best_first_move || {};

  return {
    score: analysis?.score ? String(analysis.score) : "",
    benchmark: analysis?.benchmark || "",
    summary: analysis?.summary || "",
    bestFirstMove: [bestMove.title, bestMove.process, bestMove.first_action].filter(Boolean).join(" | "),
    priorities: priorities.map((item, index) => `${index + 1}. ${item.title}: ${item.body}`).join("\n"),
    roadmap: roadmap.map(item => `${item.phase} - ${item.title}: ${(item.actions || []).join(", ")}`).join("\n"),
    courses: courses.map(item => item.name).join(", "),
    cta: [cta?.primary?.label, cta?.secondary?.label].filter(Boolean).join(" | "),
  };
}

const DIAGNOSIS_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["headline", "summary", "score", "benchmark", "best_first_move", "priorities", "roadmap", "courses", "cta"],
  properties: {
    headline: { type: "string" },
    summary: { type: "string" },
    score: { type: "number" },
    benchmark: { type: "string" },
    best_first_move: {
      type: "object",
      additionalProperties: false,
      required: ["title", "process", "why", "first_action", "expected_effect"],
      properties: {
        title: { type: "string" },
        process: { type: "string" },
        why: { type: "string" },
        first_action: { type: "string" },
        expected_effect: { type: "string" },
      },
    },
    priorities: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["title", "body", "impact", "horizon", "why_now", "concrete_process", "symptom", "first_intervention", "business_effect"],
        properties: {
          title: { type: "string" },
          body: { type: "string" },
          impact: { type: "string", enum: ["Alto", "Medio"] },
          horizon: { type: "string", enum: ["30d", "60d", "90d"] },
          why_now: { type: "string" },
          concrete_process: { type: "string" },
          symptom: { type: "string" },
          first_intervention: { type: "string" },
          business_effect: { type: "string" },
        },
      },
    },
    roadmap: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["phase", "title", "actions"],
        properties: {
          phase: { type: "string", enum: ["30 días", "60 días", "90 días"] },
          title: { type: "string" },
          actions: {
            type: "array",
            minItems: 3,
            maxItems: 3,
            items: { type: "string" },
          },
        },
      },
    },
    courses: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["name", "reason"],
        properties: {
          name: { type: "string", enum: COURSE_NAMES },
          reason: { type: "string" },
        },
      },
    },
    cta: {
      type: "object",
      additionalProperties: false,
      required: ["primary", "secondary"],
      properties: {
        primary: {
          type: "object",
          additionalProperties: false,
          required: ["label", "reason", "type"],
          properties: {
            label: { type: "string" },
            reason: { type: "string" },
            type: { type: "string", enum: ["call", "course"] },
          },
        },
        secondary: {
          type: "object",
          additionalProperties: false,
          required: ["label", "reason", "type"],
          properties: {
            label: { type: "string" },
            reason: { type: "string" },
            type: { type: "string", enum: ["call", "course"] },
          },
        },
      },
    },
  },
};

function json(statusCode, body) {
  return new Response(statusCode === 204 ? null : JSON.stringify(body), {
    status: statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

const ADMIN_EMAIL_FALLBACK = "hello@sixminds.com";
const ADMIN_PASSWORD_FALLBACK = "Sixminds2024";
const ADMIN_COOKIE_NAME = "sixminds_admin_session";

function getAdminEmail(env) {
  return env.ADMIN_EMAIL || ADMIN_EMAIL_FALLBACK;
}

function getAdminPassword(env) {
  return env.ADMIN_PASSWORD || ADMIN_PASSWORD_FALLBACK;
}

function getAdminSecret(env) {
  return env.ADMIN_SESSION_SECRET || `${getAdminEmail(env)}|${getAdminPassword(env)}|sixminds-admin`;
}

async function sha256Hex(value) {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, "0")).join("");
}

async function buildAdminSessionToken(env) {
  return sha256Hex(`${getAdminEmail(env)}|${getAdminPassword(env)}|${getAdminSecret(env)}`);
}

function getCookie(request, name) {
  const cookieHeader = request.headers.get("Cookie") || "";
  const parts = cookieHeader.split(/;\s*/);
  for (const part of parts) {
    const index = part.indexOf("=");
    if (index === -1) continue;
    const key = part.slice(0, index);
    const value = part.slice(index + 1);
    if (key === name) return value;
  }
  return "";
}

async function isAdminAuthenticated(request, env) {
  const cookie = getCookie(request, ADMIN_COOKIE_NAME);
  if (!cookie) return false;
  const expected = await buildAdminSessionToken(env);
  return cookie === expected;
}

function withCookie(response, cookieValue) {
  const headers = new Headers(response.headers);
  headers.append("Set-Cookie", cookieValue);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function noStoreHtml(body) {
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

async function ensureDb(env) {
  if (!env.DB) throw new Error("missing_d1_binding");
  const desiredColumns = ["id", "created_at", "email", "company", "analysis_json"];
  const tableInfo = await env.DB.prepare("PRAGMA table_info(submissions);").all().catch(() => ({ results: [] }));
  const existingColumns = (tableInfo.results || []).map(row => row.name);
  const hasDesiredSchema = desiredColumns.length === existingColumns.length && desiredColumns.every(column => existingColumns.includes(column));

  if (existingColumns.length && !hasDesiredSchema) {
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS submissions_v2 (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        email TEXT,
        company TEXT,
        analysis_json TEXT NOT NULL
      )
    `).run();
    await env.DB.prepare(`
      INSERT INTO submissions_v2 (id, created_at, email, company, analysis_json)
      SELECT
        id,
        COALESCE(created_at, CURRENT_TIMESTAMP),
        COALESCE(email, ''),
        COALESCE(company, ''),
        COALESCE(analysis_json, '{}')
      FROM submissions
    `).run();
    await env.DB.prepare("DROP TABLE submissions").run();
    await env.DB.prepare("ALTER TABLE submissions_v2 RENAME TO submissions").run();
    await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions(created_at DESC)").run();
    await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_submissions_email ON submissions(email)").run();
    return;
  }

  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      email TEXT,
      company TEXT,
      analysis_json TEXT NOT NULL
    )
  `).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions(created_at DESC)").run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_submissions_email ON submissions(email)").run();
}

async function saveSubmission(env, payload, analysis, activeCampaignResult) {
  if (!env.DB) return { stored: false, reason: "missing_d1_binding" };
  await ensureDb(env);
  const contact = payload.contact || {};
  await env.DB.prepare(`
    INSERT INTO submissions (email, company, analysis_json)
    VALUES (?, ?, ?)
  `).bind(
    contact.email || "",
    contact.company || "",
    JSON.stringify(analysis)
  ).run();
  return { stored: true };
}

async function listSubmissions(env, limit = 100) {
  if (!env.DB) throw new Error("missing_d1_binding");
  await ensureDb(env);
  const result = await env.DB.prepare(`
    SELECT id, created_at, email, company, analysis_json
    FROM submissions
    ORDER BY datetime(created_at) DESC, id DESC
    LIMIT ?
  `).bind(Math.max(1, Math.min(250, Number(limit) || 100))).all();
  return (result.results || []).map(row => ({
    ...row,
    analysis: safeParseJson(row.analysis_json),
  }));
}

function safeParseJson(value) {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function buildAdminPage() {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sixminds Admin</title>
  <style>
    :root{--g:#75fb92;--bg:#070707;--c1:#0d0f0d;--c2:#111411;--ln:rgba(117,251,146,.18);--w:#fff;--w6:rgba(255,255,255,.78);--r:22px;--f:Inter,system-ui,sans-serif}
    *{box-sizing:border-box} body{margin:0;font-family:var(--f);background:var(--bg);color:var(--w)}
    .wrap{max-width:1320px;margin:0 auto;padding:32px 20px 48px}
    .card{background:linear-gradient(180deg,rgba(117,251,146,.04),rgba(255,255,255,.02));border:1px solid var(--ln);border-radius:var(--r);padding:24px}
    .top{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:24px}
    h1,h2,h3{margin:0 0 12px;font-weight:600} p{margin:0;color:var(--w6);line-height:1.6}
    .grid{display:grid;grid-template-columns:320px minmax(0,1fr);gap:20px}
    .login{max-width:420px;margin:40px auto}
    label{display:block;font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:var(--w6);margin:0 0 8px}
    input{width:100%;padding:14px 16px;border-radius:16px;border:1px solid var(--ln);background:var(--c1);color:var(--w);margin:0 0 14px}
    button{border:0;border-radius:999px;padding:14px 22px;background:var(--g);color:#000;font-weight:600;cursor:pointer}
    .ghost{background:transparent;color:var(--w);border:1px solid var(--ln)}
    .list{display:flex;flex-direction:column;gap:12px;max-height:78vh;overflow:auto;padding-right:4px}
    .item{padding:16px;border:1px solid var(--ln);border-radius:18px;background:var(--c1);cursor:pointer}
    .item.active{border-color:var(--g);background:rgba(117,251,146,.08)}
    .meta{font-size:13px;color:var(--w6);line-height:1.5}
    .title{font-size:18px;font-weight:600;margin:0 0 6px}
    .detail{min-height:78vh}
    .pill{display:inline-flex;padding:6px 10px;border:1px solid var(--ln);border-radius:999px;font-size:12px;color:var(--w6);margin:0 8px 8px 0}
    .section{margin-top:20px}
    pre{white-space:pre-wrap;word-break:break-word;background:var(--c1);border:1px solid var(--ln);padding:16px;border-radius:16px;color:var(--w6);font-size:13px;line-height:1.6;overflow:auto}
    .error{color:#ff8f8f;margin-top:10px}
    .hidden{display:none}
    @media(max-width:960px){.grid{grid-template-columns:1fr}.detail{min-height:auto}.list{max-height:none}}
  </style>
</head>
<body>
  <div class="wrap">
    <div id="loginView" class="login card">
      <h1>Sixminds Admin</h1>
      <p>Accede al historial de diagnósticos generados.</p>
      <div class="section">
        <label for="email">Email</label>
        <input id="email" type="email" autocomplete="username" />
        <label for="password">Password</label>
        <input id="password" type="password" autocomplete="current-password" />
        <button id="loginBtn">Entrar</button>
        <div id="loginError" class="error hidden"></div>
      </div>
    </div>

    <div id="dashboardView" class="hidden">
      <div class="top">
        <div>
          <h1>Historial de diagnósticos</h1>
          <p>Consulta todos los submits y las respuestas generadas por la IA.</p>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="ghost" id="refreshBtn">Actualizar</button>
          <button class="ghost" id="logoutBtn">Cerrar sesión</button>
        </div>
      </div>
      <div class="grid">
        <div class="card">
          <div id="list" class="list"></div>
        </div>
        <div class="card detail">
          <div id="detailEmpty"><p>Selecciona un diagnóstico para ver el detalle.</p></div>
          <div id="detail" class="hidden"></div>
        </div>
      </div>
    </div>
  </div>
  <script>
    const state = { submissions: [], selectedId: null };
    const $ = id => document.getElementById(id);
    async function api(path, options = {}) {
      const response = await fetch(path, {
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
        ...options
      });
      const text = await response.text();
      let json = {};
      try { json = text ? JSON.parse(text) : {}; } catch {}
      if (!response.ok) throw new Error(json.error || text || 'Request failed');
      return json;
    }
    function showLogin(error = '') {
      $('loginView').classList.remove('hidden');
      $('dashboardView').classList.add('hidden');
      $('loginError').textContent = error;
      $('loginError').classList.toggle('hidden', !error);
    }
    function showDashboard() {
      $('loginView').classList.add('hidden');
      $('dashboardView').classList.remove('hidden');
    }
    function renderList() {
      const list = $('list');
      list.innerHTML = state.submissions.map(item => {
        const active = item.id === state.selectedId ? ' active' : '';
        const score = item.analysis?.score ?? '—';
        const title = item.company || item.email || 'Sin empresa';
        const subtitle = item.email || 'Sin email';
        return '<div class="item' + active + '" data-id="' + item.id + '">' +
          '<div class="title">' + escapeHtml(title) + '</div>' +
          '<div class="meta">' + escapeHtml(subtitle) + '</div>' +
          '<div class="meta" style="margin-top:6px">Score ' + escapeHtml(String(score)) + ' · ' + escapeHtml(item.created_at || '') + '</div>' +
        '</div>';
      }).join('');
      [...list.querySelectorAll('.item')].forEach(el => el.addEventListener('click', () => {
        state.selectedId = Number(el.dataset.id);
        renderList();
        renderDetail();
      }));
    }
    function renderDetail() {
      const item = state.submissions.find(entry => entry.id === state.selectedId);
      $('detailEmpty').classList.toggle('hidden', !!item);
      $('detail').classList.toggle('hidden', !item);
      if (!item) return;
      const analysis = item.analysis || {};
      $('detail').innerHTML =
        '<h2>' + escapeHtml(item.company || item.email || 'Diagnóstico') + '</h2>' +
        '<p>' + escapeHtml(item.created_at || '') + '</p>' +
        '<div class="section">' +
          '<span class="pill">Email: ' + escapeHtml(item.email || '—') + '</span>' +
          '<span class="pill">Empresa: ' + escapeHtml(item.company || '—') + '</span>' +
          '<span class="pill">Score: ' + escapeHtml(String(analysis.score ?? '—')) + '</span>' +
        '</div>' +
        '<div class="section"><h3>Headline</h3><p>' + escapeHtml(analysis.headline || '—') + '</p></div>' +
        '<div class="section"><h3>Summary</h3><p>' + escapeHtml(analysis.summary || '—') + '</p></div>' +
        '<div class="section"><h3>Respuesta IA</h3><pre>' + escapeHtml(JSON.stringify(item.analysis, null, 2)) + '</pre></div>';
    }
    function escapeHtml(value) {
      return String(value ?? '').replace(/[&<>\"']/g, m => ({ '&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;' }[m]));
    }
    async function checkSession() {
      try {
        const data = await api('/api/admin/session');
        if (!data.authenticated) return showLogin();
        showDashboard();
        await loadSubmissions();
      } catch {
        showLogin();
      }
    }
    async function loadSubmissions() {
      const data = await api('/api/admin/submissions');
      state.submissions = data.submissions || [];
      state.selectedId = state.submissions[0]?.id || null;
      renderList();
      renderDetail();
    }
    $('loginBtn').addEventListener('click', async () => {
      try {
        await api('/api/admin/login', {
          method: 'POST',
          body: JSON.stringify({ email: $('email').value.trim(), password: $('password').value })
        });
        showDashboard();
        await loadSubmissions();
      } catch (error) {
        showLogin(error.message || 'Login incorrecto');
      }
    });
    $('refreshBtn').addEventListener('click', loadSubmissions);
    $('logoutBtn').addEventListener('click', async () => {
      await api('/api/admin/logout', { method: 'POST' });
      showLogin();
    });
    checkSession();
  </script>
</body>
</html>`;
}

function calcMetrics(payload) {
  const a = payload.answers || {};
  const chips = payload.chips || {};
  const contact = payload.contact || {};
  const situationScoreMap = { none: 14, individual: 28, pilots: 44, regular: 62, embedded: 76 };
  const lostHoursScoreMap = { "0_5": 2, "5_10": 5, "10_15": 8, "15_25": 11, "20_30": 14, "30_plus": 16 };
  const lostHoursConservativeMap = { "0_5": 2, "5_10": 6, "10_15": 9, "15_25": 13, "20_30": 18, "30_plus": 22 };
  const userScoreMap = { nobody: 0, management: 4, few_people: 8, one_department: 12, several_departments: 18, company_wide: 24 };
  const situationHoursMap = { none: 3.8, individual: 3.1, pilots: 2.5, regular: 1.8, embedded: 1.2 };
  const aiSavingsMap = { none: 0.26, individual: 0.24, pilots: 0.21, regular: 0.17, embedded: 0.13 };
  const areaCoverage = { sales: 0.32, marketing: 0.28, support: 0.28, ops: 0.42, hr: 0.24, admin: 0.34, management: 0.2, product: 0.24, finance: 0.22, it_data: 0.2, procurement: 0.26, legal: 0.18, unclear: 0.26 };

  const parsedEmployees = Number(String(contact.employees || "").replace(/[^\d]/g, ""));
  const team = Math.max(1, Math.min(500, parsedEmployees || 12));
  const revenue = 1250000;
  const areas = chips.areas || [];
  const tasks = chips.tasks || [];
  const blockers = chips.blockers || [];
  const tools = chips.ai_tools || [];
  const mainArea = areas.find(area => area !== "unclear") || "ops";
  const taskCount = Math.max(1, tasks.filter(item => item !== "unclear").length || 1);
  const blockerCount = Math.max(1, blockers.length || 1);
  const toolCount = tools.includes("none") ? 0 : tools.length;
  const hourlyCost = team <= 10 ? 24 : team <= 50 ? 31 : 38;
  const impactedShare = areaCoverage[mainArea] || 0.3;
  const impactedTeam = Math.max(2, Math.min(team, Math.round(team * impactedShare)));
  const blockerFactor = 1 + Math.min(0.18, (blockerCount - 1) * 0.04);
  const taskFactor = 1 + Math.min(0.12, (taskCount - 1) * 0.04);
  const declaredWeeklyHoursPerEmployee = lostHoursConservativeMap[a.usage];
  const modeledWeeklyHoursPerEmployee = (situationHoursMap[a.ai_situation] || 3.1) * blockerFactor * taskFactor;
  const blendedWeeklyHoursPerEmployee = declaredWeeklyHoursPerEmployee
    ? (declaredWeeklyHoursPerEmployee * 0.72) + (modeledWeeklyHoursPerEmployee * 0.28)
    : modeledWeeklyHoursPerEmployee;
  const weeklyHoursPerEmployee = Math.min(24, Math.max(1.5, blendedWeeklyHoursPerEmployee));
  const weeklyHoursTeam = weeklyHoursPerEmployee * impactedTeam;
  const hrs = weeklyHoursPerEmployee;
  const scoreRaw =
    (situationScoreMap[a.ai_situation] || 28) +
    (lostHoursScoreMap[a.usage] || 0) +
    (userScoreMap[a.ai_users] || 0) +
    Math.min(toolCount * 2, 10) -
    Math.min(blockerCount * 3, 14) +
    (team > 40 ? 3 : 0) -
    (a.objective === "explore" ? 4 : 0);
  const score = Math.max(8, Math.min(92, Math.round(scoreRaw)));
  const totalH = Math.round(weeklyHoursPerEmployee * 44);
  const moneyL = Math.round(totalH * hourlyCost);
  const totalHTeam = Math.round(weeklyHoursTeam * 44);
  const moneyLTeam = Math.round(totalHTeam * hourlyCost);
  const saveRate = aiSavingsMap[a.ai_situation] || 0.24;
  const hSaved = Math.round(totalH * saveRate);
  const mSaved = Math.round(moneyL * saveRate);
  const hSavedTeam = Math.round(totalHTeam * saveRate);
  const mSavedTeam = Math.round(moneyLTeam * saveRate);
  const roi12m = Math.round(mSaved * 1.35);
  const roi12mTeam = Math.round(mSavedTeam * 1.35);
  const benchmark =
    score < 30
      ? { label: "Por debajo del punto de partida habitual", note: "Hace falta priorizar un primer caso de uso, ownership y una implantación guiada para capturar valor rápido." }
      : score < 55
        ? { label: "Transición activa", note: "Ya existe interés y algo de base, pero aún faltan foco ejecutivo, adopción y criterio de escalado." }
        : score < 75
          ? { label: "Por encima de la media", note: "La empresa ya muestra madurez real. El siguiente salto pasa por orquestación, reporting y extensión a más áreas." }
          : { label: "Madurez avanzada", note: "La siguiente capa ya no es descubrir la IA, sino gobernarla, medirla y escalarla con más control." };

  return { team, impactedTeam, hrs: Math.round(hrs * 10) / 10, score, totalH, moneyL, totalHTeam, moneyLTeam, hSaved, mSaved, hSavedTeam, mSavedTeam, hourlyCost, revenue, roi12m, roi12mTeam, saveRate, benchmark };
}

function serializePayload(payload, metrics) {
  const a = payload.answers || {};
  const chips = payload.chips || {};
  const contact = payload.contact || {};
  return [
    `Empresa: ${contact.company || "No indicada"}`,
    `Contacto: ${contact.name || "No indicado"} - ${contact.role || "Cargo no indicado"}`,
    `Email: ${contact.email || "No indicado"}`,
    `Teléfono: ${contact.phone || "No indicado"}`,
    `Número de empleados: ${contact.employees || "No indicado"}`,
    `Objetivo IA 6-12 meses: ${OBJECTIVE_MAP[a.objective] || "No indicado"}`,
    `Áreas de impacto: ${(chips.areas || []).map(item => IMPACT_AREA_MAP[item] || item).join(", ") || "No indicado"}`,
    `Situación actual IA: ${AI_SITUATION_MAP[a.ai_situation] || "No indicado"}`,
    `Quién usa IA: ${AI_USERS_MAP[a.ai_users] || "No indicado"}`,
    `Herramientas IA: ${(chips.ai_tools || []).map(item => AI_TOOL_MAP[item] || item).join(", ") || "No indicado"}`,
    `Tareas que consumen más tiempo: ${(chips.tasks || []).map(item => TASK_MAP[item] || item).join(", ") || "No indicado"}`,
    `Horas semanales perdidas por empleado en tareas repetitivas automatizables: ${USAGE_MAP[a.usage] || "No indicado"}`,
    `Bloqueadores: ${(chips.blockers || []).map(item => NEW_BLOCKER_MAP[item] || item).join(", ") || "No indicado"}`,
    `Prioridad de arranque: ${PRIORITY_MAP[a.priority] || "No indicada"}`,
    `Resultado deseado en 90 días: ${payload.desiredOutcome || "No indicado"}`,
    `Score calculado: ${metrics.score}`,
    `Equipo impactado estimado: ${metrics.impactedTeam}`,
    `Horas perdidas estimadas por empleado al año: ${metrics.totalH}`,
    `Coste oculto anual estimado por empleado: EUR ${metrics.moneyL}`,
    `Ahorro anual priorizable por empleado: EUR ${metrics.mSaved}`,
    `Referencia interna de equipo impactado: ${metrics.impactedTeam} personas, ${metrics.totalHTeam} horas/año y EUR ${metrics.moneyLTeam} de coste anual agregado prudente`,
    payload.followupAnswers && Object.keys(payload.followupAnswers).length
      ? `Respuestas adicionales:\n${Object.entries(payload.followupAnswers).map(([k, v]) => `- ${k}: ${v}`).join("\n")}`
      : "",
  ].filter(Boolean).join("\n");
}

function resolveCourseUrl(name) {
  return COURSE_URLS[name] || "https://www.sixminds.com/empresas";
}

function rankCourses(payload) {
  const a = payload.answers || {};
  const areas = payload.chips?.areas || [];
  const tasks = payload.chips?.tasks || [];
  const blockers = payload.chips?.blockers || [];
  const tools = payload.chips?.ai_tools || [];
  const hasArea = value => areas.includes(value);
  const hasTask = value => tasks.includes(value);
  const hasBlocker = value => blockers.includes(value);
  const hasTool = value => tools.includes(value);
  const ranking = new Map(COURSE_NAMES.map(name => [name, { score: 0, reasons: [] }]));

  const add = (name, pts, reason) => {
    const item = ranking.get(name);
    if (!item) return;
    item.score += pts;
    if (reason && !item.reasons.includes(reason)) item.reasons.push(reason);
  };

  if (hasArea("marketing")) {
    add("IA para Marketing", 6, "el foco principal está en marketing");
    add("IA Generativa para Imagen y Video", 3, "hay margen para acelerar la producción visual");
  }
  if (hasArea("sales")) {
    add("Automatizaciones con IA", 5, "ventas necesita más velocidad en seguimiento y tareas repetitivas");
    add("IA para Marketing", 3, "parte del impacto buscado toca mensajes, demanda y conversión");
  }
  if (hasArea("hr")) {
    add("Productividad con IA para RRHH", 7, "RRHH aparece como área prioritaria");
    add("Automatizaciones con IA", 2, "también hay procesos internos que pueden simplificarse");
  }
  if (hasArea("product") || hasArea("it_data") || hasArea("finance")) {
    add("IA para crear Aplicaciones Web", 6, "hace falta estructurar mejor herramientas internas y procesos");
    add("Automatizaciones con IA", 3, "también hay margen para conectar tareas repetitivas");
  }
  if (hasArea("procurement")) {
    add("Automatizaciones con IA", 5, "compras o logística pueden ganar velocidad con flujos y control operativo");
    add("IA para crear Aplicaciones Web", 3, "puede ayudar a ordenar datos, estados y herramientas internas");
  }
  if (hasArea("legal")) {
    add("IA para crear Aplicaciones Web", 4, "legal o compliance suele necesitar más orden documental y trazabilidad");
    add("Automatizaciones con IA", 2, "también hay margen en revisión y circuitos internos");
  }
  if (hasArea("ops") || hasArea("admin") || hasArea("support")) add("Automatizaciones con IA", 6, "la mayor oportunidad está en procesos repetitivos y operativa interna");
  if (hasArea("management")) {
    add("Automatizaciones con IA", 3, "dirección necesita más visibilidad y cadencia operativa");
    add("IA para crear Aplicaciones Web", 2, "puede ayudar a ordenar reporting y herramientas internas");
  }

  if (hasTask("writing")) {
    add("IA para Marketing", 5, "hay carga importante de redacción, contenidos o mensajes");
    add("IA Generativa para Imagen y Video", 3, "la parte creativa puede ganar más velocidad");
  }
  if (hasTask("creative_assets")) {
    add("IA Generativa para Imagen y Video", 6, "hay una necesidad directa de acelerar creatividades y producción visual");
    add("IA para Marketing", 2, "las piezas visuales suelen impactar también en campañas y conversión");
  }
  if (hasTask("sales_prospecting")) {
    add("IA para Marketing", 4, "hay fricción en prospección y mensajes comerciales");
    add("Automatizaciones con IA", 3, "conviene convertir seguimiento y rutinas en flujos más ágiles");
  }
  if (hasTask("proposals")) {
    add("IA para Marketing", 3, "hay margen para acelerar propuestas y argumentarios comerciales");
    add("Automatizaciones con IA", 3, "conviene estructurar mejor la generación y envío de ofertas");
  }
  if (hasTask("crm_erp") || hasTask("data_entry")) {
    add("Automatizaciones con IA", 5, "hay demasiada actualización manual en sistemas internos");
    add("IA para crear Aplicaciones Web", 2, "puede ayudar a ordenar entradas, validaciones y vistas internas");
  }
  if (hasTask("customer_replies") || hasTask("coordination") || hasTask("admin") || hasTask("email_meetings")) add("Automatizaciones con IA", 5, "hay demasiado trabajo manual en coordinación o respuesta repetitiva");
  if (hasTask("training_docs")) add("Productividad con IA para RRHH", 5, "la necesidad pasa por formación y documentación interna");
  if (hasTask("analysis") || hasTask("reports")) {
    add("IA para crear Aplicaciones Web", 4, "hay oportunidad para estructurar reporting y herramientas internas");
    add("Automatizaciones con IA", 2, "también puede reducirse trabajo manual en reporting");
  }
  if (hasTask("knowledge_search")) {
    add("IA para crear Aplicaciones Web", 4, "hay fricción para localizar y reutilizar conocimiento interno");
    add("Productividad con IA para RRHH", 2, "también mejora la adopción si el equipo encuentra mejor la información");
  }
  if (hasTask("planning")) {
    add("Automatizaciones con IA", 3, "hay margen para ordenar seguimiento, coordinación y ejecución");
    add("IA para crear Aplicaciones Web", 2, "puede ayudar a estructurar mejor flujos internos y vistas operativas");
  }
  if (hasTask("quality_review")) {
    add("IA Generativa para Imagen y Video", 3, "hay una necesidad clara de elevar calidad de entregables");
    add("IA para Marketing", 2, "puede mejorar consistencia y output del equipo");
  }

  if (a.objective === "sales_leads") add("IA para Marketing", 4, "el objetivo principal es generar más ventas o leads");
  if (a.objective === "quality") add("IA Generativa para Imagen y Video", 4, "el objetivo central es mejorar la calidad del trabajo");
  if (a.objective === "save_time" || a.objective === "reduce_costs" || a.objective === "speed_processes") add("Automatizaciones con IA", 4, "la prioridad es ahorrar tiempo y reducir fricción");
  if (a.objective === "productivity") {
    add("Automatizaciones con IA", 2, "la productividad mejora cuando se elimina trabajo repetitivo");
    add("Productividad con IA para RRHH", 2, "la adopción interna también condiciona la productividad");
  }

  if (a.priority === "training") add("Productividad con IA para RRHH", 3, "hay prioridad clara en formación y adopción");
  if (a.priority === "automate") add("Automatizaciones con IA", 5, "la prioridad declarada es automatizar tareas");
  if (a.priority === "tools" || a.priority === "department_roadmap" || a.priority === "adoption_strategy") add("IA para crear Aplicaciones Web", 3, "hay que estructurar herramientas y despliegue");
  if (a.priority === "use_cases") {
    add("Automatizaciones con IA", 2, "sirve para aterrizar casos de uso operativos");
    add("IA para Marketing", 2, "puede convertir oportunidades comerciales en casos concretos");
  }

  if (hasBlocker("training")) add("Productividad con IA para RRHH", 3, "el bloqueo principal es la capacitación del equipo");
  if (hasBlocker("tools") || hasBlocker("data_quality") || hasBlocker("process_clarity") || hasBlocker("system_silos")) add("IA para crear Aplicaciones Web", 3, "hay que ordenar herramientas, datos o procesos");
  if (hasBlocker("time") || hasBlocker("use_cases")) add("Automatizaciones con IA", 3, "conviene empezar por quick wins muy prácticos");
  if (hasBlocker("budget")) add("Automatizaciones con IA", 2, "permite demostrar retorno sin un rediseño grande");
  if (hasBlocker("ownership") || hasBlocker("measurement")) add("IA para crear Aplicaciones Web", 2, "hace falta más orden para gobernar iniciativas y medir impacto");
  if (hasBlocker("change_management")) add("Productividad con IA para RRHH", 3, "la adopción del equipo es un bloqueo real que hay que trabajar");

  if (hasTool("canva")) add("IA Generativa para Imagen y Video", 4, "ya existe una base creativa sobre la que escalar");
  if (hasTool("crm_ai")) add("IA para Marketing", 3, "ya usan herramientas comerciales con IA");
  if (hasTool("automations")) add("Automatizaciones con IA", 2, "ya hay una base para profundizar en automatización");
  if (hasTool("notion")) add("Productividad con IA para RRHH", 2, "ya usan asistentes internos que pueden ordenarse mejor");
  if (hasTool("meeting_ai") || hasTool("internal_agents")) add("Automatizaciones con IA", 2, "ya existe base para escalar flujos internos asistidos");
  if (hasTool("perplexity")) add("IA para Marketing", 2, "ya hay hábito de research asistido que puede convertirse en proceso");
  if (hasTool("bi_ai")) add("IA para crear Aplicaciones Web", 3, "ya hay señales de interés en reporting o analítica asistida");

  return [...ranking.entries()]
    .map(([name, value]) => ({
      name,
      score: value.score,
      reason: value.reasons.slice(0, 2).join(" y ") || "encaja con las prioridades detectadas en el diagnóstico",
      url: resolveCourseUrl(name),
    }))
    .sort((aItem, bItem) => bItem.score - aItem.score || aItem.name.localeCompare(bItem.name));
}

function normalizeCourses(payload, data = {}) {
  const rankedCourses = rankCourses(payload).slice(0, 2).map(course => ({
    name: course.name,
    reason: `Se recomienda porque ${course.reason}.`,
    url: course.url,
  }));
  const raw = Array.isArray(data.courses) ? data.courses : [];

  return rankedCourses.map(course => {
    const aiMatch = raw.find(item => item && item.name === course.name);
    return {
      name: course.name,
      reason: aiMatch?.reason || course.reason,
      url: course.url,
    };
  });
}

function buildFallback(payload, metrics) {
  const company = payload.contact?.company || "la empresa";
  const a = payload.answers || {};
  const chips = payload.chips || {};
  const courses = normalizeCourses(payload);
  const areas = (chips.areas || []).map(item => IMPACT_AREA_MAP[item]).filter(Boolean).join(", ") || "el área con mayor fricción";
  const firstTask = TASK_MAP[(chips.tasks || []).find(item => item !== "unclear")] || PRIORITY_MAP[a.priority] || "Proceso prioritario";
  return {
    source: "fallback",
    needs_followup: false,
    questions: [],
    headline: `Primer caso de uso IA priorizado para ${company}`,
    summary: `La empresa muestra una madurez de ${metrics.score}/100. El objetivo principal es ${OBJECTIVE_MAP[a.objective] || "activar IA con criterio"}, con foco probable en ${areas}. El resultado deseado a 90 días debe convertirse en un primer caso de uso medible.`,
    score: metrics.score,
    benchmark: metrics.benchmark,
    best_first_move: {
      title: "Lanzar un quick win operativo medible",
      process: firstTask,
      why: "Es el camino más rápido para demostrar valor, reducir fricción y generar confianza interna.",
      first_action: "Definir baseline, owner y alcance de un piloto de 30 días.",
      expected_effect: "Menos trabajo manual y una métrica clara para decidir si escalar.",
    },
    priorities: [
      {
        title: "Convertir la fricción principal en un piloto de 30 días",
        body: "Elegid un proceso con volumen y dolor operativo suficiente para medir ahorro, velocidad o calidad sin rediseñar toda la empresa.",
        impact: "Alto",
        horizon: "30d",
        why_now: "Permite obtener una señal de retorno rápida.",
        concrete_process: firstTask,
        symptom: "Exceso de trabajo manual o coordinación repetitiva.",
        first_intervention: "Mapear el flujo actual y automatizar un tramo controlado.",
        business_effect: "Reducción de tiempo improductivo y mejor foco del equipo.",
      },
      {
        title: "Definir ownership y métrica de éxito",
        body: "Asignad un responsable, una métrica y un criterio de priorización para evitar pruebas sueltas sin continuidad.",
        impact: "Alto",
        horizon: "60d",
        why_now: "Sin ownership la adopción se diluye.",
        concrete_process: "Gobierno del primer caso de uso",
        symptom: "Iniciativas dispersas sin responsable claro.",
        first_intervention: "Nombrar owner, métrica y cadencia de revisión.",
        business_effect: "Mayor velocidad de decisión y menos retrabajo.",
      },
      {
        title: "Formar al equipo sobre el caso elegido",
        body: "La formación debe estar conectada al primer caso de uso, no ser una capa genérica de herramientas.",
        impact: "Medio",
        horizon: "90d",
        why_now: "La adopción depende de hábitos compartidos.",
        concrete_process: "Formación aplicada al caso prioritario",
        symptom: "Uso individual de IA sin método común.",
        first_intervention: "Crear playbook y sesión aplicada por equipo.",
        business_effect: "Mayor adopción y capacidad interna sostenible.",
      },
    ],
    roadmap: [
      { phase: "30 días", title: "Piloto con baseline", actions: ["Elegir un proceso concreto", "Definir owner y métrica", "Lanzar un quick win medible"] },
      { phase: "60 días", title: "Estandarización", actions: ["Documentar el flujo", "Formar al equipo implicado", "Medir ahorro y calidad"] },
      { phase: "90 días", title: "Escalado selectivo", actions: ["Extender a un segundo proceso", "Revisar ROI", "Decidir siguiente inversión en formación o acompañamiento"] },
    ],
    courses,
    cta: {},
    metrics,
  };
}
function buildPrompt(metrics) {
  return `Actúa como consultor senior de adopción de IA, automatización y transformación operativa para empresas B2B en España, trabajando para Sixminds.

Devuelve SOLO JSON válido en español siguiendo el schema.

Objetivo: producir un mini diagnóstico ejecutivo, específico y accionable. Debe sentirse como una lectura consultiva para esa empresa concreta, no como una plantilla.

Inputs disponibles: objetivo 6-12 meses, áreas de empresa donde la IA podría impactar, situación actual de IA, quién usa IA, herramientas IA, tareas que consumen tiempo, horas semanales perdidas por empleado en tareas repetitivas automatizables, bloqueadores, prioridad inicial, resultado deseado a 90 días, cargo, empresa y nº de empleados.

Reglas críticas:
- El summary debe tener máximo 60 caracteres. Debe ser una frase corta que explique cómo mejorar el score.
- Debes usar toda la información disponible para personalizar la respuesta: objetivo, áreas seleccionadas, tareas, herramientas actuales, nivel de adopción, quién usa IA, bloqueadores, prioridad, horas perdidas, rol, tamaño de empresa y resultado deseado.
- Si el usuario marca varias áreas, tareas o bloqueadores, prioriza las 2-3 señales más relevantes y haz explícita esa combinación en el diagnóstico. No ignores esas selecciones ni conviertas todo en texto genérico.
- Nombra un best_first_move claro y muy concreto: el primer caso de uso que debería activar la empresa según área, tarea, herramientas actuales y horas perdidas.
- En best_first_move.first_action incluye una acción concreta y una herramienta posible si encaja.
- No te limites a repetir la herramienta que el usuario ya usa. Si el caso lo justifica, puedes proponer herramientas complementarias y realistas para ese proceso concreto.
- Ejemplos válidos según el caso: ChatGPT, Copilot, Gemini, Claude, Make, Zapier, n8n, Google Sheets, Google Drive, Canva, Freepik, Figma, Webflow, HubSpot, Airtable, Notion, Slack, Teams, Fireflies, Loom, Runway, OpenAI API.
- Cada priority debe incluir proceso concreto, síntoma actual, primera intervención realista y efecto de negocio.
- Cada priority.body debe sentirse adaptado al caso: usa al menos dos señales del input, por ejemplo área + tarea, bloqueador + prioridad, herramienta actual + objetivo, horas perdidas + resultado deseado.
- Intenta que entre best_first_move, priorities y roadmap aparezcan varias señales concretas del formulario, no siempre las mismas. Si hay contexto suficiente, combina 3 señales cuando aporte claridad.
- Cada priority.first_intervention debe nombrar una acción implementable en 1-2 semanas y, si procede, una herramienta concreta.
- Cada priority.concrete_process no puede ser genérico. Debe nombrar el proceso real: reporting semanal, cualificación comercial, respuestas repetitivas a clientes, documentación interna, generación de contenidos, análisis de datos, onboarding, etc.
- Cada priority.business_effect debe explicar un efecto verificable: menos horas manuales, menor tiempo de respuesta, mejor calidad del entregable, más velocidad comercial, menos dependencia de una persona, mejor visibilidad directiva.
- El roadmap 30/60/90 debe tener acciones tangibles conectadas con el resultado deseado, no frases abstractas.
- No inventes sector, facturación, herramientas o datos no presentes.
- Si recomiendas una herramienta que el usuario no ha marcado, debe ser porque encaja claramente como complemento natural del proceso descrito. Explica para qué se usaría.
- Si el usuario marca "No lo tenemos claro", el diagnóstico debe priorizar discovery, casos de uso y criterio antes de automatizaciones complejas.
- Si los bloqueadores incluyen privacidad/seguridad, incluye un paso concreto de criterios de uso, datos y gobernanza ligera.
- Follow-up solo si falta una información imprescindible; no lo uses por defecto.
- El lenguaje debe ser profesional, claro y ejecutivo.
- Cuida ortografía, tildes, puntuación, mayúsculas iniciales y espacios entre frases.
- No entregues frases telegráficas, textos cortados ni sintaxis descuidada.
- Cada campo debe poder enseñarse a una empresa tal cual, sin correcciones manuales posteriores.
- Si una formación de Sixminds es claramente el siguiente paso lógico, puedes mencionarla dentro de priority.first_intervention o en una acción del roadmap.
- Cuando menciones una formación de Sixminds dentro de prioridades o roadmap, usa el nombre exacto del curso y solo si aporta valor real al caso.
- No fuerces la mención de formaciones en todas las prioridades; bastan una o dos menciones bien justificadas si encajan.

Lógica de personalización:
- Si el área incluye marketing: prioriza contenidos, research, campañas, assets, reporting o conversión. Menciona ChatGPT/Claude/Gemini para research y copy, Canva/Freepik/Figma/Runway si hay producción creativa, Webflow si el cuello de botella está en landings, y automatización solo si hay tareas repetitivas claras.
- Si el área incluye ventas: prioriza prospección, cualificación, seguimiento, propuestas, CRM ligero o respuesta rápida. Menciona ChatGPT/Claude para mensajes/propuestas y Make/Zapier/n8n solo para flujos repetibles.
- Si el área incluye atención al cliente: prioriza FAQs, clasificación de consultas, respuestas repetitivas, base de conocimiento y tiempos de respuesta. Menciona ChatGPT/OpenAI API solo si hay volumen y madurez suficiente.
- Si el área incluye operaciones o administración: prioriza reporting, documentos, coordinación, back office, hojas de cálculo y aprobaciones. Menciona Google Sheets/Drive, Make, Zapier o n8n cuando el stack lo permita.
- Si el área incluye RRHH: prioriza onboarding, formación interna, documentación, soporte a managers y procesos repetitivos. Evita automatizaciones complejas si falta formación.
- Si el área incluye dirección/estrategia: prioriza visibilidad, KPIs, síntesis ejecutiva, reporting y priorización por impacto/viabilidad.
- Si aparecen creatividades, diseño o piezas visuales: no te quedes solo en Canva. Puedes recomendar combinaciones realistas como Freepik para variaciones rápidas, Figma para sistematizar piezas, Runway para vídeo, Webflow para publicar landings o activos si eso encaja con el objetivo.
- Si aparecen propuestas, presupuestos o seguimiento comercial: puedes mencionar HubSpot, Notion o Airtable si ayudan a estructurar mejor el proceso, siempre explicando para qué.
- Si aparecen reuniones, documentación o coordinación: puedes mencionar Fireflies, Loom, Slack o Teams si ayudan a capturar contexto, reducir retrabajo o acelerar traspasos.
- Si la empresa no usa IA o la usa de forma individual: no propongas agentes avanzados. Propón formación aplicada, playbooks, primer caso de uso y medición básica.
- Si ya usa IA de forma regular o en varios equipos: propón estandarización, ownership, integración ligera y escalado selectivo.
- Si las herramientas actuales son "No usamos ninguna", recomienda empezar con herramientas accesibles y bajo riesgo, no arquitectura técnica.
- Si las horas perdidas por empleado son altas, conecta las prioridades con reducción de trabajo manual individual, medición semanal y escalado prudente al equipo impactado.

Evita:
- Frases como "la IA puede transformar", "oportunidad clara", "optimizar procesos" sin nombrar proceso.
- Listas de herramientas sin explicar para qué se usarían o por qué encajan con ese proceso.
- Repetir la misma idea en best_first_move, priorities y roadmap.
- Ignorar respuestas abiertas del usuario o dejar fuera el objetivo deseado cuando aporta contexto útil.

Cursos Sixminds:
- Recomienda exactamente 2 cursos reales de esta whitelist: ${COURSE_NAMES.map(name => `"${name}"`).join(", ")}.
- El primero debe ser el más especializado para el caso.
- El segundo debe complementar la implantación sin duplicar el primero.
- No inventes nombres de cursos.

CTA:
- Los labels pueden ser genéricos; el frontend normaliza los botones.
- Si prioridad = department_roadmap/adoption_strategy/use_cases o hay bloqueadores strategy/leadership/privacy, primary.type debe ser "call".
- En el resto, primary.type debe ser "course".

Métricas de referencia por empleado: score ${metrics.score}, horas perdidas por empleado/año ${metrics.totalH}, coste oculto por empleado EUR ${metrics.moneyL}, ahorro priorizable por empleado EUR ${metrics.mSaved}, ROI 12m por empleado EUR ${metrics.roi12m}, benchmark ${metrics.benchmark.label}. Referencia interna no protagonista: equipo impactado estimado ${metrics.impactedTeam}, coste agregado prudente EUR ${metrics.moneyLTeam}.`;
}
async function askModel(payload, metrics, env) {
  if (!env.OPENAI_API_KEY) throw new Error("missing_openai_api_key");

  const model = env.OPENAI_MODEL || DEFAULT_OPENAI_MODEL;
  const temperature = Number(env.OPENAI_TEMPERATURE || DEFAULT_OPENAI_TEMPERATURE);
  const maxTokens = Number(env.OPENAI_MAX_TOKENS || DEFAULT_OPENAI_MAX_TOKENS);

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      temperature,
      max_tokens: maxTokens,
      response_format: {
        type: "json_schema",
        json_schema: { name: "sixminds_ai_diagnosis", strict: true, schema: DIAGNOSIS_SCHEMA },
      },
      messages: [
        { role: "system", content: buildPrompt(metrics) },
        { role: "user", content: serializePayload(payload, metrics) },
      ],
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`openai_http_${response.status}${detail ? `:${detail}` : ""}`);
  }

  const json = await response.json();
  const raw = json.choices?.[0]?.message?.content;
  if (!raw) throw new Error("empty_openai_response");
  return JSON.parse(raw);
}

async function submitLead(payload, analysis = null) {
  const contact = payload.contact || {};
  const form = new URLSearchParams();
  Object.entries(AC_CONFIG.hidden).forEach(([key, value]) => form.append(key, value));
  form.append("fullname", contact.name || "");
  form.append("email", contact.email || "");
  form.append("phone", contact.phone || "");
  form.append("field[27]", contact.company || "");
  form.append("field[30]", contact.role || "");
  form.append("field[29]", deriveAcSector(payload));
  form.append("field[28]", bucketEmployees(contact.employees));
  form.append("field[5][]", "~|");
  form.append("field[5][]", AC_PRIVACY_LABEL);
  form.append("field[6][]", "~|");
  if (contact.comms) form.append("field[6][]", AC_COMMS_LABEL);

  if (analysis) {
    const diagnosisFields = buildAcDiagnosisFields(analysis);
    Object.entries(AC_DIAG_FIELD_MAP).forEach(([key, fieldId]) => {
      if (!fieldId || !diagnosisFields[key]) return;
      form.append(`field[${fieldId}]`, diagnosisFields[key]);
    });
  }

  const query = form.toString();
  const response = await fetch(`${AC_CONFIG.action}?${query}&jsonp=true`, {
    method: "GET",
    headers: { Accept: "application/json, text/javascript, */*" },
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`activecampaign_http_${response.status}${detail ? `:${detail}` : ""}`);
  }

  const raw = await response.text().catch(() => "");
  if (/submission failed|_show_error|This field is required|Please select an option/i.test(raw)) {
    throw new Error(`activecampaign_submit_rejected:${raw.slice(0, 280)}`);
  }
  return {
    raw,
    debug: buildAcDebug(payload),
  };
}

async function handleAnalyze(request, env) {
  if (request.method === "OPTIONS") return json(204, {});
  if (request.method !== "POST") return json(405, { error: "Method not allowed" });

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json(400, { error: "Invalid JSON" });
  }

  const metrics = calcMetrics(payload);
  let analysis;
  try {
    analysis = await askModel(payload, metrics, env);
    analysis.source = "openai";
  } catch (error) {
    console.error("analysis_fallback", error.message);
    analysis = buildFallback(payload, metrics);
  }

  analysis.metrics = metrics;
  analysis.score = typeof analysis.score === "number" ? Math.max(8, Math.min(92, Math.round(analysis.score))) : metrics.score;
  analysis.benchmark = analysis.benchmark || metrics.benchmark;
  analysis.courses = normalizeCourses(payload, analysis);

  const activeCampaignResult = await submitLead(payload, analysis).catch(error => ({
    error: error.message,
    raw: "",
    debug: buildAcDebug(payload),
  }));

  const storageResult = await saveSubmission(env, payload, analysis, activeCampaignResult).catch(error => ({
    stored: false,
    reason: error.message,
  }));

  return json(200, {
    ...analysis,
    activeCampaignError: activeCampaignResult?.error || null,
    activeCampaignRaw: activeCampaignResult?.raw ? String(activeCampaignResult.raw).slice(0, 1200) : "",
    activeCampaignDebug: activeCampaignResult?.debug || buildAcDebug(payload),
    storageStatus: storageResult,
  });
}

async function handleAdminPage() {
  return noStoreHtml(buildAdminPage());
}

async function handleAdminSession(request, env) {
  const authenticated = await isAdminAuthenticated(request, env);
  return json(200, { authenticated });
}

async function handleAdminLogin(request, env) {
  if (request.method !== "POST") return json(405, { error: "Method not allowed" });
  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: "Invalid JSON" });
  }
  const email = String(body?.email || "").trim().toLowerCase();
  const password = String(body?.password || "");
  if (email !== getAdminEmail(env).toLowerCase() || password !== getAdminPassword(env)) {
    return json(401, { error: "Credenciales incorrectas" });
  }
  const token = await buildAdminSessionToken(env);
  const response = json(200, { ok: true });
  return withCookie(
    response,
    `${ADMIN_COOKIE_NAME}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`
  );
}

async function handleAdminLogout() {
  const response = json(200, { ok: true });
  return withCookie(
    response,
    `${ADMIN_COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
  );
}

async function handleAdminSubmissions(request, env) {
  const authenticated = await isAdminAuthenticated(request, env);
  if (!authenticated) return json(401, { error: "Unauthorized" });
  try {
    const submissions = await listSubmissions(env, 150);
    return json(200, { submissions });
  } catch (error) {
    return json(500, { error: error.message || "admin_storage_error" });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/analyze" || url.pathname === "/analyze/") {
      return handleAnalyze(request, env);
    }
    if (url.pathname === "/admin" || url.pathname === "/admin/") {
      return handleAdminPage(request, env);
    }
    if (url.pathname === "/api/admin/session") {
      return handleAdminSession(request, env);
    }
    if (url.pathname === "/api/admin/login") {
      return handleAdminLogin(request, env);
    }
    if (url.pathname === "/api/admin/logout") {
      return handleAdminLogout(request, env);
    }
    if (url.pathname === "/api/admin/submissions") {
      return handleAdminSubmissions(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};




