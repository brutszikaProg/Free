<?php
   require("/PHPMailer-master/src/PHPMailer.php");
   require("/PHPMailer-master/src/SMTP.php");


   date_default_timezone_set('Etc/UTC');

   require 'PHPMailerAutoload.php';

   $mail = new PHPMailer\PHPMailer\PHPMailer();

   $mail->isSMTP();
   $mail->Host = 'smtp.live.com';
   $mail->Port = 587;
   $mail->SMTPSecure = 'tls';
   $mail->SMTPAuth = true;
   $mail->Username = "brunonoy@htomail.com";
   $mail->Password = "134679Sexo@";
   $mail->setFrom('tiagogoy@hotmail.com', 'Tiarrdo');
   $mail->addReplyTo('tiagogoy@hotmail.com', 'Regsagsaply');
   $mail->addAddress('tiagogoy@hotmail.com', 'gsa');
   $mail->Subject = 'Titulo do Texto';
   $mail->Body = 'Mensagem de texto';
   
   if (!$mail->send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
   } else {
      echo "Message sent!";
   }
?>