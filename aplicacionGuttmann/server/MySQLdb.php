<?php
class MySQLdb 
	{
private $server = "localhost";
private $database_name = "appGuttmann";
private $username = "root";
private $password = "";
private $table_name1 = "users";
private $connection="";
private $tableFields="";

	function __construct()
	{
		$this -> connetToServerDataBase();
		$this -> charset();
		$this -> createDataBase();

		$this->defineTableField1();
		$this->createTables($this->table_name1);
	}

	private function connetToServerDataBase(){
		$this->connection=mysqli_connect($this->server, $this->username,$this->password);
		if (mysqli_connect_errno()) die("Connect to data base: NOT OK"); 
			else echo 'Connect to data base: OK';
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
	    $query = "CREATE TABLE IF NOT EXISTS $this->database_name.$table_name($this->tableFields)";
	    $ok = mysqli_query($this->connection,$query);
	    if ($ok)  echo 'Create Table:    Ok <br>';
	    else      echo 'Create Table: not Ok <br>';
    }

	private function defineTableField1(){
		$this -> tableFields="
		`id` int(11) NOT NULL AUTO_INCREMENT,
		`Nombre` varchar(100) NOT NULL,
		`Apellidos` varchar(200) NOT NULL,
		`Email` varchar(200) NOT NULL,
		`Password`  varchar(200) NOT NULL,
		`AnyoNacimiento` int(4) NOT NULL,
		`Estudios` varchar(200) NOT NULL,
		`Sexo` varchar(100) NOT NULL,
		PRIMARY KEY (`id`);";

	}

	private function charset(){
		$ok =mysqli_set_charset($this->connection, "utf8");
		if ($ok)print("Charset: Ok <br>");
		else print ("Charset: not Ok <br>");
		 
	}


	public function functionVerifyRegister(){
		$Email = $_POST["Email"];
		$Password=$_POST["Password"];
		$query = mysqli_query($this->connection, "SELECT * FROM $this->database_name.$this->table_name1 WHERE Email='$Email' AND Password='$Password'");
		$numrows = mysqli_num_rows($query);
		if ($numrows > 0)echo '<br>'."user OK".$numrows;
		else echo '<br>'."user NO OK";
	}

	public function functionInsertRegister(){
		$Nombre = $_POST["Nombre"];
		$Apellidos=$_POST["Apellidos"];
		$Email=$_POST["Email"];
		$Password=$_POST["Password"];
		$AnyoNacimiento=$_POST["AnyoNacimiento"];
		$Estudios=$_POST["Estudios"];
		$Sexo=$_POST["Sexo"];
		echo "<br><br>query: ";

		$query = "INSERT INTO `$this->database_name`.`$this->table_name1` (`Nombre`, `Apellidos`,`Email`,`Password`,`AnyoNacimiento`,`Estudios`,`Sexo`) VALUES ('$Nombre', '$Apellidos', '$Password','$AnyoNacimiento','$Estudios','$Sexo');";
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