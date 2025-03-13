<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if both username and password are provided
    if (isset($_POST['username']) && isset($_POST['password'])) {
        // Retrieve username and password from the form
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Database connection parameters
        $servername = "localhost";
        $db_username = "root";
        $db_password = ""; // Change this to your actual database password
        $dbname = "propertyvillas";

        // Create connection
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_username, $db_password);
            // Set PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Prepare SQL statement to fetch buyer details based on username
            $stmt = $conn->prepare("SELECT * FROM buyers WHERE username = :username");
            $stmt->bindParam(':username', $username);
            $stmt->execute();

            // Fetch buyer details
            $buyer = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($buyer) {
                // Verify password
                if (password_verify($password, $buyer['password'])) {
                    // Password is correct, start session and redirect to listing.php upon successful login
                    session_start();
                    $_SESSION['username'] = $username;
                    header("Location: listing.php");
                    exit();
                } else {
                    // Password is incorrect
                    echo "<p>Login failed. Incorrect password.</p>";
                }
            } else {
                // Buyer not found
                echo "<p>Login failed. Buyer not found.</p>";
            }
        } catch(PDOException $e) {
            // Display error message if database query fails
            echo "<p>Error: " . $e->getMessage() . "</p>";
        }
        // Close connection
        $conn = null;
    }
     else {
        // If either username or password is not provided, display an error message
        echo "<p>Both username and password are required.</p>";
    }

}
?>
