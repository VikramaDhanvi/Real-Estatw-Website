<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "propertyvillas";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$username = $_POST['username'];
$email = $_POST['email'];
$mobile_number = $_POST['mobile_number'];
$password = $_POST['password'];

// Hash the password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Prepare SQL statement to insert data into the table
$sql = "INSERT INTO buyers (first_name, last_name, username, email, mobile_number, password) 
        VALUES ('$first_name', '$last_name', '$username', '$email', '$mobile_number', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    header("Location: Buyer_Login.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
