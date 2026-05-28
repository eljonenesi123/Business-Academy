let currentLanguage = "en";

const translations = {
    en: {
        mainTitle: "ONE E-KIOSK",
        subtitle: "Fast. Simple. Efficient.",
        startBtn: "Start",

        welcomeTitle: "Welcome to One Albania",
        welcomeSubtitle: "Choose a customer type",

        individualBtn: "Individual",
        businessBtn: "Business",
        guestBtn: "Guest"
    },

    sq: {
        mainTitle: "ONE E-KIOSK",
        subtitle: "Shpejt. Thjesht. Efikase.",
        startBtn: "Fillo",

        welcomeTitle: "Mirësevini në One Albania",
        welcomeSubtitle: "Zgjidhni tipin e klientit",

        individualBtn: "Individ",
        businessBtn: "Biznes",
        guestBtn: "Vizitor"
    }
};

function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem("selectedLanguage", language);
    updateTexts();
}

function updateTexts() {
    const text = translations[currentLanguage];

    document.getElementById("mainTitle").innerText = text.mainTitle;
    document.getElementById("subtitle").innerText = text.subtitle;
    document.getElementById("startBtn").innerText = text.startBtn;

    document.getElementById("welcomeTitle").innerText = text.welcomeTitle;
    document.getElementById("welcomeSubtitle").innerText = text.welcomeSubtitle;

    document.getElementById("individualBtn").innerText = text.individualBtn;
    document.getElementById("businessBtn").innerText = text.businessBtn;
    document.getElementById("guestBtn").innerText = text.guestBtn;
}

function showServices() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("servicePage").style.display = "flex";

    updateTexts();
}

window.onload = function () {
    const savedLanguage = localStorage.getItem("selectedLanguage");

    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }

    updateTexts();
};