/* Xenith Solutions — shared header/footer + interactions */
(function () {
  const PAGES = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About" },
    { href: "capabilities.html", label: "Capabilities" },
    { href: "customers.html", label: "Customers" },
    { href: "careers.html", label: "Careers & Benefits" },
    { href: "contact.html", label: "Contact" },
  ];
  const CONTACT = {
    phone: "703-891-2731",
    email: "info@XenithSolutions.com",
    address: "1602 Village Mkt Blvd, #260<br>Leesburg, VA 20175",
    linkedin: "https://www.linkedin.com/company/xenith-solutions",
    jobs: "https://xenithsolutions.applytojob.com",
  };

  const ICONS = {
    cloud: '<path d="M7 18a5 5 0 0 1-.9-9.9A6 6 0 0 1 17.7 9 4.5 4.5 0 0 1 17.5 18Z"/><path d="M9 13h6M12 10v6"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6Z"/><path d="m9 12 2 2 4-4"/>',
    data: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/><rect x="10" y="10" width="4" height="4"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M12 22s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>',
    check: '<path d="M5 12l5 5L20 7"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v12"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z"/><path d="M4 19V5M19 19v2H6"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3"/>',
  };
  const icon = (name) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
  window.XS = { icon, CONTACT };

  const LOGO = `<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
      <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#38d6ff"/><stop offset="1" stop-color="#6e8bff"/></linearGradient></defs>
      <rect x="1" y="1" width="30" height="30" rx="8" fill="none" stroke="url(#lg)" stroke-width="1.5"/>
      <path d="M9 9l14 14M23 9 9 23" stroke="url(#lg)" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="16" cy="16" r="2.4" fill="#070b12" stroke="#38d6ff" stroke-width="1.4"/>
    </svg>`;

  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  function header() {
    const links = PAGES.map(
      (p) => `<li><a href="${p.href}"${p.href === current ? ' aria-current="page"' : ""}>${p.label}</a></li>`
    ).join("");
    return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="index.html" aria-label="Xenith Solutions home">${LOGO}<span>Xenith<small>Solutions</small></span></a>
        <nav aria-label="Primary"><ul class="nav-links" id="nav-links">${links}
          <li class="mobile-only"><a href="${CONTACT.jobs}" target="_blank" rel="noopener">View Openings ↗</a></li></ul></nav>
        <div class="nav-cta">
          <a class="btn btn-primary" href="contact.html">Partner with us <span class="arrow">→</span></a>
          <button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>`;
  }

  function footer() {
    const year = new Date().getFullYear();
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-about">
            <a class="brand" href="index.html">${LOGO}<span>Xenith<small>Solutions</small></span></a>
            <p>From data to defense — we make missions smarter. A Service-Disabled Veteran-Owned Small Business serving DoD and civilian agencies.</p>
            <div class="socials">
              <a href="${CONTACT.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4z"/></svg></a>
              <a href="mailto:${CONTACT.email}" aria-label="Email">${icon("mail")}</a>
              <a href="tel:${CONTACT.phone}" aria-label="Phone">${icon("phone")}</a>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <ul>${PAGES.map((p) => `<li><a href="${p.href}">${p.label}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Capabilities</h4>
            <ul>
              <li><a href="capabilities.html#software">Software & Cloud</a></li>
              <li><a href="capabilities.html#cyber">Cyber & Zero Trust</a></li>
              <li><a href="capabilities.html#data">AI/ML & Data</a></li>
              <li><a href="capabilities.html#edge">Secure Edge</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:${CONTACT.phone}">${CONTACT.phone}</a></li>
              <li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
              <li><address>${CONTACT.address}</address></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${year} Xenith Solutions LLC. All rights reserved.</span>
          <span class="chip"><span class="badge-dot"></span> Service-Disabled Veteran-Owned Small Business</span>
        </div>
      </div>
    </footer>`;
  }

  document.body.insertAdjacentHTML("afterbegin", header());
  document.body.insertAdjacentHTML("beforeend", footer());
  document.querySelectorAll("[data-icon]").forEach((el) => (el.innerHTML = icon(el.dataset.icon)));

  // Header scroll state + mobile menu
  const hdr = document.querySelector(".site-header");
  const onScroll = () => hdr.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  const toggle = document.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) toggle.click();
  });

  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => en.isIntersecting && (en.target.classList.add("in"), io.unobserve(en.target))),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // Card spotlight
  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest && e.target.closest(".card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });

  // Count-up stats
  const counters = document.querySelectorAll("[data-count]");
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target, end = +el.dataset.count, suffix = el.dataset.suffix || "";
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - t0) / 1400);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => cio.observe(c));

  // Hero network canvas
  const canvas = document.querySelector(".hero-canvas");
  if (canvas && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");
    let w, h, nodes, dpr;
    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(90, (w * h) / 16000));
      nodes = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25, r: Math.random() * 1.6 + .6 }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
          if (d < 140 * 140) {
            ctx.strokeStyle = `rgba(56,214,255,${0.14 * (1 - Math.sqrt(d) / 140)})`;
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(140,220,255,0.7)";
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    init(); draw();
    window.addEventListener("resize", init);
  }

  // Hero console: bars, sparkline, rolling log
  document.querySelectorAll(".bar > span[data-w]").forEach((s) => setTimeout(() => (s.style.width = s.dataset.w + "%"), 300));
  const spark = document.querySelector(".spark");
  if (spark) {
    const pts = Array.from({ length: 40 }, (_, i) => 40 - (Math.sin(i / 4) * 12 + Math.random() * 10 + i * 0.5));
    const tick = () => {
      pts.shift(); pts.push(Math.max(4, Math.min(60, pts[pts.length - 1] + (Math.random() - .55) * 9)));
      const d = pts.map((y, i) => `${i ? "L" : "M"}${(i / 39) * 300},${y}`).join(" ");
      spark.innerHTML = `<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#38d6ff" stop-opacity=".35"/><stop offset="1" stop-color="#38d6ff" stop-opacity="0"/></linearGradient></defs>
        <path d="${d} L300,64 L0,64Z" fill="url(#sg)"/><path d="${d}" fill="none" stroke="#38d6ff" stroke-width="1.6"/>`;
    };
    tick(); setInterval(tick, 900);
  }
  const log = document.querySelector(".log");
  if (log) {
    const lines = [
      '<span class="ok">✓</span> ZT policy verified · <span class="ac">identity</span>',
      '<span class="ok">✓</span> ISR feed ingested · 2.4 GB',
      '<span class="ok">✓</span> MLOps model v3.2 promoted',
      '<span class="ok">✓</span> Edge node microsegmented · UAS-07',
      '<span class="ok">✓</span> STIG baseline · 0 findings',
      '<span class="ok">✓</span> GovCloud pipeline · deploy ok',
      '<span class="ok">✓</span> Data lake partition synced',
    ];
    let k = 0;
    const show = () => {
      log.innerHTML = [0, 1, 2, 3].map((o) => lines[(k + o) % lines.length]).join("<br>");
      k++;
    };
    show(); setInterval(show, 2200);
  }

  // Capabilities tabs (with hash deep-linking)
  const tabs = [...document.querySelectorAll(".cap-tab")];
  if (tabs.length) {
    const select = (id, focus) => {
      tabs.forEach((t) => {
        const on = t.dataset.target === id;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.dataset.target).hidden = !on;
        if (on && focus) t.focus();
      });
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => { select(t.dataset.target); history.replaceState(null, "", "#" + t.dataset.target); });
      t.addEventListener("keydown", (e) => {
        const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (!dir) return;
        e.preventDefault();
        const next = tabs[(i + dir + tabs.length) % tabs.length];
        select(next.dataset.target, true);
      });
    });
    const fromHash = () => {
      const h = location.hash.slice(1);
      if (tabs.some((t) => t.dataset.target === h)) select(h);
    };
    fromHash(); window.addEventListener("hashchange", fromHash);
  }

  // Contact form validation (mock submit)
  const form = document.querySelector("form.form");
  if (form) {
    const validate = (field) => {
      const input = field.querySelector("input, textarea");
      if (!input) return true;
      let ok = input.checkValidity();
      if (input.type === "email" && input.value) ok = ok && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
      field.classList.toggle("invalid", !ok);
      return ok;
    };
    form.querySelectorAll(".field").forEach((f) => {
      const input = f.querySelector("input, textarea");
      input && input.addEventListener("blur", () => validate(f));
      input && input.addEventListener("input", () => f.classList.contains("invalid") && validate(f));
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = [...form.querySelectorAll(".field")];
      const results = fields.map(validate);
      if (results.includes(false)) {
        fields[results.indexOf(false)].querySelector("input, textarea").focus();
        return;
      }
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true; btn.textContent = "Sending…";
      setTimeout(() => {
        form.classList.add("sent");
        form.querySelector(".form-success strong").textContent = form.elements["name"].value.split(" ")[0] || "there";
      }, 900);
    });
    const reset = form.querySelector("[data-reset]");
    reset && reset.addEventListener("click", () => {
      form.reset(); form.classList.remove("sent");
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = false; btn.innerHTML = 'Submit <span class="arrow">→</span>';
    });
  }
})();
