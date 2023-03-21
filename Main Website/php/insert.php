<?php
// connect to database for user credentials
$host = 'localhost';
$user = 'root';
$password = 'contactinfo';
$dsn = "mysql:host=$host;dbname=$dbname";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
];
try {
    $pdo = new PDO($dsn, $user, $password, $options);
} catch(PDOException $e) {
    echo $e->getMessage();
}

// process form data for user credentials
$username = $_POST['username'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

// insert data into database for user credentials
$sql = "INSERT INTO users (username, password) VALUES (:username, :password)";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':username', $username);
$stmt->bindParam(':password', $password);
$stmt->execute();

// connect to database for contact information
$host = 'localhost';
$user = 'username';
$password = 'password';
$dbname = 'database_name_2';
$dsn = "mysql:host=$host;dbname=$dbname";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
];
try {
    $pdo2 = new PDO($dsn, $user, $password, $options);
} catch(PDOException $e) {
    echo $e->getMessage();
}

// process form data for contact information
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// insert data into database for contact information
$sql2 = "INSERT INTO contacts (name, email, phone) VALUES (:name, :email, :phone)";
$stmt2 = $pdo2->prepare($sql2);
$stmt2->bindParam(':name', $name);
$stmt2->bindParam(':email', $email);
$stmt2->bindParam(':phone', $phone);
$stmt2->execute();

echo "Registration successful!";
?>
