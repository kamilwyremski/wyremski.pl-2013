<?php
	$nadawca = $_POST['mail'];	
	$odbiorca = 'kamil.wyremski@gmail.com';		
	$headers = 'Reply-To: <'.$nadawca."> \r\n";
	$headers .= "MIME-Version: 1.0 \r\n"; 
	$headers .= "Content-Type: text/html; charset=UTF-8"; 			
	$wiadomosc = '<!doctype html><html lang="pl"><head><meta charset="utf-8"></head><body>Od: '.$_POST['name'].', adres e-mail: '.$_POST['mail'].'<br><br>Treść:<br><br>'.$_POST['content'].'</body></html>';	
	$temat = "=?UTF-8?B?Wiadomość ze strony wyremski.pl?=";	
	mail($odbiorca, $temat, $wiadomosc, $headers)
?>