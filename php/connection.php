<?php 
include('config.php');
class Connection{
	
	function connectDb(){
		$config = new Config();
		$configValues = $config -> setConfig();
		$conn = mysqli_connect($configValues['host'], $configValues['username'], $configValues['password'], $configValues['db']);
		if (!$conn) {
    		die("Connection failed: " . mysqli_connect_error());
		}else{
			return $conn;
		}

	}


}


?>