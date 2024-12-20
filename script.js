  // Search Bar Toggle
  const searchToggle = document.getElementById("search-toggle");
  const searchBar = document.getElementById("search-bar");
  const cancelSearch = document.getElementById("cancel-search");

  searchToggle.addEventListener("click", () => {
      searchBar.classList.toggle("active");
  });

  cancelSearch.addEventListener("click", () => {
      searchBar.classList.remove("active");
  });

  // Sidebar Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const menuSidebar = document.getElementById("menu-sidebar");
  const closeSidebar = document.getElementById("close-sidebar");

  menuToggle.addEventListener("click", () => {
      menuSidebar.classList.toggle("open");
  });

  closeSidebar.addEventListener("click", () => {
      menuSidebar.classList.remove("open");
  });

  // Tab Switching
  const categoriesTab = document.getElementById("categories-tab");
  const profileTab = document.getElementById("profile-tab");
  const categoriesContent = document.getElementById("categories-content");
  const profileContent = document.getElementById("profile-content");

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

  // Carousel - For Small Screen (1 Item Per Slide)
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".carousel-control.prev");
  const nextButton = document.querySelector(".carousel-control.next");

  let currentIndex = 0;
  let itemsPerSlide = 3; // Default to 3 for larger screens
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  // Update the carousel position
  function updateCarousel(index) {
      const slideWidth = 100 / itemsPerSlide; // Slide width percentage
      carousel.style.transform = `translateX(-${index * slideWidth}%)`;
  }

  // Go to the next slide
  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel(currentIndex);
  }

  // Go to the previous slide
  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel(currentIndex);
  }

  // Auto-slide functionality
  let autoSlideInterval;

  function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 3000); // 3-second interval
  }

  function stopAutoSlide() {
      clearInterval(autoSlideInterval);
  }

  // Event listeners for manual navigation
  nextButton.addEventListener("click", () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
  });

  prevButton.addEventListener("click", () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
  });

  // Start auto-slide on page load
  startAutoSlide();

  // Make the carousel responsive
  window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
          itemsPerSlide = 1; // Show 1 item per slide on small screens
      } else {
          itemsPerSlide = 3; // Show 3 items per slide on larger screens
      }
      updateCarousel(currentIndex); // Adjust carousel position
  });


  document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to all dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
    dropdownToggles.forEach((toggle) => {
      const dropdownMenu = toggle.nextElementSibling;
      const dropdownIcon = toggle.querySelector('.dropdown-icon');
  
      // Toggle dropdown on click
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
  
        // Close other open dropdowns
        document.querySelectorAll('.dropdown-menu').forEach((menu) => {
          if (menu !== dropdownMenu) {
            menu.classList.remove('show');
          }
        });
  
        // Toggle this dropdown's visibility
        dropdownMenu.classList.toggle('show');
  
        // Update icon
        if (dropdownMenu.classList.contains('show')) {
          dropdownIcon.innerHTML = '&#x25B2;'; // Up arrow ▲
        } else {
          dropdownIcon.innerHTML = '&#x25BC;'; // Down arrow ▼
        }
      });
    });
  
    // Close dropdown if clicking outside
    document.addEventListener('click', function (e) {
      dropdownToggles.forEach((toggle) => {
        const dropdownMenu = toggle.nextElementSibling;
        const dropdownIcon = toggle.querySelector('.dropdown-icon');
  
        if (!toggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.classList.remove('show');
          dropdownIcon.innerHTML = '&#x25BC;'; // Reset to down arrow ▼
        }
      });
    });
  });
  