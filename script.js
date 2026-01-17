// ===== Favoriten-Zähler im Header =====
let favoritesCount = 0;
const favoritesCountElement = document.getElementById("favorites-count");

function setFavoritesCount(newCount) {
  favoritesCount = Math.max(0, newCount);

  if (!favoritesCountElement) return;

  favoritesCountElement.textContent = favoritesCount;

  if (favoritesCount > 0) {
    favoritesCountElement.style.display = "inline-flex";
  } else {
    favoritesCountElement.style.display = "none";
  }
}

function incrementFavorites() {
  setFavoritesCount(favoritesCount + 1);
}

function decrementFavorites() {
  setFavoritesCount(favoritesCount - 1);
}

// ===== Scroll-Animation (IntersectionObserver) =====
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window)) {
    // Fallback: alles sofort sichtbar
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // nur einmal animieren
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach((el) => observer.observe(el));
}

// ===== Produkt-Like-Logik =====
function initProductLikes() {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    const likeButton = card.querySelector(".product-like-button");
    if (!likeButton) return;

    likeButton.addEventListener("click", () => {
      const isLiked = likeButton.classList.toggle("is-liked");

      if (isLiked) {
        incrementFavorites();
      } else {
        decrementFavorites();
      }
    });
  });
}

// ===== Initialisierung nach DOM-Load =====
document.addEventListener("DOMContentLoaded", () => {
  // Zähler beim Laden ausblenden (0)
  setFavoritesCount(0);

  // Produkt-Likes aktivieren
  initProductLikes();

  // Scroll-Animation aktivieren
  initScrollAnimations();

  // Optional: Header-Buttons (Warenkorb / Herz) loggen o.Ä.
  const cartButton = document.querySelector(".cart-button");
  if (cartButton) {
    cartButton.addEventListener("click", () => {
      console.log("Warenkorb-Button geklickt");
    });
  }

  const headerFavoritesButton = document.querySelector(".favorites-button");
  if (headerFavoritesButton) {
    headerFavoritesButton.addEventListener("click", () => {
      console.log("Header-Favoriten-Button geklickt");
    });
  }
});
