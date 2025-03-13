<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection parameters
    $servername = "localhost";
    $username = "root"; // Your MySQL username
    $password = ""; // Your MySQL password
    $dbname = "propertyvillas"; // Your MySQL database name
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Process image upload
    $fileDatas = [];
    foreach ($_FILES["property-images"]["tmp_name"] as $key => $tmp_name) {
        $fileData = addslashes(file_get_contents($_FILES["property-images"]["tmp_name"][$key]));
        $fileDatas[] = $fileData;
    }
    
    // Retrieve other form data
    $description = $_POST['property-description'];
    $price = $_POST['property-price'];
    $availableFeatures = $_POST['available-features'];
    $unavailableFeatures = $_POST['unavailable-features'];
    $location = $_POST['property-location'];
    $contactNumber = $_POST['contact-number'];
    $contactMail = $_POST['contact-mail']; // New field added
    
    // Retrieve seller's username from session
    session_start();
    if(isset($_SESSION['username'])) {
        $sellerUsername = $_SESSION['username'];
    } else {
        // Handle the case when the seller's username is not set in the session
        // You can redirect the user to the login page or display an error message
        exit("Seller's username is not set in the session.");
    }
    
    // Check if the seller's username exists in the sellers table
    $sqlCheckUsername = "SELECT username FROM sellers WHERE username = '$sellerUsername'";
    $result = $conn->query($sqlCheckUsername);
    if ($result->num_rows == 0) {
        // Handle the case when the seller's username does not exist in the sellers table
        // You can redirect the user to the login page or display an error message
        exit("Seller's username does not exist in the database.");
    }
    
    // If the seller's username exists, proceed with property insertion
    foreach ($fileDatas as $fileData) {
        $sql = "INSERT INTO properties_list (description, price, available_features, unavailable_features, location, contact_number, contact_mail, image_path, username)
                VALUES ('$description', '$price', '$availableFeatures', '$unavailableFeatures', '$location', '$contactNumber', '$contactMail', '$fileData', '$sellerUsername')";

        if ($conn->query($sql) === TRUE) {
            header("Location: seller_propertieslist.php");
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    
    // Close connection
    $conn->close();
}
?>