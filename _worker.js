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
    or: "038dd2fa-972d-4d9e-b650-358545f15671",
  },
  privacyLabel: "Acepto las condiciones de uso y política de privacidad",
  commsLabel: "Acepto recibir de INESDI comunicaciones promocionales de productos y/o actividades de terceras entidades.",
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
  specific: "Otras herramientas específicas",
  none: "No usamos ninguna",
};

const TASK_MAP = {
  writing: "Redacción de contenidos o documentos",
  analysis: "Análisis de información / datos",
  reports: "Presentaciones, resúmenes o reportes",
  customer_replies: "Atención a clientes / respuestas repetitivas",
  admin: "Tareas administrativas",
  sales_prospecting: "Prospección comercial / ventas",
  coordination: "Organización y coordinación interna",
  training_docs: "Formación / documentación interna",
  email_meetings: "Emails, reuniones y seguimiento",
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
  process_clarity: "Procesos poco definidos",
  leadership: "Falta de apoyo interno / liderazgo",
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

function calcMetrics(payload) {
  const a = payload.answers || {};
  const chips = payload.chips || {};
  const contact = payload.contact || {};
  const situationScoreMap = { none: 14, individual: 28, pilots: 44, regular: 62, embedded: 76 };
  const lostHoursScoreMap = { "0_5": 2, "5_10": 5, "10_15": 8, "15_25": 11, "20_30": 14, "30_plus": 16 };
  const lostHoursMidMap = { "0_5": 2.5, "5_10": 7.5, "10_15": 12.5, "15_25": 17.5, "20_30": 25, "30_plus": 32 };
  const userScoreMap = { nobody: 0, management: 4, few_people: 8, one_department: 12, several_departments: 18, company_wide: 24 };
  const situationHoursMap = { none: 4.2, individual: 3.4, pilots: 2.7, regular: 1.9, embedded: 1.25 };
  const aiSavingsMap = { none: 0.26, individual: 0.24, pilots: 0.21, regular: 0.17, embedded: 0.13 };
  const areaCoverage = { sales: 0.32, marketing: 0.28, support: 0.28, ops: 0.42, hr: 0.24, admin: 0.34, management: 0.2, product: 0.24, finance: 0.22, it_data: 0.2, unclear: 0.26 };

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
  const blockerFactor = 1 + Math.min(0.24, (blockerCount - 1) * 0.06);
  const declaredWeeklyHoursPerEmployee = lostHoursMidMap[a.usage];
  const modeledWeeklyHoursPerEmployee = (situationHoursMap[a.ai_situation] || 3.4) * blockerFactor * (1 + (taskCount - 1) * 0.07);
  const weeklyHoursPerEmployee = Math.min(40, declaredWeeklyHoursPerEmployee || modeledWeeklyHoursPerEmployee);
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
  const totalH = Math.round(weeklyHoursPerEmployee * 48);
  const moneyL = Math.round(totalH * hourlyCost);
  const totalHTeam = Math.round(weeklyHoursTeam * 48);
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
  if (hasArea("ops") || hasArea("admin") || hasArea("support")) add("Automatizaciones con IA", 6, "la mayor oportunidad está en procesos repetitivos y operativa interna");
  if (hasArea("management")) {
    add("Automatizaciones con IA", 3, "dirección necesita más visibilidad y cadencia operativa");
    add("IA para crear Aplicaciones Web", 2, "puede ayudar a ordenar reporting y herramientas internas");
  }

  if (hasTask("writing")) {
    add("IA para Marketing", 5, "hay carga importante de redacción, contenidos o mensajes");
    add("IA Generativa para Imagen y Video", 3, "la parte creativa puede ganar más velocidad");
  }
  if (hasTask("sales_prospecting")) {
    add("IA para Marketing", 4, "hay fricción en prospección y mensajes comerciales");
    add("Automatizaciones con IA", 3, "conviene convertir seguimiento y rutinas en flujos más ágiles");
  }
  if (hasTask("customer_replies") || hasTask("coordination") || hasTask("admin") || hasTask("email_meetings")) add("Automatizaciones con IA", 5, "hay demasiado trabajo manual en coordinación o respuesta repetitiva");
  if (hasTask("training_docs")) add("Productividad con IA para RRHH", 5, "la necesidad pasa por formación y documentación interna");
  if (hasTask("analysis") || hasTask("reports")) {
    add("IA para crear Aplicaciones Web", 4, "hay oportunidad para estructurar reporting y herramientas internas");
    add("Automatizaciones con IA", 2, "también puede reducirse trabajo manual en reporting");
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
  if (hasBlocker("tools") || hasBlocker("data_quality") || hasBlocker("process_clarity")) add("IA para crear Aplicaciones Web", 3, "hay que ordenar herramientas, datos o procesos");
  if (hasBlocker("time") || hasBlocker("use_cases")) add("Automatizaciones con IA", 3, "conviene empezar por quick wins muy prácticos");
  if (hasBlocker("budget")) add("Automatizaciones con IA", 2, "permite demostrar retorno sin un rediseño grande");

  if (hasTool("canva")) add("IA Generativa para Imagen y Video", 4, "ya existe una base creativa sobre la que escalar");
  if (hasTool("crm_ai")) add("IA para Marketing", 3, "ya usan herramientas comerciales con IA");
  if (hasTool("automations")) add("Automatizaciones con IA", 2, "ya hay una base para profundizar en automatización");
  if (hasTool("notion")) add("Productividad con IA para RRHH", 2, "ya usan asistentes internos que pueden ordenarse mejor");

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
- Nombra un best_first_move claro y muy concreto: el primer caso de uso que debería activar la empresa según área, tarea, herramientas actuales y horas perdidas.
- En best_first_move.first_action incluye una acción concreta y una herramienta posible si encaja. Ejemplos: ChatGPT, Copilot, Gemini, Claude, Make, Zapier, n8n, Google Sheets, Google Drive, Canva, OpenAI API.
- Cada priority debe incluir proceso concreto, síntoma actual, primera intervención realista y efecto de negocio.
- Cada priority.body debe sentirse adaptado al caso: usa al menos dos señales del input, por ejemplo área + tarea, bloqueador + prioridad, herramienta actual + objetivo, horas perdidas + resultado deseado.
- Cada priority.first_intervention debe nombrar una acción implementable en 1-2 semanas y, si procede, una herramienta concreta.
- Cada priority.concrete_process no puede ser genérico. Debe nombrar el proceso real: reporting semanal, cualificación comercial, respuestas repetitivas a clientes, documentación interna, generación de contenidos, análisis de datos, onboarding, etc.
- Cada priority.business_effect debe explicar un efecto verificable: menos horas manuales, menor tiempo de respuesta, mejor calidad del entregable, más velocidad comercial, menos dependencia de una persona, mejor visibilidad directiva.
- El roadmap 30/60/90 debe tener acciones tangibles conectadas con el resultado deseado, no frases abstractas.
- No inventes sector, facturación, herramientas o datos no presentes.
- Si el usuario marca "No lo tenemos claro", el diagnóstico debe priorizar discovery, casos de uso y criterio antes de automatizaciones complejas.
- Si los bloqueadores incluyen privacidad/seguridad, incluye un paso concreto de criterios de uso, datos y gobernanza ligera.
- Follow-up solo si falta una información imprescindible; no lo uses por defecto.
- El lenguaje debe ser profesional, claro y ejecutivo.
- Cuida ortografía, tildes, puntuación, mayúsculas iniciales y espacios entre frases.
- No entregues frases telegráficas, textos cortados ni sintaxis descuidada.
- Cada campo debe poder enseñarse a una empresa tal cual, sin correcciones manuales posteriores.

Lógica de personalización:
- Si el área incluye marketing: prioriza contenidos, research, campañas, assets, reporting o conversión. Menciona ChatGPT/Claude/Gemini para research y copy, Canva si aparece creatividad, y automatización solo si hay tareas repetitivas claras.
- Si el área incluye ventas: prioriza prospección, cualificación, seguimiento, propuestas, CRM ligero o respuesta rápida. Menciona ChatGPT/Claude para mensajes/propuestas y Make/Zapier/n8n solo para flujos repetibles.
- Si el área incluye atención al cliente: prioriza FAQs, clasificación de consultas, respuestas repetitivas, base de conocimiento y tiempos de respuesta. Menciona ChatGPT/OpenAI API solo si hay volumen y madurez suficiente.
- Si el área incluye operaciones o administración: prioriza reporting, documentos, coordinación, back office, hojas de cálculo y aprobaciones. Menciona Google Sheets/Drive, Make, Zapier o n8n cuando el stack lo permita.
- Si el área incluye RRHH: prioriza onboarding, formación interna, documentación, soporte a managers y procesos repetitivos. Evita automatizaciones complejas si falta formación.
- Si el área incluye dirección/estrategia: prioriza visibilidad, KPIs, síntesis ejecutiva, reporting y priorización por impacto/viabilidad.
- Si la empresa no usa IA o la usa de forma individual: no propongas agentes avanzados. Propón formación aplicada, playbooks, primer caso de uso y medición básica.
- Si ya usa IA de forma regular o en varios equipos: propón estandarización, ownership, integración ligera y escalado selectivo.
- Si las herramientas actuales son "No usamos ninguna", recomienda empezar con herramientas accesibles y bajo riesgo, no arquitectura técnica.
- Si las horas perdidas por empleado son altas, conecta las prioridades con reducción de trabajo manual individual, medición semanal y escalado prudente al equipo impactado.

Evita:
- Frases como "la IA puede transformar", "oportunidad clara", "optimizar procesos" sin nombrar proceso.
- Listas de herramientas sin explicar para qué se usarían.
- Repetir la misma idea en best_first_move, priorities y roadmap.

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

async function submitLead(payload) {
  const contact = payload.contact || {};
  const form = new URLSearchParams();
  Object.entries(AC_CONFIG.hidden).forEach(([key, value]) => form.append(key, value));
  form.append("fullname", contact.name || "");
  form.append("email", contact.email || "");
  if (contact.phone) form.append("phone", contact.phone);
  form.append("field[27]", contact.company || "");
  form.append("field[30]", contact.role || "");
  form.append("field[28]", contact.employees || "");
  form.append("field[5][]", AC_CONFIG.privacyLabel);
  if (contact.comms) form.append("field[6][]", AC_CONFIG.commsLabel);

  await fetch(AC_CONFIG.action, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });
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

  await submitLead(payload).catch(error => console.error("activecampaign_error", error.message));

  return json(200, analysis);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/analyze" || url.pathname === "/analyze/") {
      return handleAnalyze(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};




