<?php
// connect to database
$host = 'localhost';
$user = 'username';
$password = 'password';
$dbname = 'logininfo';
$dsn = "mysql:host=$host;dbname=$dbname";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
];
try {
    $pdo = new PDO($dsn, $user, $password, $options);
} catch(PDOException $e) {
    echo $e->getMessage();
}

// check if form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // get form data
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // query database for user credentials
    $sql = "SELECT * FROM users WHERE username = :username";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // check if user exists and password is correct
    if ($user && password_verify($password, $user['password'])) {
        // login successful
        echo "Login successful!";
    } else {
        // login unsuccessful
        // increment login attempts
        session_start();
        if (!isset($_SESSION['attempts'])) {
            $_SESSION['attempts'] = 1;
        } else {
            $_SESSION['attempts']++;
        }
        
        // check if user has been locked out
        if ($_SESSION['attempts'] >= 3) {
            // lock user out
            echo "You have been locked out!";
        } else {
            // show error message
            echo "Incorrect username or password. Please try again.";
        }
    }
}
?>
