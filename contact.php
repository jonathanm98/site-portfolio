<?php
if (isset($_POST["message"])) {
    $message = '<h1>Message envoyé depuis la page contact de jmenelet.fr</h1>
        <p><b>Nom : </b>' . $_POST['name'] . '<br>
        <b>Message : </b>' . $_POST['message'] . '</p>';

    $retour = mail("contact@jmenelet.fr", $_POST['sujet'], $message, 'Content-type: text/html; charset=utf-8' . "\r\n" . 'From: contact@mail-out.cluster031.hosting.ovh.net' . "\r\n" . 'Reply-to: ' . $_POST['email']);
    if ($retour) {
        header("Location: https://dev.jmenelet.fr/#contact");
        die();
    }
}
?>