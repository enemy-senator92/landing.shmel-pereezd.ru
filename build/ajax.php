<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 05.07.2017
 * Time: 11:07
 */
header('Content-Type: text/html; charset=utf-8');

$email_to = array('senator92@bk.ru', 'info@shmel-pereezd.ru');
define('EMAIL_FROM', 'info@shmel-pereezd.ru');
define('SITE_NAME', 'shmel-pereezd.ru');

if ($_REQUEST["ajax"] == "Y"){
	// Проверяем поля на ошибки
	$arError = array();

	// добавить проверки если нужно...
	if (empty($arError) && intval(count($arError)) < 1) // если ошибок нет
	{
		$allsend = false;
		// send email
		$allsend = SendEmail($_REQUEST, $email_to);
		if ($allsend){
			echo json_encode(array("OK" => "1", "MESSAGE" => "AKE"));
		} else {
			echo json_encode(array("ERR" => "1", "MESSAGE" => "Произошла ошибка, попробуйте повторить позже."));
		}
	}else{
		// если есть ошибки
		echo json_encode(array("ERR" => "2", "FIELDS" => $arError, "MESSAGE" => "Возникли ошибки, проверьте правильность заполнения полей."));
	}
}else{
	echo json_encode(array("ERR" => "1", "MESSAGE" => "Произошла ошибка, попробуйте повторить позже."));
}

function SendEmail($data, $emails)
{
	$thems = "=?utf-8?B?" . base64_encode('Сообщение с сайта '.SITE_NAME) . "?=";
	$headers = 'From: ' . EMAIL_FROM . "\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$headers .= 'X-Mailer: PHP/' . phpversion();
	$message = '<p style="margin: 0 0 15px;">'.$data['FORM_TITLE'].'</p><table>';

	if (!empty($data['VISITOR_NAME'])){
		$message .= '<tr>
                            <td><b>Имя:</b></td>
                            <td>' . $data['VISITOR_NAME'] . '</td>
                        </tr>';
	}

	if (!empty($data['VISITOR_PHONE'])){
		$message .= '<tr>
                            <td><b>Телефон:</b></td>
                            <td>' . $data['VISITOR_PHONE'] . '</td>
                        </tr>';
	}

	if (!empty($data['VISITOR_EMAIL'])){
		$message .= '<tr>
                            <td><b>E-mail:</b></td>
                            <td>' . $data['VISITOR_EMAIL'] . '</td>
                        </tr>';
	}

	if (!empty($data['VISITOR_MESSAGE'])){
		$message .= '<tr>
                            <td><b>Сообщение:</b></td>
                            <td>' . $data['VISITOR_MESSAGE'] . '</td>
                        </tr>';
	}

	if (!empty($data['VISITOR_APPLICATION'])){
		$message .= '<tr>
                            <td><b>Что заказывают:</b></td>
                            <td>' . $data['VISITOR_APPLICATION'] . '</td>
                        </tr>';
	}

	$message .= '';
	$message .= '</table>';
	$anysend = false;
	foreach($emails as $email){
		$ms = mail($email, $thems, $message, $headers);
		if ($ms)
			$anysend = true;
	}
	return $anysend;
}