<?php 
	include('mindCalculus.php');

	$class = isset($_POST['class']) ? $_POST['class'] : null;
	$method = isset($_POST['method']) ? $_POST['method'] : null;
	$email = isset($_POST['email']) ? $_POST['email'] : null;
	$pwd = isset($_POST['pwd']) ? md5($_POST['pwd']) : null;
	$marks = isset($_POST['marks']) ? $_POST['marks'] : null;
	$attempts = isset($_POST['attempts']) ? $_POST['attempts'] : null;

	if($class == "mindCalculus"){
		$mindCalculus = new MindCalculus();
		if($method == "signup"){
			$mindCalculus -> signup($email, $pwd); 	
		}
	}



?>