(function () {
  const BOT_COLOR = '#3B3FD8';

  const faqs = [
    { id: 1, question: 'How do I apply for admission?', answer: 'You can apply for admission by visiting our Admissions page and filling out the Online Registration form. Admissions are open for classes Nursery to Grade 2 subject to seat availability. You may also visit the school office during working hours.' },
    { id: 2, question: 'What is the fee structure?', answer: 'The fee structure varies by grade. Please contact the school office at 022-27662725 for the latest fee details.' },
    { id: 3, question: 'What board does the school follow?', answer: "St. Mary's CBSE School Vashi is affiliated with the Central Board of Secondary Education (CBSE), New Delhi." },
    { id: 4, question: 'What are the school timings?', answer: 'School timings are Monday to Saturday, 7:30 AM to 1:30 PM. Office hours are 9:00 AM to 4:00 PM on working days.' },
    { id: 5, question: 'What facilities does the school offer?', answer: "The school offers Smart Classrooms, Computer Education, Creative Arts & Activity Programs, Sports & Play Areas, and a Safe & Secure Campus." },
    { id: 6, question: 'How can I contact the school?', answer: '📞 022-27662725\n📧 cbsestmarysvashi@gmail.com\n📍 Dr. Mar Theophilus Marg, Sector 10A, Vashi, Navi Mumbai - 400703' },
    { id: 7, question: 'What is the eligibility for admission?', answer: 'Age eligibility follows CBSE norms. For Nursery: 3 years, LKG: 4 years, UKG: 5 years, Class I: 6 years as of 31st March of the admission year.' },
    { id: 8, question: 'Are there any extracurricular activities?', answer: 'Yes! We offer Sports, Music, Dance, Art, storytelling, and creative expression programs.' },
  ];

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
  let showFAQs = true;
  let messages = [{ from: 'bot', text: "👋 Hi! I'm St. Mary's CBSE Assistant. Please select a question below to get started." }];
  let pos = { x: window.innerWidth - 100, y: window.innerHeight - 130 };
  let dragging = false, hasDragged = false, dragOffset = { x: 0, y: 0 };

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #cb-btn { position:fixed; z-index:99999; cursor:grab; user-select:none; display:flex; flex-direction:column; align-items:center; gap:4px; }
    #cb-btn:active { cursor:grabbing; }
    #cb-avatar { width:56px; height:56px; border-radius:50%; background:white; border:2px solid ${BOT_COLOR}; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(0,0,0,0.2); transition:transform 0.2s; position:relative; }
    #cb-btn:hover #cb-avatar { transform:scale(1.1); }
    #cb-dot { position:absolute; bottom:2px; right:2px; width:12px; height:12px; background:#4ade80; border:2px solid white; border-radius:50%; }
    #cb-label { font-size:11px; font-weight:600; color:${BOT_COLOR}; background:rgba(255,255,255,0.95); padding:2px 8px; border-radius:20px; box-shadow:0 2px 6px rgba(0,0,0,0.15); border:1px solid rgba(59,63,216,0.2); white-space:nowrap; }
    #cb-panel { position:fixed; z-index:99999; width:320px; border-radius:16px; box-shadow:0 8px 32px rgba(0,0,0,0.18); overflow:hidden; border:1px solid #e5e7eb; background:white; display:flex; flex-direction:column; }
    @media(max-width:400px){ #cb-panel { width:calc(100vw - 16px); } }
    #cb-header { display:flex; align-items:center; gap:10px; background:${BOT_COLOR}; padding:10px 14px; }
    #cb-header-avatar { width:38px; height:38px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    #cb-header-title { flex:1; color:white; font-weight:700; font-size:13px; font-family:'Poppins',sans-serif; }
    .cb-icon-btn { background:none; border:none; cursor:pointer; color:rgba(255,255,255,0.7); padding:4px; display:flex; align-items:center; justify-content:center; transition:color 0.2s; }
    .cb-icon-btn:hover { color:white; }
    #cb-messages { overflow-y:auto; padding:12px; display:flex; flex-direction:column; gap:10px; max-height:260px; background:#f9fafb; }
    .cb-msg-row { display:flex; gap:8px; }
    .cb-msg-row.user { justify-content:flex-end; }
    .cb-msg-row.bot { justify-content:flex-start; }
    .cb-msg-avatar { width:26px; height:26px; border-radius:50%; background:white; border:1px solid rgba(59,63,216,0.2); display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:2px; }
    .cb-bubble { max-width:80%; padding:8px 12px; border-radius:16px; font-size:12px; line-height:1.5; white-space:pre-line; font-family:'Poppins',sans-serif; }
    .cb-bubble.bot { background:white; border:1px solid #e5e7eb; color:#1f2937; border-top-left-radius:4px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .cb-bubble.user { background:${BOT_COLOR}; color:white; border-top-right-radius:4px; }
    #cb-footer { border-top:1px solid #e5e7eb; background:white; padding:10px; }
    .cb-faq-label { font-size:11px; color:#6b7280; font-weight:500; margin-bottom:6px; font-family:'Poppins',sans-serif; }
    .cb-faq-btn { width:100%; text-align:left; font-size:11px; padding:7px 10px; border-radius:8px; border:1px solid rgba(59,63,216,0.2); background:rgba(59,63,216,0.05); color:${BOT_COLOR}; font-weight:500; cursor:pointer; margin-bottom:4px; transition:background 0.2s,color 0.2s; font-family:'Poppins',sans-serif; }
    .cb-faq-btn:hover { background:${BOT_COLOR}; color:white; }
    #cb-ask-again { width:100%; display:flex; align-items:center; justify-content:center; gap:6px; font-size:11px; color:${BOT_COLOR}; font-weight:600; padding:8px; border-radius:8px; border:1px solid rgba(59,63,216,0.3); background:none; cursor:pointer; transition:background 0.2s; font-family:'Poppins',sans-serif; }
    #cb-ask-again:hover { background:rgba(59,63,216,0.05); }
  `;
  document.head.appendChild(style);

  // Build DOM
  const btn = document.createElement('div');
  btn.id = 'cb-btn';
  btn.innerHTML = `<div id="cb-avatar">${botSVG}<span id="cb-dot"></span></div><span id="cb-label">Ask St Mary's CBSE Bot</span>`;
  btn.style.left = pos.x + 'px';
  btn.style.top = pos.y + 'px';

  const panel = document.createElement('div');
  panel.id = 'cb-panel';
  panel.style.display = 'none';

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  function renderPanel() {
    const pr = Math.max(8, window.innerWidth - pos.x - (btn.offsetWidth || 72));
    const pb = Math.max(8, window.innerHeight - pos.y + 8);
    panel.style.right = pr + 'px';
    panel.style.bottom = pb + 'px';
    panel.style.left = 'auto';
    panel.style.top = 'auto';

    panel.innerHTML = `
      <div id="cb-header">
        <div id="cb-header-avatar">${botSVGSm}</div>
        <div id="cb-header-title">St. Mary's CBSE Assistant</div>
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
            ${m.from === 'bot' ? `<div class="cb-msg-avatar">${botSVGSm}</div>` : ''}
            <div class="cb-bubble ${m.from}">${m.text.replace(/\n/g, '<br>')}</div>
          </div>`).join('')}
        <div id="cb-bottom"></div>
      </div>
      <div id="cb-footer">
        ${showFAQs
          ? `<div class="cb-faq-label">Select a question:</div>
             ${faqs.map(f => `<button class="cb-faq-btn" data-id="${f.id}">${f.question}</button>`).join('')}`
          : `<button id="cb-ask-again">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
               Ask another question
             </button>`
        }
      </div>`;

    document.getElementById('cb-close').onclick = () => { open = false; panel.style.display = 'none'; };
    document.getElementById('cb-reset').onclick = reset;
    document.querySelectorAll('.cb-faq-btn').forEach(b => {
      b.addEventListener('click', () => {
        const faq = faqs.find(f => f.id === +b.dataset.id);
        if (!faq) return;
        showFAQs = false;
        messages.push({ from: 'user', text: faq.question }, { from: 'bot', text: faq.answer });
        renderPanel();
      });
    });
    const askAgain = document.getElementById('cb-ask-again');
    if (askAgain) askAgain.onclick = reset;

    const bottom = document.getElementById('cb-bottom');
    if (bottom) bottom.scrollIntoView({ behavior: 'smooth' });
  }

  function reset() {
    messages = [{ from: 'bot', text: "👋 Hi! I'm St. Mary's CBSE Assistant. Please select a question below to get started." }];
    showFAQs = true;
    renderPanel();
  }

  // Toggle open
  btn.addEventListener('click', () => {
    if (hasDragged) return;
    open = !open;
    panel.style.display = open ? 'flex' : 'none';
    if (open) renderPanel();
  });

  // Drag — mouse
  btn.addEventListener('mousedown', e => {
    dragging = true; hasDragged = false;
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
