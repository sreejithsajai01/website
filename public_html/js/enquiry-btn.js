(function () {
  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScAFnsEDCHib5d6f3cN1YQKhHTHGsiLW9CDPNz0DupKaDWzsw/viewform';

  const style = document.createElement('style');
  style.textContent = `
    #float-pill {
      position: fixed;
      bottom: 18px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99998;
      display: flex;
      align-items: center;
      border-radius: 50px;
      background: #2a4074;
      box-shadow: 0 4px 18px rgba(0,0,0,0.28);
      overflow: hidden;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 12px;
      white-space: nowrap;
      padding: 3px 5px;
    }
    #float-pill a {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 6px 14px;
      text-decoration: none;
      letter-spacing: 0.3px;
      transition: background 0.25s, transform 0.2s;
    }
    #float-pill .pill-enroll {
      background: #2a4074;
      color: white;
      border-radius: 50px 0 0 50px;
    }
    #float-pill .pill-enroll:hover { background: #1e2f57; }
    #float-pill .pill-divider {
      width: 1px;
      background: rgba(255,255,255,0.25);
      flex-shrink: 0;
    }
    #float-pill .pill-pay {
      background: #f4c430;
      color: #2a4074;
      border-radius: 50px;
      margin: 4px 4px 4px 0;
    }
    #float-pill .pill-pay:hover { background: #e0b020; }
    #float-pill .enq-tag {
      background: #f4c430;
      color: #2a4074;
      font-size: 9px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    @media (max-width: 480px) {
      #float-pill { font-size: 11px; bottom: 14px; }
      #float-pill a { padding: 8px 14px; gap: 5px; }
    }
  `;
  document.head.appendChild(style);

  const pill = document.createElement('div');
  pill.id = 'float-pill';
  pill.innerHTML = `
    <a href="${FORM_URL}" target="_blank" rel="noopener noreferrer" class="pill-enroll">
      <span class="enq-tag">Admission Open</span>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
      Enroll Now
    </a>
    <div class="pill-divider"></div>
    <a href="payment.html" class="pill-pay">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2a4074" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
      Pay Fee Online
    </a>
  `;

  document.body.appendChild(pill);
})();
