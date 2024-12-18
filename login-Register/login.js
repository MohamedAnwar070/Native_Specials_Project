document.addEventListener("DOMContentLoaded", function () {
    const phoneTab = document.getElementById("phone-tab");
    const emailTab = document.getElementById("email-tab");
    const phoneContent = document.getElementById("phone-content");
    const emailContent = document.getElementById("email-content");
    const phoneInput = document.getElementById("phone-number");
    const emailInput = document.getElementById("email-address");
    const continueBtns = document.querySelectorAll(".continue-btn");

    // Function to switch tabs
    function switchTab(activeTab, inactiveTab, activeContent, inactiveContent) {
        activeTab.classList.add("active");
        inactiveTab.classList.remove("active");
        activeContent.classList.add("active");
        inactiveContent.classList.remove("active");
    }

    // Switch tabs on click
    phoneTab.addEventListener("click", () => {
        switchTab(phoneTab, emailTab, phoneContent, emailContent);
    });

    emailTab.addEventListener("click", () => {
        switchTab(emailTab, phoneTab, emailContent, phoneContent);
    });

    // Function to validate inputs before proceeding
    function validateInput(input) {
        if (input === phoneInput) {
            return phoneInput.value.trim().length === 10;  // Check for 10 digit phone number
        } else if (input === emailInput) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Simple email validation regex
            return emailRegex.test(emailInput.value);
        }
        return false;
    }

    // Add event listeners to continue buttons
    continueBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const activeContent = document.querySelector(".tab-content.active");
            const input = activeContent.querySelector("input");

            if (input && !validateInput(input)) {
                alert("Please enter a valid " + (input === phoneInput ? "phone number (10 digits)" : "email address"));
            } else {
                alert("Proceeding to next step...");
                // You can redirect or show further steps here
            }
        });
    });
});
