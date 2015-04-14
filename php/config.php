<?php  

class Config{

	function setConfig(){
		return array(
		    'host' => 'localhost',
		    'username' => 'root',
		    'password' => '',
		    'db' => 'mindGames',
		);
	}

	function statusCodes(){
		return array(
		    'login_authorized' => '3200',
		    'sign_up_success' => '4200',
		    'login_email_not_exist' => '3401',
		    'login_pwd_error' => '3402',
		    'login_unauothorized' => '3400',
		    'user_no_exist' => '3404',
		    'login_email_already_available' => '3423',
		    'mark_update_success' => '3250'
		);
	}

}







?>