
const translations = {
    en: {
        nav_home: "Home",
        nav_resume: "Resume",
        nav_certificates: "Certificates",
        nav_recommendations: "Recommendations",
        nav_skills: "Soft Skills",
        nav_contact: "Contact",
        home_title: "Welcome",
        home_description: "This is the personal website of Dilara Yargıcı, a passionate computer engineering student.",
        resume_title: "Resume",
        resume_content: "You can list your education, experience, and technical skills here.",
        certificates_title: "Certificates",
        certificates_content: "Showcase your certifications here.",
        recommendations_title: "Recommendation Letters",
        recommendations_content: "Upload or list recommendations you've received.",
        skills_title: "Soft Skills",
        skills_content: "List your interpersonal and teamwork abilities here.",
        contact_title: "Contact"
    },
    tr: {
        nav_home: "Ana Sayfa",
        nav_resume: "Özgeçmiş",
        nav_certificates: "Sertifikalar",
        nav_recommendations: "Tavsiye Mektupları",
        nav_skills: "Sosyal Beceriler",
        nav_contact: "İletişim",
        home_title: "Hoşgeldiniz",
        home_description: "Bu site, bilgisayar mühendisliği öğrencisi Dilara Yargıcı'nın kişisel web sitesidir.",
        resume_title: "Özgeçmiş",
        resume_content: "Eğitim, deneyim ve teknik becerilerinizi burada listeleyebilirsiniz.",
        certificates_title: "Sertifikalar",
        certificates_content: "Sertifikalarınızı burada sergileyebilirsiniz.",
        recommendations_title: "Tavsiye Mektupları",
        recommendations_content: "Aldığınız tavsiye mektuplarını burada paylaşabilirsiniz.",
        skills_title: "Sosyal Beceriler",
        skills_content: "İletişim ve ekip çalışması yeteneklerinizi burada listeleyin.",
        contact_title: "İletişim"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
