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
		$user = $this -> checkForUserExistance($email);
		if($userExistence == 0){
			echo "User not exists";
		}else{
			
		}
	}

	function checkForUserExistance($email){
		$dbConnection = $this -> connectDB();
		$userExistence = mysqli_query($dbConnection, "select exists (select 1 from userLogin where email = '$email')");
		$userExistenceVal = mysqli_fetch_array($userExistence);
		mysqli_close($dbConnection);
		return $userExistenceVal[0];
	}

	function validateUser(){
		$dbConnection = $this -> connectDB();
		$validateEmail = mysqli_query($dbConnection, "select exists (select 1 from userLogin where email = '$email')");
		if($validateEmail == 1){
			$validatePwd = mysqli_query($dbConnection, "select exists (select 1 from userLogin where email = '$email' and pwd = '$pwd')");
			if($validatePwd == 1){
				return 202;
			}else{
				return "Invalid password";
			}
		}else{
			return "E-Mail not available";
		}
		mysqli_close($dbConnection);
		return $validateUser;
	}


}

?>