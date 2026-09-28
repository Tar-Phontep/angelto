// ============================================================
// characters-data.js
// ข้อมูลตัวละครทั้งหมดของ AngelTo — ใช้กับ character.html?slug=xxx
// อัปเดตล่าสุด: ดึงข้อมูล bio + ลิงก์ LINE Store จริงจาก angelto.com
// (moonuum.html, moodaeng.html, rabbit.html, carrot.html, nangel.html,
//  candy.html, fox.html, AngelCloud.html, AngelPomPom.html)
// ============================================================

const characters = {
  moonuum: {
    name: "MooNuum",
    nameTH: "หมูนุ่ม",
    tone: "tone-1",
    // สีพื้นหลัง #theme-container (Theme Set) — ธีมนี้ไม่เคยมีค่า "สีเฉลี่ยจริง
    // จากรูป" ถูกบันทึกไว้ตอน audit เดิม (ต่างจากตัวอื่นที่มีคอมเมนต์ "เดิมสี...
    // ค่าเฉลี่ยจริงจากรูป") เลย fallback ไปใช้ --tone-1 ของตัวละครเอง (ชมพูอ่อน
    // f2bbcb) แทน — ถ้ามีสีจริงของธีมนี้ทีหลัง เปลี่ยนเป็น hex ตรงได้เลย 2026-09-22
    themeBgColor: "var(--tone-1)",
    cover: "ver11 Pic/characters/covers/main-moonuum.png",
    descEN:
      'I\'m an Angel Pig. Please call me "MooNuum", a soft pig. I have wings like an angel and stars on my ears. Maybe I can fly?',
    descTH:
      "น้องหมูนุ่ม เป็นหมูสายพันธุ์นางฟ้าที่ดูตัวขาวอมชมพูๆ นุ่มๆ มีปีกเล็กๆ ที่หูมีรูปดวงดาว ตาและหางเป็นหัวใจ บ่งบอกถึงการมอบความรักให้กับทุกคนที่มาเป็นเพื่อนของน้องหมู",
    stickers: [
      {
        name: "Moonuum หมูนุ่ม",
        sheet: "ver11 Pic/characters/moonuum/sticker/clean-moonuum.png",
        detailSheet: "ver11 Pic/characters/moonuum/sticker/moonuum1.png",
        link: "http://line.me/S/sticker/1046544",
        descEN:
          'I\'m an Angel Pig. Please call me "MooNuum", a soft pig. I have wings like an angel and stars on my ears. Maybe I can fly?',
        descTH:
          "น้องหมูนุ่ม เป็นหมูสายพันธุ์นางฟ้าที่ดูตัวขาวอมชมพูๆ นุ่มๆ มีปีกเล็กๆ ที่หูมีรูปดวงดาว ตาและหางเป็นหัวใจ บ่งบอกถึงการมอบความรักให้กับทุกคนที่มาเป็นเพื่อนของน้องหมู",
        icons: [
          "ver11 Pic/characters/moonuum/icons/moonuum-icon1.png",
          "ver11 Pic/characters/moonuum/icons/moonuum-icon2.png",
          "ver11 Pic/characters/moonuum/icons/moonuum-icon3.png",
          "ver11 Pic/characters/moonuum/icons/moonuum-icon4.png",
        ],
      },
    ],
    themes: [
      {
        name: "MooNuum Pink Sweets Theme",
        nameTH: "ธีมหมูนุ่ม ขนมหวาน",
        sheet: "ver11 Pic/themes/main-covers/icon-sweet.png",
        detailSheet: "ver11 Pic/themes/main-covers/sweet1.png",
        link: "https://line.me/S/shop/theme/detail?id=d690dff3-a90e-4a0d-892d-2f3dec8f1e0a",
        descEN:
          "I'm an Angel Pig. Please call me \"MooNuum\", a soft pig. I have wings like an angel and stars on my ears. Let's eat candy and sweets with me.",
        descTH:
          "ฉันคือหมูนางฟ้า เรียกฉันว่าหมูนุ่มก็ได้นะ เป็นหมูแบบนุ่มๆ กลมๆ ฉันมีปีกนางฟ้าและหูเป็นดวงดาวแหละ มากินขนมกันเถอะ",
        // เพิ่มชุดรูปตัวอย่าง 4 รูปจากไฟล์อัปเดตที่ลูกค้าส่งมา (UpdatePictureStickerTheme.zip,
        // 2026-09-22) — เดิมธีมนี้ไม่มี icons เลยตกไปใช้การ์ดแบบ sticker (มี cover-icon
        // เดี่ยว ไม่มีแถวรูปตัวอย่าง) ตอนนี้มีชุดรูปครบ 4 แล้วเลยขึ้นการ์ดแบบ Theme
        // เต็มรูปแบบ (แถวรูป + พื้นหลังไล่สีตามโทนตัวละคร) เหมือนธีมอื่นๆ
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/moonuum/icons/sweet-icon1.png",
          "ver11 Pic/themes/moonuum/icons/sweet-icon2.png",
          "ver11 Pic/themes/moonuum/icons/sweet-icon3.png",
          "ver11 Pic/themes/moonuum/icons/sweet-icon4.png",
        ],
        // bannerIcons: วงพรีวิว .topic-banner (Theme Set) เฉพาะ — ไฟล์ใหม่จาก
        // UpdatePictureStickerTheme.zip (2026-09-22) ตัวละครนี้เป็นตัวสุดท้าย
        // ที่ยังไม่มี bannerIcons (มีแค่ rabbit/carrot/nangel/candy/cloud/pompom)
        bannerIcons: [
          "ver11 Pic/Design Character Page/theme moonuum icon1.png",
          "ver11 Pic/Design Character Page/theme moonuum icon2.png",
          "ver11 Pic/Design Character Page/theme moonuum icon3.png",
          "ver11 Pic/Design Character Page/theme moonuum icon4.png",
        ],
      },
    ],
  },

  moodaeng: {
    name: "MooDaeng",
    nameTH: "หมูเด้ง",
    tone: "tone-2",
    // สีพื้นหลัง #theme-container (Theme Set) — คืนค่าสีฟ้าอ่อนดั้งเดิม
    // #b7e3f0 (ค่าเฉลี่ยจริงจากรูป ดู comment เดิมที่ theme "MooDaeng Fly to
    // sky" ด้านล่าง) เดิมถูกเปลี่ยนเป็นชมพูแบรนด์เพราะรูปประดับ wing ตอนนั้น
    // เป็นไฟล์สีชมพูทึบตายตัว ตอนนี้เปลี่ยนไปใช้ wing แบบขาวโปร่งแสงแล้ว
    // ข้อจำกัดเดิมเลยไม่มีผลอีกต่อไป — ฟ้าอ่อนแบบนี้อยู่ในกลุ่มที่กฎสีอนุญาต
    // (ห้ามน้ำเงินเข้ม/แท้ๆ อนุญาตแค่ฟ้าอ่อน/ฟ้าท้องฟ้า) 2026-09-22
    themeBgColor: "#b7e3f0",
    cover: "ver11 Pic/characters/covers/main-moodaeng.png",
    descEN:
      "I'm an Angel Pig. Please call me \"MooDaeng\", pig pops. I have wings like an angel and stars on my ears. My head is like a ball. I think I can fly, let's play with me.",
    descTH:
      "น้องหมูสายพันธุ์นางฟ้า เรียกผมว่าหมูเด้งนะครับ ผมมีปีกแบบนางฟ้าและหูเป็นดาว หัวเหมือนลูกบอลเด้งๆ ผมคิดว่าผมบินได้นะ มาเล่นกันเถอะ",
    stickers: [
      {
        name: "Moodaeng หมูเด้ง",
        sheet: "ver11 Pic/characters/covers/main-moodaeng.png",
        detailSheet: "ver11 Pic/characters/moodaeng/sticker/moodaeng1.png",
        link: "http://line.me/S/sticker/1122359",
        descEN:
          "I'm an Angel Pig. Please call me \"MooDaeng\", pig pops. I have wings like an angel and stars on my ears. My head is like a ball. I think I can fly, let's play with me.",
        descTH:
          "น้องหมูสายพันธุ์นางฟ้า เรียกผมว่าหมูเด้งนะครับ ผมมีปีกแบบนางฟ้าและหูเป็นดาว หัวเหมือนลูกบอลเด้งๆ ผมคิดว่าผมบินได้นะ มาเล่นกันเถอะ",
        icons: [
          "ver11 Pic/characters/moodaeng/icons/moodaeng-icon1.png",
          "ver11 Pic/characters/moodaeng/icons/moodaeng-icon2.png",
          "ver11 Pic/characters/moodaeng/icons/moodaeng-icon3.png",
          "ver11 Pic/characters/moodaeng/icons/moodaeng-icon4.png",
        ],
      },
    ],
    themes: [
      {
        name: "MooDaeng Fly to sky",
        nameTH: "หมูเด้ง บินไปสู่ท้องฟ้า",
        sheet: "ver11 Pic/themes/main-covers/icon-fly.png",
        detailSheet: "ver11 Pic/themes/main-covers/fly1.png",
        link: "https://line.me/S/shop/theme/detail?id=4a103636-dad2-42e3-a7ee-062754b37ebd",
        descEN:
          "I'm an Angel Pig. Please call me \"MooDaeng\", pig pops. I have wings like an angel and stars on my ears. My head is like a ball. I think I can fly, let's play with me.",
        descTH:
          "ธีมน้องหมูสายพันธุ์นางฟ้า เรียกผมว่าหมูเด้งนะครับ ผมมีปีกแบบนางฟ้าและหูเป็นดาว หัวเหมือนลูกบอลเด้งๆ ผมคิดว่าผมบินได้นะ มาเล่นกันเถอะ",
        // เดิมสีฟ้าอ่อน #b7e3f0 (ค่าเฉลี่ยจริงจากรูป) — เปลี่ยนเป็นสีชมพูแบรนด์
        // 2026-08-09 ให้เข้ากับรูปประดับ theme-bg-fly.png (ไฟล์สีชมพูคงที่
        // ปรับตามธีมไม่ได้ — ดูเหตุผลเต็มที่ Candy/[[project_angelto_brand_state]])
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/moodaeng/icons/theme-icon1.png",
          "ver11 Pic/themes/moodaeng/icons/theme-icon2.png",
          "ver11 Pic/themes/moodaeng/icons/theme-icon3.png",
          "ver11 Pic/themes/moodaeng/icons/theme-icon4.png",
        ],
        // bannerIcons: วงพรีวิว .topic-banner (Theme Set) เฉพาะ — ไฟล์ใหม่จาก
        // UpdatePictureStickerTheme.zip (2026-09-22) ตอนนี้ทุกตัวละครที่มี
        // Theme ครบ bannerIcons แล้วทั้งหมด (moonuum/moodaeng เป็น 2 ตัวสุดท้าย)
        bannerIcons: [
          "ver11 Pic/Design Character Page/theme moodaeng icon1.png",
          "ver11 Pic/Design Character Page/theme moodaeng icon2.png",
          "ver11 Pic/Design Character Page/theme moodaeng icon3.png",
          "ver11 Pic/Design Character Page/theme moodaeng icon4.png",
        ],
      },
    ],
  },

  rabbit: {
    name: "Rabbito & Rabbity",
    nameTH: "แรบบิทโต้&แรบบิทตี้",
    tone: "tone-3",
    // สีพื้นหลัง #theme-container — ใช้สีเฉลี่ยจริงของธีมแรก/หลัก "Soft
    // Theme" (#f2d9e0 ชมพูอ่อน ดู comment เดิมของธีมนั้นด้านล่าง) เป็นตัวแทน
    // ตัวละครนี้ (มี 2 ธีม อีกอันคือ Sweet Dessert #ecb3a5 ส้มอมชมพู แต่
    // container มีสีเดียว/หน้า เลยเลือกธีมหลักที่มี bannerIcons ด้วย) 2026-09-22
    themeBgColor: "#f2d9e0",
    cover: "ver11 Pic/characters/covers/main-rabbit.png",
    descEN:
      "Rabbit so cute. Angel Rabbit. Rabbito & Rabbity, rabbits are one of the cutest creatures. They're an angel-breed rabbit.",
    descTH:
      "กระต่ายคือสิ่งมีชีวิตที่น่ารักสุดๆ Rabbito & Rabbity กระต่ายสายพันธุ์นางฟ้า",
    stickers: [
      {
        name: "Rabbito & Rabbity [TH]",
        sheet: "ver11 Pic/characters/covers/main-rabbit.png",
        detailSheet: "ver11 Pic/characters/rabbit/sticker/rabbit1.png",
        link: "http://line.me/S/sticker/1408572",
        descEN: "Rabbit so cute. Angel Rabbit.",
        descTH:
          "กระต่ายคือสิ่งมีชีวิตที่น่ารักสุดๆ Rabbito & Rabbity กระต่ายสายพันธุ์นางฟ้า",
        icons: [
          "ver11 Pic/characters/rabbit/icons/rabbit-icon1.png",
          "ver11 Pic/characters/rabbit/icons/rabbit-icon2.png",
          "ver11 Pic/characters/rabbit/icons/rabbit-icon3.png",
          "ver11 Pic/characters/rabbit/icons/rabbit-icon4.png",
        ],
      },
      {
        name: "Rabbito & Rabbity [EN]",
        sheet: "ver11 Pic/characters/covers/main-rabbit.png",
        detailSheet: "ver11 Pic/characters/rabbit/sticker/rabbit1.png",
        link: "http://line.me/S/sticker/1407680",
        descEN: "Rabbit so cute. Angel Rabbit.",
        descTH:
          "กระต่ายคือสิ่งมีชีวิตที่น่ารักสุดๆ Rabbito & Rabbity กระต่ายสายพันธุ์นางฟ้า",
        icons: [
          "ver11 Pic/characters/rabbit/icons/rabbit-icon1.png",
          "ver11 Pic/characters/rabbit/icons/rabbit-icon2.png",
          "ver11 Pic/characters/rabbit/icons/rabbit-icon3.png",
          "ver11 Pic/characters/rabbit/icons/rabbit-icon4.png",
        ],
      },
    ],
    themes: [
      {
        name: "Rabbito & Rabbity, Soft Theme",
        nameTH: "กระต่ายซอฟท์ธีม",
        sheet: "ver11 Pic/themes/main-covers/icon-rabbitsoft.png",
        detailSheet: "ver11 Pic/themes/rabbit/rabbit1.png",
        link: "https://line.me/S/shop/theme/detail?id=2515775a-f433-42e0-8890-e46f6eb971c7",
        descEN:
          "Rabbito & Rabbity. Rabbit so cute, kawaii. It's a soft tone and soft colour theme. Boy name Rabbito, girl name Rabbity from rabbit + o, rabbit + y.",
        // TH นี้แปลจาก EN เอง (เว็บเก่าโชว์แค่ EN สำหรับธีมนี้) รอคอนเฟิร์ม
        descTH:
          "Rabbito & Rabbity กระต่ายแสนน่ารักคาวาอี้ ธีมโทนสีนุ่มนวลอ่อนหวาน ผู้ชายชื่อ Rabbito ผู้หญิงชื่อ Rabbity มาจาก rabbit+o และ rabbit+y",
        // เดิมชมพูอ่อน #f2d9e0 (ปรับจากสีจริง #f5f0be เหลืองอมเขียวที่ผิดกฎ) —
        // เปลี่ยนเป็นสีชมพูแบรนด์ 2026-08-09 ให้เข้ากับรูปประดับ theme-bg-fly.png
        // (ไฟล์สีชมพูคงที่ ปรับตามธีมไม่ได้ — ดูเหตุผลเต็มที่ Candy)
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/rabbit/icons/soft-icon1.png",
          "ver11 Pic/themes/rabbit/icons/soft-icon2.png",
          "ver11 Pic/themes/rabbit/icons/soft-icon3.png",
          "ver11 Pic/themes/rabbit/icons/soft-icon4.png",
        ],
        // bannerIcons: วงพรีวิว .topic-banner (Theme Set) เฉพาะ — ไฟล์ใหม่จาก
        // ver11 Pic/Design Character Page/ 2026-08-19
        bannerIcons: [
          "ver11 Pic/Design Character Page/theme rabbit icon1.png",
          "ver11 Pic/Design Character Page/theme rabbit icon2.png",
          "ver11 Pic/Design Character Page/theme rabbit icon3.png",
          "ver11 Pic/Design Character Page/theme rabbit icon4.png",
        ],
      },
      {
        name: "Rabbito & Rabbity - Sweet Dessert",
        nameTH: "ขนมหวานอร่อย",
        sheet: "ver11 Pic/themes/main-covers/icon-dessert.png",
        detailSheet: "ver11 Pic/themes/rabbit/rabbit2.png",
        link: "https://line.me/S/shop/theme/detail?id=d5430474-673a-4fab-aeaa-c9c65b4144aa",
        descEN:
          "Rabbito & Rabbity. Rabbit so cute, kawaii. It's a red theme and sweet dessert theme. Let's enjoy eating.",
        // TH นี้แปลจาก EN เอง (เว็บเก่าโชว์แค่ EN สำหรับธีมนี้) รอคอนเฟิร์ม
        descTH:
          "Rabbito & Rabbity กระต่ายแสนน่ารักคาวาอี้ ธีมโทนสีแดงกับขนมหวานสุดอร่อย มาอิ่มอร่อยไปด้วยกันนะ",
        // ธีมแดงอันสองของ Rabbito & Rabbity ควรอ่อนและนุ่มกว่าเดิม เพื่อให้
        // เป็น sweet dessert tone ที่ผสานเข้ากับ web palette โดยไม่แข็งเกิน
        themeColor: "#f2a7a0",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/rabbit/icons/dessert-icon1.png",
          "ver11 Pic/themes/rabbit/icons/dessert-icon2.png",
          "ver11 Pic/themes/rabbit/icons/dessert-icon3.png",
          "ver11 Pic/themes/rabbit/icons/dessert-icon4.png",
        ],
      },
    ],
  },

  carrot: {
    name: "Carrot Girl",
    nameTH: "เด็กแครอท",
    tone: "tone-4",
    // สีพื้นหลัง #theme-container — คืนค่าสีเฉลี่ยจริงดั้งเดิม #edccad
    // (ส้มพีชอ่อน ดู comment เดิมของธีมด้านล่าง) 2026-09-22
    themeBgColor: "#edccad",
    cover: "ver11 Pic/characters/covers/main-carrot.png",
    descEN:
      'A little girl who loves carrot and rabbit. I am called "Carrot Girl". Let\'s enjoy time with me and have a good time.',
    // ✅ อัปเดต: ดึง bio ไทยจริงจาก angelto.com (carrot.html) แล้ว — ก่อนหน้านี้เข้าใจผิดว่าเว็บเก่าไม่มี
    descTH:
      'เด็กน้อยที่ชอบแครอทและกระต่าย ฉันชื่อว่า "เด็กแครอท" มาเล่นกับฉันกัน และมีช่วงเวลาที่ดีกันเถอะ',
    stickers: [
      {
        name: "Carrot Girl เด็กแครอท",
        sheet: "ver11 Pic/characters/carrot/sticker/clean-carrot.png",
        detailSheet: "ver11 Pic/characters/carrot/sticker/carrot1-all.png",
        link: "http://line.me/S/sticker/1078503",
        descEN:
          'A little girl who loves carrot and rabbit. I am called "Carrot Girl". Let\'s enjoy time with me and have a good time.',
        descTH:
          'เด็กน้อยที่ชอบแครอทและกระต่าย ฉันชื่อว่า "เด็กแครอท" มาเล่นกับฉันกัน และมีช่วงเวลาที่ดีกันเถอะ',
        icons: [
          "ver11 Pic/characters/carrot/icons/carrot-icon1.png",
          "ver11 Pic/characters/carrot/icons/carrot-icon2.png",
          "ver11 Pic/characters/carrot/icons/carrot-icon3.png",
          "ver11 Pic/characters/carrot/icons/carrot-icon4.png",
        ],
      },
    ],
    themes: [
      {
        name: "Cute Carrot Girl Theme",
        nameTH: "ธีมเด็กแครอท",
        // ⚠️ ไฟล์ "6carrot icon.png" จากต้นทางจริงๆ เป็นรูป mockup 2 แผง ไม่ใช่
        // icon สี่เหลี่ยมแบบธีมอื่น (ไฟล์ตั้งชื่อผิดตั้งแต่ต้นทาง) เลยใช้รูป
        // ตัวละคร Carrot Girl แทนไปก่อน
        sheet: "ver11 Pic/characters/covers/main-carrot.png",
        detailSheet: "ver11 Pic/themes/main-covers/carrot1theme.png",
        link: "https://line.me/S/shop/theme/detail?id=29120618-5885-4a74-99c1-139755915c53",
        descEN:
          'A little girl who loves carrot and rabbit. I am called "Carrot Girl". Let\'s enjoy time with me and have a good time.',
        descTH:
          'เด็กน้อยที่ชอบแครอทและกระต่าย ฉันชื่อว่า "เด็กแครอท" มาเล่นกับฉันกัน และมีช่วงเวลาที่ดีกันเถอะ',
        // เดิมสีส้มพีชอ่อน #edccad (ค่าเฉลี่ยจริงจากรูป) — เปลี่ยนเป็นสีชมพู
        // แบรนด์ 2026-08-09 ให้เข้ากับรูปประดับ theme-bg-fly.png (ไฟล์สีชมพู
        // คงที่ ปรับตามธีมไม่ได้ — ดูเหตุผลเต็มที่ Candy)
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/carrot/icons/theme-icon1.png",
          "ver11 Pic/themes/carrot/icons/theme-icon2.png",
          "ver11 Pic/themes/carrot/icons/theme-icon3.png",
          "ver11 Pic/themes/carrot/icons/theme-icon4.png",
        ],
        // bannerIcons: วงพรีวิว .topic-banner (Theme Set) เฉพาะ — ไฟล์ใหม่จาก
        // ver11 Pic/Design Character Page/ 2026-08-19
        bannerIcons: [
          "ver11 Pic/Design Character Page/theme carrot icon1.png",
          "ver11 Pic/Design Character Page/theme carrot icon2.png",
          "ver11 Pic/Design Character Page/theme carrot icon3.png",
          "ver11 Pic/Design Character Page/theme carrot icon4.png",
        ],
      },
    ],
  },

  // ✅ อัปเดต: ยืนยันชื่อจริงจาก menu list ที่ลูกค้าส่งมาแล้ว
  // Sticker 1 ชื่อจริงคือ "Nature's Angel" เฉยๆ — เว็บจริง (nangel.html) เขียนผิด
  // เป็น "Candy Kawaii Girl 1" ซึ่งเป็นบั๊ก copy-paste จากเว็บเก่า ไม่ใช่ชื่อจริง
  // ✅ แก้บั๊ก copy-paste: descEN/descTH เดิมดันเป็น bio ของ Candy Girl ทั้งคู่
  // (ไปลอกช่องคำอธิบายผิดจากเว็บเก่า) ดึง bio จริงของ Nature's Angel จาก
  // angelto.com/nangel.html มาแทนแล้ว
  nangel: {
    name: "Nature's Angel",
    nameTH: "นางฟ้าแห่งธรรมชาติ",
    tone: "tone-5",
    // สีพื้นหลัง #theme-container — ตัวละครนี้มี 8 ธีมสีต่างกันมาก (ฟ้า/ม่วง/
    // ดำอมม่วง/ชมพู ฯลฯ) เลือกสีเฉลี่ยจริงของธีมหลัก "Angel Green Slow Life"
    // (#b8d4e0 ฟ้าอมม่วง — ปรับจากเขียวจริงที่ผิดกฎสีแล้ว ดู comment เดิมของ
    // ธีมนั้น) เป็นตัวแทน เพราะเป็นธีมเดียวที่มี bannerIcons/ถือเป็น flagship
    // ของตัวละครนี้อยู่แล้ว 2026-09-22
    themeBgColor: "#b8d4e0",
    cover: "ver11 Pic/characters/covers/main-nangel.png",
    descEN:
      'Pink is "Angel\'s Flower", cute girl. Green is "Angel\'s Leaf", funny girl. Purple is "Angel\'s Fruit", clever girl. Yellow is "Angel\'s Light", sweet girl.',
    descTH:
      "นางฟ้าดอกไม้สีชมพูนิสัยน่ารัก นางฟ้าใบไม้สีเขียวนิสัยรื่นเริง นางฟ้าผลไม้สีม่วงเป็นคนฉลาด นางฟ้าแห่งแสงสีเหลืองเป็นสาวหวาน",
    stickers: [
      {
        name: "Nature's Angel",
        nameTH: "นางฟ้าแห่งธรรมชาติ",
        sheet: "ver11 Pic/characters/nangel/cover/nangel-single.png",
        detailSheet: "ver11 Pic/characters/nangel/sticker/angelN1.png",
        link: "https://store.line.me/stickershop/product/1139363/en",
        // เว็บเก่าตรง Sticker 1 มีบั๊ก copy-paste เอา desc ของ Candy มาแปะ
        // (ดูคอมเมนต์บนสุดของ nangel) เลยใช้ bio จริงระดับตัวละครแทน
        descEN:
          'Pink is "Angel\'s Flower", cute girl. Green is "Angel\'s Leaf", funny girl. Purple is "Angel\'s Fruit", clever girl. Yellow is "Angel\'s Light", sweet girl.',
        descTH:
          "นางฟ้าดอกไม้สีชมพูนิสัยน่ารัก นางฟ้าใบไม้สีเขียวนิสัยรื่นเริง นางฟ้าผลไม้สีม่วงเป็นคนฉลาด นางฟ้าแห่งแสงสีเหลืองเป็นสาวหวาน",
        icons: [
          "ver11 Pic/characters/nangel/icons/main-icon1.png",
          "ver11 Pic/characters/nangel/icons/main-icon2.png",
          "ver11 Pic/characters/nangel/icons/main-icon3.png",
          "ver11 Pic/characters/nangel/icons/main-icon4.png",
        ],
      },
      {
        name: "Nature's Angel Travel 2 [TH]",
        nameTH: "นางฟ้าไปเที่ยว",
        sheet: "ver11 Pic/characters/nangel/cover/travel2-single.png",
        detailSheet: "ver11 Pic/characters/nangel/sticker/travel1.png",
        link: "http://line.me/S/sticker/1202967",
        descEN:
          "The travel set. All angels would like to travel to the mountains, the sea and Japan they have more activities. Have a good journey! Enjoy your trip with us.",
        descTH:
          "ไปเที่ยวกันเถอะ เมื่อเหล่านางฟ้าอยากไปเที่ยวภูเขา ทะเล และญี่ปุ่น พวกเราได้ทำกิจกรรมหลายๆ อย่าง หวังว่าคุณจะไปเที่ยวอย่างสนุกกับพวกเรานะ",
        icons: [
          "ver11 Pic/characters/nangel/icons/travel-icon1.png",
          "ver11 Pic/characters/nangel/icons/travel-icon2.png",
          "ver11 Pic/characters/nangel/icons/travel-icon3.png",
          "ver11 Pic/characters/nangel/icons/travel-icon4.png",
        ],
      },
      {
        name: "Nature's Angel Travel 2 [EN]",
        nameTH: "นางฟ้าไปเที่ยว",
        sheet: "ver11 Pic/characters/nangel/cover/travel2-single.png",
        detailSheet: "ver11 Pic/characters/nangel/sticker/travel2.png",
        link: "http://line.me/S/sticker/1199212",
        descEN:
          "The travel set. All angels would like to travel to the mountains, the sea and Japan they have more activities. Have a good journey! Enjoy your trip with us.",
        descTH:
          "ไปเที่ยวกันเถอะ เมื่อเหล่านางฟ้าอยากไปเที่ยวภูเขา ทะเล และญี่ปุ่น พวกเราได้ทำกิจกรรมหลายๆ อย่าง หวังว่าคุณจะไปเที่ยวอย่างสนุกกับพวกเรานะ",
        icons: [
          "ver11 Pic/characters/nangel/icons/travel-icon1.png",
          "ver11 Pic/characters/nangel/icons/travel-icon2.png",
          "ver11 Pic/characters/nangel/icons/travel-icon3.png",
          "ver11 Pic/characters/nangel/icons/travel-icon4.png",
        ],
      },
    ],
    themes: [
      {
        name: "Angel Pink cute Love",
        nameTH: "นางฟ้าสีชมพูแห่งความรัก",
        sheet: "ver11 Pic/themes/main-covers/icon-pinklove.png",
        detailSheet: "ver11 Pic/themes/main-covers/pinklove1.png",
        link: "https://line.me/S/shop/theme/detail?id=72463d8d-5c34-41eb-ba25-aab71336c7db",
        descEN: "Angel Pink theme cute love, hearts and pink colour.",
        descTH: "ธีมนางฟ้าสีชมพู แบบน่ารักๆ เต็มไปด้วยความรัก โทนสีชมพู",
      },
      {
        name: "Angel Green Slow Life",
        nameTH: "นางฟ้าสีเขียว Slow Life",
        sheet: "ver11 Pic/themes/main-covers/icon-slowlife.png",
        detailSheet: "ver11 Pic/themes/main-covers/slow1.png",
        link: "https://line.me/S/shop/theme/detail?id=90a2ccd0-cddb-40cf-ae7f-2d23998a0fa9",
        descEN: "Angel Green Theme, Slow Life smooth, easy and comfortable.",
        descTH:
          "นางฟ้าแห่งธรรมชาติ ธีมนางฟ้าสีเขียว โทนชิวๆ สบายๆ สไตล์ Slow Life แบบน่ารักๆ",
        // เดิมฟ้าอมม่วง #b8d4e0 (ปรับจากสีจริง #a7dfbb เขียวที่ผิดกฎ) —
        // เปลี่ยนเป็นสีชมพูแบรนด์ 2026-08-09 ให้เข้ากับรูปประดับ
        // theme-bg-fly.png (ไฟล์สีชมพูคงที่ ปรับตามธีมไม่ได้ — ดูเหตุผลเต็มที่ Candy)
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/nangel/icons/slowlife-icon1.png",
          "ver11 Pic/themes/nangel/icons/slowlife-icon2.png",
          "ver11 Pic/themes/nangel/icons/slowlife-icon3.png",
          "ver11 Pic/themes/nangel/icons/slowlife-icon4.png",
        ],
        // bannerIcons: วงพรีวิว .topic-banner (Theme Set) เฉพาะ — ไฟล์ใหม่จาก
        // ver11 Pic/Design Character Page/ 2026-08-19 (ชุดเดียว ไม่ผูกกับธีม
        // ใดธีมหนึ่งโดยเฉพาะ ใส่ไว้ที่ธีมแรกที่มี icons ครบ เพราะ render
        // logic แค่หา field นี้จาก item ไหนก็ได้ในอาเรย์)
        bannerIcons: [
          "ver11 Pic/Design Character Page/theme nAngel icon1.png",
          "ver11 Pic/Design Character Page/theme nAngel icon2.png",
          "ver11 Pic/Design Character Page/theme nAngel icon3.png",
          "ver11 Pic/Design Character Page/theme nAngel icon4.png",
        ],
      },
      {
        name: "Angel Yellow Winter",
        nameTH: "นางฟ้าสีเหลือง",
        sheet: "ver11 Pic/themes/main-covers/icon-yellowwinter.png",
        detailSheet: "ver11 Pic/themes/main-covers/winter1.png",
        link: "https://line.me/S/shop/theme/detail?id=c990f1b4-fba5-4f10-a595-22ac817e9ab6",
        descEN: "Angel Yellow Theme, Cold Winter blue tone with falling snow.",
        descTH:
          "นางฟ้าแห่งธรรมชาติ ธีมนางฟ้าสีเหลือง โทนหน้าหนาว มีหิมะตก อากาศเย็นๆ",
        // ชื่อธีมมี "Yellow" แต่รูปตัวอย่างจริงเป็นฟ้า/หิมะ ไม่มีเหลือง เดิมใช้
        // ค่าเฉลี่ยสีจริงจากรูป #acdbe8 (ฟ้าอ่อน) — เปลี่ยนเป็นสีชมพูแบรนด์
        // 2026-08-09 ให้เข้ากับรูปประดับ theme-bg-fly.png (ไฟล์สีชมพูคงที่
        // ปรับตามธีมไม่ได้ — ดูเหตุผลเต็มที่ Candy)
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/nangel/icons/winter-icon1.png",
          "ver11 Pic/themes/nangel/icons/winter-icon2.png",
          "ver11 Pic/themes/nangel/icons/winter-icon3.png",
          "ver11 Pic/themes/nangel/icons/winter-icon4.png",
        ],
      },
      {
        name: "Angel Purple Pure",
        nameTH: "นางฟ้าสีม่วงบริสุทธิ์",
        sheet: "ver11 Pic/themes/main-covers/icon-purplepure.png",
        detailSheet: "ver11 Pic/themes/main-covers/pure1.png",
        link: "https://line.me/S/shop/theme/detail?id=ae9bccd1-4406-4b60-b41b-226ca39e8feb",
        descEN:
          "Angel Purple Pure theme for those who love purple and love angels.",
        descTH: "ธีมนางฟ้าสีม่วงบริสุทธิ์ รักสีม่วง รักนางฟ้า ใช้ธีมนี้สิ",
        // เดิมสีม่วงอ่อน #dcc4ec (ค่าเฉลี่ยจริงจากรูป) — เปลี่ยนเป็นสีชมพู
        // แบรนด์ 2026-08-09 ให้เข้ากับรูปประดับ theme-bg-fly.png (ไฟล์สีชมพู
        // คงที่ ปรับตามธีมไม่ได้ — ดูเหตุผลเต็มที่ Candy)
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/nangel/icons/purple-icon1.png",
          "ver11 Pic/themes/nangel/icons/purple-icon2.png",
          "ver11 Pic/themes/nangel/icons/purple-icon3.png",
          "ver11 Pic/themes/nangel/icons/purple-icon4.png",
        ],
      },
      {
        name: "Devil Black Night",
        nameTH: "นางฟ้าเดวิลยามค่ำคืน",
        sheet: "ver11 Pic/themes/main-covers/icon-blacknight.png",
        detailSheet: "ver11 Pic/themes/main-covers/black-night1.png",
        link: "https://line.me/S/shop/theme/detail?id=448f2bad-f01b-4ea8-bbba-c96cee916d07",
        descEN:
          "Devil Theme, black midnight black tone with a little starlight.",
        descTH: "ธีมนางฟ้าเดวิลโทนสีดำ ธีมกลางคืน ฟ้ามืดมีแสงดาว",
        // เดิมม่วงเข้ม #4a3f5c (ผสมลงจากสีจริงเกือบดำสนิท #20201f ที่เข้มไปสำหรับ
        // โทน gradient พาสเทลของเว็บ) — ธีมนี้เป็นตัวที่เจอบั๊ก contrast 1.0:1
        // ตอนเคยลองทาสีเต็มการ์ดครั้งแรก (เลยแยกสีไปไว้แค่ถาดรูปตอนนั้น) ตอนนี้
        // เปลี่ยนเป็นสีชมพูแบรนด์แทน 2026-08-09 ให้เข้ากับรูปประดับ
        // theme-bg-fly.png ก็เลยไม่มีปัญหาความเข้มแบบเดิมอีกต่อไปด้วย (สีชมพู
        // แบรนด์อ่อนกว่า #4a3f5c มาก contrast กับ --text ผ่าน AA สบายๆ)
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/nangel/icons/night-icon1.png",
          "ver11 Pic/themes/nangel/icons/night-icon2.png",
          "ver11 Pic/themes/nangel/icons/night-icon3.png",
          "ver11 Pic/themes/nangel/icons/night-icon4.png",
        ],
      },
      {
        name: "Angel Pink Flower",
        nameTH: "ดอกไม้ของนางฟ้าสีชมพู",
        sheet: "ver11 Pic/themes/main-covers/icon-pinkflower.png",
        detailSheet: "ver11 Pic/themes/main-covers/flower1.png",
        link: "https://line.me/S/shop/theme/detail?id=37c4d8ae-7bdb-40ef-abd2-8b57fd6e5337",
        descEN:
          "Angel Pink theme with white-pink flowers best wishes, get well soon and thinking-of-you, in pink and blue tones.",
        descTH:
          "ธีมนางฟ้าสีชมพู ดอกไม้สีขาวชมพู เพื่ออวยพรให้หายไวไวและคิดถึงคุณ ธีมโทนสีชมพูและฟ้า",
        // เดิมสีฟ้าอ่อน #b1d6e8 (ค่าเฉลี่ยจริงจากรูป) — เปลี่ยนเป็นสีชมพู
        // แบรนด์ 2026-08-09 ให้เข้ากับรูปประดับ theme-bg-fly.png (ไฟล์สีชมพู
        // คงที่ ปรับตามธีมไม่ได้ — ดูเหตุผลเต็มที่ Candy)
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/nangel/icons/flower-icon1.png",
          "ver11 Pic/themes/nangel/icons/flower-icon2.png",
          "ver11 Pic/themes/nangel/icons/flower-icon3.png",
          "ver11 Pic/themes/nangel/icons/flower-icon4.png",
        ],
      },
      {
        name: "Nature's Angel - Rainbow Pastel",
        nameTH: "นางฟ้าแห่งธรรมชาติ - สายรุ้งพาสเทล",
        sheet: "ver11 Pic/themes/main-covers/icon-rainbow.png",
        detailSheet: "ver11 Pic/themes/main-covers/rainbow1S.png",
        link: "https://store.line.me/themeshop/product/67b413ea-81ee-440c-b2d4-88c98c6a440a/",
        descEN:
          "Angel love sky, nature and rainbow. Soft pastel tone colors. Kawaii Angel with angel's doll.",
        descTH:
          "Nature's Angel นางฟ้าแห่งธรรมชาติ ผู้รักท้องฟ้า ธรรมชาติ และสายรุ้ง มาในโทนพาสเทลหวานๆ กับนางฟ้าและภูติของนางฟ้า",
        // เดิมสีชมพู-ม่วงอ่อน #ead8e5 (ค่าเฉลี่ยจริงจากรูป) — เปลี่ยนเป็นสีชมพู
        // แบรนด์ 2026-08-09 ให้เข้ากับรูปประดับ theme-bg-fly.png (ไฟล์สีชมพู
        // คงที่ ปรับตามธีมไม่ได้ — ดูเหตุผลเต็มที่ Candy)
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/nangel/icons/rainbow-icon1.png",
          "ver11 Pic/themes/nangel/icons/rainbow-icon2.png",
          "ver11 Pic/themes/nangel/icons/rainbow-icon3.png",
          "ver11 Pic/themes/nangel/icons/rainbow-icon4.png",
        ],
      },
      {
        name: "Nature's Angel - Summer Beach",
        nameTH: "หน้าร้อนนางฟ้าไปทะเล",
        sheet: "ver11 Pic/themes/main-covers/icon-summer.png",
        detailSheet: "ver11 Pic/themes/main-covers/summer1.png",
        link: "https://line.me/S/shop/theme/detail?id=7b75c6bb-b776-4f30-bfae-1781b65939dd",
        descEN:
          "The angel goes traveling in summer off to the beach, yeah! Hot time.",
        descTH: "หน้าร้อนแล้วไปเที่ยวทะเลกับนางฟ้าแห่งธรรมชาติกันเถอะ เย้ !!",
        // เดิมชมพูฝุ่น #e3cdd0 (ปรับจากสีจริง #d9d2c1 เบจ/น้ำตาลอ่อนที่เข้าข่าย
        // ผิดกฎ) — เปลี่ยนเป็นสีชมพูแบรนด์ 2026-08-09 ให้เข้ากับรูปประดับ
        // theme-bg-fly.png (ไฟล์สีชมพูคงที่ ปรับตามธีมไม่ได้ — ดูเหตุผลเต็มที่ Candy)
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/nangel/icons/summer-icon1.png",
          "ver11 Pic/themes/nangel/icons/summer-icon2.png",
          "ver11 Pic/themes/nangel/icons/summer-icon3.png",
          "ver11 Pic/themes/nangel/icons/summer-icon4.png",
        ],
      },
    ],
  },

  candy: {
    name: "Kawaii Candy Girl",
    nameTH: "แคนดี้เกิร์ล เด็กลูกกวาด",
    eyebrow: "Sticker",
    tone: "tone-6",
    // สีพื้นหลัง #theme-container — คืนค่าสีเฉลี่ยจริงดั้งเดิม #d7cfe0 (ม่วง
    // อ่อน ดู comment เดิมที่ theme "Candy Kawaii Girl Theme" ด้านล่าง) เดิม
    // เปลี่ยนเป็นชมพูแบรนด์เพราะตอนนั้น wing เป็นไฟล์สีชมพูทึบตายตัว ทำให้
    // ม่วงกับชมพูดูไม่เข้ากัน — ตอนนี้ wing เปลี่ยนเป็นแบบขาวโปร่งแสงแล้ว
    // เหตุผลเดิมไม่มีผลอีกต่อไป 2026-09-22
    themeBgColor: "#d7cfe0",
    cover: "ver11 Pic/characters/covers/main-candyGirl.png",
    descEN:
      "Little cute girl. They have 5 girls that are kawaii like a sweet candy.",
    descTH:
      "กลุ่มเด็กน้อยน่ารัก มีสีสันสดใสราวกับลูกกวาดแสนหวาน มีนิสัยที่ชอบพูดซ้ำ ๆ แบบเด็ก ๆ",
    stickers: [
      {
        name: "Kawaii Candy Girl",
        nameTH: "แคนดี้เกิร์ล เด็กลูกกวาด",
        sheet: "ver11 Pic/characters/candy/candy1/clean-cover.png",
        detailSheet: "ver11 Pic/characters/candy/candy1/detail.png",
        link: "https://store.line.me/stickershop/product/1967171/",
        descEN:
          "Little cute girl. They have 5 girls that are kawaii like a sweet candy.",
        descTH: "กลุ่มเด็กน้อยน่ารัก มีสีสันสดใสราวกับลูกกวาดแสนหวาน",
        icons: [
          "ver11 Pic/characters/candy/candy1/icon1.png",
          "ver11 Pic/characters/candy/candy1/icon2.png",
          "ver11 Pic/characters/candy/candy1/icon3.png",
          "ver11 Pic/characters/candy/candy1/icon4.png",
        ],
      },
      // ⚠️ Candy 2/3 ไม่มีไฟล์รูปเดี่ยวสะอาดๆ ของตัวเอง (ไม่เหมือน pack 1 ที่มี
      // candyGirl1-main.png) เลยใช้รูป sheet ของตัวเองไปเลยแทนที่จะเอารูป pack 1
      // มาใช้ซ้ำ กันการ์ดหน้าตาเหมือนกันทั้งที่เป็นคนละสินค้า
      {
        name: "Kawaii Candy Girl 2 - Error!",
        nameTH: "แคนดี้เกิร์ล 2 พัง พังอีกละ",
        sheet: "ver11 Pic/characters/candy/candy2/cover.png",
        detailSheet: "ver11 Pic/characters/candy/candy2/detail.png",
        link: "http://line.me/S/sticker/4160972",
        descEN:
          "Purple Sweet Potato is a bit stubborn and moody like a kid, grumbling about traffic and broken trains.",
        descTH:
          "มันม่วงนิสัยดื้อๆ เกเร ชอบเอาแต่ใจ บ่นเรื่องการเดินทาง รถไฟฟ้าพัง รถติด",
        icons: [
          "ver11 Pic/characters/candy/candy2/icon1.png",
          "ver11 Pic/characters/candy/candy2/icon2.png",
          "ver11 Pic/characters/candy/candy2/icon3.png",
          "ver11 Pic/characters/candy/candy2/icon4.png",
        ],
      },
      {
        name: "Kawaii Candy Girl 3 - Cheer up",
        nameTH: "แคนดี้เกิร์ล 3 มาเชียร์",
        sheet: "ver11 Pic/characters/candy/candy3/cover.png",
        detailSheet: "ver11 Pic/characters/candy/candy3/detail.png",
        link: "https://store.line.me/stickershop/product/3840916/",
        descEN:
          "The Candy girls are here to cheer you on. Keep going, fighting!",
        descTH: "เด็กๆ จะมาเชียร์ให้คุณสู้ต่อไป สู้ๆ นะ!",
        icons: [
          "ver11 Pic/characters/candy/candy3/icon1.png",
          "ver11 Pic/characters/candy/candy3/icon2.png",
          "ver11 Pic/characters/candy/candy3/icon3.png",
          "ver11 Pic/characters/candy/candy3/icon4.png",
        ],
      },
      // เพิ่ม 2026-08-06: แพ็ค 4/5 ขายจริงบน LINE Store (author 25920) แต่ไม่มี
      // asset ในโปรเจกต์มาก่อน — ลูกค้าส่งรูปมาให้แล้ว (working-main/all,
      // oshi-main/all) จัดเก็บเข้า cover//sticker/ ตามแพทเทิร์นเดิมแล้ว
      // descEN/descTH ของ 2 แพ็คนี้ไม่มีข้อความต้นฉบับจาก angelto.com (ไม่เคย
      // ลงเว็บเก่ามาก่อน) เขียนร่างขึ้นเองจากชื่อ/ธีมของแพ็ค — รอคอนเฟิร์ม
      {
        name: "Candy Kawaii Girl 4 - Working",
        nameTH: "แคนดี้เกิร์ล 4 ประชุมๆ",
        sheet: "ver11 Pic/characters/candy/candy4/cover.png",
        detailSheet: "ver11 Pic/characters/candy/candy4/detail.png",
        link: "https://store.line.me/stickershop/product/18989751",
        descEN:
          "Candy girl is stuck in back-to-back meetings, relatable office life, sent straight from her busy day.",
        descTH: "เด็กลูกกวาดติดประชุมยาวทั้งวัน ชีวิตออฟฟิศที่ใครๆ ก็เข้าใจ",
        icons: [
          "ver11 Pic/characters/candy/candy4/icon1.png",
          "ver11 Pic/characters/candy/candy4/icon2.png",
          "ver11 Pic/characters/candy/candy4/icon3.png",
          "ver11 Pic/characters/candy/candy4/icon4.png",
        ],
      },
      {
        name: "Candy Kawaii Girl 5 - Love Oshi",
        nameTH: "แคนดี้เกิร์ล 5 ไลฟ์มาแล้วนะ",
        sheet: "ver11 Pic/characters/candy/candy5/cover.png",
        detailSheet: "ver11 Pic/characters/candy/candy5/detail.png",
        link: "https://store.line.me/stickershop/product/28152569/",
        descEN:
          "Candy girl is head over heels for her favorite idol, living that fangirl life to the fullest.",
        descTH: "เด็กลูกกวาดสายเมน ตามไลฟ์ ตามซัพพอร์ตโอชิสุดที่รักแบบสุดใจ",
        icons: [
          "ver11 Pic/characters/candy/candy5/icon1.png",
          "ver11 Pic/characters/candy/candy5/icon2.png",
          "ver11 Pic/characters/candy/candy5/icon3.png",
          "ver11 Pic/characters/candy/candy5/icon4.png",
        ],
      },
    ],
    themes: [
      {
        name: "Candy Kawaii Girl Theme - Candy",
        nameTH: "ธีมแคนดี้เกิร์ล เด็กลูกกวาด",
        sheet: "ver11 Pic/themes/main-covers/icon-candy.png",
        detailSheet: "ver11 Pic/themes/candy/candy1.png",
        link: "https://store.line.me/themeshop/product/0c92491b-4325-4f7b-8814-317fcc5948e1",
        descEN:
          "Little cute girl. They have 5 girls that are kawaii like a sweet candy. Candy more and more theme.",
        descTH:
          "กลุ่มเด็กน้อยน่ารัก มีสีสันสดใสราวกับลูกกวาดแสนหวาน มีนิสัยที่ชอบพูดซ้ำๆ แบบเด็กๆ ธีมลูกกวาด",
        // เดิมใช้ค่าเฉลี่ยสีจริงจากรูปตัวอย่าง (#d7cfe0 ม่วงอ่อน) แต่พอลง
        // เต็มพื้นการ์ดคู่กับรูปประดับ theme-bg-fly.png (โทนชมพู/แดงบานเย็น
        // ล้วนๆ) แล้วสีม่วงกับชมพูมันคนละโทน ดูไม่เข้ากัน (ตามที่ลูกค้า/ผู้ใช้
        // สังเกต 2026-08-09) — เปลี่ยนมาใช้ var(--primary-pink) ของแบรนด์แทน
        // เพื่อให้พื้นหลังอยู่โทนสีเดียวกับรูปประดับเสมอ (รูปประดับเป็นไฟล์
        // คงที่ ปรับสีตามธีมไม่ได้ พื้นหลังเลยต้องเป็นฝ่ายตามแทน)
        themeColor: "var(--primary-pink)",
        // ธีมนี้ให้สีลงพื้นการ์ดทั้งใบแทนถาดรูปอย่างเดียว (ต่างจากธีมอื่น) —
        // ดู character-render.js/character.css สำหรับการจัดการ contrast
        containerColor: true,
        icons: [
          "ver11 Pic/themes/candy/icons/theme-icon1.png",
          "ver11 Pic/themes/candy/icons/theme-icon2.png",
          "ver11 Pic/themes/candy/icons/theme-icon3.png",
          "ver11 Pic/themes/candy/icons/theme-icon4.png",
        ],
        // bannerIcons: รูปพรีวิววงกลม 4 วงเฉพาะแถบ .topic-banner (Theme Set)
        // เท่านั้น — คนละชุดกับ icons ด้านบน (ใช้ในถาดรูปตัวอย่างของการ์ด
        // เอง) ไฟล์ใหม่จาก ver11 Pic/Design Character Page/ มีกรอบวงกลม
        // ประดับ (เส้นประม่วง) ปั้นมาให้พร้อมใช้เลย 154x154px ไม่ต้องพึ่ง
        // bg whCircle.png + border-radius ครอบอีกชั้นแบบวงอื่น 2026-08-12
        bannerIcons: [
          "ver11 Pic/Design Character Page/theme candy icon1.png",
          "ver11 Pic/Design Character Page/theme candy icon2.png",
          "ver11 Pic/Design Character Page/theme candy icon3.png",
          "ver11 Pic/Design Character Page/theme candy icon4.png",
        ],
      },
    ],
  },

  fox: {
    name: "Fox Boy",
    nameTH: "เด็กจิ้งจอก",
    tone: "tone-7",
    cover: "ver11 Pic/characters/covers/main-foxboy.png",
    descEN:
      "He is a little boy, a little fat. He looks like a fox. He loves to play games.",
    descTH:
      "เด็กน้อยที่ลงพุงนิดๆ มองดูคล้ายๆหมาป่า เขาบ้าเกมมากๆเลย เด็กติดเกม เล่นได้ทั้งวันนั่นแหละ คุณลองมาเล่นเกมด้วยกันไหม",
    stickers: [
      {
        name: "Fox Boy Gamer [TH]",
        nameTH: "เด็กจิ้งจอกบ้าเกม",
        sheet: "ver11 Pic/characters/fox/sticker/clean-foxgamer.png",
        detailSheet: "ver11 Pic/characters/fox/sticker/fox1.png",
        link: "http://line.me/S/sticker/1351603",
        descEN:
          "He is a little boy, a little fat. He looks like a fox. He is a gamer who loves to play games.",
        descTH:
          "เขาเป็นเด็กน้อยที่ลงพุงนิดๆ มองดูคล้ายๆ หมาป่า เขาบ้าเกมมากๆ เลย เด็กติดเกม เล่นได้ทั้งวันนั่นแหละ คุณลองมาเล่นเกมด้วยกันไหม",
        icons: [
          "ver11 Pic/characters/fox/icons/gamer-icon1.png",
          "ver11 Pic/characters/fox/icons/gamer-icon2.png",
          "ver11 Pic/characters/fox/icons/gamer-icon3.png",
          "ver11 Pic/characters/fox/icons/gamer-icon4.png",
        ],
      },
      {
        name: "Fox Boy Gamer [EN]",
        nameTH: "เด็กจิ้งจอกบ้าเกม",
        sheet: "ver11 Pic/characters/fox/sticker/clean-foxgamer.png",
        detailSheet: "ver11 Pic/characters/fox/sticker/fox1.png",
        link: "http://line.me/S/sticker/1352773",
        descEN:
          "He is a little boy, a little fat. He looks like a fox. He is a gamer who loves to play games.",
        descTH:
          "เขาเป็นเด็กน้อยที่ลงพุงนิดๆ มองดูคล้ายๆ หมาป่า เขาบ้าเกมมากๆ เลย เด็กติดเกม เล่นได้ทั้งวันนั่นแหละ คุณลองมาเล่นเกมด้วยกันไหม",
        icons: [
          "ver11 Pic/characters/fox/icons/gamer-icon1.png",
          "ver11 Pic/characters/fox/icons/gamer-icon2.png",
          "ver11 Pic/characters/fox/icons/gamer-icon3.png",
          "ver11 Pic/characters/fox/icons/gamer-icon4.png",
        ],
      },
      {
        name: "Fox Boy 2 - Cheer Football",
        nameTH: "เด็กจิ้งจอก เชียร์บอล",
        sheet: "ver11 Pic/characters/fox/sticker/clean-fox2.png",
        detailSheet: "ver11 Pic/characters/fox/sticker/fox2.png",
        link: "http://line.me/S/sticker/3942690",
        descEN:
          "He is a little boy, a little fat. He looks like a fox. He loves to play football too let's cheer for football!!",
        descTH:
          "เด็กผู้ชายที่น่ารัก อ้วนลงพุงนิดหน่อย เขามองดูคล้ายๆ จิ้งจอก ชอบเล่นเกมมากๆ และรักการเล่นฟุตบอลด้วยนะ มาเชียร์บอลกัน !!",
        icons: [
          "ver11 Pic/characters/fox/icons/football-icon1.png",
          "ver11 Pic/characters/fox/icons/football-icon2.png",
          "ver11 Pic/characters/fox/icons/football-icon3.png",
          "ver11 Pic/characters/fox/icons/football-icon4.png",
        ],
      },
    ],
    themes: [],
  },

  cloud: {
    name: "Angel Cloud",
    nameTH: "นางฟ้าเมฆ",
    tone: "tone-8",
    // สีพื้นหลัง #theme-container — ใช้สีเฉลี่ยจริงของ "Angel Cloud Sky
    // Theme" (#addfee ฟ้าอ่อน ดู comment เดิมของธีมนั้นด้านล่าง — เป็นธีมที่
    // มี bannerIcons/ถือเป็น flagship ของตัวละครนี้) อีกธีม "Angel Cloud
    // Theme" ไม่เคยมีค่าสีเฉลี่ยจริงถูกบันทึกไว้ 2026-09-22
    themeBgColor: "#addfee",
    cover: "ver11 Pic/characters/covers/main-cloudy.png",
    // descEN/descTH ระดับตัวละคร: เว็บเก่าไม่มี (มีแค่ emoji) ดัดแปลงจาก desc
    // ของ emoji ด้านล่างมาแทน รอคอนเฟิร์ม
    descEN:
      "Angel Cloud is a funny, happy little cloud always cheerful and full of good vibes.",
    descTH: "นางฟ้าเมฆ คุณเมฆผู้ที่สนุกสนาน อารมณ์ดีและมีความสุขเสมอ",
    // ✅ อัปเดต: เว็บ angelto.com/AngelCloud.html เก่าไม่ update — เช็คจาก LINE Store
    // โดยตรง (store.line.me/stickershop/author/25920) แล้วพบว่ามีขายจริงทั้ง Sticker
    // และ Theme ไม่ใช่แค่ Emoji อย่างที่เข้าใจไว้ก่อนหน้า
    // descEN/descTH ของ 2 แพ็คนี้ไม่มีข้อความต้นฉบับ (เว็บเก่ามีแค่ emoji ไม่มี
    // sticker) เขียนร่างขึ้นเองจากหน้าปกที่มี รอคอนเฟิร์ม
    stickers: [
      {
        name: "Angel Cloud",
        nameTH: "นางฟ้าเมฆ",
        sheet: "ver11 Pic/characters/cloud/sticker/cloudy1.png",
        detailSheet: "ver11 Pic/characters/cloud/sticker/cloudy1.png",
        link: "https://store.line.me/stickershop/product/6925111/en",
        descEN:
          "A sweet little cloud angel with a crown and sparkly eyes ready to brighten up your chats.",
        descTH:
          "นางฟ้าเมฆตัวน้อยน่ารัก สวมมงกุฎ ตาแวววาว พร้อมเติมความสดใสให้ทุกแชท",
      },
      {
        name: "Angel Cloud Everyday",
        nameTH: "นางฟ้าเมฆ ทุกๆวัน",
        sheet: "ver11 Pic/characters/cloud/sticker/cloudy2.png",
        detailSheet: "ver11 Pic/characters/cloud/sticker/cloudy2.png",
        link: "https://store.line.me/stickershop/product/8067136/en",
        descEN:
          "Cloud girl's everyday expressions cheerful reactions for chatting day to day.",
        descTH: "สีหน้าคุณเมฆประจำวัน อารมณ์สดใสไว้ใช้ตอบแชททุกวัน",
      },
      // เพิ่ม 2026-08-07: แพ็คที่เคยขาดข้อมูล/ไฟล์ (ดู project_angelto_character_data_audit
      // memory) ลูกค้าส่งไฟล์มาให้แล้ว (StickerLine Pic/cloud/cloudSky set1.png)
      // descEN/descTH ไม่มีข้อความต้นฉบับจาก angelto.com — เขียนร่างขึ้นเองจาก
      // เนื้อหาในชีท (มงกุฎ ดอกไม้ พระอาทิตย์ พระจันทร์ กาแฟ หัวใจ) รอคอนเฟิร์ม
      {
        name: "Angel Cloud - Spring Season",
        nameTH: "นางฟ้าเมฆ ฤดูใบไม้ผลิ",
        sheet: "ver11 Pic/characters/cloud/sticker/cloudy3.png",
        detailSheet: "ver11 Pic/characters/cloud/sticker/cloudy3.png",
        link: "https://store.line.me/stickershop/product/15632189/en",
        descEN:
          "Cloud girl greets the spring season with flowers, sunshine, and a cup of coffee cheerful everyday reactions.",
        descTH:
          "คุณเมฆทักทายฤดูใบไม้ผลิด้วยดอกไม้ แสงแดด และกาแฟหอมๆ พร้อมมู้ดสดใสไว้ใช้ตอบแชททุกวัน",
        icons: [
          "ver11 Pic/characters/cloud/icons/spring-icon1.png",
          "ver11 Pic/characters/cloud/icons/spring-icon2.png",
          "ver11 Pic/characters/cloud/icons/spring-icon3.png",
          "ver11 Pic/characters/cloud/icons/spring-icon4.png",
        ],
      },
    ],
    // descEN/descTH ของ 2 ธีมนี้ไม่มีต้นฉบับ (เว็บเก่าไม่มี) เขียนร่างขึ้นเองจาก
    // รูป mockup ที่มี รอคอนเฟิร์ม
    themes: [
      {
        name: "Angel Cloud Theme",
        sheet: "ver11 Pic/themes/main-covers/icon-cloudtheme.png",
        detailSheet: "ver11 Pic/themes/main-covers/cloud-theme1.png",
        link: "https://store.line.me/themeshop/product/d8fe3b7c-bb9e-49a7-8119-2cbeeec34809/en",
        descEN:
          "A dreamy pink-and-lavender sky theme with the cloud angel floating above the clouds.",
        descTH: "ธีมท้องฟ้าโทนชมพู-ม่วงหวานฝัน กับนางฟ้าเมฆลอยอยู่เหนือก้อนเมฆ",
      },
      {
        name: "Angel Cloud Sky Theme",
        sheet: "ver11 Pic/themes/main-covers/icon-cloudsky.png",
        detailSheet: "ver11 Pic/themes/main-covers/cloudsky1.png",
        link: "https://store.line.me/themeshop/product/3ded0c5b-fbef-4fac-86eb-64672733b152/en",
        descEN:
          "A soft sky-blue theme with fluffy clouds all around bright and airy.",
        descTH: "ธีมโทนฟ้าอ่อนนุ่มนวล ล้อมรอบด้วยก้อนเมฆฟูๆ สดใสโปร่งสบาย",
        // เดิมสีฟ้าอ่อน #addfee (ค่าเฉลี่ยจริงจากรูป) — เปลี่ยนเป็นสีชมพู
        // แบรนด์ 2026-08-09 ให้เข้ากับรูปประดับ theme-bg-fly.png (ไฟล์สีชมพู
        // คงที่ ปรับตามธีมไม่ได้ — ดูเหตุผลเต็มที่ Candy)
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/cloud/icons/sky-icon1.png",
          "ver11 Pic/themes/cloud/icons/sky-icon2.png",
          "ver11 Pic/themes/cloud/icons/sky-icon3.png",
          "ver11 Pic/themes/cloud/icons/sky-icon4.png",
        ],
        // bannerIcons: วงพรีวิว .topic-banner (Theme Set) เฉพาะ — ไฟล์ใหม่จาก
        // ver11 Pic/Design Character Page/ 2026-08-19
        bannerIcons: [
          "ver11 Pic/Design Character Page/theme cloud icon1.png",
          "ver11 Pic/Design Character Page/theme cloud icon2.png",
          "ver11 Pic/Design Character Page/theme cloud icon3.png",
          "ver11 Pic/Design Character Page/theme cloud icon4.png",
        ],
      },
    ],
    emoji: [
      {
        name: "Angel Cloud",
        nameTH: "นางฟ้าเมฆ",
        descEN: "Angel Cloud emotion. Funny and happy time with Cloud.",
        descTH: "อีโมจินางฟ้าเมฆ คุณเมฆผู้ที่สนุกสนาน อารมณ์ดีและมีความสุขเสมอ",
        sheet: "ver11 Pic/emoji/AngelCould-icon.png",
        detailSheet: "ver11 Pic/emoji/AngelCloud.png",
        link: "https://line.me/S/emoji/?id=5c6f7187100cc3130bd1f01b",
      },
    ],
  },

  pompom: {
    name: "Angel PomPom",
    nameTH: "นางฟ้าปอมปอม",
    tone: "tone-9",
    // สีพื้นหลัง #theme-container — คืนค่าสีเฉลี่ยจริงดั้งเดิม #efc3d3 (ชมพู
    // อ่อน ดู comment เดิมที่ theme "Angel PomPom Theme" ด้านล่าง) 2026-09-22
    themeBgColor: "#efc3d3",
    cover: "ver11 Pic/characters/covers/main-angelPom.png",
    // descEN/descTH ระดับตัวละคร: เว็บเก่าไม่มี (มีแค่ emoji) ดัดแปลงจาก desc
    // ของ emoji ด้านล่างมาแทน รอคอนเฟิร์ม
    descEN: "PomPom is an angel round, fluffy and always in a good mood.",
    descTH:
      "นางฟ้าปอมปอม ปอมปอมที่เป็นนางฟ้า กลมๆ น่ารักๆ ดุ๊กดิ๊ก อารมณ์ดีและมีความสุขเสมอ",
    // ✅ อัปเดต: เว็บ angelto.com/AngelPomPom.html เก่าไม่ update — เช็คจาก LINE Store
    // โดยตรงแล้วพบว่ามีขายจริงทั้ง Sticker และ Theme เหมือน Angel Cloud
    // descEN/descTH ของ sticker/theme ด้านล่างไม่มีต้นฉบับ (เว็บเก่ามีแค่ emoji)
    // เขียนร่างขึ้นเองจากรูปที่มี รอคอนเฟิร์ม
    stickers: [
      {
        name: "Angel PomPom",
        nameTH: "นางฟ้าปอมปอม",
        sheet: "ver11 Pic/characters/pompom/sticker/pompom1.png",
        detailSheet: "ver11 Pic/characters/pompom/sticker/pompom-set1.png",
        link: "https://store.line.me/stickershop/product/6990685/en",
        descEN:
          "A round, fluffy angel pompom with a halo and a little tulip sweet and gentle.",
        descTH:
          "นางฟ้าปอมปอมตัวกลมฟูนุ่ม สวมรัศมี ถือดอกทิวลิปน้อยๆ อ่อนโยนน่ารัก",
        icons: [
          "ver11 Pic/characters/pompom/icons/set1-icon1.png",
          "ver11 Pic/characters/pompom/icons/set1-icon2.png",
          "ver11 Pic/characters/pompom/icons/set1-icon3.png",
          "ver11 Pic/characters/pompom/icons/set1-icon4.png",
        ],
      },
      {
        name: "Angel PomPom 2",
        nameTH: "นางฟ้าปอมปอม",
        sheet: "ver11 Pic/characters/pompom/sticker/pompom2.png",
        detailSheet: "ver11 Pic/characters/pompom/sticker/pompom-set2.png",
        link: "https://store.line.me/stickershop/product/8810735/en",
        descEN:
          "PomPom with a bright sunflower cheerful expressions for everyday chats.",
        descTH: "นางฟ้าปอมปอมกับดอกทานตะวันสดใส สีหน้าแสนสดใสไว้ใช้แชทประจำวัน",
        icons: [
          "ver11 Pic/characters/pompom/icons/set2-icon1.png",
          "ver11 Pic/characters/pompom/icons/set2-icon2.png",
          "ver11 Pic/characters/pompom/icons/set2-icon3.png",
          "ver11 Pic/characters/pompom/icons/set2-icon4.png",
        ],
      },
    ],
    themes: [
      {
        name: "Angel PomPom Theme",
        sheet: "ver11 Pic/themes/main-covers/icon-pompomtheme.png",
        detailSheet: "ver11 Pic/themes/main-covers/pompom1.png",
        link: "https://store.line.me/themeshop/product/1c5036e0-00ff-45dc-a755-9c9c8e1702af/en",
        descEN:
          "A sweet pink theme with floating hearts around the angel pompom.",
        descTH: "ธีมโทนสีชมพูหวานๆ มีหัวใจลอยฟุ้งรอบตัวนางฟ้าปอมปอม",
        // เดิมสีชมพูอ่อน #efc3d3 (ค่าเฉลี่ยจริงจากรูป) — เปลี่ยนเป็นสีชมพู
        // แบรนด์ 2026-08-09 ให้เข้ากับรูปประดับ theme-bg-fly.png (ไฟล์สีชมพู
        // คงที่ ปรับตามธีมไม่ได้ — ดูเหตุผลเต็มที่ Candy)
        themeColor: "var(--primary-pink)",
        containerColor: true,
        icons: [
          "ver11 Pic/themes/pompom/icons/theme-icon1.png",
          "ver11 Pic/themes/pompom/icons/theme-icon2.png",
          "ver11 Pic/themes/pompom/icons/theme-icon3.png",
          "ver11 Pic/themes/pompom/icons/theme-icon4.png",
        ],
        // bannerIcons: วงพรีวิว .topic-banner (Theme Set) เฉพาะ — ไฟล์ใหม่จาก
        // ver11 Pic/Design Character Page/ 2026-08-19
        bannerIcons: [
          "ver11 Pic/Design Character Page/theme pom icon1.png",
          "ver11 Pic/Design Character Page/theme pom icon2.png",
          "ver11 Pic/Design Character Page/theme pom icon3.png",
          "ver11 Pic/Design Character Page/theme pom icon4.png",
        ],
      },
    ],
    emoji: [
      {
        name: "Angel PomPom",
        nameTH: "นางฟ้าปอมปอม",
        descEN: "PomPom is Angel. PomPom so cute.",
        descTH:
          "นางฟ้าปอมปอม ปอมปอมที่เป็นนางฟ้า กลมๆ น่ารักๆ ดุ๊กดิ๊ก อารมณ์ดีและมีความสุขเสมอ",
        sheet: "ver11 Pic/emoji/AngelPomPom-icon.png",
        detailSheet: "ver11 Pic/emoji/AngelPomPom.png",
        link: "https://line.me/S/emoji/?id=5c725d50040ab1dfabdbdd48",
      },
    ],
  },
};

// ผูกกับ window เพื่อให้ character-render.js เรียกใช้ผ่าน window.characters ได้
window.characters = characters;

// เข้าถึงจาก character-render.js แบบนี้:
// const params = new URLSearchParams(window.location.search);
// const data = characters[params.get('slug')];
