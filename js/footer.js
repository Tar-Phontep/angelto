// ============================================================
// footer.js — index.html + character.html
// จัดตำแหน่งแนวตั้งของ .footer-bar ให้ต่อเนื่องกับเส้นสีชมพูที่วาดอยู่ใน
// images/icons/footer.png จริงๆ (ไม่ใช่แค่กะด้วย % ของ .footer-inner ซึ่ง
// พลาดได้ง่าย เพราะ .footer-banner ยืดหด continuous ตามความกว้างจอ ไม่ได้
// กระโดดเป็นขั้นตาม breakpoint เหมือน .footer-bottom — ใช้ตำแหน่งพิกเซลจริง
// ที่วัดจากไฟล์ภาพแทน: เส้นทึบในภาพอยู่ที่ y 75–96 จากความสูงเต็ม 118px)
// ============================================================
(function () {
  const STRIPE_TOP_FRAC = 75 / 118;
  const STRIPE_BOTTOM_FRAC = 96 / 118;

  function alignFooterBar() {
    const bar = document.querySelector(".footer-bar");
    const banner = document.querySelector(".footer-banner");
    const inner = document.querySelector(".footer-inner");
    if (!bar || !banner || !inner || !banner.naturalWidth) return;

    const bannerRect = banner.getBoundingClientRect();
    const innerRect = inner.getBoundingClientRect();
    if (bannerRect.height === 0) return;

    const topPx = bannerRect.top - innerRect.top + STRIPE_TOP_FRAC * bannerRect.height;
    const heightPx = (STRIPE_BOTTOM_FRAC - STRIPE_TOP_FRAC) * bannerRect.height;

    bar.style.top = `${topPx}px`;
    bar.style.height = `${heightPx}px`;
  }

  const banner = document.querySelector(".footer-banner");
  if (!banner) return;

  if (banner.complete) {
    alignFooterBar();
  } else {
    banner.addEventListener("load", alignFooterBar);
  }

  window.addEventListener("resize", alignFooterBar);

  // ครอบกรณี lazy-load โผล่มาช้ากว่า resize event ครั้งสุดท้าย หรือ layout
  // ขยับเพราะฟอนต์/เนื้อหาอื่นโหลดเสร็จทีหลัง — สังเกตทั้งตัวรูปเอง (ขนาด
  // เปลี่ยนตอน breakpoint สลับ) และ .footer-inner (ความสูงแถวเปลี่ยนตอน
  // .footer-bottom reflow จากฟอนต์โหลดเสร็จ แม้รูปจะไม่ได้เปลี่ยนขนาดเลยก็ตาม)
  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(alignFooterBar);
    observer.observe(banner);
    const inner = document.querySelector(".footer-inner");
    if (inner) observer.observe(inner);
  }
})();
