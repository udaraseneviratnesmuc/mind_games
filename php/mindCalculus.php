<?php 
include('connection.php');

class MindCalculus{
	
	function signUp($email, $pwd){
		$dbConn = new Connection();
		$dbConnection = $dbConn -> connectDb();
		mysqli_query($dbConnection, "insert into userLogin(userId, email, password) values ('', '$email', '$pwd')");
		mysqli_close($dbConnection);
	}


}

?>