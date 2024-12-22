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

// navbar JS ends here

// Toggle View
const toggleButton = document.getElementById("toggle-view");
const productGrid = document.getElementById("product-grid");
const icons = toggleButton.querySelectorAll("i");

toggleButton.addEventListener("click", () => {
  productGrid.classList.toggle("list-view");
  productGrid.classList.toggle("grid-view");

  // Toggle active icon
  icons.forEach(icon => icon.classList.toggle("active"));
});

// Sorting Products
document.getElementById("sort-options").addEventListener("change", (e) => {
  const sortValue = e.target.value;
  sortProducts(sortValue);
});

function sortProducts(option) {
  const productContainer = document.getElementById("product-grid");
  const productsArray = Array.from(productContainer.children);

  if (option === 'price-low-high') {
    productsArray.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
  } else if (option === 'price-high-low') {
    productsArray.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
  } else if (option === 'name-asc') {
    productsArray.sort((a, b) => a.querySelector("h3").textContent.localeCompare(b.querySelector("h3").textContent));
  } else if (option === 'name-desc') {
    productsArray.sort((a, b) => b.querySelector("h3").textContent.localeCompare(a.querySelector("h3").textContent));
  }

  productContainer.innerHTML = ''; // Clear current list
  productsArray.forEach(product => productContainer.appendChild(product)); // Append sorted products
}

// Filter by Price
const priceSlider = document.getElementById("price-range");
const priceDisplay = document.getElementById("price-display");
const products = document.querySelectorAll(".product");

priceSlider.addEventListener("input", () => {
  const maxPrice = parseInt(priceSlider.value, 10);
  priceDisplay.textContent = `Price: ₹0 - ₹${maxPrice}`;

  products.forEach(product => {
    const price = parseInt(product.dataset.price, 10);
    if (price <= maxPrice) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
});

// Pagination and Initial Loading
const productsData = [
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 334, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 334, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 334, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 334, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 334, image: "https://via.placeholder.com/100" },
  { name: "Groundnut Oil (Cold Pressed)", price: 92, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 22, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 922, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 2312, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 722, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 2222, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 1000, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 334, image: "https://via.placeholder.com/100" },
  { name: "Nattu Sakkarai - Cane Jaggery Powder", price: 334, image: "https://via.placeholder.com/100" },
  { name: "Groundnut Oil (Cold Pressed)", price: 92, image: "https://via.placeholder.com/100" },
  { name: "Organic Rice", price: 500, image: "https://via.placeholder.com/100" },
  { name: "Cold Pressed Coconut Oil", price: 240, image: "https://via.placeholder.com/100" },
  { name: "Organic Tea Leaves", price: 750, image: "https://via.placeholder.com/100" },
  { name: "Turmeric Powder (Organic)", price: 334, image: "https://via.placeholder.com/100" },
  { name: "Organic Jaggery", price: 1100, image: "https://via.placeholder.com/100" },
  { name: "Honey (Raw & Organic)", price: 750, image: "https://via.placeholder.com/100" },
  { name: "Ghee (Organic Cow Ghee)", price: 800, image: "https://via.placeholder.com/100" },
  { name: "Almonds (Raw & Organic)", price: 1500, image: "https://via.placeholder.com/100" },
  { name: "Organic Raw Coffee Beans", price: 1200, image: "https://via.placeholder.com/100" },
  { name: "Organic Cinnamon Powder", price: 200, image: "https://via.placeholder.com/100" },
  // More products can be added
];

// Settings
const productsPerPage = 12;
let currentPage = 1;
const totalProducts = productsData.length;
const totalPages = Math.ceil(totalProducts / productsPerPage);

// Populate Products
function populateProducts() {
  const productContainer = document.getElementById("product-grid");
  productContainer.innerHTML = ""; // Clear current products

  // Calculate the range of products to display for the current page
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  // Loop through the data and append the products to the grid
  for (let i = start; i < end && i < totalProducts; i++) {
    const product = document.createElement("div");
    product.classList.add("product");
    product.setAttribute("data-price", productsData[i].price);
    product.innerHTML = `
      <img src="${productsData[i].image}" alt="Product">
      <div class="product-details">
        <h3>${productsData[i].name}</h3>
        <p class="price">₹${productsData[i].price}</p>
        <button class="btn">Select Options</button>
      </div>
    `;
    productContainer.appendChild(product);
  }

  updatePagination();
}

// Update Pagination Information
function updatePagination() {
  document.getElementById("page-info").textContent = `Page ${currentPage} of ${totalPages}`;
  document.getElementById("prev-page").disabled = currentPage === 1;
  document.getElementById("next-page").disabled = currentPage === totalPages;
}

// Pagination Event Listeners
document.getElementById("prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    populateProducts();
  }
});

document.getElementById("next-page").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    populateProducts();
  }
});

// Initial Load
populateProducts();
