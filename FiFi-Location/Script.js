// Fonction pour ouvrir la modal
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Fonction pour fermer la modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Lorsque l'utilisateur accepte ou refuse les cookies
document.getElementById("acceptCookies").onclick = function() {
    setCookie("userConsent", "accept", 30); // Enregistre le consentement pour 30 jours
    hideCookieBanner(); // Cache le banner
  };
  
  document.getElementById("rejectCookies").onclick = function() {
    setCookie("userConsent", "reject", 30); // Enregistre le refus pour 30 jours
    hideCookieBanner(); // Cache le banner
    // Ajoutez ici toute logique nécessaire pour désactiver les fonctionnalités liées aux cookies
  };
  
  // Fonction pour cacher le banner
  function hideCookieBanner() {
    document.getElementById("cookieConsentContainer").style.display = "none";
  }
  
  // Enregistre un cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Obtient un cookie
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Vérifie le consentement
  function checkCookieConsent() {
    let userConsent = getCookie("userConsent");
    if (userConsent === "accept") {
      // L'utilisateur a accepté les cookies
      // Activez ici les fonctionnalités liées aux cookies
    } else if (userConsent === "reject") {
      // L'utilisateur a refusé les cookies
      // Désactivez ici les fonctionnalités liées aux cookies
    } else {
      // Le consentement n'a pas encore été donné
      document.getElementById("cookieConsentContainer").style.display = "block";
    }
  }
  
  // Appelé lorsque la page est chargée
  window.onload = function() {
    checkCookieConsent();
  };