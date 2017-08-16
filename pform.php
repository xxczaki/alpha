<?php

error_reporting(0);

include 'cform_config.php';

if(!isset($rnd) || !isset($name) || !isset($email) || !isset($subject) || !isset($body)) {
	echo $error_message;
    die();
}

	$email_from = $email;
	$email_subject = "Contact Form: ".stripslashes($subject);
	$email_message = "Please find below a message submitted by '".stripslashes($name);
	$email_message .="' on ".date("d/m/Y")." at ".date("H:i")."\n\n";
	$email_message .= stripslashes($body);

	$headers = 'From: '.$email_from."\r\n" .
   'Reply-To: '.$email_from."\r\n" .
   'X-Mailer: PHP/' . phpversion();

	mail($email_it_to, $email_subject, $email_message, $headers);

	echo "<b>$confirmation</b>";
	die();
?>
