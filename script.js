// Sidebar Toggle
const menuToggle = document.getElementById("menu-toggle");
const menuSidebar = document.getElementById("menu-sidebar");
const categoriesTab = document.getElementById("categories-tab");
const profileTab = document.getElementById("profile-tab");
const categoriesContent = document.getElementById("categories-content");
const profileContent = document.getElementById("profile-content");
const closeSidebar = document.getElementById("close-sidebar");

// Toggle sidebar open/close
menuToggle.addEventListener("click", () => {
    menuSidebar.classList.toggle("open");
});

// Close sidebar when close button is clicked
closeSidebar.addEventListener("click", () => {
    menuSidebar.classList.remove("open");
});

// Tab Switching
function switchTab(tabName) {
    if (tabName === "categories") {
        categoriesTab.classList.add("active");
        profileTab.classList.remove("active");
        categoriesContent.classList.add("active");
        profileContent.classList.remove("active");
    } else {
        profileTab.classList.add("active");
        categoriesTab.classList.remove("active");
        profileContent.classList.add("active");
        categoriesContent.classList.remove("active");
    }
}

categoriesTab.addEventListener("click", () => switchTab("categories"));
profileTab.addEventListener("click", () => switchTab("profile"));