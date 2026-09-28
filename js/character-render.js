// ============================================================
// character-render.js
// อ่าน ?slug= จาก URL แล้วดึงข้อมูลจาก characters (characters-data.js)
// มาเติมใน character.html แบบ dynamic
// ============================================================

(function () {
  // การ์ด 1 ใบ สำหรับ sticker หรือ theme (ใช้ template เดียวกัน)
  // โครงใหม่: กล่องซ้าย = รูปชีทรวม, กล่องขวา = ไอคอน+หัวข้อ+คำอธิบาย
  // (EN แล้ว TH) + แถวไอคอนตัวอย่าง 4 รูป (ถ้ามี item.icons) + ปุ่มไปต่อ
  function buildDetailCard(item, index, labelPrefix, tone) {
    // ตัด [TH]/[EN]/[JP] ออกจากหัวข้อที่โชว์ ให้ผู้ใช้เห็น (เก็บชื่อเต็มไว้ใน
    // data-item-name สำหรับระบบ deep-link/highlight เท่านั้น ไม่โชว์ตรงๆ)
    const langMatch = item.name.match(/\[(TH|EN|JP)\]\s*$/);
    const displayName = item.name.replace(/\s*\[(TH|EN|JP)\]\s*$/, "");
    const langBadge = langMatch
      ? `<span class="lang-badge">${langMatch[1]}</span>`
      : "";
    const thTitle = item.nameTH || displayName;

    // ลิงก์ที่ยังไม่มีจริง จะถูกเก็บเป็นข้อความในวงเล็บเหลี่ยม เช่น
    // "[ยังไม่เปิดขายบน LINE Store]" — เช็คแบบนี้แทนเทียบ string ตรงๆ
    // กันพลาดกรณีมีข้อความสถานะแบบอื่นเพิ่มในอนาคต
    const isRealLink = item.link && !item.link.startsWith("[");
    const statusText =
      !isRealLink && item.link
        ? item.link.replace(/^\[|\]$/g, "")
        : "ยังไม่มีลิงก์";
    const moreIcon = `<img src="ver11 Pic/icons/icon-next3.png" alt="" loading="lazy" />`;
    const moreLink = isRealLink
      ? `<a class="detail-preview-more" href="${item.link}" target="_blank" rel="noopener" aria-label="ดูใน LINE Store">${moreIcon}</a>`
      : `<span class="detail-preview-more" style="opacity:0.5; cursor:not-allowed;" title="${statusText}">${moreIcon}</span>`;

    // Theme ที่มีชุดรูปตัวอย่างจริงครบ 4 รูป (item.icons) ใช้การ์ดคนละแบบกับ
    // sticker โดยสิ้นเชิง — ด้านบนเป็น label + หัวข้อ/คำอธิบาย EN แล้ว TH
    // (ไม่มี cover-icon คั่นแบบ sticker) ด้านล่างเป็นรูปตัวอย่างล้วนๆ 4 รูป
    // เรียงซ้ายไปขวา + ปุ่มไปต่อขนาน (center) กับแถวรูป ไม่ใช่มุมล่างขวา
    // ธีมที่ยังไม่มีชุดรูป (MooNuum Sweets, Nangel Pink Love, Cloud ธีมปกติ)
    // ยัง fallback ไปใช้การ์ดแบบ sticker เดิม
    const isThemeWithFullSet =
      labelPrefix === "Theme" && item.icons && item.icons.length;

    if (isThemeWithFullSet) {
      const row = item.icons
        .map(
          (src) =>
            `<img class="theme-preview-row-img" src="${src}" alt="${displayName}" loading="lazy" />`,
        )
        .join("");
      // สีเฉลี่ยจริงจากรูปตัวอย่างของแต่ละธีม (item.themeColor ถ้ามี ปรับตาม
      // กฎห้ามเหลือง/เขียว/น้ำตาลแล้ว — ดู comment ใน characters-data.js) ใส่
      // เป็นพื้นหลังเฉพาะ "ถาด" รูป 4 ใบเท่านั้น ไม่ทาบทับส่วนหัวข้อ/คำอธิบาย
      // เลย — เจอมาแล้วว่าสีบางสี (เช่นธีมกลางคืนที่เข้ม) ทำให้ตัวอักษรสีเข้ม
      // กลืนจนอ่านไม่ออก (contrast ratio ต่ำสุดถึง 1.0:1) แยกโซนสีออกจาก
      // โซนข้อความไปเลยแก้ปัญหานี้ได้แน่นอน ไม่ต้องคอยเช็ค contrast ทีละสี
      // ปกติสีธีมลงแค่ถาดรูป (rowStyle) — แต่ธีมที่ตั้ง containerColor:true
      // ไว้ใน data (เช่น Candy) ให้สีลงพื้นการ์ดทั้งใบแทน ถาดรูปเป็นโปร่งใส
      const useContainerColor = !!item.containerColor;
      const rowStyle =
        item.themeColor && !useContainerColor
          ? ` style="background: ${item.themeColor};"`
          : "";
      // ใช้ CSS variable แทน background shorthand ตรงๆ เพราะ shorthand จะ
      // reset background-image (รูปประดับ theme-bg-fly ที่ตั้งใน CSS class)
      // ให้เป็น none ไปด้วยทุกครั้ง — ต้องแยกสีพื้นออกจากรูปประดับ
      const cardStyle =
        useContainerColor && item.themeColor
          ? ` style="--theme-bg-color: ${item.themeColor};"`
          : "";
      const cardClass = useContainerColor ? " container-tinted" : "";
      return `
        <div class="detail-card theme-card-simple reveal ${tone}${cardClass}"${cardStyle} data-item-name="${item.name.replace(/"/g, "&quot;")}">
          <div class="detail-card-inner">
            <div class="theme-card-header-row">
              <div class="theme-card-header">
                <div class="detail-label">${labelPrefix} ${index + 1}</div>
                <h3>${displayName}${langBadge}</h3>
                <p class="desc">${item.descEN || ""}</p>
                <h3>${item.nameTH || displayName}</h3>
                <p class="desc">${item.descTH || ""}</p>
              </div>
              ${moreLink}
            </div>
            <div class="theme-preview-row"${rowStyle}>
              ${row}
            </div>
          </div>
        </div>`;
    }

    // แถวไอคอนตัวอย่าง 4 รูป — เฉพาะรายการที่มี item.icons (ครอปจากชีทรวม
    // มาแล้ว) ใช้กับ sticker เป็นหลัก แถวนี้ต้องโชว์เสมอไม่ว่าจะมี icons
    // หรือไม่ เพราะเป็นที่เดียวที่มีปุ่มลิงก์ไป LINE Store (moreLink) อยู่ —
    // เดิมซ่อนทั้งแถวไปเลยถ้าไม่มี icons ทำให้รายการที่มีลิงก์จริงในข้อมูล
    // (เช่น Cloud 2 แพ็คแรก, MooNuum/Nangel Pink Love/Cloud ธีมปกติที่ไม่มี
    // ชุดไอคอน) กดลิงก์ไม่ได้เลยทั้งที่ข้อมูลมีลิงก์ถูกต้อง — บั๊กที่เจอ 2026-08-09
    const previewIcons = (item.icons || [])
      .map(
        (src) =>
          `<img class="detail-preview-icon" src="${src}" alt="" loading="lazy" />`,
      )
      .join("");
    const previewRow = `<div class="detail-preview-row">${previewIcons}${moreLink}</div>`;

    // หน้า detail ใช้รูปตัวอย่างที่ครบกว่า (detailSheet) แทนรูปเดี่ยวที่ใช้ในเมนู
    // (item.sheet) — ถ้าไม่มี detailSheet ค่อย fallback ไปใช้ sheet แทน
    const detailImg = item.detailSheet || item.sheet;
    const media = detailImg
      ? `<img src="${detailImg}" alt="${displayName}" loading="lazy" style="width:100%; max-width:460px; border-radius:var(--radius);" />`
      : `<div class="sticker-sheet"><span>🩷</span><span>✨</span><span>🌟</span></div>
         <div class="sticker-sheet-label">ภาพตัวอย่างกำลังจะมาเร็วๆ นี้</div>`;

    // ไอคอนเล็กหัวการ์ด — ใช้ item.sheet (cover เดี่ยวสะอาดๆ) ถ้ามี
    const coverIcon = item.sheet
      ? `<img class="detail-cover-icon" src="${item.sheet}" alt="" loading="lazy" />`
      : "";

    // การ์ด Sticker ที่ติดกันของตัวละครเดียวกันสลับเข้ม/อ่อน (1=เข้ม, 2=อ่อน,
    // 3=เข้ม, ...) กันดูซ้ำเป็นสีเดียวแบนๆ ทั้งชุด — เฉพาะ Sticker เท่านั้น
    // (Theme มีระบบสีของตัวเองแล้ว, Emoji ไม่แตะ)
    const altLightClass =
      labelPrefix === "Sticker" && index % 2 === 1 ? " tone-alt-light" : "";

    const cardBody = `
        <div class="detail-media">${media}</div>
        <div class="detail-body">
          <div class="detail-label">${labelPrefix} ${index + 1}</div>
          <div class="detail-lang-group">
            ${coverIcon}
            <div class="detail-lang-stack">
              <div class="detail-lang-row">
                <div>
                  <h3>${displayName}${langBadge}</h3>
                  <p class="desc">${item.descEN || ""}</p>
                </div>
              </div>
              <div class="detail-lang-row">
                <div>
                  <h3>${thTitle}</h3>
                  <p class="desc">${item.descTH || ""}</p>
                </div>
              </div>
            </div>
          </div>
          ${previewRow}
        </div>`;

    // การ์ดยืด BG เต็มความกว้าง viewport (ดู #sticker-container/#theme-container/
    // #emoji-container .detail-card ใน character.css — เดิมทำแค่ Sticker Set,
    // ขยายมาใช้กับ Theme (ที่ fallback มาใช้เทมเพลตนี้ ไม่มี icons) และ Emoji
    // ด้วยตามคำขอ 2026-08-11) เนื้อหาจริงเลยต้องห่อด้วย .detail-card-inner
    // แยกต่างหาก จำกัดความกว้างไว้เท่า --container เดิม (1180px) แล้ว center เอง
    const innerHtml = `<div class="detail-card-inner">${cardBody}</div>`;

    return `
      <div class="detail-card reveal ${tone}${altLightClass}" data-item-name="${item.name.replace(/"/g, "&quot;")}">${innerHtml}
      </div>`;
  }

  function renderSection(
    sectionId,
    containerId,
    items,
    labelPrefix,
    tone,
    themeBgColor,
  ) {
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
    // Sticker/Theme container ต้องใช้สีตามตัวละครจริง — Sticker ใช้ tone-N ของ
    // ตัวละครแต่ละคน, Theme ใช้ themeBgColor (มีค่าเฉลี่ยจริงจากธีม) ถ้าไม่มี
    // ให้ fallback เป็น tone-N แทน เพื่อให้แพ็คสติ๊กเกอร์/ธีมทั้งชุดมีสีที่ต่อเนื่อง
    // กับ hero/character card และไม่เหลือพื้นขาวนวลแบบ neutral
    if (labelPrefix === "Sticker") {
      container.style.setProperty("--sticker-container-tint", `var(${tone})`);
    }
    if (labelPrefix === "Theme") {
      container.style.setProperty(
        "--theme-container-tint",
        themeBgColor || `var(${tone})`,
      );
    }

    // วงกลมพรีวิว 4 วงใน .topic-banner ของ section นี้
    const thumbsEl = document.getElementById(
      `${labelPrefix.toLowerCase()}-topic-thumbs`,
    );
    if (thumbsEl) {
      // bannerIcons: ไฟล์วงกลมสำเร็จรูป (มีกรอบประดับในตัวอยู่แล้ว) เจาะจง
      // สำหรับแถบ .topic-banner โดยเฉพาะ ถ้า item ไหนมีระบุไว้ ใช้ทั้ง 4 รูป
      // ของ item นั้นตรงๆ เลย ไม่ผสมกับ item อื่น (ตอนนี้มีแค่ Candy Theme)
      // 2026-08-12 ตามคำขอ "ใช้รูป theme candy icon1-2-3-4" — ต่างจาก icons
      // ปกติที่ไม่มีกรอบ ต้องพึ่ง .topic-banner-thumb (bg whCircle.png +
      // border-radius) ครอบให้ ไฟล์ bannerIcons ไม่ต้องพึ่งครอบซ้ำ (ดู class
      // topic-banner-thumb--composed ใน character.css)
      const itemWithBannerIcons = items.find(
        (item) => item.bannerIcons && item.bannerIcons.length,
      );
      if (itemWithBannerIcons) {
        thumbsEl.innerHTML = itemWithBannerIcons.bannerIcons
          .slice(0, 4)
          .map(
            (src) =>
              `<div class="topic-banner-thumb topic-banner-thumb--composed"><img src="${src}" alt="" loading="lazy" /></div>`,
          )
          .join("");
        return;
      }

      // ปกติใช้ไอคอนแรกของแต่ละแพ็ค สูงสุด 4 แพ็ค (ตาม ver11 Pic/Design
      // Character Page/Candy page design3.png) แต่ถ้ามีแพ็คน้อยกว่า 4 ให้ไล่
      // หยิบไอคอนถัดไปของแพ็คเดิม (icon2, icon3, icon4...) มาเติมจนครบ 4 วง
      // แทนที่จะเหลือแค่วงเดียว ถ้ารวมทุกไอคอนของทุกแพ็คแล้วยังไม่ครบ 4 ก็โชว์
      // เท่าที่มีจริง ไม่ปั้นข้อมูลเทียม
      // fallback เป็น item.sheet เมื่อไม่มี icons เลย (รายการ emoji ไม่มี
      // icons array แบบ sticker/theme มีแค่ sheet เดี่ยว — เจอบั๊กจริง
      // 2026-08-12 ตอนเช็ค Cloud/PomPom แล้ววงพรีวิว Emoji Set ว่างเปล่า)
      const thumbIcons = [];
      items.forEach((item) => {
        if (item.icons && item.icons.length) thumbIcons.push(item.icons[0]);
        else if (item.sheet) thumbIcons.push(item.sheet);
      });
      let extraIndex = 1;
      while (thumbIcons.length < 4) {
        const itemsWithMoreIcons = items.filter(
          (item) => item.icons && item.icons.length > extraIndex,
        );
        if (itemsWithMoreIcons.length === 0) break;
        itemsWithMoreIcons.forEach((item) => {
          if (thumbIcons.length < 4) thumbIcons.push(item.icons[extraIndex]);
        });
        extraIndex += 1;
      }
      thumbsEl.innerHTML = thumbIcons
        .slice(0, 4)
        .map(
          (src) =>
            `<div class="topic-banner-thumb"><img src="${src}" alt="" loading="lazy" /></div>`,
        )
        .join("");
    }
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
    if (footerCopyright)
      footerCopyright.textContent = `© ${new Date().getFullYear()} AngelTo`;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const data = window.characters && slug ? window.characters[slug] : null;

    if (!data) {
      showNotFound();
      return;
    }

    document.getElementById("page-title").textContent =
      `${data.name} — AngelTo`;

    // อัปเดต Open Graph tags ให้ตรงกับตัวละครนี้ (สำหรับตอนแชร์ลิงก์หน้านี้)
    const ogTitle = document.getElementById("og-title");
    const ogDesc = document.getElementById("og-description");
    const ogImage = document.getElementById("og-image");
    if (ogTitle) ogTitle.setAttribute("content", `${data.name} — AngelTo`);
    if (ogDesc)
      ogDesc.setAttribute(
        "content",
        data.descTH ||
          data.descEN ||
          `สติกเกอร์และธีมของ ${data.name} จาก AngelTo`,
      );
    if (ogImage && data.cover) ogImage.setAttribute("content", data.cover);
    // eyebrow เปลี่ยนจากหมวด (Sticker/Theme/Emoji) เป็นวันวางขาย — ใส่
    // data.releaseDate ต่อตัวละครใน characters-data.js เมื่อมีวันจริง ถ้ายัง
    // ไม่ระบุ ให้ fallback เป็น placeholder "00/00/20xx" ไปก่อน
    const eyebrowEl = document.getElementById("char-eyebrow");
    if (eyebrowEl)
      eyebrowEl.textContent = `Release date: ${data.releaseDate || "00/00/20xx"}`;

    // ใส่ tone class ให้ hero เพื่อสไตล์เฉพาะตัวละคร (ตอนนี้ใช้กับ candy อย่างเดียว)
    const heroInner = document.querySelector(".char-hero-inner");
    if (heroInner && data.tone) heroInner.classList.add(data.tone);

    document.getElementById("char-name").textContent = data.name;
    document.getElementById("char-name-th").textContent = data.nameTH || "";
    document.getElementById("char-bio-en").textContent = data.descEN || "";
    document.getElementById("char-bio-th").textContent = data.descTH || "";

    const avatar = document.getElementById("char-avatar");
    if (data.cover) {
      avatar.innerHTML = `<img src="${data.cover}" alt="${data.name}" style="max-width:154px;max-height:154px;width:auto;height:auto;object-fit:contain;position:relative;z-index:2;" />`;
    }

    renderSection(
      "sticker-section",
      "sticker-container",
      data.stickers,
      "Sticker",
      data.tone,
    );
    renderSection(
      "theme-section",
      "theme-container",
      data.themes,
      "Theme",
      data.tone,
      data.themeBgColor,
    );
    renderSection(
      "emoji-section",
      "emoji-container",
      data.emoji,
      "Emoji",
      data.tone,
    );

    // ============ SCROLL-TO + HIGHLIGHT รายการที่กดมาจากหน้าเมนู ============
    // กันปัญหา "กดสติ๊กเกอร์ตัวหนึ่ง แต่หน้าที่เปิดขึ้นโชว์ทุกแพ็คปนกัน ไม่รู้ว่า
    // อันไหนคืออันที่กด" — เจาะจงไปที่การ์ดนั้นเลยพร้อมไฮไลต์กรอบชมพู
    const targetItem = params.get("item");
    if (targetItem) {
      const targetCard = Array.from(
        document.querySelectorAll("[data-item-name]"),
      ).find((el) => el.dataset.itemName === targetItem);
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
