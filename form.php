<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: akepinski'; 
    $to = 'hello@akepinski.me'; 
    $subject = 'Message!';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
    
    if ($_POST['submit']) {
    /* Action */
}
?>
