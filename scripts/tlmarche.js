
const produits = JSON.parse(localStorage.getItem("produitsTreeLand") || "[]");
const container = document.getElementById("marketProducts");
const categories = document.querySelectorAll(".category");

// AFFICHAGE PRODUITS
function afficherProduits(categorie) {
  container.innerHTML = "";
  let count = 0;

  produits.forEach(p => {
    if (p.approuve === true && (categorie === "tout" || p.categorie === categorie)) {
      count++;

      const card = document.createElement("div");
      card.className = "product";
      card.dataset.id = p.id;

      card.innerHTML = `
        <img src="${p.image}" />
        <p class="price">F CFA ${p.prix}</p>
        <p class="product-name">${p.nom}</p>
        <button>Ajouter au panier</button>
      `;

      container.appendChild(card);
    }
  });

  if (count === 0) {
    container.innerHTML = "<p>Aucun produit trouvé.</p>";
  }
}

// CATEGORIES CLICK
categories.forEach(cat => {
  cat.addEventListener("click", () => {
    categories.forEach(c => c.classList.remove("active-category"));
    cat.classList.add("active-category");
    afficherProduits(cat.dataset.cat);
  });
});

// PANIER
function getPanier() {
  return JSON.parse(localStorage.getItem("panierTreeLand") || "[]");
}

function setPanier(panier) {
  localStorage.setItem("panierTreeLand", JSON.stringify(panier));
}

function ajouterAuPanier(produit) {
  let panier = getPanier();
  const index = panier.findIndex(item => item.id === produit.id);

  if (index !== -1) {
    panier[index].quantite++;
  } else {
    panier.push({ ...produit, quantite: 1 });
  }

  setPanier(panier);
  alert(`"${produit.nom}" ajouté au panier`);
}

// CLICK BOUTON
container.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const card = e.target.closest(".product");

    const produit = {
      id: card.dataset.id,
      nom: card.querySelector(".product-name").textContent,
      prix: parseFloat(card.querySelector(".price").textContent.replace("F CFA ", "")),
      image: card.querySelector("img").src
    };

    ajouterAuPanier(produit);
  }
});

// INIT
afficherProduits("tout");
