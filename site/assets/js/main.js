/* ---------- content ---------- */
const apps = [
  {name:'Yagi Logistics', id:'6806666728', tag:'Logistics · Fleet & HR', img:'yagi-logistics', play:'sa.yagi.logistics'},
  {name:'NutriSmart', id:'6758548567', tag:'Health & nutrition', img:'nutrismart', play:'com.nutritionsmart.ai', iconFit:'72%'},
  {name:'EXAB PMO', id:'6814884062', tag:'Project management', img:'exab-pmo', play:'sa.exab.pmo'},
  {name:'Happy Logistics', id:'6478984773', tag:'Logistics', img:'happy-logistics', play:'com.happylogisticsapp.www'},
  {name:'Tajer.ly', id:'6754807870', tag:'Commerce · Store builder', img:'tajer-ly', play:'com.code_libya.tajer', iconFit:'72%'},
  {name:'Direct Market Place', id:'6473259741', tag:'Booking marketplace', img:'direct-market-place'},
  {name:'المجلس التنسيقي لشركات الضيافة', id:'1626286749', tag:'Hajj operations', ar:true, img:'hospitality-council', play:'com.almotawefeen1'},
  {name:'Remontada FC', id:'6451352706', tag:'Sports · Football reels', img:'remontada-fc', play:'com.remontadafc.app', noios:true, iconFit:true},
  {name:'أتمملي', id:'6459831887', tag:'Freelance marketplace', ar:true, img:'atmemly', play:'com.leadution.need4'}
];
const grads = [['#c8ff3e','#3ee6ff'],['#8b5cff','#3ee6ff'],['#ffb03e','#ff5e7a'],['#3ee6ff','#4b7bff'],['#ff5e7a','#8b5cff'],['#7dff9e','#c8ff3e'],['#ffd23e','#ff8a3e'],['#c48bff','#ff7ad9'],['#3effc1','#3ea7ff'],['#8e95d6','#e9a23b'],['#ff9a3e','#c8ff3e']];
const first = s => [...s.trim()][0];
const storeIcons = new Set(['6451352706','6806666728','6758548567','6814884062','6478984773','6754807870','6473259741','1626286749','6459831887']);
const iconBg = (a,i) => a.iconFit ? `#fff url(/img/icons/${a.id}.jpg) center/${typeof a.iconFit === 'string' ? a.iconFit : '66%'} no-repeat` : storeIcons.has(a.id) ? `url(/img/icons/${a.id}.jpg) center/cover` : `linear-gradient(135deg,${grads[i][0]},${grads[i][1]})`;
const iconTxt = a => storeIcons.has(a.id) ? '' : first(a.name);
document.getElementById('screen').innerHTML = '<div class="island"></div>' + apps.map((a,i)=>`<div class="ico"><b class="${a.ar?'ar':''}" style="background:${iconBg(a,i)}">${iconTxt(a)}</b><span class="${a.ar?'ar':''}">${a.name}</span></div>`).join('');
const featured = `
  <a class="app featured" href="#case">
    <div class="count">Featured</div><span class="feat">Case study ↓</span>
    <div class="art photo"><picture><source srcset="/img/sport-oasis-hd.avif" type="image/avif"><img src="/img/sport-oasis.webp" alt="Sport Oasis app screens" decoding="async"></picture></div>
    <div class="meta"><div><h4>Sport Oasis</h4><small>Sports · Maps · Reels</small></div><span class="go">↗</span></div>
  </a>`;
document.getElementById('track').innerHTML = featured + apps.map((a,i)=>`
  <div class="app${a.img?' poster':''}">
    ${a.img ? `<div class="art photo"><picture><source srcset="/img/${a.img}.avif?v=6" type="image/avif"><img src="/img/${a.img}.webp?v=6" alt="${a.name} app screens" decoding="async"></picture></div>` : `<div class="art" style="background:linear-gradient(135deg,${grads[i][0]},${grads[i][1]})">${storeIcons.has(a.id) ? `<img class="aicon${a.iconFit?' fit':''}" src="/img/icons/${a.id}.jpg" alt="${a.name} icon" loading="lazy">` : `<b class="${a.ar?'ar':''}">${first(a.name)}</b>`}</div>`}
    <div class="meta"><div><h4 class="${a.ar?'ar':''}" ${a.ar?'dir="rtl"':''}>${a.name}</h4><small>${a.tag}</small>
      <div class="stores">
        ${a.noios ? '' : `<a class="store" href="https://apps.apple.com/eg/app/id${a.id}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.27-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74s1.78.74 2.99.72c1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66zM14.1 5.84c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.28z"/></svg>App Store</a>`}
        ${a.play ? `<a class="store" href="https://play.google.com/store/apps/details?id=${a.play}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M3.6 2.2c-.2.2-.3.6-.3 1v17.6c0 .4.1.8.3 1l9.9-9.8L3.6 2.2zm11.2 8.5L5.1 1.2c-.3-.2-.7-.2-1 0l9.4 9.3 1.3.2zm4.4 1.3c0-.4-.2-.8-.6-1L15.9 9.6 14.5 11l1.4 1.4 2.7-1.5c.4-.2.6-.5.6-.9zM4.1 22.8c.3.2.7.2 1 0l9.7-5.5-1.3-1.3-9.4 6.8z"/></svg>Google Play</a>` : ''}
      </div></div></div>
  </div>`).join('');
const clients = [
  {f:'exab', n:'EXAB', url:'https://www.linkedin.com/company/exab-sa/'},
  {f:'yagi', n:'Yagi Logistics Services', url:'https://yaji.sa'},
  {f:'hopn', n:'HOPn', url:'https://www.linkedin.com/company/hopn-ug/'},
  {f:'glc-paints', n:'GLC Paints', url:'https://www.linkedin.com/company/glcpaints/'},
  {f:'united-integrated', n:'United Integrated Solutions', url:'https://www.linkedin.com/company/united-integrated-solutions/'},
  {f:'dubisign', n:'Dubisign', url:'https://www.linkedin.com/company/dubisign/'}
];
const logoHTML = clients.map(c => c.url
  ? `<a class="clogo" href="${c.url}" target="_blank" rel="noopener" title="${c.n}"><img src="/img/logos/${c.f}.webp" alt="${c.n}"></a>`
  : `<div class="clogo" title="${c.n}"><img src="/img/logos/${c.f}.webp" alt="${c.n}"></div>`).join('');
document.getElementById('mtrack').innerHTML = logoHTML.repeat(4);
// while the page is scrolling, hovering a logo shouldn't pause the strip — only once scrolling stops
(() => {
  const track = document.getElementById('mtrack');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // one GSAP loop drives the strip; pausing eases timeScale down instead of freezing abruptly
  const loop = (reduce || !window.gsap) ? null : gsap.to(track, { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });
  let held = false;
  const hold = on => { if (!loop || on === held) return; held = on;
    gsap.to(loop, { timeScale: on ? 0 : 1, duration: on ? .45 : .7, ease: on ? 'power2.out' : 'power2.in', overwrite: true }); };
  // don't spend frames while the strip is off screen
  if (loop) new IntersectionObserver(es => es[0].isIntersecting ? loop.resume() : loop.pause()).observe(track);
  let x = -1, y = -1, scrolling = false, t, lit = null;
  const clear = () => { hold(false); if (lit) { lit.classList.remove('lit'); lit = null; } };
  // pause only when the cursor is resting on a logo and the page isn't moving
  const check = () => {
    if (scrolling || x < 0) return clear();
    const el = document.elementFromPoint(x, y);
    const logo = el && el.closest('.clogo');
    if (!logo || !track.contains(logo)) return clear();
    if (lit !== logo) { if (lit) lit.classList.remove('lit'); lit = logo; logo.classList.add('lit'); }
    hold(true);
  };
  const onScroll = () => { scrolling = true; clear(); clearTimeout(t); t = setTimeout(() => { scrolling = false; check(); }, 220); };
  addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; x = e.clientX; y = e.clientY; check(); }, { passive: true });
  document.addEventListener('mouseleave', () => { x = -1; clear(); });
  addEventListener('wheel', onScroll, { passive: true });
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('touchmove', onScroll, { passive: true });
})();
const stack = ['Flutter','Dart','Kotlin','Swift','Media3','Platform channels','Bloc','Riverpod','Node.js','NestJS','REST APIs','Firebase','PostgreSQL','Google Maps','Push notifications','App Store & Play','CI/CD','Arabic RTL','Figma'];
const stackGroups = [
  {g:'mobile', c:'var(--mobile)', t:'Mobile', k:'Inner orbit', r:21, d:'46s', items:['Dart','Kotlin','Swift'],
   p:'One Flutter codebase, with native Kotlin and Swift wherever the platform needs it.'},
  {g:'arch', c:'var(--arch)', t:'Architecture', k:'Middle orbit', r:31.5, d:'70s', rev:true, items:['Bloc','Riverpod','Platform channels','Media3'],
   p:'Predictable state, clean layers, and bridges to native media and device APIs.'},
  {g:'back', c:'var(--back)', t:'Backend & services', k:'Outer orbit', r:42.5, d:'96s', items:['Firebase','Node.js','NestJS','PostgreSQL','Google Maps','REST APIs'],
   p:'APIs, data, realtime tracking and maps powering logistics, health and commerce apps.'},
  {g:'ship', c:'#ff7a59', t:'Shipping', k:'Every release', items:['Push notifications','App Store & Play','CI/CD','Arabic RTL','Figma'],
   p:'From Figma to store review: RTL-first UI, automated builds, and releases that pass review.'}
];
const flutterSvg = '<svg viewBox="0 0 24 24" fill="none"><path d="M14.3 2 4 12.3l3.2 3.2L20.6 2h-6.3Z" fill="#54c5f8"/><path d="m14.3 11.1-5.6 5.6 3.2 3.3 3.2-3.2 5.5-5.7h-6.3Z" fill="#54c5f8"/><path d="m11.9 20 2.4 2h6.3l-5.5-5.4-3.2 3.4Z" fill="#01579b"/><path d="m8.7 16.7 3.2-3.2 3.2 3.2-3.2 3.3-3.2-3.3Z" fill="#29b6f6"/></svg>';
document.getElementById('orbit').innerHTML =
  stackGroups.filter(s=>s.r).map(s=>`<div class="oring${s.rev?' rev':''}" data-g="${s.g}" style="--r:${s.r};--d:${s.d};--c:${s.c}">${
    s.items.map((it,i)=>`<div class="onode" style="--a:${Math.round(360/s.items.length*i + s.r*7)}deg"><div class="osp"><span class="opill">${it}</span></div></div>`).join('')
  }</div>`).join('') +
  `<div class="ocore">${flutterSvg}<b>Flutter</b><small>Core</small></div>`;
document.getElementById('sgroups').innerHTML = stackGroups.map(s=>`<div class="sg" data-g="${s.g}" style="--c:${s.c}">
  <h3>${s.t}<em>${s.k}</em></h3><p>${s.p}</p><div class="tags">${s.items.map(i=>`<span>${i}</span>`).join('')}</div></div>`).join('');
const mqWords = ['Flutter','iOS','Android','Native performance','Node.js','Google Maps','Figma → Flutter'];
const mqHTML = mqWords.map(w=>`<span>${w}</span>`).join('');
document.getElementById('mq').innerHTML = mqHTML + mqHTML + mqHTML;
// split statement into words
const st = document.getElementById('statement');
st.innerHTML = st.innerHTML.replace(/(<em>.*?<\/em>)|([^\s<]+)/g, (m, em, w) => em ? em.replace(/<em>(.*?)<\/em>/, (_, t)=> t.split(' ').map(x=>`<em class="w">${x}</em>`).join(' ')) : `<span class="w">${w}</span>`);
document.getElementById('yr').textContent = new Date().getFullYear();

/* ---------- contact form ---------- */
const form = document.getElementById('form'), status = document.getElementById('status'), send = document.getElementById('send');
const MIN_MSG = 20;
const rules = {
  name: v => v.length < 2 ? 'Please tell me your name.' : '',
  email: v => !v ? 'I need an email to reply to.' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "That email doesn't look right. Check for typos." : '',
  phone: v => !v ? '' : (!/^\+?[\d\s().-]{6,30}$/.test(v) || v.replace(/\D/g,'').length < 7) ? 'Digits only, with country code, e.g. +966 50 123 4567.' : '',
  company: () => '',
  message: v => !v ? 'Tell me a bit about the project.' : v.length < MIN_MSG ? `A little more detail, please (${MIN_MSG - v.length} more characters).` : ''
};
const fields = [...form.querySelectorAll('.f')].map(f => {
  const el = f.querySelector('input,textarea');
  f.insertAdjacentHTML('beforeend', '<span class="msg"></span>' + (el.name !== 'company' ? '<svg class="ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>' : ''));
  if (el.name === 'message') f.insertAdjacentHTML('beforeend', '<span class="cnt"></span>');
  return { f, el, msg: f.querySelector('.msg'), cnt: f.querySelector('.cnt'), touched: false };
});
const check = (x, show) => {
  const v = x.el.value.trim(), err = rules[x.el.name](v);
  if (x.cnt) { const n = v.length; x.cnt.textContent = n >= MIN_MSG ? '' : `${n} / ${MIN_MSG}`; x.cnt.classList.toggle('done', n >= MIN_MSG); }
  if (show) { x.f.classList.toggle('bad', !!err); if (err) x.msg.textContent = err; }
  x.f.classList.toggle('good', !err && !!v && x.el.name !== 'company');
  if (!err && x.f.classList.contains('bad')) x.f.classList.remove('bad');
  return !err;
};
fields.forEach(x => {
  x.el.addEventListener('blur', () => { if (x.el.value.trim() || x.touched) { x.touched = true; check(x, true); } });
  x.el.addEventListener('input', () => check(x, x.touched));
});

const confetti = () => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = document.createElement('canvas'); c.id = 'confetti'; document.body.appendChild(c);
  const dpr = Math.min(devicePixelRatio || 1, 2), W = innerWidth, H = innerHeight;
  c.width = W * dpr; c.height = H * dpr; const ctx = c.getContext('2d'); ctx.scale(dpr, dpr);
  const b = document.querySelector('#sent .disc').getBoundingClientRect(), ox = b.left + b.width / 2, oy = b.top + b.height / 2;
  const cols = ['#c8ff3e', '#3ee6ff', '#8b5cff', '#ffffff', '#e4ff8a'];
  const ps = Array.from({ length: 150 }, () => { const a = Math.random() * Math.PI * 2, s = 4 + Math.random() * 11;
    return { x: ox, y: oy, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 5, w: 4 + Math.random() * 6, h: 6 + Math.random() * 8, r: Math.random() * 6, vr: (Math.random() - .5) * .35, c: cols[Math.random() * cols.length | 0], round: Math.random() < .3 }; });
  const t0 = performance.now();
  const tick = t => { const k = (t - t0) / 2600; ctx.clearRect(0, 0, W, H);
    ps.forEach(p => { p.vx *= .985; p.vy = p.vy * .985 + .32; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save(); ctx.globalAlpha = Math.max(0, 1 - k * k); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c;
      if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, 7); ctx.fill(); } else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r * 2)) + 1);
      ctx.restore(); });
    k < 1 ? requestAnimationFrame(tick) : c.remove(); };
  requestAnimationFrame(tick);
};

const sentEl = document.getElementById('sent'), parts = () => [...form.children].filter(n => n !== sentEl);
const celebrate = (name, email) => {
  document.getElementById('sentName').textContent = name ? `, ${name.split(/\s+/)[0]}.` : '.';
  document.getElementById('sentTo').textContent = `Replying to ${email}`;
  sentEl.classList.add('on');
  const path = sentEl.querySelector('.disc path');
  if (!window.gsap) { path.style.strokeDashoffset = 0; parts().forEach(n => n.style.visibility = 'hidden'); return; }
  gsap.timeline()
    .to(parts(), { y: -24, opacity: 0, filter: 'blur(6px)', duration: .45, stagger: .05, ease: 'power2.in' })
    .set(parts(), { visibility: 'hidden' })
    .fromTo('#sent .disc', { scale: 0, rotate: -90 }, { scale: 1, rotate: 0, duration: .8, ease: 'back.out(2)' })
    .add(confetti, '-=.45')
    .to(path, { strokeDashoffset: 0, duration: .5, ease: 'power2.out' }, '-=.35')
    .from('#sent h3, #sent p, #sent .to, #sent button', { y: 22, opacity: 0, duration: .6, stagger: .08, ease: 'expo.out' }, '-=.3');
};
document.getElementById('again').addEventListener('click', () => {
  form.reset(); fields.forEach(x => { x.touched = false; x.f.classList.remove('bad', 'good'); if (x.cnt) x.cnt.textContent = ''; });
  const path = sentEl.querySelector('.disc path');
  if (!window.gsap) { sentEl.classList.remove('on'); parts().forEach(n => n.style.visibility = ''); return; }
  gsap.to(sentEl, { opacity: 0, duration: .3, onComplete: () => {
    sentEl.classList.remove('on'); gsap.set(sentEl, { opacity: 1 }); gsap.set(path, { strokeDashoffset: 60 });
    gsap.set(parts(), { visibility: 'visible' });
    gsap.to(parts(), { y: 0, opacity: 1, filter: 'blur(0px)', duration: .5, stagger: .05, ease: 'expo.out', clearProps: 'filter,transform' });
    fields[0].el.focus({ preventScroll: true });
  } });
});

form.addEventListener('submit', async e=>{
  e.preventDefault();
  status.className = ''; status.textContent = '';
  const bad = fields.filter(x => { x.touched = true; return !check(x, true); });
  if (bad.length) {
    bad.forEach(x => { x.f.classList.remove('shake'); void x.f.offsetWidth; x.f.classList.add('shake'); });
    bad[0].el.focus();
    return;
  }
  const data = Object.fromEntries(new FormData(form));
  Object.keys(data).forEach(k => data[k] = String(data[k]).trim());
  send.classList.add('loading'); send.querySelector('.lbl').textContent = 'Sending…';
  try {
    const API = '/api';
    const r = await fetch(API + '/contact', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)});
    const j = await r.json().catch(()=>({}));
    if (!r.ok || !j.ok) throw new Error(j.error || 'Something went wrong. Please try again.');
    celebrate(data.name, data.email);
  } catch(err){ status.className='err'; status.textContent = err.message; }
  finally { send.classList.remove('loading'); send.querySelector('.lbl').textContent = 'Send message →'; }
});
fields.forEach(x => x.f.addEventListener('animationend', () => x.f.classList.remove('shake')));

/* ---------- motion ---------- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (window.gsap && window.ScrollTrigger && !reduce) {
  gsap.registerPlugin(ScrollTrigger);

  // smooth scroll
  if (window.Lenis) {
    const lenis = new Lenis({ lerp: .09 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href')); if (!t) return;
      e.preventDefault(); lenis.scrollTo(t, { offset: 0, duration: 1.4 });
    }));
  }

  // progress bar
  gsap.to('#progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .3 } });

  // hero intro
  const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
  intro.from('nav', { y: -80, opacity: 0, duration: 1.2 })
       .from('.hero .tag', { y: 20, opacity: 0, duration: 1 }, '-=.9')
       .from('.hero h1 .line > span', { yPercent: 110, rotate: 4, duration: 1.4, stagger: .12 }, '-=.9')
       .from('.hero .fade', { y: 30, opacity: 0, duration: 1.2, stagger: .12 }, '-=1')
       .from('#phone', { y: 120, rotateY: -35, rotateX: 15, opacity: 0, duration: 1.8 }, '-=1.4')
       .from('.ico', { scale: 0, opacity: 0, duration: .8, stagger: .06, ease: 'back.out(2)' }, '-=1')
       .from('.scroll-hint', { opacity: 0, duration: 1 }, '-=.6');

  // floating blobs
  gsap.to('.hero .b1', { x: 120, y: 80, duration: 9, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.hero .b2', { x: -100, y: -60, duration: 11, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.hero .b3', { x: -80, y: 60, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  // hero exit on scroll
  gsap.to('.hero-copy', { yPercent: -30, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.phone-wrap', { y: 160, rotateZ: 10, scale: .85, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // phone tilt on mouse
  const phone = document.getElementById('phone');
  const tiltX = gsap.quickTo(phone, 'rotationY', { duration: .8, ease: 'power3' });
  const tiltY = gsap.quickTo(phone, 'rotationX', { duration: .8, ease: 'power3' });
  addEventListener('mousemove', e => { tiltX((e.clientX / innerWidth - .5) * 24); tiltY(-(e.clientY / innerHeight - .5) * 18); });

  // hero phone: dock magnify, open app on hover, glare, notification
  (() => {
    const scr = document.getElementById('screen');
    const icos = [...scr.querySelectorAll('.ico')];
    const av = document.createElement('div'); av.className = 'appview'; scr.appendChild(av);
    const nt = document.createElement('div'); nt.className = 'notif'; scr.appendChild(nt);
    let openI = -1, tmr, ntTmr, ntIdx = 0;
    const g = i => `linear-gradient(135deg,${grads[i][0]},${grads[i][1]})`;
    const resetDock = () => icos.forEach(ic => ic.firstElementChild.style.transform = '');
    function render(i) {
      const a = apps[i];
      av.innerHTML = `<div class="hd"><b style="background:${g(i)}">${first(a.name)}</b><div><h5 ${a.ar ? 'dir="rtl"' : ''}>${a.name}</h5><small>${a.tag}</small></div></div>`
        + (a.img ? `<div class="shot"><img src="/img/${a.img}.webp?v=6" alt="${a.name}"></div>` : `<div class="shot" style="background:${g(i)}"><b>${first(a.name)}</b></div>`)
        + `<div class="st"><span>App Store</span>${a.play ? '<span>Google Play</span>' : ''}</div>`
        + `<a class="cta" href="#work">See the project ↗</a><i class="home"></i>`;
      av.querySelector('.home').addEventListener('mouseenter', close);
      av.querySelector('.home').addEventListener('click', close);
      av.querySelector('.cta').addEventListener('click', close);
    }
    function open(i) {
      if (openI === i) return;
      openI = i; render(i); resetDock();
      const r = icos[i].getBoundingClientRect(), s = scr.getBoundingClientRect();
      const ox = ((r.left + r.width / 2 - s.left) / s.width * 100).toFixed(1), oy = ((r.top + 27 - s.top) / s.height * 100).toFixed(1);
      av.style.pointerEvents = 'auto';
      gsap.fromTo(av, { scale: .14, opacity: 0, transformOrigin: `${ox}% ${oy}%` }, { scale: 1, opacity: 1, duration: .6, ease: 'expo.out' });
      gsap.fromTo(av.children, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .05, delay: .12, ease: 'power3.out' });
      gsap.to(icos, { scale: .9, opacity: .3, duration: .45, ease: 'power3.out' });
    }
    function close() {
      if (openI < 0) return;
      openI = -1; av.style.pointerEvents = 'none';
      gsap.to(av, { scale: .14, opacity: 0, duration: .38, ease: 'power3.in' });
      gsap.to(icos, { scale: 1, opacity: 1, duration: .5, delay: .1, ease: 'back.out(1.6)' });
    }
    icos.forEach(ic => {
      const b = ic.firstElementChild;
      ic.addEventListener('mouseenter', () => b.style.transform = 'translateY(-6px) scale(1.22)');
      ic.addEventListener('mouseleave', () => b.style.transform = '');
    });
    icos.forEach((ic, i) => {
      ic.addEventListener('click', () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }));
    });
    const order = apps.map((a, i) => i).sort((x, y) => (apps[y].img ? 1 : 0) - (apps[x].img ? 1 : 0));
    function notify() {
      const i = order[ntIdx++ % order.length], a = apps[i];
      nt.innerHTML = `<b style="background:${iconBg(a, i)}">${iconTxt(a)}</b><p><strong ${a.ar ? 'dir="rtl"' : ''}>${a.name}</strong>${a.noios ? 'Live on Google Play' : a.play ? 'Live on App Store & Google Play' : 'Live on the App Store'}</p>`;
      gsap.timeline().fromTo(nt, { y: '-130%', opacity: 0 }, { y: '0%', opacity: 1, duration: .6, ease: 'back.out(1.5)' })
        .to(nt, { y: '-130%', opacity: 0, duration: .4, ease: 'power2.in' }, '+=2.8');
    }
    const wrap = phone.parentElement;
    let lastNote = 0;
    wrap.addEventListener('mouseenter', () => { phone.classList.add('hov'); clearTimeout(ntTmr); if (Date.now() - lastNote > 5000) ntTmr = setTimeout(() => { lastNote = Date.now(); notify(); }, 700); });
    wrap.addEventListener('mouseleave', () => { phone.classList.remove('hov'); clearTimeout(ntTmr); resetDock(); });
    phone.addEventListener('mousemove', e => {
      const r = phone.getBoundingClientRect();
      phone.style.setProperty('--gx', (e.clientX - r.left) + 'px'); phone.style.setProperty('--gy', (e.clientY - r.top) + 'px');
    });
  })();

  // marquee reacting to scroll velocity
  const mq = document.getElementById('mq');
  const loop = gsap.to(mq, { xPercent: -33.333, duration: 22, ease: 'none', repeat: -1 });
  ScrollTrigger.create({ onUpdate: s => {
    const v = s.getVelocity() / 300;
    gsap.to(loop, { timeScale: gsap.utils.clamp(-6, 6, v === 0 ? 1 : v), duration: .3, overwrite: true });
    gsap.to(loop, { timeScale: s.direction, duration: 1.2, delay: .3 });
  }});

  // statement word reveal
  gsap.to('#statement .w', { opacity: 1, stagger: .1, ease: 'none', scrollTrigger: { trigger: '.statement', start: 'top 75%', end: 'bottom 55%', scrub: true } });

  // counters
  document.querySelectorAll('.num').forEach(el => {
    const o = { v: 0 };
    gsap.to(o, { v: +el.dataset.to, duration: 2, ease: 'power3.out', onUpdate: () => el.textContent = Math.round(o.v),
      scrollTrigger: { trigger: el, start: 'top 85%' } });
  });
  gsap.from('.marq', { opacity: 0, duration: 1.2, ease: 'power2.out', scrollTrigger: { trigger: '.trust', start: 'top 85%' } });
  document.querySelectorAll('.stat').forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }));

  // section headings: line mask reveal
  document.querySelectorAll('section .split').forEach(h => {
    gsap.from(h.querySelectorAll('.line > span'), { yPercent: 115, rotate: 3, duration: 1.3, stagger: .1, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 85%' } });
  });
  document.querySelectorAll('.kicker').forEach(k => gsap.from(k, { x: -30, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: k, start: 'top 90%' } }));
  document.querySelectorAll('section .fade').forEach(f => gsap.from(f, { y: 50, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: f, start: 'top 85%' } }));

  // services: 3D flip-in grid
  gsap.from('.s', { rotateX: -70, y: 80, opacity: 0, transformOrigin: '50% 0%', duration: 1.2, stagger: { each: .1, grid: [2, 3], from: 'start' }, ease: 'expo.out', scrollTrigger: { trigger: '#svc', start: 'top 80%' } });
  document.querySelectorAll('.s').forEach(c => c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }));

  // 3D tilt + spotlight on project cards (mouse only)
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) document.querySelectorAll('.app').forEach(c => {
    gsap.set(c, { transformPerspective: 1100 });
    const rx = gsap.quickTo(c, 'rotationX', { duration: .6, ease: 'power3' }), ry = gsap.quickTo(c, 'rotationY', { duration: .6, ease: 'power3' });
    c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      c.style.setProperty('--mx', x + 'px'); c.style.setProperty('--my', y + 'px');
      ry((x / r.width - .5) * 9); rx(-(y / r.height - .5) * 9);
    });
    c.addEventListener('pointerleave', () => { rx(0); ry(0); });
  });

  const mm = gsap.matchMedia();
  // horizontal pinned work gallery (desktop)
  mm.add('(min-width: 901px)', () => {
    const track = document.getElementById('track');
    const dist = () => track.scrollWidth - innerWidth + 48;
    const tween = gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '#work', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 } });
    gsap.utils.toArray('.app').forEach(card => {
      const img = card.querySelector('.art.photo img');
      const aic = card.querySelector('.art .aicon');
      if (aic) gsap.from(aic, { scale: .4, rotate: -20, opacity: 0, ease: 'none', scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 95%', end: 'left 55%', scrub: true } });
      if (img && !card.classList.contains('poster')) gsap.fromTo(img, { xPercent: -8, scale: 1.25 }, { xPercent: 8, scale: 1.25, ease: 'none', scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
      if (card.querySelector('.art b')) gsap.from(card.querySelector('.art b'), { scale: .4, rotate: -20, opacity: 0, ease: 'none', scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 95%', end: 'left 55%', scrub: true } });
      gsap.from(card, { y: 80, rotate: 4, ease: 'none', scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 100%', end: 'left 60%', scrub: true } });
    });
  });
  mm.add('(max-width: 900px)', () => {
    gsap.utils.toArray('.app').forEach(card => gsap.from(card, { y: 80, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: card, start: 'top 90%' } }));
  });

  // showcase banner: cinematic wipe-open, then inner parallax
  gsap.fromTo('#showcase', { clipPath: 'inset(18% 22% 18% 22% round 40px)' },
    { clipPath: 'inset(0% 0% 0% 0% round 28px)', ease: 'none', scrollTrigger: { trigger: '#showcase', start: 'top 95%', end: 'top 30%', scrub: true } });
  gsap.fromTo('#showcase .sc-media', { scale: 1.35, yPercent: -6 },
    { scale: 1, yPercent: 6, ease: 'none', scrollTrigger: { trigger: '#showcase', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.from('#showcase .sc-badge, #showcase .sc-tags span', { y: 30, opacity: 0, duration: .9, stagger: .08, ease: 'expo.out', scrollTrigger: { trigger: '#showcase', start: 'top 45%' } });

  // case study: drawing rail + step activation
  gsap.to('#fill', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#steps', start: 'top 70%', end: 'bottom 60%', scrub: true } });
  document.querySelectorAll('.st').forEach(s => {
    gsap.from(s, { x: 40, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: s, start: 'top 80%' } });
    ScrollTrigger.create({ trigger: s, start: 'top 65%', onEnter: () => s.classList.add('on'), onLeaveBack: () => s.classList.remove('on') });
  });

  // experience rows
  gsap.utils.toArray('.job').forEach(j => gsap.from(j, { y: 60, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: j, start: 'top 88%' } }));

  // skills burst
  // stack chips: IntersectionObserver instead of ScrollTrigger so pinned sections above can't throw off the start position
  (() => {
    const orbit = document.getElementById('orbit'), rings = orbit.querySelectorAll('.oring'),
          pills = orbit.querySelectorAll('.opill'), core = orbit.querySelector('.ocore'),
          groups = document.querySelectorAll('.sg');
    gsap.set(rings, { opacity: 0 });
    gsap.set(core, { scale: .6, opacity: 0 });
    gsap.set(pills, { opacity: 0 });
    gsap.set(groups, { opacity: 0, x: 40 });
    let shown = false;
    // run the orbit only while it's on screen
    const io = new IntersectionObserver(es => {
      const vis = es[0].isIntersecting;
      orbit.classList.toggle('run', vis);
      if (!vis || shown) return;
      shown = true;
      const tl = gsap.timeline();
      tl.to(core, { scale: 1, opacity: 1, duration: .9, ease: 'expo.out' })
        .to(rings, { opacity: 1, duration: .8, stagger: .15, ease: 'power2.out' }, '-=.5')
        .to(pills, { opacity: 1, duration: .5, stagger: .05 }, '-=.6')
        .to(groups, { opacity: 1, x: 0, duration: .8, stagger: .1, ease: 'expo.out' }, 0.2);
    }, { rootMargin: '0px 0px -10% 0px' });
    io.observe(orbit);
    // hovering a group highlights its orbit (and back)
    const hl = g => { if (g && g !== 'ship') orbit.dataset.hl = g; else delete orbit.dataset.hl;
      groups.forEach(s => s.classList.toggle('on', s.dataset.g === g)); };
    groups.forEach(s => { s.addEventListener('mouseenter', () => hl(s.dataset.g)); s.addEventListener('mouseleave', () => hl(null)); });
    rings.forEach(r => r.querySelectorAll('.opill').forEach(p => {
      p.addEventListener('mouseenter', () => hl(r.dataset.g)); p.addEventListener('mouseleave', () => hl(null)); }));
  })();

  // contact headline scales in with scroll
  gsap.fromTo('.contact .huge', { scale: .85, opacity: .3 }, { scale: 1, opacity: 1, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top 90%', end: 'top 30%', scrub: true } });

  // magnetic buttons
  document.querySelectorAll('.magnet').forEach(b => {
    const xT = gsap.quickTo(b, 'x', { duration: .5, ease: 'power3' }), yT = gsap.quickTo(b, 'y', { duration: .5, ease: 'power3' });
    b.addEventListener('mousemove', e => { const r = b.getBoundingClientRect(); xT((e.clientX - r.left - r.width / 2) * .35); yT((e.clientY - r.top - r.height / 2) * .35); });
    b.addEventListener('mouseleave', () => { xT(0); yT(0); });
  });

  // custom cursor
  const cur = document.getElementById('cursor');
  const cx = gsap.quickTo(cur, 'x', { duration: .25, ease: 'power3' }), cy = gsap.quickTo(cur, 'y', { duration: .25, ease: 'power3' });
  addEventListener('mousemove', e => { cx(e.clientX); cy(e.clientY); });
  document.querySelectorAll('a,button,.app,.chip').forEach(el => { el.addEventListener('mouseenter', () => cur.classList.add('big')); el.addEventListener('mouseleave', () => cur.classList.remove('big')); });

  addEventListener('load', () => { ScrollTrigger.sort(); ScrollTrigger.refresh(); });
} else {
  document.querySelectorAll('#statement .w').forEach(w => w.style.opacity = 1);
  document.getElementById('cursor').style.display = 'none';
}
