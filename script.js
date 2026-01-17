// ===== Favoriten-Zähler für das Herz =====

// Element für den Badge-Zähler
const favoritesCountElement = document.getElementById("favorites-count");

// interner Zähler
let favoritesCount = 0;

// zentrale Funktion: Zähler setzen + Anzeige aktualisieren
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

// Helferfunktionen, die du später von den Produktkarten aus nutzen kannst
function incrementFavorites() {
  setFavoritesCount(favoritesCount + 1);
}

function decrementFavorites() {
  setFavoritesCount(favoritesCount - 1);
}

// Initialisierung, wenn die Seite geladen ist
document.addEventListener("DOMContentLoaded", () => {
  setFavoritesCount(0);

  // Aktuell: Klick auf das Herz erhöht testweise den Zähler um 1
  // (später ersetzt du das durch Logik pro Produktkarte)
  const favoritesButton = document.querySelector(".favorites-button");
  if (favoritesButton) {
    favoritesButton.addEventListener("click", () => {
      incrementFavorites();
    });
  }

  // Warenkorb-Button ist vorbereitet, aber aktuell ohne Funktion
  const cartButton = document.querySelector(".cart-button");
  if (cartButton) {
    cartButton.addEventListener("click", () => {
      // Hier kannst du später deine Warenkorb-Logik ergänzen
      console.log("Warenkorb-Button geklickt");
    });
  }
});
