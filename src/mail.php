<?php
    if(!isset($_POST['submit']))
    {
        //This page should not be accessed directly. Need to submit the form.
        echo "error; you need to submit the form!";
    }
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'infogendervender@gmail.com';
    $headers .= "From: $visitor_email \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    $email_subject = "Message sent from gendenvender.org from: $visitor_email \r\n";
    $email_body = "You have received a new message from: $first_name $last_name\n
            Reply-To: $visitor_email \r\n
        Here is the message:\n $message \n";

    mail($to,$email_subject,$email_body,$headers);
    //------
    // Function to validate against any email injection attempts
    function IsInjected($str)
    {
    $injections = array('(\n+)',
                '(\r+)',
                '(\t+)',
                '(%0A+)',
                '(%0D+)',
                '(%08+)',
                '(%09+)'
                );
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    if(preg_match($inject,$str))
        {
        return true;
    }
    else
        {
        return false;
    }
    }

?>