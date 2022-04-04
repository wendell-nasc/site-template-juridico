<?php

//pega os dados do $http do Angular
$meuPost = file_get_contents("php://input");

//para acessar os dados: $json.nome ou $Json.email e etc.
$json = json_decode( $meuPost );

// Aqui vc pode implementar o codigo para enviar o email via php.

//retorna os dados para o success do Angular
echo json_encode(array(

						"nome"=>$json->nome,
						"email"=>$json->email,
						"mensagem"=>$json->mensagem

					));



                    <?php
require_once('src/PHPMailer/src/PHPMailer.php');
require_once('src/PHPMailer/src/SMTP.php');
require_once('src/PHPMailer/src/Exception.php');
 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
 
$mail = new PHPMailer(true);
 
try {
	$mail->SMTPDebug = SMTP::DEBUG_SERVER;
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'seuemail@gmail.com';
	$mail->Password = 'senhadoemail';
	$mail->Port = 587;
 
	$mail->setFrom('seuemail@gmail.com');
	$mail->addAddress('endereco1@provedor.com.br');
	$mail->addAddress('endereco2@provedor.com.br');
 
	$mail->isHTML(true);
	$mail->Subject = 'Teste de email via gmail Canal TI';
	$mail->Body = 'Chegou o email teste do <strong>Canal TI</strong>';
	$mail->AltBody = 'Chegou o email teste do Canal TI';
 
	if($mail->send()) {
		echo 'Email enviado com sucesso';
	} else {
		echo 'Email nao enviado';
	}
} catch (Exception $e) {
	echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
}