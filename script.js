let currentLanguage = "en";

const translations = {
    en: {
        mainTitle: "ONE E-KIOSK",
        subtitle: "Fast. Simple. Efficient.",
        startBtn: "Start",

        phoneTitle: "Enter your mobile number",
        phoneSubtitle: "We will send you an OTP for verification",
        sendOtpBtn: "Send OTP",
        backHomeBtn: "Back to Home",

        otpTitle: "Enter OTP",
        otpSubtitle: "We have sent a 6-digit code to your phone",
        otpHint: "Demo OTP: 123456",
        verifyBtn: "Verify",
        backBtn: "Back",

        dashboardTitle: "Welcome to One Albania",
        dashboardSubtitle: "Your digital self-service hub",

        payBillCard: "Pay Bill",
        buyPackageCard: "Buy Package",
        submitComplaintCard: "Submit Complaint",
        checkCoverageCard: "Check Coverage",
        bookAppointmentCard: "Book Appointment",
        trackRequestCard: "Track Request"
    },

    sq: {
        mainTitle: "ONE E-KIOSK",
        subtitle: "Shpejt. Thjesht. Efikase.",
        startBtn: "Fillo",

        phoneTitle: "Shkruani numrin tuaj",
        phoneSubtitle: "Do t'ju dërgojmë një kod OTP për verifikim",
        sendOtpBtn: "Dërgo OTP",
        backHomeBtn: "Kthehu në fillim",

        otpTitle: "Shkruani OTP",
        otpSubtitle: "Kodi 6-shifror është dërguar në telefonin tuaj",
        otpHint: "OTP demo: 123456",
        verifyBtn: "Verifiko",
        backBtn: "Kthehu",

        dashboardTitle: "Mirësevini në One Albania",
        dashboardSubtitle: "Qendra juaj dixhitale e shërbimeve",

        payBillCard: "Paguaj Faturën",
        buyPackageCard: "Bli Paketë",
        submitComplaintCard: "Paraqit Ankesë",
        checkCoverageCard: "Kontrollo Mbulimin",
        bookAppointmentCard: "Rezervo Takim",
        trackRequestCard: "Gjurmo Kërkesën"
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

    document.getElementById("phoneTitle").innerText = text.phoneTitle;
    document.getElementById("phoneSubtitle").innerText = text.phoneSubtitle;
    document.getElementById("sendOtpBtn").innerText = text.sendOtpBtn;
    document.getElementById("backHomeBtn").innerText = text.backHomeBtn;

    document.getElementById("otpTitle").innerText = text.otpTitle;
    document.getElementById("otpSubtitle").innerText = text.otpSubtitle;
    document.getElementById("otpHint").innerText = text.otpHint;
    document.getElementById("verifyBtn").innerText = text.verifyBtn;
    document.getElementById("backBtn").innerText = text.backBtn;

    document.getElementById("dashboardTitle").innerText = text.dashboardTitle;
    document.getElementById("dashboardSubtitle").innerText = text.dashboardSubtitle;

    document.getElementById("payBillCard").innerText = text.payBillCard;
    document.getElementById("buyPackageCard").innerText = text.buyPackageCard;
    document.getElementById("submitComplaintCard").innerText = text.submitComplaintCard;
    document.getElementById("checkCoverageCard").innerText = text.checkCoverageCard;
    document.getElementById("bookAppointmentCard").innerText = text.bookAppointmentCard;
    document.getElementById("trackRequestCard").innerText = text.trackRequestCard;
}

function hideAllPages() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("phonePage").style.display = "none";
    document.getElementById("otpPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "none";
}

function showPhonePage() {
    hideAllPages();
    document.getElementById("phonePage").style.display = "flex";
    updateTexts();
}

function showOtpPage() {
    hideAllPages();
    document.getElementById("otpPage").style.display = "flex";
    updateTexts();
}

function showDashboard() {
    hideAllPages();
    document.getElementById("dashboardPage").style.display = "flex";
    updateTexts();
}

function goHome() {
    hideAllPages();
    document.getElementById("homePage").style.display = "block";
    updateTexts();
}

function goPhonePage() {
    hideAllPages();
    document.getElementById("phonePage").style.display = "flex";
    updateTexts();
}

window.onload = function () {
    const savedLanguage = localStorage.getItem("selectedLanguage");

    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }

    updateTexts();
};