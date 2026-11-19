/* LIMB — общие компоненты: шапка, мегаменю, футер, модальная лид-форма, квиз.
   Состав меню и структура — по файлу «Аудит сайта limborto.ru».
   Контакты/филиалы — с действующего сайта limborto.ru. */

const BRANCHES = [
  { city: "Москва", address: "Мисайлово, ул. Первомайская, 158Ак2" },
  { city: "Санкт-Петербург", address: "Кудрово, ул. Строителей, 33" },
  { city: "Ростов-на-Дону", address: "ул. Троллейбусная, 24/2в" },
];

const LOGO_SVG = `<img class="brand-logo" src="assets/limb-logo.png" width="140" height="50" alt="LIMB — центр протезирования">`;

const MESSENGERS = `<div class="messengers" aria-label="Мессенджеры и соцсети"><a class="messenger messenger--tg" href="https://t.me/Limb_AO" target="_blank" rel="noopener" title="Telegram" aria-label="Telegram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.3 3.6-3.5 16.3c-.3 1.2-1 1.5-2 .9l-5.3-3.9-2.5 2.4c-.3.3-.5.5-1 .5l.4-5.4 9.9-8.9c.4-.4-.1-.6-.6-.3L4.5 12.9.3 11.6c-.9-.3-.9-.9.2-1.3L20 2.8c.9-.3 1.6.2 1.3.8Z" fill="currentColor"/></svg></a><a class="messenger messenger--vk" href="https://vk.com/limbrussia" target="_blank" rel="noopener" title="VK" aria-label="VK"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.7 19C5.2 19 1 13.9.7 5.4h3.8c.2 6.2 2.9 8.8 5 9.3V5.4h3.6v5.3c2.1-.2 4.2-2.6 5-5.3h3.6c-.6 3.3-3 5.7-4.6 6.8 1.7.9 4.4 3.1 5.5 6.8h-4c-.9-2.5-2.8-4.4-5.5-4.7V19h-.4Z" fill="currentColor"/></svg></a><a class="messenger messenger--max" href="https://max.ru" target="_blank" rel="noopener" title="MAX" aria-label="MAX"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-9.6 12.8l-1 6.1 6.1-1A10 10 0 1 0 12 2Z" fill="currentColor"/><ellipse cx="12" cy="11.8" rx="5.4" ry="5.7" fill="#685af2"/></svg></a></div>`;

function renderHeader() {
  const host = document.getElementById("app-header");
  if (!host) return;
  host.innerHTML = `
  <div class="topbar">
    <div class="topbar__inner">
      <div class="branch" id="branch">
        <button class="branch__btn" id="branchBtn" aria-haspopup="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2"/></svg>
          <span id="branchCity">Москва</span>
          <svg width="10" height="10" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.6"/></svg>
        </button>
        <div class="branch__list" id="branchList"></div>
      </div>
      <a class="topbar__phone" href="tel:+78005514717">+7 (800) 551-47-17</a>
      <a class="v9-email" href="mailto:info@limbrussia.ru">info@limbrussia.ru</a><span class="topbar__hours">Часы работы: <span class="todo">уточнить</span></span>
      ${document.body.dataset.page === 'index.html' ? '' : `<a class="partner-account-link" href="https://partner.limborto.ru/" target="_blank" rel="noopener">Кабинет партнёра <span aria-hidden="true">↗</span></a>`}
      ${MESSENGERS}
    </div>
  </div>
  <div class="header-main">
    <div class="header-main__inner">
      <a class="logo" href="index.html">${LOGO_SVG}<span class="v9-descriptor">Центр протезирования<br>и реабилитации</span></a>
      <nav class="nav" id="nav" aria-label="Основная навигация">
        <div class="nav-item">
          <button class="nav-toggle" data-menu="about">О компании <svg class="caret" width="10" height="10" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.6"/></svg></button>
          <div class="dropdown">
            <a href="index.html#about">О нас</a>
            <a href="index.html#advantages">Преимущества</a>
            <a href="index.html#team">Специалисты</a>
            <a href="https://limborto.ru/#rec656603217">Наши сертификаты</a>
            <a href="ipra.html">ИПРА и документы</a>
            
            <a href="blog.html">Блог</a><a href="kb.html">Конструкторское бюро</a><a href="faq.html">Частые вопросы</a>
            <a href="accommodation.html" data-moscow-only>Бесплатное проживание</a>
            <a href="partners.html">Партнёрам / агентская программа</a>
          </div>
        </div>
        <div class="nav-item">
          <button class="nav-toggle" data-menu="prosthetics">Протезирование <svg class="caret" width="10" height="10" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.6"/></svg></button>
          <div class="megamenu megamenu--simple megamenu--six"><a class="direction-menu direction-menu--primary" href="primary-prosthetics.html"><img src="assets/primary-consultation.png" alt="" width="240" height="110"><span><b>Первичное протезирование</b><small>С чего начать и как пройти весь путь</small></span><i aria-hidden="true">↗</i></a><a class="direction-menu direction-menu--hands" href="hands.html"><img src="assets/hero-hands.png" alt="" width="240" height="110"><span><b>Верхние конечности</b><small>Протезирование рук</small></span><i aria-hidden="true">↗</i></a><a class="direction-menu direction-menu--legs" href="legs.html"><img src="assets/hero-city.png" alt="" width="240" height="110"><span><b>Нижние конечности</b><small>Протезирование ног</small></span><i aria-hidden="true">↗</i></a><a class="direction-menu direction-menu--svo" href="svo.html"><img src="assets/svo-person.png" alt="" width="240" height="110"><span><b>Участникам СВО</b><small>Протезирование по гражданской линии</small></span><i aria-hidden="true">↗</i></a><a class="direction-menu direction-menu--rehab" href="rehab.html"><img src="assets/rehabilitation.png" alt="" width="240" height="110"><span><b>Реабилитация</b><small>Школа ходьбы и обучение</small></span><i aria-hidden="true">↗</i></a><a class="direction-menu direction-menu--cosmetics" href="cosmetics.html"><img src="assets/cosmetic-finger-poster.png" alt="" width="240" height="110"><span><b>Косметические пальцы</b><small>Индивидуальные протезы фаланг</small></span><i aria-hidden="true">↗</i></a></div>
        </div>
        
        <div class="nav-item"><a href="stories.html">Истории пациентов</a></div>
        <div class="nav-item"><a href="contacts.html">Контакты</a></div>
        <div class="nav-item"><a href="catalog.html">Каталог товаров</a></div>
      </nav>
      <button class="btn btn--small header-cta" data-cta="Шапка сайта">Получить консультацию</button>
      <button class="burger" id="burger" aria-label="Открыть меню"><span></span><span></span><span></span></button>
    </div>
  </div>`;

  // Выбор филиала
  const branch = document.getElementById("branch");
  const branchBtn = document.getElementById("branchBtn");
  const branchList = document.getElementById("branchList");
  function showBranch(city) {
    document.getElementById("branchCity").textContent = city;
    document.documentElement.dataset.moscow = String(city === BRANCHES[0].city);
    branchList.querySelectorAll("[data-branch]").forEach(item => {
      item.classList.toggle("is-active", BRANCHES[Number(item.dataset.branch)].city === city);
    });
  }
  branchList.innerHTML = BRANCHES.map((b, i) =>
    `<div class="branch__item" data-branch="${i}"><b>${b.city}</b><span>${b.address}</span></div>`
  ).join("");
  branchBtn.addEventListener("click", (e) => { e.stopPropagation(); branch.classList.toggle("open"); });
  branchList.addEventListener("click", (e) => {
    const item = e.target.closest(".branch__item");
    if (!item) return;
    const b = BRANCHES[+item.dataset.branch];
    showBranch(b.city);
    try { localStorage.setItem("limb-branch", b.city); } catch (_) {}
    branch.classList.remove("open");
  });
  let selectedCity = BRANCHES[0].city;
  try {
    const saved = localStorage.getItem("limb-branch");
    if (BRANCHES.some(b => b.city === saved)) selectedCity = saved;
  } catch (_) {}
  showBranch(selectedCity);

  // Меню
  document.querySelectorAll(".nav-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const item = btn.closest(".nav-item");
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".nav-item.open").forEach(el => el.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".nav-item.open").forEach(el => el.classList.remove("open"));
    branch.classList.remove("open");
  });
  document.getElementById("burger").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("nav").classList.toggle("nav--open");
  });
}

function renderFooter() {
  const host = document.getElementById("app-footer");
  if (!host) return;
  host.innerHTML = `
  <footer class="footer footer--v7">
    <div class="container">
      <div class="footer-layout">
        <div class="footer-identity">
          <a class="logo" href="index.html">${LOGO_SVG}</a>
          <span class="footer-tagline">ПРОТЕЗИРОВАНИЕ<br>И РЕАБИЛИТАЦИЯ</span>
          <p>Помогаем пройти путь к протезу и вернуться к привычной жизни.</p>
          <button class="footer-consult" data-cta="Футер — консультация">Получить консультацию <span aria-hidden="true">↗</span></button>
          <ul class="footer-facts"><li><span aria-hidden="true">◎</span>Работаем по всей России</li><li><span aria-hidden="true">▤</span>Помогаем с документами</li><li><span aria-hidden="true">♧</span>Сопровождаем на каждом этапе</li></ul>
        </div>
        <nav class="footer-nav" aria-label="Протезирование"><h5>Протезы</h5><a href="primary-prosthetics.html">Первичное протезирование</a><a href="legs.html">Нижние конечности</a><a href="hands.html">Верхние конечности</a><a href="cosmetics.html">Косметические пальцы</a><a href="catalog.html">Каталог товаров</a></nav>
        <nav class="footer-nav" aria-label="Пациентам"><h5>Пациентам</h5><a href="ipra.html">Как получить протез бесплатно</a><a href="index.html#stages">Этапы протезирования</a><a href="rehab.html">Реабилитация и школа ходьбы</a><a href="accommodation.html">Помощь с проживанием</a><a href="stories.html">Истории пациентов</a><a href="svo.html">Участникам СВО</a></nav>
        <nav class="footer-nav" aria-label="О компании"><h5>О компании</h5><a href="index.html#about">О нас</a><a href="index.html#team">Специалисты</a><a href="stories.html">Отзывы и истории</a><a href="faq.html">Частые вопросы</a><a href="https://limborto.ru/#rec656603217">Лицензии и сертификаты</a><a href="ipra.html">ИПРА и документы</a><a href="partners.html">Партнёрам</a><a href="blog.html">Блог</a><a href="contacts.html">Контакты</a></nav>
        <div class="footer-contact"><a class="footer-call" href="tel:+78005514717">+7 (800) 551-47-17</a><span class="footer-contact-note">Свяжитесь с центром LIMB</span><button class="footer-callback" data-cta="Заказать звонок">Заказать звонок <span aria-hidden="true">↗</span></button><a class="footer-telegram" href="https://t.me/Limb_AO" target="_blank" rel="noopener">Написать в Telegram <span aria-hidden="true">↗</span></a><p class="footer-address"><span aria-hidden="true">⌖</span>Москва, Мисайлово,<br>ул. Первомайская, 158Ак2</p><a href="mailto:info@limbrussia.ru">info@limbrussia.ru</a><p>Все филиалы центра</p><div class="v9-branches"><a href="https://limborto.ru/contacts">Москва</a><a href="https://spb.limborto.ru/">Санкт-Петербург</a><a href="https://rostov.limborto.ru/">Ростов-на-Дону</a></div><a class="footer-all-addresses" href="contacts.html">Адреса и маршруты ↗</a></div>
        <div class="footer-social"><h5>Мы в соцсетях</h5>${MESSENGERS}<a class="footer-visit" href="contacts.html"><strong>Приезжайте<br>в наш центр</strong><span>Адреса центров<br>и маршруты проезда</span><b>Как добраться ↗</b></a></div>
      </div>
      <div class="footer-legal"><span>© 2008 — 2026 LIMB</span><a href="https://limborto.ru/privacy-policy/" target="_blank" rel="noopener">Политика конфиденциальности</a><a href="https://limborto.ru/terms-and-conditions/" target="_blank" rel="noopener">Согласие на обработку данных</a><a href="contacts.html">Контакты и адреса</a><a class="footer-to-top" href="index.html">На главную ↑</a></div>
      <div class="footer-bottomline"><div class="footer-programs"><span>ИПРА</span><span>Электронный сертификат</span></div><p>Работаем с пациентами из всех регионов России</p><small>ООО «Лимб Орто» · ИНН 5003145973 · КПП 500301001 · ОГРН 1215000068667</small></div>
    </div>
  </footer>`;
}

/* ---------- Модальная лид-форма ----------
   Поля — по аудиту: имя, телефон, согласие ПД, предпочтительный способ связи (опционально). */
function renderModal() {
  const el = document.createElement("div");
  el.className = "modal";
  el.id = "leadModal";
  el.setAttribute("aria-labelledby", "modalTitle");
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  el.innerHTML = `
  <div class="modal__backdrop" data-close></div>
  <div class="modal__card">
    <button class="modal__close" data-close aria-label="Закрыть">×</button>
    <h3 id="modalTitle">Получить консультацию</h3>
    <p class="sub" id="modalSub">Перезвоним, ответим на вопросы и подскажем следующий шаг — без обязательств с вашей стороны.</p>
    <p class="prototype-note">Демонстрационная форма. Отправка заявок пока не подключена.</p><form id="leadForm">
      <div class="field"><input type="text" name="name" placeholder="Ваше имя" required autocomplete="name"></div>
      <div class="field"><input type="tel" name="phone" placeholder="Телефон" required autocomplete="tel"></div>
      <div class="contact-way" role="radiogroup" aria-label="Предпочтительный способ связи">
        <label><input type="radio" name="way" value="call"><span>Позвонить</span></label>
        <label><input type="radio" name="way" value="message"><span>Написать</span></label>
      </div>
      <label class="consent"><input type="checkbox" required> Нажимая кнопку, я даю согласие на обработку персональных данных</label>
      <button class="btn" type="submit" style="width:100%;">Отправить заявку</button>
    </form>
    <div class="form-success" id="formSuccess">
      <div class="ok">✓</div>
      <h3>Спасибо за интерес к LIMB</h3>
      <p class="sub">В прототипе заявка не отправляется. Для консультации позвоните: <a href="tel:+78005514717">+7 (800) 551-47-17</a>.</p>
    </div>
  </div>`;
  document.body.appendChild(el);

  document.addEventListener("click", (e) => {
    const opener = e.target.closest("[data-cta]");
    if (opener) {
      e.preventDefault();
      const title = opener.dataset.ctaTitle || opener.textContent.trim();
      document.getElementById("modalTitle").textContent =
        title.length > 0 && title.length <= 40 ? title : "Получить консультацию";
      document.getElementById("modalSub").textContent = opener.dataset.ctaHint ||
        "Перезвоним, ответим на вопросы и подскажем следующий шаг — без обязательств с вашей стороны.";
      document.getElementById("leadForm").style.display = "";
      document.getElementById("formSuccess").style.display = "none";
      el.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    if (e.target.closest("[data-close]")) {
      el.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
  el.querySelector("#leadForm").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.style.display = "none";
    document.getElementById("formSuccess").style.display = "block";
  });
}

/* ---------- Мини-квиз (CTA для «холодных» — по CJM, гл. для страницы ног) ---------- */
function initQuiz() {
  document.querySelectorAll("[data-quiz]").forEach(quiz => {
    const steps = Array.from(quiz.querySelectorAll(".quiz__step"));
    const bar = quiz.querySelector(".quiz__bar i");
    let current = 0;
    const show = (i) => {
      current = i;
      steps.forEach((s, k) => s.classList.toggle("is-current", k === i));
      if (bar) bar.style.width = ((i + 1) / steps.length * 100) + "%";
    };
    quiz.querySelectorAll("[data-next]").forEach(btn =>
      btn.addEventListener("click", () => show(Math.min(current + 1, steps.length - 1)))
    );
    const form = quiz.querySelector("form");
    if (form) form.addEventListener("submit", (e) => {
      e.preventDefault();
      show(steps.length - 1);
    });
    show(0);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  document.querySelectorAll('[data-messengers]').forEach(el => { el.innerHTML = MESSENGERS; });
  renderModal();
  initQuiz();
  const page = document.body.dataset.page;
  if (page) document.querySelectorAll(`.nav-item a[href="${page}"]`).forEach(a =>
    a.closest(".nav-item").classList.add("is-active"));
});

document.querySelectorAll("[data-v9-demo]").forEach(form => form.addEventListener("submit", event => {
  event.preventDefault();
  form.querySelector("[role=status]").textContent = "В прототипе данные не отправляются. Позвоните в LIMB для консультации.";
}));
