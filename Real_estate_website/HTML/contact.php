<?php
session_start();

// Define variables for alert message
$alert_message = "";

// Check if username is set in the session
if (!isset($_SESSION['username'])) {
    header("Location: login.php"); // Redirect to the login page if user is not logged in
    exit;
}

// Check if property_id is defined
if (!isset($_GET['property_id'])) {
    header("Location: error.php"); // Redirect to an error page if property ID is not provided
    exit;
}

$property_id = $_GET['property_id'];

// Database connection parameters
$servername = "localhost";
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "propertyvillas"; // Your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); // Display error message and terminate execution
}

// Function to retrieve buyer's email from the buyers table
function getBuyerEmail($username, $conn)
{
    $sql = "SELECT email FROM buyers WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row['email'];
    } else {
        return null;
    }
}

// Function to retrieve contact email from properties_list table
function getContactEmail($property_id, $conn)
{
    $sql = "SELECT contact_mail FROM properties_list WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $property_id);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row['contact_mail'];
    } else {
        return null;
    }
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $from = getBuyerEmail($_SESSION['username'], $conn);
    $to = getContactEmail($property_id, $conn);
    $purpose = $_POST['purpose'];
    $message = $_POST['message'];
    $created_at = date("Y-m-d H:i:s"); // Current timestamp

    // Save message to the messages table
    $sql = "INSERT INTO messages (from_email, to_email, purpose, message, created_at) VALUES ($from, $to, $purpose, $message, $created_at)";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        // Redirect to an error page if SQL statement preparation fails
        $error_message = "SQL statement preparation error: " . $conn->error;
        header("Location: error.php?error=" . urlencode($error_message));
        exit;
    } else {
        $stmt->bind_param("sssss", $from, $to, $purpose, $message, $created_at);
        if (!$stmt->execute()) {
            // Redirect to an error page if SQL statement execution fails
            $alert_message = "Message could not be sent";
        } else {
            // Set success message for alert
            $alert_message = "Message sent successfully";
        }
    }
    echo "<script>alert('$alert_message');</script>";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form</title>
  <link rel="stylesheet" href="contact.css">
  <script>
    function composeEmail() {
        var to_email = "<?php echo getContactEmail($property_id, $conn); ?>";
        var message = document.getElementById('message').value;
        var purpose = document.getElementById('purpose').value;
        var subject = "Interested in Property (Purpose: " + purpose + ")";
        var name = "<?php echo $_SESSION['username']; ?>";

        if (purpose === '') {
            alert('Please select a valid purpose.');
            return;
        } 

        if (purpose === 'Rent purpose') {
            message = "Hello, I am " + name + ". I am interested in renting your property with the following details:\n\n" + message;
        } else if (purpose === 'Buying purpose') {
            message = "Hello, I am " + name + ". I am interested in buying your property with the following details:\n\n" + message;
        }

        var encodedMessage = encodeURIComponent(message);
        var encodedSubject = encodeURIComponent(subject);

        var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + to_email + "&su=" + encodedSubject + "&body=" + encodedMessage;

        window.open(gmailUrl, '_blank');
    }

    // Function to display alert message
    function showAlert(message) {
        alert(message);
    }

    // Form submission handler
    function handleFormSubmit(event) {
        event.preventDefault();
        showAlert('<?php echo $alert_message; ?>');
        composeEmail();
    }
  </script>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 50px auto;
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      color: #555;
    }

    input[type="email"],
    select,
    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    input[type="email"]:read-only {
      background-color: #e9e9e9;
    }

    button {
      display: block;
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    p {
      color: red;
      text-align: center;
    }
    nav {
    position: relative;
    top: 0;
    left: 0;
    width: 100%; 
    background-color: white;
    color: #fff;
    padding: 40px;
    background-color: #333;
  }
  
  nav ul {
    list-style-type: none;
    display: flex;
  }
  
  nav ul li {
    margin-right: 20px;
  }
  
  nav ul li:last-child {
    margin-right: 0;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #fff;
    padding: 10px 15px;
    display: block;
  }
  
  nav ul li a:hover {
    background-color: #555; 
  }
  .account{
    float:right;
    margin-top: -55px;
  }
  nav{
    padding: 0px;
    margin-top:-20px;
  }
  /* Footer Styles */

.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 40px;
    text-align: center;
    box-sizing: border-box;
    z-index: 1000;
    margin-bottom: -30%;
  }
  
  .footer .flex {
    display: flex;
    justify-content: space-between;
  }
  
  .footer .box {
    flex: 1;
  }
  
  .footer .box a {
    display: block;
    text-decoration: none;
    color: #fff;
    margin-bottom: 10px;
  }
  
  .footer .box a i {
    margin-right: 10px;
  }
  
  .footer .credit {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
  }
  
  .footer .credit span {
    font-weight: bold;
  }
  
  </style>
</head>
<body>
    <nav class="navigation">
        <ul class="navbar">
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <ul class="account" >
          <li><a href="choice_login.html">Login</a></li>
          <li><a href="choice_regd.html">sign up</a></li>
        </ul>
    
  </nav>
  <div class="container">
    <h2>Contact Seller</h2>
    <form id="contact-form" method="post" onsubmit="handleFormSubmit(event)">
      <div class="form-group">
        <label for="to_email">To:</label>
        <?php
        $to_email = getContactEmail($property_id, $conn);
        if ($to_email) {
            echo '<input type="email" id="to_email" name="to_email" value="' . $to_email . '" readonly>';
        } else {
            echo '<p>Error: To email address not found.</p>';
        }
        ?>
      </div>
      <div class="form-group">
        <label for="purpose">Select your purpose of buying the house:</label>
        <select id="purpose" name="purpose">
          <option value="">Select Purpose</option>
          <option value="Rent purpose">Rent purpose</option>
          <option value="Buying purpose">Buying purpose</option>
        </select>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <input type="hidden" name="property_id" value="<?php echo $property_id; ?>">
      <button type="submit">Send Message</button>
    </form>

    <footer class="footer">
        <section class="flex">
            <div class="box">
                <a href="tel:1234567890"><i class="fas fa-phone"></i><span>123456789</span></a>
                <a href="tel:1112223333"><i class="fas fa-phone"></i><span>1112223333</span></a>
                <a href="mailto:vikramadhanvi_paduchuri@srmap.edu.in"><i class="fas fa-envelope"></i><span>vikramadhanvi_paduchuri@srmap.edu.in</span></a>
                <a href="#"><i class="fas fa-map-marker-alt"></i><span>Guntur - 522002,Andhra Pradesh</span></a>
            </div>

            <div class="box">
                <a href="home.html"><span>Home</span></a>
                <a href="about.html"><span>About</span></a>
                <a href="contact.html"><span>Contact</span></a>
                <a href="listings.html"><span>All Listings</span></a>
                <a href="#"><span>Saved Properties</span></a>
            </div>

            <div class="box">
                <a href="#"><span>Facebook</span><i></i></a>
                <a href="#"><span>Twitter</span><i></i></a>
                <a href="#"><span>Linkedin</span><i ></i></a>
                <a href="#"><span>Instagram</span><i ></i></a>
            </div>
        </section>

        <div class="credit">&copy; Copyright @ 2024 by <span>Group 16</span> | All rights reserved!</div>
    </footer>
  </div>
</body>
</html>
