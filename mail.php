<?php

    $phone = $_POST['phone']
    $name = $_POST['name']
    $email = $_POST['email']

    $to      = 'ev.s.o251108@gmail.com';
    $subject = 'HEDGEHOG';
    $message = 'Заявка с HEDGEHOG' . '<br>' . 
                'Имя -' . $name . '<br>' . 
                'Телефон - ' . $phone . '<br>' . 
                'Email - ' . $email;
    $headers = 'From: evgenij-evso.github.io/Hedgehogs/'       . "\r\n" .
                 'Reply-To: dompoetov@gmail.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message);
?>