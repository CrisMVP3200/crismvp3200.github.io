<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        require_once dirname(__FILE__).'\class.phpmailer.php';
        
        $name    = test_input($_POST["name"]);     /* Nombre */
        $email   = test_input($_POST["email"]);    /* Email */
        $phone   = test_input($_POST["phone"]);    /* Teléfono de contacto */ 
        $message = test_input($_POST["message"]);  /* Mensaje */ 
        
        $to = "hola@seguroedificio.cl"; 
        /* $to = "loko20.246@gmail.com"; */
        $subject = "Mensaje de " . $name;
            
        $message = '
        <html>
            <head>
                <title>' . $subject . '</title>
                <meta charset="UTF-8">
            </head>
            <body>
                <h2>Mensaje</h2>
                <p><b>Nombre:</b> ' . $name . '</p>
                <p><b>Email:</b> ' . $email . '</p>
                <p><b>Teléfono:</b> ' . $phone . '</p>
                <p><b>Mensaje:</b> ' . $message . '</p>
            </body>
        </html>';
        
        $subject = utf8_encode($subject);
        
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
            echo '<div class="text-center">
                      <span class="fa-stack fa-2x">
                          <i class="fa fa-circle fa-stack-2x" style="color:#2061ac;"></i>
                          <i class="fa fa-check fa-stack-1x" style="color:white;"></i>
                      </span>
                      <h2 style="font-weight:bold;">La consulta fue enviada exitosamente</h2>
                  </div>'
                  ;
        } else {
            echo '<div class="text-center">
                      <span class="fa-stack fa-2x">
                          <i class="fa fa-circle fa-stack-2x" style="color:#2061ac;"></i>
                          <i class="fa fa-times fa-stack-1x" style="color:white;"></i>
                      </span>
                      <h2 style="font-weight:bold;>Hubo un error al enviar la consulta</h2>
                  </div>'
                 ;  
        }
        
        
    } else {
        echo "<p>Acceso no autorizado</p>"; 
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>