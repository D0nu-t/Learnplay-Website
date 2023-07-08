<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  // Set up email headers and content
  $to = "addala.ks@gmail.com"; // Replace with your email address
  $subject = "Demo Request";
  $body = "School Name: " . $name . "\n";
  $body .= "Email Address: " . $email . "\n";
  $body .= "Phone Number: " . $phone . "\n";
  $body .= "Message: " . $message;

  // Send email
  if (mail($to, $subject, $body)) {
    echo "Email sent successfully!";
  } else {
    echo "Email sending failed.";
  }
}
?>
