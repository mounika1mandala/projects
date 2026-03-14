const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "electronics",
    rating: 4,
    likes: 0,
    isLiked: false,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    description: "Feature-rich smartwatch with health monitoring.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "electronics",
    rating: 5,
    likes: 0,
    isLiked: false,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    description: "Portable Bluetooth speaker with 20-hour battery life.",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "electronics",
    rating: 4,
    likes: 0,
    isLiked: false,
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 49.99,
    description: "Durable backpack with USB charging port.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "electronics",
    rating: 3,
    likes: 0,
    isLiked: false,
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 29.99,
    description: "Ergonomic wireless mouse with silent clicks.",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "electronics",
    rating: 4,
    likes: 0,
    isLiked: false,
  },
  {
    id: 6,
    name: "Phone Stand",
    price: 19.99,
    description: "Adjustable phone stand for desk or bed.",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "electronics",
    rating: 3,
    likes: 0,
    isLiked: false,
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 39.99,
    description: "LED desk lamp with adjustable brightness.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.vGw6U4qFtW9HEicpoJjMbwHaHa&pid=Api&P=0&h=180",
    category: "home",
    rating: 4,
    likes: 0,
    isLiked: false,
  },
  {
    id: 8,
    name: "Notebook",
    price: 12.99,
    description: "Premium quality notebook with 200 pages.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "home",
    rating: 3,
    likes: 0,
    isLiked: false,
  },
  {
    id: 9,
    name: "Men's T-Shirt",
    price: 24.99,
    description: "100% cotton comfortable t-shirt.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "clothing",
    rating: 4,
    likes: 0,
    isLiked: false,
  },
  {
    id: 10,
    name: "Women's Jeans",
    price: 59.99,
    description: "Stylish and comfortable denim jeans.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "clothing",
    rating: 5,
    likes: 0,
    isLiked: false,
  },
  {
    id: 11,
    name: "Running Shoes",
    price: 89.99,
    description: "Lightweight running shoes with cushioning.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "clothing",
    rating: 4,
    likes: 0,
    isLiked: false,
  },
  {
    id: 12,
    name: "Winter Jacket",
    price: 129.99,
    description: "Warm winter jacket with waterproof shell.",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "clothing",
    rating: 5,
    likes: 0,
    isLiked: false,
  },
  {
    id: 13,
    name: "Coffee Maker",
    price: 49.99,
    description: "Programmable coffee maker with timer.",
    image:
      "https://images.unsplash.com/photo-1587080413959-06b859fb107d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "home",
    rating: 4,
    likes: 0,
    isLiked: false,
  },
  {
    id: 14,
    name: "Air Fryer",
    price: 89.99,
    description: "Digital air fryer with multiple presets.",
    image:
      "https://images.unsplash.com/photo-1611791484670-ce19b801d192?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "home",
    rating: 5,
    likes: 0,
    isLiked: false,
  },
  {
    id: 15,
    name: "Blender",
    price: 39.99,
    description: "High-speed blender for smoothies and more.",
    image:
      "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "home",
    rating: 4,
    likes: 0,
    isLiked: false,
  },
  {
    id: 16,
    name: "Throw Pillow",
    price: 19.99,
    description: "Soft decorative throw pillow for your home.",
    image:
      "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "home",
    rating: 3,
    likes: 0,
    isLiked: false,
  },
];

const productContainer = document.querySelector(".product-container");
const cartIcon = document.querySelector(".cart-icon");
const wishlistIcon = document.querySelector(".wishlist-icon");
const cartModal = document.querySelector(".cart-modal");
const wishlistModal = document.querySelector(".wishlist-modal");
const closeCart = document.querySelector(".close-cart");
const closeWishlist = document.querySelector(".close-wishlist");
const cartItemsContainer = document.querySelector(".cart-items");
const wishlistItemsContainer = document.querySelector(".wishlist-items");
const cartTotal = document.querySelector(".cart-total span");
const cartCount = document.querySelector(".cart-count");
const wishlistCount = document.querySelector(".wishlist-count");
const filterButtons = document.querySelectorAll(".filter-btn");

let cart = [];
let wishlist = [];

function renderProducts(filter = "all") {
  productContainer.innerHTML = products
    .filter((product) => filter === "all" || product.category === filter)
    .map(
      (product) => `
            <div class="product-card" data-id="${product.id}" data-category="${
        product.category
      }">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="rating">
                        ${'<i class="fas fa-star"></i>'.repeat(product.rating)}
                        ${'<i class="far fa-star"></i>'.repeat(
                          5 - product.rating
                        )}
                    </div>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <div class="product-buttons">
                        <button class="like-btn ${
                          product.isLiked ? "liked" : ""
                        }">
                            <i class="fas fa-thumbs-up"></i>
                            <span>${product.likes}</span>
                        </button>
                        <button class="wishlist-btn ${
                          wishlist.some((item) => item.id === product.id)
                            ? "in-wishlist"
                            : ""
                        }">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `
    )
    .join("");
}

function setupEventListeners() {
  productContainer.addEventListener("click", (e) => {
    const productId = parseInt(e.target.closest(".product-card")?.dataset.id);
    if (!productId) return;

    if (e.target.closest(".like-btn")) {
      toggleLike(productId);
    } else if (e.target.closest(".wishlist-btn")) {
      toggleWishlist(productId);
    } else if (e.target.classList.contains("add-to-cart")) {
      addToCart(productId);
    }
  });

  cartIcon.addEventListener("click", () => {
    cartModal.style.display = "flex";
  });

  wishlistIcon.addEventListener("click", () => {
    wishlistModal.style.display = "flex";
    renderWishlist();
  });

  closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  closeWishlist.addEventListener("click", () => {
    wishlistModal.style.display = "none";
  });

  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) cartModal.style.display = "none";
  });

  wishlistModal.addEventListener("click", (e) => {
    if (e.target === wishlistModal) wishlistModal.style.display = "none";
  });

  cartItemsContainer.addEventListener("click", (e) => {
    const cartItem = e.target.closest(".cart-item");
    if (!cartItem) return;

    const productId = parseInt(cartItem.dataset.id);

    if (e.target.classList.contains("increase")) {
      updateCartItemQuantity(productId, 1);
    } else if (e.target.classList.contains("decrease")) {
      updateCartItemQuantity(productId, -1);
    } else if (e.target.classList.contains("remove-item")) {
      removeFromCart(productId);
    }
  });

  wishlistItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("move-to-cart")) {
      const productId = parseInt(e.target.closest(".wishlist-item").dataset.id);
      addToCart(productId);
      removeFromWishlist(productId);
    } else if (e.target.classList.contains("remove-wishlist-item")) {
      const productId = parseInt(e.target.closest(".wishlist-item").dataset.id);
      removeFromWishlist(productId);
    }
  });

  document.querySelector(".checkout-btn").addEventListener("click", checkout);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.filter);
    });
  });
}

function toggleLike(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  product.isLiked = !product.isLiked;
  product.likes += product.isLiked ? 1 : -1;
  renderProducts(document.querySelector(".filter-btn.active").dataset.filter);
}

function toggleWishlist(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const index = wishlist.findIndex((item) => item.id === productId);
  if (index === -1) {
    wishlist.push({ ...product });
  } else {
    wishlist.splice(index, 1);
  }

  updateWishlist();
  renderProducts(document.querySelector(".filter-btn.active").dataset.filter);
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  updateCart();
  showAddedToCartMessage(product.name);
}

function updateCartItemQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    updateCart();
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter((item) => item.id !== productId);
  updateWishlist();
  renderProducts(document.querySelector(".filter-btn.active").dataset.filter);
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
  renderCart();
}

function updateWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  wishlistCount.textContent = wishlist.length;
}

function renderCart() {
  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="decrease">-</button>
                <span>${item.quantity}</span>
                <button class="increase">+</button>
            </div>
            <span class="remove-item">Remove</span>
        </div>
    `
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = total.toFixed(2);

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
  }
}

function renderWishlist() {
  wishlistItemsContainer.innerHTML = wishlist
    .map(
      (item) => `
        <div class="wishlist-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="wishlist-item-info">
                <h3>${item.name}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
            </div>
            <button class="move-to-cart">Add to Cart</button>
            <span class="remove-wishlist-item">Remove</span>
        </div>
    `
    )
    .join("");

  if (wishlist.length === 0) {
    wishlistItemsContainer.innerHTML = "<p>Your wishlist is empty</p>";
  }
}

function showAddedToCartMessage(productName) {
  const message = document.createElement("div");
  message.className = "added-to-cart-message";
  message.innerHTML = `<p>${productName} has been added to your cart!</p>`;
  document.body.appendChild(message);

  setTimeout(() => message.classList.add("show"), 10);
  setTimeout(() => {
    message.classList.remove("show");
    setTimeout(() => document.body.removeChild(message), 300);
  }, 3000);
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert(`Thank you for your purchase! Total: $${cartTotal.textContent}`);
  cart = [];
  updateCart();
  cartModal.style.display = "none";
}

function loadData() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) cart = JSON.parse(savedCart);

  const savedWishlist = localStorage.getItem("wishlist");
  if (savedWishlist) wishlist = JSON.parse(savedWishlist);

  updateCart();
  updateWishlist();
}

document.addEventListener("DOMContentLoaded", () => {
  loadData();
  renderProducts();
  setupEventListeners();
});