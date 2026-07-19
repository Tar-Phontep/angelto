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
    cover: "images/characters/_covers/main-moonuum.png",
    descEN: "I'm an Angel Pig. Please call me \"MooNuum\", a soft pig. I have wings like an angel and stars on my ears — maybe I can fly?",
    descTH: "น้องหมูนุ่ม เป็นหมูสายพันธุ์นางฟ้าที่ดูตัวขาวอมชมพูๆ นุ่มๆ มีปีกเล็กๆ ที่หูมีรูปดวงดาว ตาและหางเป็นหัวใจ บ่งบอกถึงการมอบความรักให้กับทุกคนที่มาเป็นเพื่อนของน้องหมู",
    stickers: [
      {
        name: "Moonuum หมูนุ่ม",
        sheet: "images/characters/moonuum/sticker/clean-moonuum.png",
        detailSheet: "images/characters/moonuum/sticker/moonuum1.png",
        link: "http://line.me/S/sticker/1046544",
      },
    ],
    themes: [
      {
        name: "MooNuum Pink Sweets Theme",
        nameTH: "ธีมหมูนุ่ม ขนมหวาน",
        sheet: "images/themes/main-covers/icon-sweet.png",
        detailSheet: "images/themes/main-covers/sweet1.png",
        link: "https://line.me/S/shop/theme/detail?id=d690dff3-a90e-4a0d-892d-2f3dec8f1e0a",
      },
    ],
  },

  moodaeng: {
    name: "MooDaeng",
    nameTH: "หมูเด้ง",
    cover: "images/characters/_covers/main-moodaeng.png",
    descEN: "I'm an Angel Pig. Please call me \"MooDaeng\", pig pops. I have wings like an angel and stars on my ears. My head is like a ball — I think I can fly, let's play with me.",
    descTH: "น้องหมูสายพันธุ์นางฟ้า เรียกผมว่าหมูเด้งนะครับ ผมมีปีกแบบนางฟ้าและหูเป็นดาว หัวเหมือนลูกบอลเด้งๆ ผมคิดว่าผมบินได้นะ มาเล่นกันเถอะ",
    stickers: [
      {
        name: "Moodaeng หมูเด้ง",
        sheet: "images/characters/_covers/main-moodaeng.png",
        detailSheet: "images/characters/moodaeng/sticker/moodaeng1.png",
        link: "http://line.me/S/sticker/1122359",
      },
    ],
    themes: [
      {
        name: "MooDaeng Fly to sky",
        nameTH: "หมูเด้ง บินไปสู่ท้องฟ้า",
        sheet: "images/themes/main-covers/icon-fly.png",
        detailSheet: "images/themes/main-covers/fly1.png",
        link: "https://line.me/S/shop/theme/detail?id=4a103636-dad2-42e3-a7ee-062754b37ebd",
      },
    ],
  },

  rabbit: {
    name: "Rabbito & Rabbity",
    nameTH: "แรบบิทโต้&แรบบิทตี้",
    cover: "images/characters/_covers/main-rabbit.png",
    descEN: "Rabbit so cute. Angel Rabbit. Rabbito & Rabbity — rabbits are one of the cutest creatures. They're an angel-breed rabbit.",
    descTH: "กระต่ายคือสิ่งมีชีวิตที่น่ารักสุดๆ Rabbito & Rabbity กระต่ายสายพันธุ์นางฟ้า",
    stickers: [
      {
        name: "Rabbito & Rabbity [TH]",
        sheet: "images/characters/_covers/main-rabbit.png",
        detailSheet: "images/characters/rabbit/sticker/rabbit1.png",
        link: "http://line.me/S/sticker/1408572",
      },
      {
        name: "Rabbito & Rabbity [EN]",
        sheet: "images/characters/_covers/main-rabbit.png",
        detailSheet: "images/characters/rabbit/sticker/rabbit1.png",
        link: "http://line.me/S/sticker/1407680",
      },
    ],
    themes: [
      {
        name: "Rabbito & Rabbity, Soft Theme",
        nameTH: "กระต่ายซอฟท์ธีม",
        sheet: "images/themes/main-covers/icon-rabbitsoft.png",
        detailSheet: "images/themes/rabbit/rabbit1.png",
        link: "https://line.me/S/shop/theme/detail?id=2515775a-f433-42e0-8890-e46f6eb971c7",
      },
      {
        name: "Rabbito & Rabbity - Sweet Dessert",
        nameTH: "ขนมหวานอร่อย",
        sheet: "images/themes/main-covers/icon-dessert.png",
        detailSheet: "images/themes/rabbit/rabbit2.png",
        link: "https://line.me/S/shop/theme/detail?id=d5430474-673a-4fab-aeaa-c9c65b4144aa",
      },
    ],
  },

  carrot: {
    name: "Carrot Girl",
    nameTH: "เด็กแครอท",
    cover: "images/characters/_covers/main-carrot.png",
    descEN: "A little girl who loves carrot and rabbit. I am called \"Carrot Girl\". Let's enjoy time with me and have a good time.",
    // ⚠️ หน้าเว็บจริงไม่มี bio ภาษาไทยให้ — เว้นว่างไว้ ไม่แต่งเอง รอเจ้าของงานเขียนเพิ่ม
    descTH: "",
    stickers: [
      {
        name: "Carrot Girl เด็กแครอท",
        sheet: "images/characters/carrot/sticker/clean-carrot.png",
        detailSheet: "images/characters/carrot/sticker/carrot1-all.png",
        link: "http://line.me/S/sticker/1078503",
      },
    ],
    themes: [
      {
        name: "Cute Carrot Girl Theme",
        nameTH: "ธีมเด็กแครอท",
        // ⚠️ ไฟล์ "6carrot icon.png" จากต้นทางจริงๆ เป็นรูป mockup 2 แผง ไม่ใช่
        // icon สี่เหลี่ยมแบบธีมอื่น (ไฟล์ตั้งชื่อผิดตั้งแต่ต้นทาง) เลยใช้รูป
        // ตัวละคร Carrot Girl แทนไปก่อน
        sheet: "images/characters/_covers/main-carrot.png",
        detailSheet: "images/themes/main-covers/carrot1theme.png",
        link: "https://line.me/S/shop/theme/detail?id=29120618-5885-4a74-99c1-139755915c53",
      },
    ],
  },

  // ✅ อัปเดต: ยืนยันชื่อจริงจาก menu list ที่ลูกค้าส่งมาแล้ว
  // Sticker 1 ชื่อจริงคือ "Nature's Angel" เฉยๆ — เว็บจริง (nangel.html) เขียนผิด
  // เป็น "Candy Kawaii Girl 1" ซึ่งเป็นบั๊ก copy-paste จากเว็บเก่า ไม่ใช่ชื่อจริง
  nangel: {
    name: "Nature's Angel",
    nameTH: "นางฟ้าแห่งธรรมชาติ",
    cover: "images/characters/_covers/main-nangel.png",
    descEN: "Little cute girls — 5 angels that are kawaii like sweet candy.",
    descTH: "กลุ่มเด็กน้อยน่ารัก มีสีสันสดใสราวกับลูกกวาดแสนหวาน มีนิสัยที่ชอบพูดซ้ำๆ แบบเด็กๆ",
    stickers: [
      {
        name: "Nature's Angel",
        nameTH: "นางฟ้าแห่งธรรมชาติ",
        sheet: "images/characters/nangel/cover/nangel-single.png",
        detailSheet: "images/characters/nangel/sticker/angelN1.png",
        link: "https://store.line.me/stickershop/product/1139363/en",
      },
      {
        name: "Nature's Angel Travel 2 [TH]",
        nameTH: "นางฟ้าไปเที่ยว",
        sheet: "images/characters/nangel/cover/travel2-single.png",
        detailSheet: "images/characters/nangel/sticker/travel1.png",
        link: "http://line.me/S/sticker/1202967",
      },
      {
        name: "Nature's Angel Travel 2 [EN]",
        nameTH: "นางฟ้าไปเที่ยว",
        sheet: "images/characters/nangel/cover/travel2-single.png",
        detailSheet: "images/characters/nangel/sticker/travel2.png",
        link: "http://line.me/S/sticker/1199212",
      },
    ],
    themes: [
      {
        name: "Angel Pink cute Love",
        nameTH: "นางฟ้าสีชมพูแห่งความรัก",
        sheet: "images/themes/main-covers/icon-pinklove.png",
        detailSheet: "images/themes/main-covers/pinklove1.png",
        link: "https://line.me/S/shop/theme/detail?id=72463d8d-5c34-41eb-ba25-aab71336c7db",
      },
      {
        name: "Angel Green Slow Life",
        nameTH: "นางฟ้าสีเขียว Slow Life",
        sheet: "images/themes/main-covers/icon-slowlife.png",
        detailSheet: "images/themes/main-covers/slow1.png",
        link: "https://line.me/S/shop/theme/detail?id=90a2ccd0-cddb-40cf-ae7f-2d23998a0fa9",
      },
      {
        name: "Angel Yellow Winter",
        nameTH: "นางฟ้าสีเหลือง",
        sheet: "images/themes/main-covers/icon-yellowwinter.png",
        detailSheet: "images/themes/main-covers/winter1.png",
        link: "https://line.me/S/shop/theme/detail?id=c990f1b4-fba5-4f10-a595-22ac817e9ab6",
      },
      {
        name: "Angel Purple Pure",
        nameTH: "นางฟ้าสีม่วงบริสุทธิ์",
        sheet: "images/themes/main-covers/icon-purplepure.png",
        detailSheet: "images/themes/main-covers/pure1.png",
        link: "https://line.me/S/shop/theme/detail?id=ae9bccd1-4406-4b60-b41b-226ca39e8feb",
      },
      {
        name: "Devil Black Night",
        nameTH: "นางฟ้าเดวิลยามค่ำคืน",
        sheet: "images/themes/main-covers/icon-blacknight.png",
        detailSheet: "images/themes/main-covers/black-night1.png",
        link: "https://line.me/S/shop/theme/detail?id=448f2bad-f01b-4ea8-bbba-c96cee916d07",
      },
      {
        name: "Angel Pink Flower",
        nameTH: "ดอกไม้ของนางฟ้าสีชมพู",
        sheet: "images/themes/main-covers/icon-pinkflower.png",
        detailSheet: "images/themes/main-covers/flower1.png",
        link: "https://line.me/S/shop/theme/detail?id=37c4d8ae-7bdb-40ef-abd2-8b57fd6e5337",
      },
      {
        name: "Nature's Angel - Rainbow Pastel",
        nameTH: "นางฟ้าสายรุ้งพาสเทล",
        sheet: "images/themes/main-covers/icon-rainbow.png",
        detailSheet: "images/themes/main-covers/rainbow1S.png",
        link: "https://line.me/S/shop/theme/detail?id=67b413ea-81ee-440c-b2d4-88c98c6a440a",
      },
      {
        name: "Nature's Angel - Summer Beach",
        nameTH: "หน้าร้อนนางฟ้าไปทะเล",
        sheet: "images/themes/main-covers/icon-summer.png",
        detailSheet: "images/themes/main-covers/summer1.png",
        link: "https://line.me/S/shop/theme/detail?id=7b75c6bb-b776-4f30-bfae-1781b65939dd",
      },
    ],
  },

  candy: {
    name: "Kawaii Candy Girl",
    nameTH: "เด็กลูกกวาด",
    cover: "images/characters/_covers/main-candyGirl.png",
    descEN: "Little cute girls — 5 girls that are kawaii like sweet candy.",
    descTH: "กลุ่มเด็กน้อยน่ารัก มีสีสันสดใสราวกับลูกกวาดแสนหวาน มีนิสัยที่ชอบพูดซ้ำๆ แบบเด็กๆ",
    stickers: [
      { name: "Kawaii Candy Girl", nameTH: "เด็กลูกกวาด", sheet: "images/characters/candy/sticker/clean-candy1.png",
        detailSheet: "images/characters/candy/sticker/candy1.png", link: "http://line.me/S/sticker/1967171" },
      // ⚠️ Candy 2/3 ไม่มีไฟล์รูปเดี่ยวสะอาดๆ ของตัวเอง (ไม่เหมือน pack 1 ที่มี
      // candyGirl1-main.png) เลยใช้รูป sheet ของตัวเองไปเลยแทนที่จะเอารูป pack 1
      // มาใช้ซ้ำ กันการ์ดหน้าตาเหมือนกันทั้งที่เป็นคนละสินค้า
      { name: "Kawaii Candy Girl 2 - Error!", nameTH: "พัง พังอีกละ", sheet: "images/characters/candy/cover/candy2-single.png",
        detailSheet: "images/characters/candy/sticker/candy2.png", link: "http://line.me/S/sticker/4160972" },
      { name: "Kawaii Candy Girl 3 - Cheer up", nameTH: "เด็กลูกกวาดมาเชียร์", sheet: "images/characters/candy/cover/candy3-single.png",
        detailSheet: "images/characters/candy/sticker/candy3.png", link: "http://line.me/S/sticker/3840916" },
    ],
    themes: [
      { name: "Candy Kawaii Girl Theme - Candy", nameTH: "ธีมเด็กลูกกวาด", sheet: "images/themes/main-covers/icon-candy.png",
        detailSheet: "images/themes/candy/candy1.png", link: "https://line.me/S/shop/theme/detail?id=0c92491b-4325-4f7b-8814-317fcc5948e1" },
    ],
  },

  fox: {
    name: "Fox Boy",
    nameTH: "เด็กจิ้งจอก",
    cover: "images/characters/_covers/main-foxboy.png",
    descEN: "He is a little boy, a little fat. He looks like a fox. He loves to play games.",
    descTH: "เด็กน้อยที่ลงพุงนิดๆ มองดูคล้ายๆหมาป่า เขาบ้าเกมมากๆเลย เด็กติดเกม เล่นได้ทั้งวันนั่นแหละ คุณลองมาเล่นเกมด้วยกันไหม",
    stickers: [
      { name: "Fox Boy Gamer [TH]", nameTH: "เด็กจิ้งจอกบ้าเกม", sheet: "images/characters/fox/sticker/clean-foxgamer.png",
        detailSheet: "images/characters/fox/sticker/fox1.png", link: "http://line.me/S/sticker/1351603" },
      { name: "Fox Boy Gamer [EN]", nameTH: "เด็กจิ้งจอกบ้าเกม", sheet: "images/characters/fox/sticker/clean-foxgamer.png",
        detailSheet: "images/characters/fox/sticker/fox1.png", link: "http://line.me/S/sticker/1352773" },
      { name: "Fox Boy 2 - Cheer Football", nameTH: "เด็กจิ้งจอก เชียร์บอล", sheet: "images/characters/fox/sticker/clean-fox2.png",
        detailSheet: "images/characters/fox/sticker/fox2.png", link: "http://line.me/S/sticker/3942690" },
    ],
    themes: [],
  },

  cloud: {
    name: "Angel Cloud",
    nameTH: "นางฟ้าเมฆ",
    cover: "images/characters/_covers/main-cloudy.png",
    descEN: "",
    descTH: "",
    // ✅ อัปเดต: เว็บ angelto.com/AngelCloud.html เก่าไม่ update — เช็คจาก LINE Store
    // โดยตรง (store.line.me/stickershop/author/25920) แล้วพบว่ามีขายจริงทั้ง Sticker
    // และ Theme ไม่ใช่แค่ Emoji อย่างที่เข้าใจไว้ก่อนหน้า
    stickers: [
      { name: "Angel Cloud", nameTH: "นางฟ้าเมฆ", sheet: "images/characters/cloud/sticker/cloudy1.png",
        detailSheet: "images/characters/cloud/sticker/cloudy1.png", link: "https://store.line.me/stickershop/product/6925111/en" },
      { name: "Angel Cloud Everyday", nameTH: "นางฟ้าเมฆ ทุกๆวัน", sheet: "images/characters/cloud/sticker/cloudy2.png",
        detailSheet: "images/characters/cloud/sticker/cloudy2.png", link: "https://store.line.me/stickershop/product/8067136/en" },
    ],
    themes: [
      { name: "Angel Cloud Theme", sheet: "images/themes/main-covers/icon-cloudtheme.png",
        detailSheet: "images/themes/main-covers/cloud-theme1.png", link: "https://store.line.me/themeshop/product/d8fe3b7c-bb9e-49a7-8119-2cbeeec34809/en" },
      { name: "Angel Cloud Sky Theme", sheet: "images/themes/main-covers/icon-cloudsky.png",
        detailSheet: "images/themes/main-covers/cloudsky1.png", link: "https://store.line.me/themeshop/product/3ded0c5b-fbef-4fac-86eb-64672733b152/en" },
    ],
    emoji: [
      {
        name: "Angel Cloud",
        nameTH: "นางฟ้าเมฆ",
        desc: "Angel Cloud emotion. Funny and happy time with Cloud. อีโมจินางฟ้าเมฆ คุณเมฆผู้ที่สนุกสนาน อารมณ์ดีและมีความสุขเสมอ",
        sheet: "images/emoji/AngelCould-icon.png",
        detailSheet: "images/emoji/AngelCloud.png",
        link: "https://line.me/S/emoji/?id=5c6f7187100cc3130bd1f01b",
      },
    ],
  },

  pompom: {
    name: "Angel PomPom",
    nameTH: "นางฟ้าปอมปอม",
    cover: "images/characters/_covers/main-angelPom.png",
    descEN: "",
    descTH: "",
    // ✅ อัปเดต: เว็บ angelto.com/AngelPomPom.html เก่าไม่ update — เช็คจาก LINE Store
    // โดยตรงแล้วพบว่ามีขายจริงทั้ง Sticker และ Theme เหมือน Angel Cloud
    stickers: [
      { name: "Angel PomPom", nameTH: "นางฟ้าปอมปอม", sheet: "images/characters/pompom/sticker/pompom1.png",
        detailSheet: "images/characters/pompom/sticker/pompom-set1.png", link: "https://store.line.me/stickershop/product/6990685/en" },
      { name: "Angel PomPom 2", nameTH: "นางฟ้าปอมปอม", sheet: "images/characters/pompom/sticker/pompom2.png",
        detailSheet: "images/characters/pompom/sticker/pompom-set2.png", link: "https://store.line.me/stickershop/product/8810735/en" },
    ],
    themes: [
      { name: "Angel PomPom Theme", sheet: "images/themes/main-covers/icon-pompomtheme.png",
        detailSheet: "images/themes/main-covers/pompom1.png", link: "https://store.line.me/themeshop/product/1c5036e0-00ff-45dc-a755-9c9c8e1702af/en" },
    ],
    emoji: [
      {
        name: "Angel PomPom",
        nameTH: "นางฟ้าปอมปอม",
        desc: "PomPom is Angel. PomPom so cute. นางฟ้าปอมปอม ปอมปอมที่เป็นนางฟ้า กลมๆ น่ารักๆ ดุ๊กดิ๊ก อารมณ์ดีและมีความสุขเสมอ",
        sheet: "images/emoji/AngelPomPom-icon.png",
        detailSheet: "images/emoji/AngelPomPom.png",
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
