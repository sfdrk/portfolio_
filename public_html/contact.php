
<?php 
$email = $_POST['mail'];
$to = 'me@safdarhamza.com';
$subject = 'You have a email from website';
// $message = "";
$headers = "From: " . $email . "\r\n";

mail($to, $subject, $subject , $headers ,$email);
header("Location:/");


?>