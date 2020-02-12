<?php
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$name = "$first_name $last_name";
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "infogendervender@gmail.com";
$subject = "gendervender.org visitor message from $name";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>