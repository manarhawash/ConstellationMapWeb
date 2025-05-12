// بيانات الأبراج: الاسم، المعلومة، وإحداثيات النجم في اللوحة (px)
const constellations = [
  { name: "الدب الأكبر", info: "يُرى في نصف الكرة الشمالي ويمتد عبر 20 نجمة.", x: 100, y: 120 },
  { name: "الثور",     info: "يظهر في فصل الشتاء ويتميز بنجمة الثور (ألديبراان).", x: 300, y: 80 },
  { name: "الجبار",    info: "يُعرف بـ Orion ويحتوي على نجوم الخصر الثلاثية.", x: 500, y: 200 },
  { name: "السمكة",    info: "فرعي سمكة الشمال وجنوب ويظهران في الخريف.", x: 200, y: 350 },
  { name: "العقرب",    info: "يظهر في الصيف بقدرته على الرصد في نصف الكرة الجنوبي.", x: 650, y: 150 }
];

// احصل على العنصرين من الـ DOM
const sky = document.getElementById('sky');
const infoBox = document.getElementById('infoBox');

// دالة لإنشاء النجوم في السماء
function initSky() {
  constellations.forEach(c => {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${c.x}px`;
    star.style.top  = `${c.y}px`;
    // عند النقر على النجم، غيّر نص infoBox
    star.addEventListener('click', () => {
      infoBox.textContent = `${c.name}: ${c.info}`;
    });
    sky.appendChild(star);
  });
}

// تهيئة الخريطة عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', initSky);
