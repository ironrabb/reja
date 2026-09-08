// MIT TASK E reverse(hello) return olleh
function teskari(str) {
  return str.split("").reverse().join("");
}

console.log(teskari("hello")); // olleh

// // MIT TASK-D Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin. MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
// class Oshxona {
//   constructor(osh, shorva, somsa) {
//     // Barcha mahsulotlarni bitta oddiy objectda saqlaymiz
//     this.ovqat = { osh, shorva, somsa };
//   }

//   vaqt() {
//     // Hozirgi vaqtni qaytaradi
//     const now = new Date();
//     return `${now.getHours()}:${now.getMinutes()}`;
//   }

//   qoldiq() {
//     const { osh, shorva, somsa } = this.ovqat;

//     return `Hozir ${this.vaqt()} da ${osh} ta osh, ${shorva} ta shorva va ${somsa} ta somsa mavjud!`;
//   }

//   sotish(mahsulot, son) {
//     if (this.ovqat[mahsulot] < son) {
//       console.log(
//         ` ${this.vaqt()} Xatolik: ${mahsulot} yetarli emas! (Bor: ${this.ovqat[mahsulot]}, Sotilmoqchi: ${son})`,
//       );
//       return;
//     }
//     console.log(` ${this.vaqt()} Sotildi: ${mahsulot} - ${son} ta`);
//     this.ovqat[mahsulot] -= son;
//   }

//   qabul(mahsulot, son) {
//     console.log(` ${this.vaqt()} Qabul qilindi: ${mahsulot} - ${son} ta`);
//     this.ovqat[mahsulot] += son;
//   }
// }
// const oshxona = new Oshxona(2, 5, 4);
// console.log(oshxona.qoldiq());
// oshxona.sotish("osh", 1);
// oshxona.qabul("shorva", 3);
// oshxona.sotish("somsa", 2);
// console.log(oshxona.qoldiq());
// MIT C task berilgan sozda bir xil harflar bolsa tru aksin false qaytaradi
// function solishtr(str1, str2) {
//   return (
//     str1.toLowerCase().split("").sort().join("") ===
//     str2.toLowerCase().split("").sort().join("")
//   );
// }
// console.log(solishtr("listen", "silent")); // true
// console.log(solishtr("hello", "world")); // false

// ip adressni hamma joydan accses berdim
// MIT B TASK BERILGAN SOZIMIMZDA NECHTA RAQAM BOR EKANINI TOPISH

// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "0" && str[i] <= "9") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(`JAVOB: ${countDigits("ad2a54y79wet0666sfgb9")}`); // 10

// MIT A TASK SOZDA HARF NECHA MARTA UCHRAGANINI TOPISH

// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLetter("t", "mit")); // t harfi mit sozida bitta ishlatilgan

// 22-dars Asynchronous functionlarni qo'llash
// const list = [
//   "yahshi talaba boling", // 7-20 yosh
//   "togri boshliq tanlang va koproq hato qiling", // 20-30 yosh
//   "uzingizga ishlashingizni boshlang", // 30-40 yosh
//   "siz kuchli bolgan narsalarni qiling", // 40-50 yosh
//   "yoshlarga investitsiya qiling", // 50-60 yosh
//   "endi dam oling, foydasi yoq endi", // 60+ yosh
// ];
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       // promise orqali set time out function ishlatish
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//     // return list[5];
//     // setTimeout(function () {
//     // return list[5];
//     // }, 5000);
//   }
// }
// //then,catch
// console.log("passed here 0");
// maslahatBering(20) //asinxron fumction sinxron fuksin ishlabogandan keyin ishga tushadi
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");
// async await
// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(365);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
// ============================================================
// NODE.JS — SINGLE THREAD 21-dars    CALLBACK FUNTION
// ============================================================
// Node.js bir vaqtning o'zida bitta ishni bajaradi (single thread).
// Uzoq ishlarni (masalan, fayl o'qish, tarmoq so'rovlari)
// "Event Loop" orqali boshqaradi va ularni poollarga (thread pool) yuklaydi.
// ============================================================

// console.log("Jack Ma maslahatlari");

// // ============================================================
// // MA'LUMOTLAR (maslahatlar ro'yxati)
// // ============================================================
// const list = [
//   "yahshi talaba boling", // 7-20 yosh
//   "togri boshliq tanlang va koproq hato qiling", // 20-30 yosh
//   "uzingizga ishlashingizni boshlang", // 30-40 yosh
//   "siz kuchli bolgan narsalarni qiling", // 40-50 yosh
//   "yoshlarga investitsiya qiling", // 50-60 yosh
//   "endi dam oling, foydasi yoq endi", // 60+ yosh
// ];

// // ============================================================
// // CALLBACK FUNKSIYA
// // ============================================================
// // Callback — bu funksiyaga parametr sifatida beriladigan funksiya.
// // U asinxron ish tugagach chaqiriladi.
// //
// // 1-parametr: err (xatolik bo'lsa)
// // 2-parametr: data (natija)
// // ============================================================
// function maslahatBering(a, callback) {
//   // a — yosh (number bo'lishi kerak)
//   if (typeof a !== "number") {
//     // Agar a son bo'lmasa, xatolik qaytariladi
//     callback("insert a number", null);
//   } else if (a <= 20) {
//     callback(null, list[0]); // 7-20 yosh
//   } else if (a > 20 && a <= 30) {
//     callback(null, list[1]); // 20-30 yosh
//   } else if (a > 30 && a <= 40) {
//     callback(null, list[2]); // 30-40 yosh
//   } else if (a > 40 && a <= 50) {
//     callback(null, list[3]); // 40-50 yosh
//   } else if (a > 50 && a <= 60) {
//     callback(null, list[4]); // 50-60 yosh
//   } else {
//     // 60+ yosh — uzoq ish (5 soniya)
//     setTimeout(function () {
//       callback(null, list[5]); // 5 soniyadan keyin javob
//     }, 5000);
//   }
// }

// // ============================================================
// // CALLBACK NI CHAQIRISH
// // ============================================================
// console.log("passed here 0"); // 1. Avval bu chiqadi

// maslahatBering(65, (err, data) => {
//   // 3. 5 soniyadan keyin bu ishlaydi
//   if (err) console.log("ERROR:", err);
//   console.log("javob: ", data);
// });

// console.log("passed here 1"); // 2. Keyin bu chiqadi
