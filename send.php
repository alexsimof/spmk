<?php

$fio = $_POST['fio'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$comment = htmlspecialchars($comment);

$fio = urldecode($fio);
$phone = urldecode($phone);
$email = urldecode($email);
$comment = urldecode($comment);

$fio = trim($fio);
$phone = trim($phone);
$email = trim($email);
$comment = trim($comment);

if (mail("alex.simonof@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail:".$email.".Phone:".$phone.".Comment:".$comment ,"From: info@spmk.ru \r\n"))

 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>