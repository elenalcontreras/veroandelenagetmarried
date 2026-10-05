/* ============ CONFIG ============ */
// EDIT ME: set your real wedding date/time here (used by the countdown on the Home page)
const WEDDING_DATE = new Date('2027-04-24T17:00:00');

// EDIT ME: paste the link to each language's Google Form here once you've created them
// (Google Forms doesn't support one form in five languages, so you need one form per language —
// see RSVP_form_content.md for the translated questions to paste into each one).
const RSVP_FORMS = {
  en: 'https://forms.gle/eyeqU1pgH5aVQxYZ7',
  es: 'https://forms.gle/oQevsiJJKz7csZZA6',
  ca: 'https://forms.gle/9Ea6beyDMothmdXp6',
  fr: 'https://forms.gle/dm352UUQn2seRX7a8',
  it: 'https://forms.gle/6vFGrjq4duUMUzrJ6'
};

let currentLang = 'en';

/* ============ HELPERS ============ */
function getPath(obj, path){
  return path.split('.').reduce((o,k)=> (o && o[k] !== undefined) ? o[k] : null, obj);
}

// Builds a placeholder photo frame. Drop a file named `filename` into a
// "photos" folder next to index.html and it will appear here automatically.
function photoFrame(filename, extraClass){
  return `
    <div class="ph-frame ${extraClass || ''}">
      <img class="ph-img" src="photos/${filename}" alt="">
      <div class="ph-caption">
        <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="10" r="1.5" fill="currentColor"/><path d="M3 16L8.5 12L13 15.5L16 13L21 17" stroke="currentColor" stroke-width="1.5"/></svg>
        <span>photos/${filename}</span>
      </div>
    </div>`;
}

// Shows the dashed placeholder for any photo that hasn't been added yet,
// and hides it automatically the moment a matching file appears.
function bindPhotoFallback(img){
  if(img.dataset.phBound) return;
  img.dataset.phBound = '1';
  const frame = img.closest('.ph-frame');
  if(!frame) return;
  function markMissing(){ frame.classList.add('ph-missing'); img.style.display='none'; }
  function markFound(){ frame.classList.remove('ph-missing'); img.style.display='block'; }
  if(img.complete){
    img.naturalWidth === 0 ? markMissing() : markFound();
  }
  img.addEventListener('error', markMissing);
  img.addEventListener('load', markFound);
}
function setupPhotoFallbacks(){
  document.querySelectorAll('.ph-img').forEach(bindPhotoFallback);
}

/* ============ DYNAMIC LIST RENDERING ============ */
function renderTimeline(t){
  const el = document.getElementById('timelineList');
  el.innerHTML = t.event.items.map((item, i) => `
    <div class="tl-item">
      <span class="tl-dot"></span>
      <div class="tl-time">${item.time}</div>
      <div class="tl-title">${item.title}</div>
      <div class="tl-place">${item.place}</div>
      <p class="tl-text">${item.text}</p>
      ${photoFrame(`event-${i+1}.jpg`, 'tl-photo')}
    </div>
  `).join('');
  setupPhotoFallbacks();
}

function renderHotels(t){
  const el = document.getElementById('hotelGrid');
  const groups = {};
  const groupOrder = [];
  t.getting.hotels.forEach((h, i) => {
    const g = h.group || '';
    if(!groups[g]){ groups[g] = []; groupOrder.push(g); }
    groups[g].push({ h, index: i });
  });

  el.innerHTML = groupOrder.map(g => `
    <div class="stay-group">
      <div class="hotel-group-heading">${g}</div>
      <div class="carousel">
        <button class="car-btn car-prev" type="button" aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none"><path d="M15 5L8 12L15 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="car-track">
          ${groups[g].map(({h, index}) => `
            <div class="hotel-card">
              <span class="tag ${h.tag.toLowerCase().includes('camp') ? 'camp' : ''}">${h.tag}</span>
              <h4>${h.name}</h4>
              <div class="dist">${h.dist}</div>
              <p>${h.text}</p>
              ${h.url ? `
              <a class="hotel-photo-link" href="${h.url}" target="_blank" rel="noopener" aria-label="${h.name}">
                ${photoFrame(`hotel-${index+1}.jpg`, 'hotel-photo')}
                <span class="hotel-photo-cta">${t.getting.book_label || 'Book'}</span>
              </a>` : photoFrame(`hotel-${index+1}.jpg`, 'hotel-photo')}
            </div>
          `).join('')}
        </div>
        <button class="car-btn car-next" type="button" aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none"><path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </div>
  `).join('');

  setupPhotoFallbacks();
  setupCarousels();
}

// Scrolls a carousel track left/right by roughly one card's width per click,
// and disables the prev/next arrow once there's nothing left to scroll that way.
function setupCarousels(){
  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.car-track');
    const prevBtn = carousel.querySelector('.car-prev');
    const nextBtn = carousel.querySelector('.car-next');
    if(!track || !prevBtn || !nextBtn) return;

    // Scroll by ~90% of whatever is currently visible, so it always moves
    // roughly "one screenful" regardless of exact card widths or gaps.
    function scrollStep(){
      return Math.max(track.clientWidth * 0.9, 240);
    }
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollStep(), behavior: 'smooth' });
    });
  });
}

// "From Barcelona" card: one icon per paragraph (plane, train, taxi/Uber).
// The paragraphs come from getting.from_bcn_text, separated by <br><br>.
const fromBcnIcons = [
  '<path d="M21 15.5L13.5 11V5.5C13.5 4.7 12.8 3.5 12 3.5S10.5 4.7 10.5 5.5V11L3 15.5V17.5L10.5 15V19L8.5 20.5V21.5L12 20.5L15.5 21.5V20.5L13.5 19V15L21 17.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>',
  '<rect x="5.5" y="3" width="13" height="14" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M5.5 10H18.5" stroke="currentColor" stroke-width="1.4"/><circle cx="9" cy="13.5" r="1" fill="currentColor"/><circle cx="15" cy="13.5" r="1" fill="currentColor"/><path d="M8.5 17L6.5 21M15.5 17L17.5 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
  '<rect x="9.5" y="2.5" width="5" height="2.5" rx="0.5" stroke="currentColor" stroke-width="1.3"/><path d="M5 12L6.5 7.5C6.8 6.6 7.6 6 8.6 6H15.4C16.4 6 17.2 6.6 17.5 7.5L19 12" stroke="currentColor" stroke-width="1.5"/><rect x="3" y="12" width="18" height="6" rx="2" stroke="currentColor" stroke-width="1.5"/><circle cx="7" cy="19.5" r="1.4" fill="currentColor"/><circle cx="17" cy="19.5" r="1.4" fill="currentColor"/>'
];
function renderFromBcn(t){
  const el = document.getElementById('fromBcn');
  if(!el) return;
  const parts = (t.getting.from_bcn_text || '').split(/<br\s*\/?>\s*<br\s*\/?>/);
  el.innerHTML = parts.map((p, i) => `
    <div class="bcn-step">
      <svg class="bcn-icon" viewBox="0 0 24 24" fill="none">${fromBcnIcons[i % fromBcnIcons.length]}</svg>
      <p>${p}</p>
    </div>
  `).join('');
}

// An FAQ item can have `photos: N` — it then shows N photo slots under the answer.
// Drop files named gift-1.jpeg, gift-2.jpeg, gift-3.jpeg into the photos folder to fill them.
function renderFaq(t){
  const el = document.getElementById('faqList');
  el.innerHTML = t.faq.items.map((item, i) => {
    const photos = item.photos
      ? `<div class="faq-photos">${Array.from({length:item.photos}, (_, k) => photoFrame(`gift-${k+1}.jpeg`)).join('')}</div>`
      : '';
    return `
    <div class="faq-item" data-index="${i}">
      <button class="faq-q" type="button">
        <span>${item.q}</span>
        <span class="plus"></span>
      </button>
      <div class="faq-a"><div class="faq-a-inner">${item.a}${photos}</div></div>
    </div>`;
  }).join('');
  el.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.closest('.faq-item').classList.toggle('open');
    });
  });
  setupPhotoFallbacks();
}

/* ============ LANGUAGE ============ */
function applyLanguage(lang){
  const t = translations[lang];
  if(!t) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const val = getPath(t, el.getAttribute('data-i18n'));
    if(val !== null) el.innerHTML = val;
  });

  renderTimeline(t);
  renderHotels(t);
  renderFromBcn(t);
  renderFaq(t);

  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> applyLanguage(btn.dataset.lang));
});

/* ============ TAB NAVIGATION ============ */
function goToTab(tabId){
  document.querySelectorAll('.tab').forEach(s=> s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l=> l.classList.remove('active'));
  const section = document.getElementById(tabId);
  const link = document.querySelector(`.nav-link[data-tab="${tabId}"]`);
  if(section) section.classList.add('active');
  if(link) link.classList.add('active');
  document.getElementById('tabsNav').classList.remove('open');
  window.scrollTo({top:0, behavior:'smooth'});
}

document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    goToTab(link.dataset.tab);
  });
});

document.getElementById('exploreBtn').addEventListener('click', ()=> goToTab('event'));

document.getElementById('rsvpBtn').addEventListener('click', ()=>{
  const url = RSVP_FORMS[currentLang] || RSVP_FORMS.en;
  window.open(url, '_blank', 'noopener');
});

document.getElementById('navToggle').addEventListener('click', ()=>{
  document.getElementById('tabsNav').classList.toggle('open');
});

/* ============ COUNTDOWN ============ */
function updateCountdown(){
  const now = new Date();
  let diff = WEDDING_DATE - now;
  if(diff < 0) diff = 0;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const mins = Math.floor((diff / (1000*60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  document.getElementById('cd-days').textContent = days;
  document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cd-mins').textContent = String(mins).padStart(2,'0');
  document.getElementById('cd-secs').textContent = String(secs).padStart(2,'0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

/* ============ INIT ============ */
applyLanguage('en');
setupPhotoFallbacks();
