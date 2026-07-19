// ============================================================
// สร้างการ์ด Featured Characters อัตโนมัติจาก characters-data.js
// ครบทุกตัวละคร (ก่อนหน้านี้ hardcode ไว้แค่ 4 ตัว ตกหล่น 5 ตัว)
// พร้อมคำนวณ label หมวดหมู่ให้ตรงกับของจริงที่ตัวละครนั้นมี
// ============================================================
(function renderFeaturedCharacters() {
  if (typeof window.characters === "undefined") return;
  const grid = document.getElementById("featured-characters-grid");
  if (!grid) return;

  const TONES = ["", "tone-blue", "tone-green", "tone-yellow"];

  Object.keys(window.characters).forEach((slug, i) => {
    const data = window.characters[slug];
    const categories = [];
    if ((data.stickers || []).length) categories.push("Sticker");
    if ((data.themes || []).length) categories.push("Theme");
    if ((data.emoji || []).length) categories.push("Emoji");
    const label = categories.join(" · ") || "Character";
    const tone = TONES[i % TONES.length];
    const toneClass = tone ? ` ${tone}` : "";

    grid.insertAdjacentHTML(
      "beforeend",
      `<a class="card${toneClass} reveal" href="character.html?slug=${slug}">
        <div class="card-media"><img src="${data.cover}" alt="${data.name}" loading="lazy" /></div>
        <div class="card-body">
          <div>
            <h3 class="card-title">${data.name}</h3>
            <p class="card-meta">${label}</p>
          </div>
          <span class="arrow">→</span>
        </div>
      </a>`,
    );
  });
})();

// ============================================================
// สร้างการ์ด Sticker/Theme/Emoji อัตโนมัติจาก characters-data.js
// รันก่อน reveal-observer ด้านล่าง เพื่อให้การ์ดที่สร้างใหม่ถูกจับ
// เข้า IntersectionObserver ด้วย (ไม่งั้นจะไม่มี fade-up animation)
// ============================================================
(function renderLineCards() {
  if (typeof window.characters === "undefined") return;

  const TONES = ["", "tone-blue", "tone-green", "tone-yellow"];
  const stickerGrid = document.getElementById("sticker-grid");
  const themeGrid = document.getElementById("theme-grid");
  const emojiGrid = document.getElementById("emoji-grid");

  function buildCard(slug, item, fallbackCover, typeLabel, tone) {
    // ใช้รูป cover เดี่ยวๆ (_covers) เป็นหลักสำหรับการ์ดในเมนู เพราะรูป sheet
    // เป็นแผ่นรวมสติ๊กเกอร์ทั้งแพ็ค รกเกินไปสำหรับการ์ดขนาดเล็ก — ถ้าไม่มี cover
    // ค่อย fallback ไปใช้ sheet แทน กันการ์ดว่างเปล่า
    // ใช้รูปของแต่ละแพ็คเองก่อนเสมอ (item.sheet) เพราะแต่ละ sticker/theme
    // มีรูปที่ถูกต้องของตัวเองอยู่แล้ว — ใช้ cover ตัวละครแทนเฉพาะตอนที่
    // แพ็คนั้นยังไม่มีไฟล์รูปจริง (sheet: null) กันการ์ดว่างเปล่าเท่านั้น
    const img = item.sheet || fallbackCover;
    const toneClass = tone ? ` ${tone}` : "";
    // ตัด [TH]/[EN]/[JP] ออกจากชื่อที่โชว์บนการ์ดหน้าแรก เพราะโชว์แค่
    // variant เดียวต่อการ์ด ไม่จำเป็นต้องระบุภาษากำกับ (หน้า detail ตัวละคร
    // ยังโชว์ชื่อเต็มพร้อมป้ายภาษาเหมือนเดิม)
    const displayName = item.name.replace(/\s*\[(TH|EN|JP)\]\s*$/, "");
    return `
      <a class="card${toneClass} reveal" data-type="${typeLabel.toLowerCase()}" href="character.html?slug=${slug}&item=${encodeURIComponent(item.name)}">
        <div class="card-media"><img src="${img}" alt="${displayName}" loading="lazy" /></div>
        <div class="card-body">
          <div>
            <h3 class="card-title">${displayName}</h3>
            <p class="card-meta">${typeLabel}</p>
          </div>
          <span class="arrow">→</span>
        </div>
      </a>`;
  }

  let stickerIdx = 0;
  let themeIdx = 0;
  let emojiIdx = 0;

  Object.keys(window.characters).forEach((slug) => {
    const data = window.characters[slug];

    (data.stickers || []).forEach((item) => {
      // ข้าม variant ภาษา [EN] บนหน้าแรก กันการ์ดซ้ำหน้าตาเดียวกัน 2 ใบ
      // (หน้า detail ตัวละครยังโชว์ทั้ง TH/EN ให้เลือกครบตามเดิม)
      if (!stickerGrid || item.name.includes("[EN]")) return;
      stickerGrid.insertAdjacentHTML(
        "beforeend",
        buildCard(slug, item, data.cover, "Sticker", TONES[stickerIdx % TONES.length]),
      );
      stickerIdx++;
    });

    (data.themes || []).forEach((item) => {
      if (!themeGrid) return;
      themeGrid.insertAdjacentHTML(
        "beforeend",
        buildCard(slug, item, data.cover, "Theme", TONES[themeIdx % TONES.length]),
      );
      themeIdx++;
    });

    (data.emoji || []).forEach((item) => {
      if (!emojiGrid) return;
      emojiGrid.insertAdjacentHTML(
        "beforeend",
        buildCard(slug, item, data.cover, "Emoji", TONES[emojiIdx % TONES.length]),
      );
      emojiIdx++;
    });
  });
})();

// ============================================================
// Hero slideshow — สไลด์ตัวอย่างผลงานวนไปเรื่อยๆ ระหว่าง Sticker/Theme/Emoji
// ดึงจากรูปจริงใน characters-data.js เท่านั้น (ข้ามตัวที่ยังไม่มีไฟล์)
// ============================================================
(function initHeroSlideshow() {
  if (typeof window.characters === "undefined") return;

  const container = document.getElementById("hero-slideshow");
  const labelEl = document.getElementById("hero-slide-label");
  const pillEl = document.getElementById("hero-slide-pill");
  if (!container) return;

  const slides = [];
  const collect = (arrKey, typeLabel) => {
    Object.values(window.characters).forEach((data) => {
      (data[arrKey] || []).forEach((item) => {
        if (item.sheet) slides.push({ img: item.sheet, name: item.name, type: typeLabel });
      });
    });
  };
  // เรียงเป็นชุด Sticker ก่อน แล้ว Theme แล้ว Emoji วนลูป ให้ดูมีจังหวะ
  collect("stickers", "Sticker");
  collect("themes", "Theme");
  collect("emoji", "Emoji");

  if (slides.length === 0) return;

  slides.forEach((slide, i) => {
    const img = document.createElement("img");
    img.src = slide.img;
    img.alt = slide.name;
    img.className = "preview-slide" + (i === 0 ? " is-active" : "");
    container.appendChild(img);
  });

  const slideEls = container.querySelectorAll(".preview-slide");
  let current = 0;

  function updateLabel() {
    if (labelEl) labelEl.textContent = `ตัวอย่างผลงาน: ${slides[current].name}`;
    if (pillEl) pillEl.textContent = slides[current].type;
  }
  updateLabel();

  if (slides.length > 1) {
    setInterval(() => {
      slideEls[current].classList.remove("is-active");
      current = (current + 1) % slides.length;
      slideEls[current].classList.add("is-active");
      updateLabel();
    }, 2800);
  }
})();

const menuToggle = document.querySelector(".menu-toggle");
      const navLinks = document.querySelector(".nav-links");
      const filterButtons = document.querySelectorAll(".filter-button");
      const lineGroups = document.querySelectorAll(".line-group");
      const revealItems = document.querySelectorAll(".reveal");

      menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });

      navLinks.addEventListener("click", (event) => {
        if (event.target.matches("a")) {
          navLinks.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const filter = button.dataset.filter;

          filterButtons.forEach((item) => item.classList.remove("is-active"));
          button.classList.add("is-active");

          lineGroups.forEach((group) => {
            group.hidden = filter !== "all" && group.dataset.group !== filter;
          });
        });
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );

      revealItems.forEach((item) => observer.observe(item));

      // ============ LOTTIE PLAYERS (LottieFiles / IconScout ให้ขยับได้จริง) ============
      // โหลดแบบ lazy: เล่นแอนิเมชันเมื่อ scroll เข้ามาในจอเท่านั้น (ประหยัด performance)
      if (typeof lottie !== "undefined") {
        const lottieEls = document.querySelectorAll("[data-lottie]");
        const lottieObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const el = entry.target;
                lottie.loadAnimation({
                  container: el,
                  renderer: "svg",
                  loop: true,
                  autoplay: true,
                  path: el.dataset.lottie,
                });
                lottieObserver.unobserve(el);
              }
            });
          },
          { threshold: 0.2 },
        );
        lottieEls.forEach((el) => lottieObserver.observe(el));
      }

// ============================================================
// คัดลอกอีเมลติดต่อ (แทนปุ่ม mailto: ที่กดแล้วอาจไม่มีอะไรเกิดขึ้น
// ถ้าเครื่องไม่มี mail client ผูกไว้)
// ============================================================
(function initCopyEmail() {
  const btn = document.getElementById("copy-email-btn");
  const textEl = document.getElementById("copy-email-text");
  if (!btn || !textEl) return;

  const email = textEl.textContent.trim();
  const originalText = email;

  btn.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // fallback สำหรับ browser เก่าที่ไม่มี Clipboard API
        const tempInput = document.createElement("input");
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }
      textEl.textContent = "คัดลอกแล้ว!";
      btn.classList.add("is-copied");
      setTimeout(() => {
        textEl.textContent = originalText;
        btn.classList.remove("is-copied");
      }, 1800);
    } catch (err) {
      // ถ้า copy ไม่สำเร็จ อย่างน้อย user ยังเห็นอีเมลตรงๆ อยู่แล้ว ไม่ต้องทำอะไรเพิ่ม
      console.warn("Copy to clipboard failed:", err);
    }
  });
})();
