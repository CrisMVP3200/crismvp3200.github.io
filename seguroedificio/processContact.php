<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        /* echo "Contacto: Exito"; */ 
        
        require_once dirname(__FILE__).'\class.phpmailer.php';
        
        $name    = test_input($_POST["name"]);     /* Nombre */
        $email   = test_input($_POST["email"]);    /* Email */
        $phone   = test_input($_POST["phone"]);    /* Teléfono de contacto */ 
        $message = test_input($_POST["message"]);  /* Mensaje */ 
        
        $name = utf8_encode($name);
        $email = utf8_encode($email);
        $phone = utf8_encode($phone);
        $message = utf8_encode($message); 
        
        /* $to = "hola@seguroedificio.cl */
        $to = "loko20.246@gmail.com";
        $subject = "Mensaje de " . $name;
            
        $message = '
        <html>
            <head>
                <title>' . $subject . '</title>
                <meta charset="UTF-8">
            </head>
            <body>
                <h2>Mensaje<h2>
                <p><b>Nombre:</b> ' . $name . '</p>
                <p><b>Email:</b> ' . $email . '</p>
                <p><b>Teléfono:</b> ' . $phone . '</p>
                <p><b>Mensaje:</b> ' . $message . '</p>
            </body>
        </html>';
        
        /*$data = "Nombre: " . $name . 
                "\nEmail: " . $email .
                "\nTelefono: " . $phone .
                "\nMensaje: " . $message;
        */
        // echo $data; 
        
        $subject = utf8_encode($subject);
        $message = utf8_encode($message); 
        
        $mail = new PHPMailer();
        $mail->CharSet = "UTF-8";
        $mail->Encoding = 'base64';
        $mail->IsHTML(true);
        
        $mail->From = $email;
        $mail->FromName = $name;
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->AddAddress ( $to );
        
        if ($mail->Send()) {
            echo "Mensaje: Mail enviado";
        } else {
            echo "Mensaje: Error al enviar el mail"; 
        }
        
        
    } else {
        echo "Contacto: Error"; 
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>