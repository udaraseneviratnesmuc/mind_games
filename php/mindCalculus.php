<?php 
include('connection.php');

class MindCalculus{
	
	function connectDB(){
		$dbConn = new Connection();
		$dbConnection = $dbConn -> connectDb();
		return $dbConnection;
	}

	function signUp($email, $pwd){
		$dbConnection = $this -> connectDB();
		$config = new Config();
		$configValues = $config -> statusCodes();
		$userExistence = $this -> checkForUserExistance($email);
		if($userExistence == 0){
			mysqli_query($dbConnection, "insert into userLogin(userId, email, password) values ('', '$email', '$pwd')");
			return $configValues['sign_up_success'];
		}else{
			return $configValues['login_email_already_available'];
		}
		mysqli_close($dbConnection);
	}

	function submitMarks($email, $pwd, $marks, $attempts, $country){
		$dbConnection = $this -> connectDB();
		$config = new Config();
		$configValues = $config -> statusCodes();
		$validationResult = $this -> validateUser($email, $pwd);
		if($validationResult == $configValues['login_authorized']){
			mysqli_query($dbConnection, "insert into mind_games_marks(email, marks, attempts, country) values ('$email', '$marks', '$attempts', '$country')ON DUPLICATE KEY UPDATE marks='$marks', attempts='$attempts', country='$country'");
			return $configValues['mark_update_success'];
		}else{
			return $validationResult;
		}
	}

	function checkForUserExistance($email){
		$dbConnection = $this -> connectDB();
		$userExistence = mysqli_query($dbConnection, "select exists (select 1 from userLogin where email = '$email')");
		$userExistenceVal = mysqli_fetch_array($userExistence);
		mysqli_close($dbConnection);
		return $userExistenceVal[0];
	}

	function validateUser($email, $pwd){
		$dbConnection = $this -> connectDB();
		$config = new Config();
		$configValues = $config -> statusCodes();
		$validateEmail = mysqli_query($dbConnection, "select exists (select 1 from userLogin where email = '$email')");
		$emailExistenceVal = mysqli_fetch_array($validateEmail);
		if($emailExistenceVal[0] == 1){
			$validatePwd = mysqli_query($dbConnection, "select exists (select 1 from userLogin where email = '$email' and password = '$pwd')");
			$pwdExistenceVal = mysqli_fetch_array($validatePwd);
			if($pwdExistenceVal[0] == 1){
				return $configValues['login_authorized'];
			}else{
				return $configValues['login_pwd_error'];
			}
		}else{
			return $configValues['login_email_not_exist'];
		}
		mysqli_close($dbConnection);
	}


}

?>