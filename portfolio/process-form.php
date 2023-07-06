<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Validate name input
if (empty($name)) {
echo "<script>alert('Please enter your name.'); window.location = 'index.html';</script>";
exit();
}

// Validate email input
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
echo "<script>alert('Please enter a valid email address.'); window.location = 'index.html';</script>";
exit();
}

// Validate message input
if (empty($message)) {
echo "<script>alert('Please enter a message.'); window.location = 'index.html';</script>";
exit();
}

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "jasperobed@gmail.com";
$mail->Password = "ahgmiucaragkgdzm";

$mail->setFrom($email, $name);
$mail->addAddress("jasperobed@gmail.com");

$mail->Subject = $subject;
$mail->Body = $message;

if ($mail->send()) {
// Success! Reload the contact page
echo "<script>alert('Thank you, I will contact you soon!'); window.location = 'index.html';</script>";
} else {
// Error sending email
echo "<script>alert('There was an error sending your message. Please try again later.'); window.location = 'index.html';</script>";
}
?>


