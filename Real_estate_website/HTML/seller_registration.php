<?php
// Establish connection to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "propertyvillas";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $gst_number = $_POST['gst_number'];
    $username = $_POST['username'];
    $address = $_POST['address'];
    $mobile_number = $_POST['mobile_number'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $gmail = $_POST['gmail'];

    // Check if passwords match
    if ($password != $confirm_password) {
        echo "Error: Passwords do not match";
        exit();
    }

    // Hash the password before storing it in the database
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare SQL statement to insert data into the table
    $stmt = $conn->prepare("INSERT INTO sellers (first_name, last_name, gst_number, username, address, mobile_number, password, gmail) 
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $first_name, $last_name, $gst_number, $username, $address, $mobile_number, $hashed_password, $gmail);

    // Execute SQL statement
    if ($stmt->execute() === TRUE) {
        // Redirect to seller_login.html
        header("Location: seller_login.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $stmt->close();
}

// Close database connection
$conn->close();
?>
