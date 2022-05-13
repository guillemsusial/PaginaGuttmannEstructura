<?php
class MySQLdb 
	{
private $server = "localhost";
private $database_name = "appGuttmann";
private $username = "root";
private $password = "";
private $table_name1 = "users";
private $connection="";
private $tableFileds="";

		function __construct()
		{
			$this -> connetToServerDataBase();
			$this -> charset();
			$this -> createDataBase();
			

			$this->defineTableField1();
			$this->createTables($this->table_name1);
			
			$this->defineTableField2();
			$this->createTables($this->table_name2);

			$this->defineTableField3();
			$this->createTables($this->table_name3);
		}
	private function connetToServerDataBase(){
		$this->connection=mysqli_connect($this->server, $this->username,$this->password);
		if (mysqli_connect_errno()) die("Connect to data base: NOT OK"); 
			else echo 'COnnect to data base :OK';
	}

	private function createDataBase(){
		$query = "CREATE DATABASE IF NOT EXISTS $this->database_name";
		$ok = mysqli_query($this->connection,$query);
		if ($ok) echo 'Create data bases OK-------------------------<br>';
		else   echo 'Create Table: not Ok <br>';
		//return $ok;	
	}	

    private function createTables($table_name){
      //- Crear una table
	    $query = "CREATE TABLE IF NOT EXISTS $this->database_name.$table_name($this->tableFileds)";
	    $ok = mysqli_query($this->connection,$query);
	    if ($ok)  echo 'Creat Table:    Ok <br>';
	    else      echo 'Creat Table: not Ok <br>';
    }

	private function defineTableField1(){
		$this -> tableFileds="
		`id` int(11) NOT NULL AUTO_INCREMENT ,
		`Login` varchar(100) NOT NULL,
		`Password` varchar(200) NOT NULL,
		`Email` varchar(200) NOT NULL,
		 PRIMARY KEY (`id`);";
/*$this -> tableFileds="
		`id` int(11) NOT NULL,
		`name` varchar(100) NOT NULL,
		`surnames` varchar(100) NOT NULL,
		`email` varchar(200) NOT NULL,
		`address` varchar(150) NOT NULL,
		`city` varchar(100) NULL,
		`state` varchar(50) NOT NULL,
		`postalCode` varchar(10) NOT NULL,
		`country` varchar(100) NOT NULL,
		`password` varchar(200) NOT NULL";*/

	}
	private function defineTableField2(){
		$this -> tableFileds="
		`id` int(11) NOT NULL,
		`type` char(1) NOT NULL,
		`product` varchar(200) NOT NULL,
		`description` text  NOT NULL,
		`price` decimal(10,2) NOT NULL,
		`discount` decimal(10,2) NOT NULL,
		`Shipping` decimal(10,2) NOT NULL,
		`image` varchar(100) NOT NULL,
		`date` date NOT NULL";
	}

	private function defineTableField3(){
		$this -> tableFileds="
		`id` int(11) NOT NULL,
		`idUser` int(11) NOT NULL,
		`product` varchar(200) NOT NULL,
		`price` decimal(10,2) NOT NULL,
		`discount` decimal(10,2) NOT NULL,
		`Shipping` decimal(10,2) NOT NULL,
		`state` char(1) NOT NULL,
		`quantity` int(11) NOT NULL,
		`date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP";
	}

	private function charset(){
		$ok =mysqli_set_charset($this->connection, "utf8");
		if ($ok)print("Charset: Ok <br>");
		else print ("Charset: not Ok <br>");
		 
	}


public function functionVerifyRegister(){
	$Login = $_POST["Login"];
	$Password=$_POST["Password"];
	$query = mysqli_query($this->connection, "SELECT * FROM $this->database_name.$this->table_name1 WHERE Login='$Login' AND Password='$Password'");
	$numrows = mysqli_num_rows($query);
	            if ($numrows > 0)echo '<br>'."user OK".$numrows;
	            else echo '<br>'."user NO OK";
	
}

 public function functionInsertRegister(){
	$Login = $_POST["Login"];
	$Password=$_POST["Password"];
	$Email=$_POST["Email"];
	echo "<br><br>query: ";

	$query = "INSERT INTO `$this->database_name`.`$this->table_name1` (`Login`, `Password`,`Email`) VALUES ('$Login', '$Password', '$Email');";
	$ok= mysqli_query($this->connection, $query);
	if($ok) {
	echo "New record created successfully";
	return true;
	} else {
	echo "Error ";
	return false;
	}
 }
}
?>