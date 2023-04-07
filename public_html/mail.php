<?php

    $phone = $_POST['phone']
    $name = $_POST['name']
    $email = $_POST['email']

    $to      = 'dompoetov@gmail.com';
    $subject = 'HEDGEHOG';
    $message = 'Заявка с HEDGEHOG' . '<br>' . 
                'Имя -' . $name . '<br>' . 
                'Телефон - ' . $phone . '<br>' . 
                'Email - ' . $email;
    $headers = 'From: dompoetov@gmail.com'       . "\r\n" .
                 'Reply-To: dompoetov@gmail.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message, $headers);
?>