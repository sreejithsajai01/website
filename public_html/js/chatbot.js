(function () {
  const BOT_COLOR = '#2a4074';

  // ── RULE-BASED KEYWORD → RESPONSE MAP ──────────────────────────────────────
  const rules = [
    {
      id: 1,
      keywords: ['admission', 'apply', 'join', 'enroll', 'enrol', 'seat', 'register', 'registration'],
      question: 'Admission Enquiry',
      answer: '🎓 Thank you for your interest in admission!\n\nPlease fill out the form below:\n👉 <a href="https://docs.google.com/forms/d/e/1FAIpQLScAFnsEDCHib5d6f3cN1YQKhHTHGsiLW9CDPNz0DupKaDWzsw/viewform" target="_blank" style="color:#2a4074;font-weight:600;">Click here to fill the Admission Form</a> '
    },
    {
      id: 2,
      keywords: ['fee', 'fees', 'fee structure', 'payment', 'cost', 'tuition', 'charges'],
      question: 'Fee Structure',
      answer: '💰 Our fee structure varies by grade.\n\nFor detailed fee information, please contact our office:\n📞 022-27662725\n📧 cbsestmarysvashi@gmail.com\n\nOr submit an admission enquiry and our team will assist you.'
    },
    {
      id: 3,
      keywords: ['course', 'courses', 'curriculum', 'subjects', 'syllabus', 'cbse', 'board', 'teach', 'class', 'grade'],
      question: 'Courses & Curriculum',
      answer: '📘 We follow the CBSE curriculum.\n\n• Pre-Primary School: Nursery, Jr.K.G, Sr.K.G.\n• Primary School: Std. 1 to Std. 2\n\nFor specific grade details, please contact us at 022-27662725.'
    },
    {
      id: 4,
      keywords: ['timing', 'timings', 'time', 'hours', 'schedule', 'school hours', 'office hours'],
      question: 'School Timings',
      answer: '🕐 School Timings:\nMonday to Saturday: 7:30 AM – 1:30 PM\n\n🏢 Office Hours:\n9:00 AM – 4:00 PM on working days.'
    },
    {
      id: 5,
      keywords: ['facilit', 'infrastructure', 'lab', 'library', 'sports', 'smart class', 'computer', 'activity', 'activities'],
      question: 'Facilities',
      answer: '🏫 Our school offers:\n• Smart Classrooms\n• Computer Education Lab\n• Creative Arts & Activity Programs\n• Sports & Play Areas\n• Safe & Secure Campus'
    },
    {
      id: 6,
      keywords: ['contact', 'phone', 'email', 'call', 'reach', 'number', 'address', 'location', 'map', 'direction', 'where'],
      question: 'Contact & Location',
      answer: '📞 Phone: 022-27662725\n📧 Email: cbsestmarysvashi@gmail.com\n📍 Dr. Mar Theophilus Marg, Sector 10A, Vashi, Navi Mumbai – 400703\n\n🗺️ <a href="https://www.google.com/maps/place/Dr+Mar+Theophilus+Marg,+Juhu+Nagar,+Vashi,+Navi+Mumbai,+Maharashtra+400703/@19.0835046,72.9972049,17z" target="_blank" style="color:#2a4074;font-weight:600;">View on Google Maps</a>\n\n🌐 <a href="https://stmarysvashi.in" target="_blank" style="color:#2a4074;font-weight:600;">stmarysvashi.in</a>'
    },
    {
      id: 7,
      keywords: ['eligib', 'age', 'nursery', 'lkg', 'ukg', 'kg', 'criteria'],
      question: 'Admission Eligibility',
      answer: '📋 Age Eligibility (as of 31st March):\n• Nursery: 3 years\n• LKG: 4 years\n• UKG: 5 years\n• Class I: 6 years\n\nAdmissions follow CBSE norms.'
    },
    {
      id: 8,
      keywords: ['extra', 'extracurricular', 'music', 'dance', 'art', 'sport', 'club', 'event'],
      question: 'Extracurricular Activities',
      answer: '🎨 Yes! We offer a wide range of activities:\n• Sports & Games\n• Music & Dance\n• Art & Craft\n• Storytelling & Creative Expression\n• Cultural Events & Competitions'
    },
  ];

  const CONTACT_FOOTER = '\n\nℹ️ For any assistance, please contact our admissions team at <a href="tel:02227662725" style="color:#2a4074;font-weight:600;">022 27662725</a> or email at <a href="mailto:cbsestmarysvashi@gmail.com" style="color:#2a4074;font-weight:600;">cbsestmarysvashi@gmail.com</a>';

  const GREETINGS = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'hii', 'helo', 'hai', 'howdy', 'greetings', 'sup', 'what\'s up', 'whats up'];

  const FALLBACK = '🤔 Sorry, I didn\'t understand that.\n\nPlease choose one of the options below or type a keyword like:\nAdmission / Fees / Courses / Contact / Location';

  // Keyword matcher — returns matched rule or null
  function matchRule(input) {
    const text = input.toLowerCase().trim();
    if (GREETINGS.some(g => text === g || text.startsWith(g + ' ') || text.endsWith(' ' + g)))
      return { answer: '👋 Hello! Welcome to St. Mary\'s CBSE School.\n\nHow can I help you today? You can ask me about:\nAdmission / Fees / Courses / Timings / Contact / Facilities' };
    const rule = rules.find(r => r.keywords.some(k => text.includes(k)));
    if (rule) return { answer: rule.answer + CONTACT_FOOTER };
    return null;
  }

  const faqs = rules; // alias for button rendering

  const botSVG = `<svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="4" width="6" height="22" rx="3" fill="${BOT_COLOR}"/>
    <rect x="66" y="4" width="6" height="22" rx="3" fill="${BOT_COLOR}"/>
    <path d="M10 38 Q4 38 4 48 Q4 62 12 62 Q18 62 20 56" fill="${BOT_COLOR}"/>
    <path d="M90 38 Q96 38 96 48 Q96 62 88 62 Q82 62 80 56" fill="${BOT_COLOR}"/>
    <path d="M20 28 Q20 16 50 16 Q80 16 80 28 L80 62 Q80 74 50 74 Q20 74 20 62 Z" fill="${BOT_COLOR}"/>
    <path d="M38 74 L30 86 L52 74 Z" fill="${BOT_COLOR}"/>
    <rect x="30" y="30" width="40" height="30" rx="8" fill="white"/>
    <path d="M38 42 Q40 38 42 42" stroke="${BOT_COLOR}" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M58 42 Q60 38 62 42" stroke="${BOT_COLOR}" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M44 52 Q50 57 56 52" stroke="${BOT_COLOR}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  </svg>`;

  const botSVGSm = `<svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="4" width="6" height="22" rx="3" fill="${BOT_COLOR}"/>
    <rect x="66" y="4" width="6" height="22" rx="3" fill="${BOT_COLOR}"/>
    <path d="M10 38 Q4 38 4 48 Q4 62 12 62 Q18 62 20 56" fill="${BOT_COLOR}"/>
    <path d="M90 38 Q96 38 96 48 Q96 62 88 62 Q82 62 80 56" fill="${BOT_COLOR}"/>
    <path d="M20 28 Q20 16 50 16 Q80 16 80 28 L80 62 Q80 74 50 74 Q20 74 20 62 Z" fill="${BOT_COLOR}"/>
    <path d="M38 74 L30 86 L52 74 Z" fill="${BOT_COLOR}"/>
    <rect x="30" y="30" width="40" height="30" rx="8" fill="white"/>
    <path d="M38 42 Q40 38 42 42" stroke="${BOT_COLOR}" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M58 42 Q60 38 62 42" stroke="${BOT_COLOR}" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M44 52 Q50 57 56 52" stroke="${BOT_COLOR}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  </svg>`;

  // State
  let open = false;
  let messages = [{ from: 'bot', text: "👋 Hi! I'm Marian Bot.\n\nHow may I assist you today? You can type your question or choose a topic below." }];
  let pos = { x: window.innerWidth - 100, y: window.innerHeight - 130 };
  let dragging = false, hasDragged = false, dragOffset = { x: 0, y: 0 };

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #cb-btn { position:fixed; z-index:99999; cursor:pointer; user-select:none; display:flex; flex-direction:column; align-items:center; right:20px; bottom:30px; }
    #cb-btn:active { cursor:grabbing; }
    #cb-card { background:#2a4074; border-radius:18px; width:80px; padding:0 0 10px 0; display:flex; flex-direction:column; align-items:center; box-shadow:0 6px 20px rgba(0,0,0,0.3); position:relative; margin-top:28px; }
    #cb-avatar-wrap { width:72px; height:72px; border-radius:50%; background:white; border:4px solid white; box-shadow:0 4px 14px rgba(0,0,0,0.2); overflow:hidden; position:absolute; top:-32px; left:50%; transform:translateX(-50%); }
    #cb-avatar-wrap img { width:100%; height:100%; object-fit:cover; object-position:top center; display:block; }
    #cb-dot { position:absolute; bottom:2px; right:2px; width:13px; height:13px; background:#4ade80; border:2px solid white; border-radius:50%; z-index:2; }
    #cb-card-name { color:white; font-family:'Poppins',sans-serif; font-size:10px; font-weight:700; letter-spacing:0.5px; margin-top:46px; text-align:center; padding:0 6px; line-height:1.3; }
    #cb-card-sub { color:rgba(255,255,255,0.75); font-family:'Poppins',sans-serif; font-size:9px; font-weight:400; text-align:center; }
    #cb-close-btn { position:absolute; top:-10px; right:-10px; width:24px; height:24px; background:#29b6f6; border-radius:50%; border:2px solid white; color:white; font-size:13px; font-weight:700; display:none; align-items:center; justify-content:center; cursor:pointer; z-index:3; line-height:1; }
    #cb-btn.open #cb-close-btn { display:flex; }
    #cb-panel { position:fixed; z-index:99999; width:320px; border-radius:16px; box-shadow:0 8px 32px rgba(0,0,0,0.18); overflow:hidden; border:1px solid #e5e7eb; background:white; display:flex; flex-direction:column; }
    @media(max-width:400px){ #cb-panel { width:calc(100vw - 16px); } }
    #cb-header { display:flex; align-items:center; gap:10px; background:${BOT_COLOR}; padding:10px 14px; }
    #cb-header-avatar { width:38px; height:38px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    #cb-header-title { flex:1; color:white; font-weight:700; font-size:13px; font-family:'Poppins',sans-serif; }
    .cb-icon-btn { background:none; border:none; cursor:pointer; color:rgba(255,255,255,0.7); padding:4px; display:flex; align-items:center; justify-content:center; transition:color 0.2s; }
    .cb-icon-btn:hover { color:white; }
    #cb-messages { overflow-y:auto; padding:12px; display:flex; flex-direction:column; gap:10px; max-height:300px; background:#f9fafb; }
    .cb-msg-row { display:flex; gap:8px; }
    .cb-msg-row.user { justify-content:flex-end; }
    .cb-msg-row.bot { justify-content:flex-start; }
    .cb-msg-avatar { width:26px; height:26px; border-radius:50%; background:white; border:1px solid rgba(42,64,116,0.2); display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:2px; }
    .cb-bubble { max-width:80%; padding:8px 12px; border-radius:16px; font-size:12px; line-height:1.5; white-space:pre-line; font-family:'Poppins',sans-serif; }
    .cb-bubble.bot { background:white; border:1px solid #e5e7eb; color:#1f2937; border-top-left-radius:4px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .cb-bubble.user { background:${BOT_COLOR}; color:white; border-top-right-radius:4px; }
    #cb-chips { display:flex; flex-wrap:wrap; gap:6px; padding:8px 12px; background:#f9fafb; border-top:1px solid #e5e7eb; }
    .cb-chip { font-size:11px; padding:5px 10px; border-radius:20px; border:1px solid rgba(42,64,116,0.3); background:white; color:${BOT_COLOR}; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:'Poppins',sans-serif; white-space:nowrap; }
    .cb-chip:hover { background:${BOT_COLOR}; color:white; }
    #cb-footer { border-top:1px solid #e5e7eb; background:white; padding:8px 10px; display:flex; gap:6px; }
    #cb-input { flex:1; padding:8px 12px; border-radius:20px; border:1px solid rgba(42,64,116,0.3); font-size:12px; font-family:'Poppins',sans-serif; outline:none; }
    #cb-input:focus { border-color:${BOT_COLOR}; }
    #cb-send { background:${BOT_COLOR}; color:white; border:none; border-radius:20px; padding:8px 14px; cursor:pointer; font-size:12px; font-family:'Poppins',sans-serif; font-weight:600; transition:background 0.2s; }
    #cb-send:hover { background:#1e2f57; }
  `;
  document.head.appendChild(style);

  // Build DOM
  const btn = document.createElement('div');
  btn.id = 'cb-btn';
  btn.innerHTML = `
    <div id="cb-card">
      <div id="cb-avatar-wrap">
        <img src="images/chatbot_avatarr.png" alt="Marian Bot" />
        <span id="cb-dot"></span>
      </div>
      <div id="cb-card-name">Marian Bot</div>
      <div id="cb-close-btn">&times;</div>
    </div>`;
  btn.style.right = '20px';
  btn.style.bottom = '30px';

  const panel = document.createElement('div');
  panel.id = 'cb-panel';
  panel.style.display = 'none';

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  function renderPanel() {
    const rect = btn.getBoundingClientRect();
    panel.style.right = Math.max(8, window.innerWidth - rect.right) + 'px';
    panel.style.bottom = Math.max(8, window.innerHeight - rect.top + 8) + 'px';
    panel.style.left = 'auto';
    panel.style.top = 'auto';

    panel.innerHTML = `
      <div id="cb-header">
        <div id="cb-header-avatar"><img src="images/chatbot-avatar.png" alt="" style="width:38px;height:38px;border-radius:50%;object-fit:cover;object-position:top center;" /></div>
        <div id="cb-header-title">Marian Bot</div>
        <button class="cb-icon-btn" id="cb-reset" title="Restart">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
        </button>
        <button class="cb-icon-btn" id="cb-close" title="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div id="cb-messages">
        ${messages.map(m => `
          <div class="cb-msg-row ${m.from}">
            ${m.from === 'bot' ? `<div class="cb-msg-avatar"><img src="images/chatbot-avatar.png" alt="" style="width:26px;height:26px;border-radius:50%;object-fit:cover;object-position:top center;" /></div>` : ''}
            <div class="cb-bubble ${m.from}">${m.from === 'bot' ? m.text.replace(/\n/g, '<br>') : m.text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>')}</div>
          </div>`).join('')}
        <div id="cb-bottom"></div>
      </div>
      <div id="cb-chips">
        ${rules.map(r => `<button class="cb-chip" data-id="${r.id}">${r.question}</button>`).join('')}
      </div>
      <div id="cb-footer">
        <input id="cb-input" type="text" placeholder="Type your question..." />
        <button id="cb-send">Send</button>
      </div>`;

    document.getElementById('cb-close').onclick = () => { open = false; panel.style.display = 'none'; btn.classList.remove('open'); };
    document.getElementById('cb-reset').onclick = reset;

    // Chip buttons
    document.querySelectorAll('.cb-chip').forEach(b => {
      b.addEventListener('click', () => {
        const rule = rules.find(r => r.id === +b.dataset.id);
        if (!rule) return;
        messages.push({ from: 'user', text: rule.question }, { from: 'bot', text: rule.answer + CONTACT_FOOTER });
        renderPanel();
        document.getElementById('cb-input').focus();
      });
    });

    // Typed input — keyword matching
    const inputEl = document.getElementById('cb-input');
    const sendBtn = document.getElementById('cb-send');
    function handleSend() {
      const val = inputEl.value.trim();
      if (!val) return;
      const matched = matchRule(val);
      messages.push({ from: 'user', text: val });
      messages.push({ from: 'bot', text: matched ? matched.answer : FALLBACK });
      inputEl.value = '';
      renderPanel();
      document.getElementById('cb-input').focus();
    }
    sendBtn.onclick = handleSend;
    inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend(); });

    const bottom = document.getElementById('cb-bottom');
    if (bottom) bottom.scrollIntoView({ behavior: 'smooth' });
  }

  function reset() {
    messages = [{ from: 'bot', text: "👋 Hi! I'm Marian Bot.\n\nHow may I assist you today? You can type your question or choose a topic below." }];
    renderPanel();
  }

  // Toggle open
  btn.addEventListener('click', (e) => {
    if (hasDragged) return;
    // if X button clicked, close
    if (e.target.id === 'cb-close-btn' || e.target.closest('#cb-close-btn')) {
      open = false;
      panel.style.display = 'none';
      btn.classList.remove('open');
      return;
    }
    open = !open;
    panel.style.display = open ? 'flex' : 'none';
    btn.classList.toggle('open', open);
    if (open) renderPanel();
  });

  // Drag — mouse
  btn.addEventListener('mousedown', e => {
    dragging = true; hasDragged = false;
    const rect = btn.getBoundingClientRect();
    pos = { x: rect.left, y: rect.top };
    btn.style.left = pos.x + 'px';
    btn.style.top = pos.y + 'px';
    btn.style.right = 'auto';
    btn.style.bottom = 'auto';
    dragOffset = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    e.preventDefault();
  });
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    hasDragged = true;
    pos.x = Math.min(Math.max(0, e.clientX - dragOffset.x), window.innerWidth - (btn.offsetWidth || 72));
    pos.y = Math.min(Math.max(0, e.clientY - dragOffset.y), window.innerHeight - (btn.offsetHeight || 88));
    btn.style.left = pos.x + 'px';
    btn.style.top = pos.y + 'px';
    if (open) renderPanel();
  });
  window.addEventListener('mouseup', () => { dragging = false; setTimeout(() => { hasDragged = false; }, 100); });

  // Drag — touch
  btn.addEventListener('touchstart', e => {
    dragging = true; hasDragged = false;
    const rect = btn.getBoundingClientRect();
    pos = { x: rect.left, y: rect.top };
    btn.style.left = pos.x + 'px';
    btn.style.top = pos.y + 'px';
    btn.style.right = 'auto';
    btn.style.bottom = 'auto';
    dragOffset = { x: e.touches[0].clientX - pos.x, y: e.touches[0].clientY - pos.y };
  }, { passive: true });
  window.addEventListener('touchmove', e => {
    if (!dragging) return;
    hasDragged = true;
    pos.x = Math.min(Math.max(0, e.touches[0].clientX - dragOffset.x), window.innerWidth - (btn.offsetWidth || 72));
    pos.y = Math.min(Math.max(0, e.touches[0].clientY - dragOffset.y), window.innerHeight - (btn.offsetHeight || 88));
    btn.style.left = pos.x + 'px';
    btn.style.top = pos.y + 'px';
    if (open) renderPanel();
  }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; setTimeout(() => { hasDragged = false; }, 100); });
})();
