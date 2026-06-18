function afficherMessageLundi() {
  const messageBox = document.getElementById("messageInfo");

  const messages = [
    "Bienvenue sur TreeLand 🌱 - Nouvelle semaine, nouvelles opportunités !",
    "Découvrez les nouveaux projets disponibles 💼",
    "Amélioration de la plateforme en cours ⚙️",
    "Promotion spéciale investisseurs 💰",
    "Mise à jour de sécurité 🚀"
  ];

  const semaine = Math.floor(new Date().getTime() / (7 * 24 * 60 * 60 * 1000));
  const message = messages[semaine % messages.length];

  messageBox.innerHTML = "<span>📢 " + message + "</span>";
}

afficherMessageLundi();