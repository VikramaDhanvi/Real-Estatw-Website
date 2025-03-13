<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    // Redirect to the login page or display an error message
    header("Location: login.php");
    exit();
}

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

// Retrieve seller's username from session
$sellerUsername = $_SESSION['username'];

// Fetch properties uploaded by the seller
$sql = "SELECT * FROM properties_list WHERE username = '$sellerUsername'";
$result = $conn->query($sql);

// HTML for displaying properties table
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Properties Uploaded by <?php echo $sellerUsername; ?></title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }
        .navbar {
            background-color: #444;
            overflow: hidden;
        }
        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
        }
        .navbar-right {
            float: right;
        }
        table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<!-- Navbar -->
<nav>
    <div class="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <div class="navbar-right">
            <a href="home.html">Logout</a>
        </div>
    </div>
</nav>

<!-- Content -->
<div class="container">
    <h2>Properties Uploaded by <?php echo $sellerUsername; ?></h2>
    <table>
        <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Location</th>
            <th>Image</th>
            <!-- Add more table headers as needed -->
        </tr>
        <?php
        // Display properties in table rows
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["description"] . "</td>";
                echo "<td>" . $row["price"] . "</td>";
                echo "<td>" . $row["location"] . "</td>";
                // Displaying image in a table cell
                echo "<td><img src='data:image/jpeg;base64," . base64_encode($row['image_path']) . "' alt='Property Image' style='width:100px;height:100px;'></td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='4'>No properties uploaded yet.</td></tr>";
        }
        ?>
    </table>
</div>
<a href="add_property.html"><button style="background-color: #007bff; color: #fff; border: none; border-radius: 4px; padding: 10px 20px; font-size: 16px; cursor: pointer; margin-left: 150px;">Add Property</button></a>
</body>
</html>

<?php
// Close connection
$conn->close();
?>
