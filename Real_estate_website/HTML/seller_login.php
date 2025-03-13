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
        $db_password = "";
        $dbname = "propertyvillas";

        // Create connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_username, $db_password);

        // Set PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        try {
            // Prepare SQL statement to fetch seller details based on username
            $stmt = $conn->prepare("SELECT * FROM sellers WHERE username = :username");
            $stmt->bindParam(':username', $username);
            $stmt->execute();

            // Fetch seller details
            $seller = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($seller) {
                // Verify password
                if (password_verify($password, $seller['password'])) {
                    // Password is correct, start session and redirect to add_property.php upon successful login
                    session_start();
                    $_SESSION['username'] = $username;
                    header("Location: seller_propertieslist.php");
                    exit();
                } else {
                    // Password is incorrect
                    echo "<p>Login failed. Incorrect password.</p>";
                }
            } else {
                // Seller not found
                echo "<p>Login failed. Seller not found.</p>";
            }
        } catch(PDOException $e) {
            // Display error message if database query fails
            echo "<p>Error: " . $e->getMessage() . "</p>";
        }

        // Close connection
        $conn = null;
    } else {
        // If either username or password is not provided, display an error message
        echo "<p>Both username and password are required.</p>";
    }
}
?>