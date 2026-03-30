(function () {
  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScAFnsEDCHib5d6f3cN1YQKhHTHGsiLW9CDPNz0DupKaDWzsw/viewform';

  const style = document.createElement('style');
  style.textContent = `
    #enq-btn {
      position: fixed;
      bottom: 18px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99998;
      background: #2a4074;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 12px;
      padding: 8px 20px;
      border-radius: 50px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.3);
      cursor: pointer;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 7px;
      white-space: nowrap;
      border: 2px solid rgba(255,255,255,0.2);
      letter-spacing: 0.3px;
      transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
    }
    #enq-btn:hover {
      background: #1e2f57;
      transform: translateX(-50%) translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.35);
    }
    #enq-btn .enq-tag {
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
      #enq-btn {
        font-size: 11px;
        padding: 7px 16px;
        bottom: 14px;
      }
    }
  `;
  document.head.appendChild(style);

  const btn = document.createElement('a');
  btn.id = 'enq-btn';
  btn.href = FORM_URL;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.innerHTML = `
    <span class="enq-tag">Admission Open</span>
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
    Enroll Now`;

  document.body.appendChild(btn);
})();
