// ============================================================
// character-render.js
// อ่าน ?slug= จาก URL แล้วดึงข้อมูลจาก characters (characters-data.js)
// มาเติมใน character.html แบบ dynamic
// ============================================================

(function () {
  // การ์ด 1 ใบ สำหรับ sticker หรือ theme (ใช้ template เดียวกัน)
  function buildDetailCard(item, index, labelPrefix, tone) {
    const nameTH = item.nameTH ? `<div class="detail-name-en">${item.nameTH}</div>` : "";
    // ตัด [TH]/[EN]/[JP] ออกจากหัวข้อที่โชว์ ให้ผู้ใช้เห็น (เก็บชื่อเต็มไว้ใน
    // data-item-name สำหรับระบบ deep-link/highlight เท่านั้น ไม่โชว์ตรงๆ)
    const langMatch = item.name.match(/\[(TH|EN|JP)\]\s*$/);
    const displayName = item.name.replace(/\s*\[(TH|EN|JP)\]\s*$/, "");
    const langBadge = langMatch
      ? `<span class="lang-badge">${langMatch[1]}</span>`
      : "";

    // ลิงก์ที่ยังไม่มีจริง จะถูกเก็บเป็นข้อความในวงเล็บเหลี่ยม เช่น
    // "[ยังไม่เปิดขายบน LINE Store]" — เช็คแบบนี้แทนเทียบ string ตรงๆ
    // กันพลาดกรณีมีข้อความสถานะแบบอื่นเพิ่มในอนาคต
    const isRealLink = item.link && !item.link.startsWith("[");
    const statusText = !isRealLink && item.link ? item.link.replace(/^\[|\]$/g, "") : "ยังไม่มีลิงก์";
    const linkText = isRealLink
      ? `<a class="button" href="${item.link}" target="_blank" rel="noopener">ดูใน LINE Store →</a>`
      : `<span class="button" style="opacity:0.5; cursor:not-allowed; background:var(--muted);" title="${statusText}">${statusText}</span>`;

    // หน้า detail ใช้รูปตัวอย่างที่ครบกว่า (detailSheet) แทนรูปเดี่ยวที่ใช้ในเมนู
    // (item.sheet) — ถ้าไม่มี detailSheet ค่อย fallback ไปใช้ sheet แทน
    const detailImg = item.detailSheet || item.sheet;
    const media = detailImg
      ? `<img src="${detailImg}" alt="${displayName}" loading="lazy" style="width:100%; max-width:320px; border-radius:var(--radius);" />`
      : `<div class="sticker-sheet"><span>🩷</span><span>✨</span><span>🌟</span></div>
         <div class="sticker-sheet-label">ภาพตัวอย่างกำลังจะมาเร็วๆ นี้</div>`;

    return `
      <div class="detail-card reveal" data-item-name="${item.name.replace(/"/g, "&quot;")}">
        <div class="detail-media ${tone}">${media}</div>
        <div class="detail-body">
          <div class="detail-label">${labelPrefix} ${index + 1}</div>
          <h3>${displayName}${langBadge}</h3>
          ${nameTH}
          <p class="desc">${item.desc || ""}</p>
          ${linkText}
        </div>
      </div>`;
  }

  function renderSection(sectionId, containerId, items, labelPrefix, tone) {
    const section = document.getElementById(sectionId);
    const container = document.getElementById(containerId);
    if (!items || items.length === 0) {
      section.hidden = true;
      return;
    }
    section.hidden = false;
    container.innerHTML = items
      .map((item, i) => buildDetailCard(item, i, labelPrefix, tone))
      .join("");
  }

  function showNotFound() {
    document.getElementById("not-found-section").hidden = false;
    ["sticker-section", "theme-section", "emoji-section"].forEach((id) => {
      document.getElementById(id).hidden = true;
    });
    document.querySelector(".char-hero").hidden = true;
  }

  function init() {
    const footerCopyright = document.getElementById("footer-copyright");
    if (footerCopyright) footerCopyright.textContent = `© ${new Date().getFullYear()} AngelTo`;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const data = window.characters && slug ? window.characters[slug] : null;

    if (!data) {
      showNotFound();
      return;
    }

    document.getElementById("page-title").textContent = `${data.name} — AngelTo`;

    // อัปเดต Open Graph tags ให้ตรงกับตัวละครนี้ (สำหรับตอนแชร์ลิงก์หน้านี้)
    const ogTitle = document.getElementById("og-title");
    const ogDesc = document.getElementById("og-description");
    const ogImage = document.getElementById("og-image");
    if (ogTitle) ogTitle.setAttribute("content", `${data.name} — AngelTo`);
    if (ogDesc) ogDesc.setAttribute("content", data.descTH || data.descEN || `สติกเกอร์และธีมของ ${data.name} จาก AngelTo`);
    if (ogImage && data.cover) ogImage.setAttribute("content", data.cover);
    // ตั้ง eyebrow ให้ตรงกับหมวดที่ตัวละครนี้มีจริง แทนที่จะขึ้น "Sticker Line"
    // ตายตัวเหมือนเดิม (ตัวละครที่ไม่มี sticker เช่นบางกรณีจะผิดหมวด)
    const categories = [];
    if ((data.stickers || []).length) categories.push("Sticker");
    if ((data.themes || []).length) categories.push("Theme");
    if ((data.emoji || []).length) categories.push("Emoji");
    const eyebrowEl = document.getElementById("char-eyebrow");
    if (eyebrowEl) eyebrowEl.textContent = categories.join(" · ") || "Collection";

    document.getElementById("char-name").textContent = data.name;
    document.getElementById("char-name-th").textContent = data.nameTH || "";
    document.getElementById("char-bio-en").textContent = data.descEN || "";
    document.getElementById("char-bio-th").textContent = data.descTH || "";

    const avatar = document.getElementById("char-avatar");
    if (data.cover) {
      avatar.innerHTML = `<img src="${data.cover}" alt="${data.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;position:relative;z-index:2;" />`;
    }

    renderSection("sticker-section", "sticker-container", data.stickers, "Sticker", data.tone);
    renderSection("theme-section", "theme-container", data.themes, "Theme", data.tone);
    renderSection("emoji-section", "emoji-container", data.emoji, "Emoji", data.tone);

    // ============ SCROLL-TO + HIGHLIGHT รายการที่กดมาจากหน้าเมนู ============
    // กันปัญหา "กดสติ๊กเกอร์ตัวหนึ่ง แต่หน้าที่เปิดขึ้นโชว์ทุกแพ็คปนกัน ไม่รู้ว่า
    // อันไหนคืออันที่กด" — เจาะจงไปที่การ์ดนั้นเลยพร้อมไฮไลต์กรอบชมพู
    const targetItem = params.get("item");
    if (targetItem) {
      const targetCard = Array.from(document.querySelectorAll("[data-item-name]")).find(
        (el) => el.dataset.itemName === targetItem,
      );
      if (targetCard) {
        targetCard.classList.add("is-target");
        setTimeout(() => {
          if (typeof targetCard.scrollIntoView === "function") {
            targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 150);
      }
    }

    // reveal-on-scroll (ย้ายมาจาก inline script เดิม)
    const revealItems = document.querySelectorAll(".reveal");
    if (typeof IntersectionObserver === "undefined") {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }
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
  }

  document.addEventListener("DOMContentLoaded", init);
})();
