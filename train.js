// 22-dars Asynchronous functionlarni qo'llash
const list = [
  "yahshi talaba boling", // 7-20 yosh
  "togri boshliq tanlang va koproq hato qiling", // 20-30 yosh
  "uzingizga ishlashingizni boshlang", // 30-40 yosh
  "siz kuchli bolgan narsalarni qiling", // 40-50 yosh
  "yoshlarga investitsiya qiling", // 50-60 yosh
  "endi dam oling, foydasi yoq endi", // 60+ yosh
];
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      // promise orqali set time out function ishlatish
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
    // return list[5];
    // setTimeout(function () {
    // return list[5];
    // }, 5000);
  }
}
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
async function run() {
  let javob = await maslahatBering(20);
  console.log(javob);
  javob = await maslahatBering(365);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();
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
