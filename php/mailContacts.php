<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// // hide the errors
// error_reporting( 0 );

// Get the values from html form
$email = $_POST['reg_email'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mailbotwoi3@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Qazzaq12'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mailbotwoi3@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('gellertyevhen@gmail.com');     // Кому будет уходить письмо
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на прохождение вебинара';
$mail->Body    = '<html>
<head>
    <title>Registration From Your Website</title>
</head>
<body>
<table>
	  <tr>
        <th align="left"><strong>Email:</th>
        <td align="left">' . $email . '</td>
    </tr>
</table>
</body>
</html>';
$mail->AltBody = '';

function debug_to_console( $data ) {
    $output = $data;
    if ( is_array( $output ) )
        $output = implode( ',', $output);

    echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
}

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Sucsess!';
}
?>