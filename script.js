
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  nav.classList.toggle('nav-active');
});

// Close menu when clicking links (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove('hamburger-active');
      nav.classList.remove('nav-active');
    }
  });
});

// Initialize cart
let cart = [];

// Function to add item to cart
function addToCart(product) {
  cart.push(product);
  updateCartCount();
}

// Function to update cart count
function updateCartCount() {
  const cartCountElement = document.querySelector('.cart-count');
  cartCountElement.textContent = cart.length;
}

// Get modal elements
const modal = document.getElementById("product-modal");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalSize = document.getElementById("modal-size");
const modalColor = document.getElementById("modal-color");
const addToCartModal = document.getElementById("add-to-cart-modal");
const closeButton = document.querySelector(".close-button");

// Event listeners for product cards
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    const productName = card.getAttribute('data-product-name');
    const productPrice = card.getAttribute('data-product-price');
    const productImage = card.getAttribute('data-product-image');

    modalName.textContent = productName;
    modalPrice.textContent = productPrice;
    modalImage.src = productImage;

    modal.style.display = "block"; // Show the modal
  });
});

// Close modal when the close button is clicked
closeButton.addEventListener('click', () => {
  modal.style.display = "none";
});

// Add to cart from modal
addToCartModal.addEventListener('click', () => {
  const productName = modalName.textContent;
  const productPrice = modalPrice.textContent;
  const size = modalSize.value;
  const color = modalColor.value;

  addToCart({ name: productName, price: productPrice, size: size, color: color });
  alert(`${productName} added to cart!`);
  modal.style.display = "none"; // Close the modal after adding to cart
});

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
