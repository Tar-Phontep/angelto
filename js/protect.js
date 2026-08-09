// ============================================================
// protect.js — index.html + character.html
// กันคลิกขวา/ลากรูป/เลือกข้อความแบบเบื้องต้น กันคนทั่วไปกด save รูปหรือ
// copy ข้อความโดยไม่ตั้งใจ — ไม่ใช่การป้องกันแบบสมบูรณ์ (ปิด JS/view-source/
// screenshot ก็ยังเอารูปไปได้อยู่ดี) แค่เป็นด่านกันเบื้องต้นเท่านั้น
// ============================================================
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

document.addEventListener("dragstart", (event) => {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
  }
});
