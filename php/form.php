<?php
// hide the errors
error_reporting( 0 );

// Get the values from html form
$name      =    $_POST['reg_name'];
$jobtitle  =    $_POST['reg_jobtitle'];
$email     =    $_POST['reg_email'];
$company   =    $_POST['reg_company'];
$contact   =    $_POST['reg_contact'];
$quantity  =    $_POST['reg_quantity'];
$attend    =    $_POST['reg_attend'];

// Email Address where you want to received the mails
$to = "youremail@gmail.com";

// Mail Subject
$sub = "Event4 - Registration From Your Website";

// Output table
$email_message = '<html>
<head>
    <title>Registration From Your Website</title>
</head>
<body>
<table>
    <tr>
        <th align="left"><strong>Full Name:</th>
        <td align="left">' . $name . '</td>
    </tr>
    <tr>
        <th align="left"><strong>Job Title:</th>
        <td align="left">' . $jobtitle . '</td>
    </tr>
	  <tr>
        <th align="left"><strong>Email:</th>
        <td align="left">' . $email . '</td>
    </tr>
	<tr>
        <th align="left"><strong>Company:</th>
        <td align="left">' . $company . '</td>
    </tr>
    <tr>
        <th align="left"><strong>Contact No:</th>
        <td align="left">' . $contact . '</td>
    </tr>
       <tr>
        <th align="left"><strong>Quantity:</th>
        <td align="left">' . $quantity . '</td>
    </tr>
       <tr>
        <th align="left"><strong>I will Attend:</th>
        <td align="left">' . $attend . '</td>
    </tr>
</table>
</body>
</html>
';

//Headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$headers .= 'From:'.$name.' <'.$email.'>' . "\r\n";

//send mail
$mail = mail( $to, $sub, $email_message, $headers );

if ( $mail ) {

	// Success message
	echo 'Your mail was sent successfully';
} else {

	// Error message
	echo 'Error';
}