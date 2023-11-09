
<?php 
$email = $_POST['mail'];
$to = 'me@dsafdarhamza.com';
$subject = $_POST['subject'];
$message = $_POST['message'];

$header = "From: ".$email;



mail($to, $subject, $message,$header);
header("Location:index.html?mailsend");


?>