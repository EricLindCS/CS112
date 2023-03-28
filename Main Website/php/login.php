<?php
// Connect to database
$host="127.0.0.1";
$port=3306;
$socket="";
$user="root";
$password="lamnoda3";
$dbname="cs116";

$conn = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

//$con->close();

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$name = mysqli_real_escape_string($conn, $_POST['username']);
$email = mysqli_real_escape_string($conn, $_POST['password']);

// Insert data into table
$sql = "INSERT INTO contactinfo (`username`, `password`) VALUES ('$name', '$email')";
if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>
