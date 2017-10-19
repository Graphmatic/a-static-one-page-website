<?php

$input = file_get_contents("php://input");

$datas = json_decode($input, true);
$name       = @trim(stripslashes($datas['name']));
$from       = @trim(stripslashes($datas['email']));
$mess       = @trim(stripslashes($datas['mess']));
$to   		= 'graphmatic.studio@gmail.com';
$subject    = 'prise de contact';




$headers = 'From: '. $from ."\r\n" .
    'Reply-To: '. $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $mess, $headers);

//$data['success'] = true;
//$data['message'] = 'Success!';
//$data['plouf'] = json_encode($datas);
//echo json_encode($data);
die;