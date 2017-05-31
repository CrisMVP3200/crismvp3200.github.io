<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        /* echo "Presupuesto: Exito"; */
        
        require_once dirname(__FILE__).'\class.phpmailer.php';
        
        $amount       = test_input($_POST["amount"]);        /* Monto asegurado */ 
        $name         = test_input($_POST["name"]);          /* Nombre de comunidad del edificio */     
        $rut          = test_input($_POST["rut"]);           /* Rut de comunidad del edificio: */
        $location     = test_input($_POST["location"]);      /* Ubicación del edificio: */   
        $year         = test_input($_POST["year"]);          /* Año de construcción */
        $floorsNumber = test_input($_POST["floorsNumber"]);  /* Número de pisos del edificio */
        $contactPhone = test_input($_POST["contactPhone"]);  /* Teléfono de contacto */ 
        $email        = test_input($_POST["email"]);         /* Email de contacto */  
        
        /* $to = "hola@seguroedificio.cl */
        $to = "loko20.246@gmail.com";
        $subject = "Presupuesto de " . $name;
        
        $message = '
        <html>
            <head>
                <title>' . $subject . '</title>
                <meta charset="UTF-8">
            </head>
            <body>
                <h2>Presupuesto</h2>
                <p><b>Monto asegurado:</b> ' . $amount . '</p>
                <p><b>Nombre de comunidad del edificio:</b> ' . $name . '</p>
                <p><b>Rut de comunidad del edificio:</b>' . $rut . '</p>
                <p><b>Ubicación del edificio:</b> ' . $location . '</p>
                <p><b>Año de construcción:</b> ' . $year . '</p>
                <p><b>Número de pisos del edificio:</b> ' . $floorsNumber . '</p>
                <p><b>Teléfono de contacto:</b> ' .$contactPhone. '</p>
            </body>
        </html>';
        
        $subject = utf8_encode($subject);
        
        $mail = new PHPMailer();
        $mail->CharSet = "UTF-8";
        $mail->Encoding = "base64";
        $mail->IsHTML(true);
        
        $mail->From = $email;
        $mail->FromName = $name;
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->AddAddress ( $to );
        
        if ($mail->Send()) {
            echo "Presupuesto: Mail enviado";
        } else {
            echo "Presupuesto: Error al enviar el mail"; 
        }
        
    } else {
        echo "Presupuesto: Error";
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>