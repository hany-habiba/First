const content = {
  en: {
    navHome: "Home",
    navPsychological: "Psychological assessments",
    navArticles: "Articles",
    navSelfHelp: "Self-Help",
    navTest: "Test",
    navAbout: "About Us",
    headerTitle: "Calmora: Mental Health",
    headerSubtitle: "Empowering you to lead a mentally healthy life.",
    modalTitle: "Sign Up",
    modalText: "Register with us to get offers, support and more",
    nameLabel: "Name",
    emailLabel: "Email",
    passwordLabel: "Password",
    password2Label: "Confirm Password",
    mentalHealthTitle: "Mental Health",
    mentalHealthText: "Mental health and emotional well-being are essential aspects of overall health...",
    card1Title: "Psychological Assessments",
    card1Text: "Evaluate your mental health status with comprehensive psychological assessments.",
    card1Link:"know more",
    card2Title: "Therapy & Counseling",
    card2Text: "Connect with certified therapists for personalized mental health support.",
    card3Title: "Mental Wellness Programs",
    card3Text: "Participate in wellness programs to improve emotional and psychological resilience.",
   website:"If you want help ,Vist our website",
    Hint: "\"We are here for you.\"",
    footerContact: "Contact us: info@calmora.com | Phone: +20 123 456 7890",
    footerAddress: "Address: 123 Calmora Street, Tanta, Egypt"
  },
  ar: {
    navHome: "الرئيسية",
    navPsychological: "تقييمات نفسية",
    navArticles: "مقالات",
    navSelfHelp: "المساعدة الذاتية",
    navTest: "اختبار",
    navAbout: "معلومات عنا",
    headerTitle: "Calmora: الصحة النفسية",
    headerSubtitle: "تمكينك من العيش حياة صحية نفسيا.",
    modalTitle: "تسجيل",
    modalText: "سجل معنا للحصول على العروض والدعم والمزيد",
    nameLabel: "الاسم",
    emailLabel: "البريد الإلكتروني",
    passwordLabel: "كلمة المرور",
    password2Label: "تأكيد كلمة المرور",
    mentalHealthTitle: "الصحة النفسية",
    mentalHealthText: "الصحة النفسية والرفاهية العاطفية هما جانبان أساسيان من الصحة العامة...",
    card1Title: "تقييمات نفسية",
    card1Text: "قيّم حالتك النفسية باستخدام تقييمات نفسية شاملة.",
    card1Link:"اعرف اكثر ",
    card2Title: "العلاج والإرشاد",
    card2Text: "تواصل مع معالجين معتمدين للحصول على دعم صحي نفسي مخصص.",
    card3Title: "برامج الصحة النفسية",
    card3Text: "شارك في برامج لتحسين المرونة العاطفية والنفسية.",
    website:"فى حاله انك تحتاج الى مساعه,زور موقعنا",
    Hint: "\"نحن هنا لاجلك .\"",
    footerContact: "تواصل معنا: info@calmora.com | هاتف: +20 123 456 7890",
    footerAddress: "العنوان: 123 شارع Calmora، طنطا، مصر"
  }
};

function setLanguage(language) {
  document.body.classList.toggle('arabic', language === 'ar');

  const elements = {
    navHome: document.getElementById("nav-home"),
    navPsychological: document.getElementById("nav-psychological"),
    navArticles: document.getElementById("nav-articles"),
    navSelfHelp: document.getElementById("nav-self-help"),
    navTest: document.getElementById("nav-test"),
    navAbout: document.getElementById("nav-about"),
    headerTitle: document.getElementById("header-title"),
    headerSubtitle: document.getElementById("header-subtitle"),
    modalTitle: document.getElementById("modal-title"),
    modalText: document.getElementById("modal-text"),
    labelName: document.getElementById("label-name"),
    labelEmail: document.getElementById("label-email"),
    labelPassword: document.getElementById("label-password"),
    labelPassword2: document.getElementById("label-password2"),
    mentalHealthTitle: document.getElementById("mental-health-title"),
    mentalHealthText: document.getElementById("mental-health-text"),
    card1Title: document.getElementById("card1-title"),
    card1Text: document.getElementById("card1-text"),
    card1Link:document.getElementById("card1-link"),
    card2Title: document.getElementById("card2-title"),
    card2Text: document.getElementById("card2-text"),
    card3Title: document.getElementById("card3-title"),
    card3Text: document.getElementById("card3-text"),
    Hint: document.getElementById("Hint"),
    website: document.getElementById("website"),
    footerContact: document.getElementById("footer-contact"),
    footerAddress: document.getElementById("footer-address"),
  };

  for (let key in elements) {
    elements[key].innerText = content[language][key];
  }
}
// فتح وغلق المودال
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));
window.addEventListener("click", (e) =>
e.target == modal ? modal.classList.remove("show-modal") : false
);

// الانتقال إلى صفحات مختلفة عند الضغط على الأزرار
document.getElementById("psychological-assessments-btn").addEventListener("click", function() {
window.location.href = "https://www.apa.org/topics/testing-assessment-measurement/understanding";
});

document.getElementById("substance-abuse-btn").addEventListener("click", function() {
window.location.href = "https://example.com/substance-abuse-program";
});

// اختبار الصحة النفسية البسيط
document.getElementById("test-form").addEventListener("submit", function(event) {
event.preventDefault();
let score = 0;
const form = new FormData(event.target);
if (form.get("question1") === "yes") score++;
if (form.get("question2") === "yes") score++;

const resultDiv = document.getElementById("results");
if (score > 1) {
  resultDiv.innerHTML = "<p>You might be experiencing high anxiety or depression. Please consult with a professional.</p>";
} else {
  resultDiv.innerHTML = "<p>Your results indicate low signs of anxiety or depression.</p>";
}
});