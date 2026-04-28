/* ═══════════════════ LANGUAGE ═══════════════════ */
function setLang(lang) {
  const root = document.documentElement;
  root.classList.remove('lang-es','lang-en');
  root.classList.add('lang-' + lang);
  const btnEs = document.getElementById('btn-es'); if(btnEs) btnEs.classList.toggle('active', lang === 'es');
  const mobBtnEs = document.getElementById('mob-btn-es'); if(mobBtnEs) mobBtnEs.classList.toggle('active', lang === 'es');
  const btnEn = document.getElementById('btn-en'); if(btnEn) btnEn.classList.toggle('active', lang === 'en');
  const mobBtnEn = document.getElementById('mob-btn-en'); if(mobBtnEn) mobBtnEn.classList.toggle('active', lang === 'en');
  document.getElementById('html-root').lang = lang;
  localStorage.setItem('preferredLang', lang);
}

// Auto-detect language on load
(function(){
  const saved = localStorage.getItem('preferredLang');
  if(saved) { setLang(saved); return; }
  const browser = navigator.language || 'es';
  if(browser.startsWith('en')) setLang('en');
})();

/* ═══════════════════ MOBILE NAV ═══════════════════ */
function toggleMobile() {
  const nav = document.getElementById('mobile-nav');
  const ham = document.getElementById('hamburger');
  nav.classList.toggle('open');
  ham.classList.toggle('open');
}
function closeMobile() {
  document.getElementById('mobile-nav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

/* ═══════════════════ HEADER SCROLL ═══════════════════ */
window.addEventListener('scroll', () => {
  const h = document.querySelector('header');
  if(!h.classList.contains('solid-header')) { h.style.background = window.scrollY > 60 ? 'rgba(4,8,16,0.99)' : 'rgba(8,15,32,0.97)'; }
});

/* ═══════════════════ TABS ═══════════════════ */
function showTab(tabId, ev) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  if(ev && ev.currentTarget) ev.currentTarget.classList.add('active');
}

/* ═══════════════════ SMOOTH SCROLL ═══════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if(href === '#') return;
    const target = document.querySelector(href);
    if(target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});

/* ═══════════════════ SCROLL REVEAL ═══════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold: 0.08});
document.querySelectorAll('.reveal, .area-card, .sol-card, .service-feature, .credential-item, .recurso-card, .nivel').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* ═══════════════════ MODAL DATA ═══════════════════ */
const modalData = {
  macro1: {
    badge_es: 'Macro-Área 01 — El Eje Central',
    badge_en: 'Practice Area 01 — Core Expertise',
    title_es: 'Litigios y Resolución de Conflictos',
    title_en: 'Litigation & Conflict Resolution',
    desc_es: 'Defensa estratégica en todas las instancias judiciales colombianas. Liderada directamente por Aury Fernán Díaz Alarcón, esta macro-área es el núcleo de la firma. Especialización penalista de alto nivel, respaldada por más de 10 años de litigio activo en el sistema acusatorio colombiano.',
    desc_en: 'Strategic defense at all levels of Colombian courts. Led directly by Aury Fernán Díaz Alarcón, this is the firm\'s core practice area. Top-level criminal specialization backed by 10+ years of active litigation in the Colombian accusatory system.',
    items_es: ['⚖️ Defensa Penal y Sistema Acusatorio — Ley 906/2004','Defensa técnica desde indagación hasta juicio oral','Preacuerdos y negociaciones — Arts. 348-354 CPP','Principio de oportunidad — Art. 324 CPP','Habeas corpus — Ley 1095/2006','Medidas de aseguramiento y sustitución','Delitos económicos: peculado, cohecho, fraude procesal','🏛️ Derecho Público y Disciplinario','Defensa ante la Procuraduría — Ley 1952/2019','Responsabilidad del Estado — CPACA Ley 1437/2011','Nulidades de actos administrativos','📋 Litigio Civil — CGP Ley 1564/2012','🕊️ Justicia Transicional — JEP Ley 1957/2019','🌎 Representación sin desplazamiento para no residentes'],
    items_en: ['⚖️ Criminal Defense & Accusatory System — Law 906/2004','Technical defense from investigation to oral trial','Pre-agreements and negotiations — Arts. 348-354 CPP','Opportunity principle — Art. 324 CPP','Habeas corpus — Law 1095/2006','Precautionary measures and substitution','Economic crimes: embezzlement, bribery, procedural fraud','🏛️ Public & Disciplinary Law','Defense before the Procuraduría — Law 1952/2019','State Liability — CPACA Law 1437/2011','Administrative nullities','📋 Civil Litigation — CGP Law 1564/2012','🕊️ Transitional Justice — JEP Law 1957/2019','🌎 Representation without travel for non-residents'],
    norm_es: 'Normatividad principal: Constitución Política 1991 · Ley 906 de 2004 (CPP) · Ley 599 de 2000 (CP) · Ley 1952 de 2019 (Disciplinario) · Ley 1437 de 2011 (CPACA) · Ley 1564 de 2012 (CGP) · Ley 1448 de 2011 (Víctimas)',
    norm_en: 'Key regulations: 1991 Political Constitution · Law 906 of 2004 (CPP) · Law 599 of 2000 (CP) · Law 1952 of 2019 (Disciplinary) · Law 1437 of 2011 (CPACA) · Law 1564 of 2012 (CGP) · Law 1448 of 2011 (Victims)'
  },
  macro2: {
    badge_es: 'Macro-Área 02 — Corporativo y Negocios',
    badge_en: 'Practice Area 02 — Corporate & Business',
    title_es: 'Derecho Corporativo y Negocios',
    title_en: 'Corporate Law & Business',
    desc_es: 'Protección jurídica integral para empresas, inversionistas y emprendedores en Colombia. Desde la constitución societaria hasta la defensa penal económica. Incluye la especialidad de Habeas Data Financiero para defensa de historial crediticio ante Datacrédito y TransUnion.',
    desc_en: 'Comprehensive legal protection for companies, investors and entrepreneurs in Colombia. From corporate formation to economic criminal defense. Includes the specialty of Financial Habeas Data for credit history defense before Datacrédito and TransUnion.',
    items_es: ['🏢 Constitución de SAS, S.A., Ltda. — Ley 1258/2008','Código de Comercio — Decreto 410/1971','Fusiones, escisiones y adquisiciones','Insolvencia empresarial — Ley 1116/2006','💰 Estatuto Tributario — Decreto 624/1989','Reforma tributaria — Ley 2277/2022','Defensa ante DIAN: sanciones y recursos','Régimen simple y facturación electrónica','💡 Registro de marcas y patentes — Decisión 486 CAN','Derechos de autor — Ley 23/1982','🏠 Propiedad Horizontal — Ley 675/2001','🛡️ Habeas Data Financiero — Ley 1581/2012 · Ley 1266/2008'],
    items_en: ['🏢 Formation of SAS, S.A., Ltd. — Law 1258/2008','Commercial Code — Decree 410/1971','Mergers, spin-offs and acquisitions','Business insolvency — Law 1116/2006','💰 Tax Statute — Decree 624/1989','Tax reform — Law 2277/2022','Defense before DIAN: sanctions and appeals','Simple regime and electronic invoicing','💡 Trademark and patent registration — CAN Decision 486','Copyright — Law 23/1982','🏠 Horizontal Property — Law 675/2001','🛡️ Financial Habeas Data — Law 1581/2012 · Law 1266/2008'],
    norm_es: 'Normatividad principal: Código de Comercio · Ley 1258/2008 (SAS) · Estatuto Tributario · Ley 1581/2012 (Habeas Data) · Ley 1266/2008 (Habeas Data Financiero) · Decisión 486 CAN (Prop. Industrial) · Ley 675/2001 (PH)',
    norm_en: 'Key regulations: Commercial Code · Law 1258/2008 (SAS) · Tax Statute · Law 1581/2012 (Habeas Data) · Law 1266/2008 (Financial Habeas Data) · CAN Decision 486 (Industrial Property) · Law 675/2001 (HP)'
  },
  macro3: {
    badge_es: 'Macro-Área 03 — Personas y Familias',
    badge_en: 'Practice Area 03 — Persons & Families',
    title_es: 'Derecho de las Personas y Familias',
    title_en: 'Persons & Family Law',
    desc_es: 'Acompañamiento jurídico integral en las decisiones más trascendentes de su vida personal, laboral y familiar. También incluye representación legal para colombianos en el exterior y servicios de insolvencia personal.',
    desc_en: 'Comprehensive legal counsel for the most transcendent decisions in your personal, professional and family life. Also includes legal representation for Colombians abroad and personal insolvency services.',
    items_es: ['👔 CST — Decreto 2663/1950: contratos laborales','Despido con y sin justa causa, liquidaciones','Acoso laboral — Ley 1010/2006','Fuero sindical, de maternidad, estabilidad reforzada','Pensiones, ARL, EPS y seguridad social','👨‍👩‍👧 Custodia, alimentos, divorcio, adopción','Unión marital de hecho — Ley 54/1990','Violencia intrafamiliar — Ley 294/1996','Sucesiones: intestada y testamentaria','🔓 Insolvencia personal — Arts. 531-576 CGP','Negociación de deudas y liquidación patrimonial','🌎 Colombianos en USA, UK u otros países'],
    items_en: ['👔 CST — Decree 2663/1950: employment contracts','Termination with and without cause, severance','Workplace harassment — Law 1010/2006','Union, maternity and reinforced employment protections','Pensions, ARL, EPS and social security','👨‍👩‍👧 Custody, alimony, divorce, adoption','Common-law union — Law 54/1990','Domestic violence — Law 294/1996','Estates: intestate and testamentary','🔓 Personal insolvency — Arts. 531-576 CGP','Debt negotiation and asset liquidation','🌎 Colombians in USA, UK or other countries'],
    norm_es: 'Normatividad principal: CST Decreto 2663/1950 · Código Civil · Ley 100/1993 (SS) · Ley 1098/2006 (Infancia) · Ley 1257/2008 (Género) · CGP Arts. 531-576 (Insolvencia) · Ley 1997/2019 (Migración)',
    norm_en: 'Key regulations: CST Decree 2663/1950 · Civil Code · Law 100/1993 (SS) · Law 1098/2006 (Childhood) · Law 1257/2008 (Gender) · CGP Arts. 531-576 (Insolvency) · Law 1997/2019 (Migration)'
  }
};

function openModal(id) {
  const data = modalData[id];
  if(!data) { document.getElementById('modal-overlay').classList.add('open'); document.getElementById('modal-content').innerHTML = '<p style="color:white">Contenido próximamente.</p>'; return; }
  const lang = document.body.classList.contains('lang-en') ? 'en' : 'es';
  const items = (lang === 'en' ? data.items_en : data.items_es).map((i,idx) => {
    const featured = idx < 2;
    return `<li class="${featured?'featured':''}">${i}</li>`;
  }).join('');
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-badge">${data['badge_'+lang]}</div>
    <div class="modal-title">${data['title_'+lang]}</div>
    <div class="modal-desc">${data['desc_'+lang]}</div>
    <ul class="modal-list">${items}</ul>
    <div class="modal-norm"><h5>${lang==='es'?'Marco Normativo':'Legal Framework'}</h5><p>${data['norm_'+lang]}</p></div>
    <a href="#contacto" class="modal-cta" onclick="closeModal()">${lang==='es'?'Consultar este Caso →':'Consult this Case →'}</a>
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalIf(e) { if(e.target === document.getElementById('modal-overlay')) closeModal(); }

/* ═══════════════════ POLICIES ═══════════════════ */
const policyContent = {
  privacidad: {
    title: 'Política de Privacidad y Tratamiento de Datos Personales',
    date: 'Última actualización: Enero 2025',
    content: `
      <h3>1. Responsable del Tratamiento</h3>
      <p>Aury Díaz & Asociados, liderado por Aury Fernán Díaz Alarcón, con domicilio en la ciudad de Santiago de Cali, Valle del Cauca, Colombia. Correo: fernan@aurydiaz.com</p>
      <h3>2. Fundamento Legal</h3>
      <p>Esta política se rige por la <strong>Ley 1581 de 2012</strong> de Protección de Datos Personales, el <strong>Decreto 1377 de 2013</strong> y demás normas concordantes. Para clientes internacionales, también se consideran los principios del <strong>GDPR</strong> (Reglamento Europeo) y las regulaciones aplicables en EE.UU.</p>
      <h3>3. Datos que Recopilamos</h3>
      <p>Recopilamos únicamente los datos necesarios para prestar el servicio jurídico: nombre, teléfono, correo electrónico, país de residencia y descripción del asunto jurídico. No recopilamos datos sensibles sin consentimiento expreso.</p>
      <h3>4. Finalidad del Tratamiento</h3>
      <ul><li>Prestación de servicios jurídicos contratados</li><li>Comunicación sobre el estado de los asuntos</li><li>Envío de información jurídica relevante (con opción de cancelación)</li><li>Cumplimiento de obligaciones legales profesionales</li></ul>
      <h3>5. Secreto Profesional</h3>
      <p>Toda la información proporcionada está protegida por el <strong>secreto profesional del abogado</strong>, conforme al artículo 28 del Código Disciplinario del Abogado. Esta protección es absoluta e inviolable.</p>
      <h3>6. Derechos del Titular</h3>
      <p>Usted tiene derecho a: conocer, actualizar, rectificar, suprimir sus datos y revocar la autorización. Puede ejercerlos escribiendo a fernan@aurydiaz.com.</p>
      <h3>7. Habeas Data</h3>
      <p>Para solicitar la baja o modificación de sus datos, envíe comunicación escrita a fernan@aurydiaz.com. Responderemos en un plazo máximo de 15 días hábiles conforme a la Ley 1581 de 2012.</p>
    `
  },
  terminos: {
    title: 'Términos de Uso del Sitio Web',
    date: 'Última actualización: Enero 2025',
    content: `
      <h3>1. Naturaleza del Contenido</h3>
      <p>El contenido de este sitio web tiene carácter <strong>informativo y educativo</strong>. No constituye asesoría jurídica. Cada caso tiene sus propias particularidades y requiere análisis profesional individualizado.</p>
      <h3>2. Relación Abogado-Cliente</h3>
      <p>La relación profesional abogado-cliente solo se establece mediante contrato de prestación de servicios jurídicos debidamente suscrito. El formulario de contacto no crea dicha relación.</p>
      <h3>3. Propiedad Intelectual</h3>
      <p>Todos los contenidos del sitio (textos, diseño, marca Aury Díaz & Asociados) son propiedad exclusiva de Aury Fernán Díaz Alarcón. Queda prohibida su reproducción sin autorización expresa.</p>
      <h3>4. Limitación de Responsabilidad</h3>
      <p>Aury Díaz & Asociados no se responsabiliza por decisiones tomadas con base en el contenido informativo del sitio sin haber obtenido asesoría jurídica formal y personalizada.</p>
      <h3>5. Ley Aplicable</h3>
      <p>Este sitio se rige por las leyes de la República de Colombia. Para asuntos con elementos internacionales, se aplicarán los tratados y convenios internacionales vigentes.</p>
    `
  },
  aviso: {
    title: 'Aviso Legal',
    date: 'Enero 2025',
    content: `
      <h3>Identificación del Titular</h3>
      <p><strong>Razón Social:</strong> Aury Díaz & Asociados<br><strong>Propietario:</strong> Aury Fernán Díaz Alarcón<br><strong>Tarjeta Profesional:</strong> Abogado inscrito ante el Consejo Superior de la Judicatura<br><strong>Domicilio:</strong> Santiago de Cali, Valle del Cauca, Colombia<br><strong>Contacto:</strong> fernan@aurydiaz.com</p>
      <h3>Ejercicio Profesional</h3>
      <p>El Dr. Aury Fernán Díaz Alarcón ejerce la abogacía de manera independiente, regulado por la <strong>Ley 1123 de 2007</strong> (Código Disciplinario del Abogado) y sometido a la ética y deontología profesional.</p>
      <h3>Conflicto de Intereses</h3>
      <p>Aury Díaz & Asociados no ha estado ni está vinculado a ninguna entidad pública o privada que pueda generar conflictos de interés. Toda representación se realiza con plena independencia.</p>
      <h3>Confidencialidad</h3>
      <p>El secreto profesional es un deber irrenunciable del abogado. Toda información recibida de clientes o potenciales clientes es estrictamente confidencial.</p>
    `
  },
  cookies: {
    title: 'Política de Cookies',
    date: 'Enero 2025',
    content: `
      <h3>¿Qué son las Cookies?</h3>
      <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos permiten mejorar su experiencia de navegación.</p>
      <h3>Cookies que Utilizamos</h3>
      <ul>
        <li><strong>Cookies técnicas (esenciales):</strong> Necesarias para el funcionamiento básico del sitio. No requieren consentimiento.</li>
        <li><strong>Cookie de idioma:</strong> Almacena su preferencia de idioma (español/inglés). Se guarda en localStorage.</li>
        <li><strong>Cookies de análisis:</strong> Si se activan, nos ayudan a entender cómo se usa el sitio (Google Analytics). Requieren su consentimiento.</li>
      </ul>
      <h3>Base Legal</h3>
      <p>La gestión de cookies se realiza conforme a la <strong>Ley 1581 de 2012</strong> y los estándares internacionales aplicables.</p>
      <h3>Gestión de Cookies</h3>
      <p>Puede configurar su navegador para bloquear o eliminar cookies. Esto puede afectar la funcionalidad del sitio. Para más información sobre gestión de cookies, visite la ayuda de su navegador.</p>
      <h3>Contacto</h3>
      <p>Para consultas sobre cookies: fernan@aurydiaz.com</p>
    `
  }
};

function openPolicy(id) {
  const data = policyContent[id];
  if(!data) return;
  document.getElementById('policies-content').innerHTML = `
    <h2>${data.title}</h2>
    <p class="policy-date">${data.date}</p>
    ${data.content}
  `;
  document.getElementById('policies-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePolicies() {
  document.getElementById('policies-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function closePoliciesIf(e) { if(e.target === document.getElementById('policies-modal')) closePolicies(); }

/* ═══════════════════ FORM SUBMIT ═══════════════════ */
function submitForm() {
  const nombre = document.getElementById('f-nombre').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const area = document.getElementById('f-area').value;
  const caso = document.getElementById('f-caso').value.trim();
  const privacidad = document.getElementById('privacidad').checked;
  const lang = document.body.classList.contains('lang-en') ? 'en' : 'es';

  if(!nombre || !email || !area || !caso) {
    alert(lang === 'es' ? 'Por favor complete todos los campos obligatorios (*)' : 'Please fill in all required fields (*)');
    return;
  }
  if(!privacidad) {
    alert(lang === 'es' ? 'Debe aceptar la Política de Privacidad para continuar.' : 'You must accept the Privacy Policy to continue.');
    return;
  }

  // Build mailto link
  const tel = document.getElementById('f-tel').value;
  const pais = document.getElementById('f-pais').value;
  const subject = encodeURIComponent(`Consulta Jurídica — ${area} — ${nombre}`);
  const body = encodeURIComponent(`NUEVA CONSULTA JURÍDICA\n\nNombre: ${nombre}\nTeléfono: ${tel}\nEmail: ${email}\nPaís: ${pais}\nÁrea: ${area}\n\nDescripción del caso:\n${caso}\n\n---\nEnviado desde www.aurydiaz.com`);

  // Open mailto
  window.location.href = `mailto:auryfernandiaz@gmail.com?cc=fernan@aurydiaz.com&subject=${subject}&body=${body}`;

  // Show success
  document.getElementById('form-content').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}

/* ═══════════════════ KEYBOARD ESC ═══════════════════ */
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') { closeModal(); closePolicies(); }
});