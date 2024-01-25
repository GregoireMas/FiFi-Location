<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validation et nettoyage des données
    $nom = filter_input(INPUT_POST, "Nom", FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, "Email", FILTER_VALIDATE_EMAIL);
    $commentaire = filter_input(INPUT_POST, "Commentaire", FILTER_SANITIZE_STRING);

    if (!$email) {
        echo "<p>Adresse email invalide.</p>";
        return; // Arrête l'exécution si l'email est invalide
    }

    // Préparation du message
    $message = "Nom: " . $nom . "\nEmail: " . $email . "\nCommentaire: " . $commentaire;
    
    // Nettoyage des en-têtes pour éviter l'injection
    $headers = "From: " . filter_var($email, FILTER_SANITIZE_EMAIL);

    // Adresse email destinataire (à déplacer dans une configuration séparée)
    $to = "fifiloc66@gmail.com";
    $sujet = "Nouveau message depuis le site FiFi Locations";

    // Envoi du mail
    if (mail($to, $sujet, $message, $headers)) {
        echo "<p>Votre message a bien été envoyé.</p>";
    } else {
        // Log de l'erreur pour le débogage
        error_log("Erreur lors de l'envoi du mail");
        echo "<p>Une erreur est survenue lors de l'envoi du message.</p>";
    }
}
?>
