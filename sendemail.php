<?php

$input = file_get_contents("php://input");

$datas = json_decode($input, true);
$name       = @trim(stripslashes($datas['name']));
$from       = @trim(stripslashes($datas['email']));
$mess       = @trim(stripslashes($datas['mess']));
$to   		= 'florian-lacroix@protonmail.com';
$subject    = 'prise de contact - ' . $name;




$headers = 'From: '. $from ."\r\n" .
    'Reply-To: '. $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $mess, $headers);

die;