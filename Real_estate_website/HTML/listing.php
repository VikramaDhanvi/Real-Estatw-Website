<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Property Search</title>
  <link rel="stylesheet" href="listing.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8f8f8;
    }

    .navbar {
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
    }

    .navbar ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    .navbar li {
      display: inline;
      margin-right: 10px;
    }

    .navbar li a {
      text-decoration: none;
      color: #fff;
    }

    .container {
      max-width: 800px;
      margin: 80px auto 0;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .property {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
    }

    .property img {
      width: 40%;
      border-radius: 5px;
      margin-right: 10px;
    }

    .property-details {
      flex: 1;
    }

    .property-details h2 {
      margin-top: 0;
    }

    .property-details span {
      display: block;
      margin-bottom: 10px;
    }

    .contact-button {
      padding: 8px 15px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
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
    margin-bottom: -175%;
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
<nav class="navbar">
  <ul>
    <li><a href="home.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <?php
    session_start();
    if(isset($_SESSION['username'])) {
      $username = $_SESSION['username'];
      echo "<span style='color: #fff; margin-right: 10px;'>Welcome $username</span>";
    }
  ?>
  <a href="logout.php" style="color: #fff; text-decoration: none;">Sign Out</a>
</nav>
<div class="container">
  <h1>Property Search</h1>
  <div id="property-listings" class="property-listings">
    <?php
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

      // Query to fetch properties from the database
      $sql = "SELECT * FROM properties_list";
      $result = $conn->query($sql);

      // Check if properties exist
      if ($result->num_rows > 0) {
          // Output data of each row
          while($row = $result->fetch_assoc()) {
              echo "<div class='property'>";
              echo "<img src='data:image/jpeg;base64,".base64_encode($row['image_path'])."' alt='Property Image'>";
              echo "<div class='property-details'>";
              echo "<h2>" . $row["location"] . "</h2>";
              echo "<span>Description: " . $row["description"] . "</span>";
              echo "<span>Price: $" . $row["price"] . "</span>";
              echo "<span>Contact: " . $row["contact_number"] . "</span>";
              echo "</div>"; // Close property-details
              /// Add a link to contact.php with property ID as parameter
              echo "<a href='contact.php?property_id=" . urlencode($row["id"]) . "' class='contact-button'>Contact</a>";
              echo "</div>"; // Close property
          }
      } else {
          echo "No properties found";
      }

      // Close connection
      //$conn->close();
    ?>
  </div>
</div>
<footer class="footer">
  <section class="flex">
      <div class="box">
          <a href="tel:1234567890"><i class="fas fa-phone"></i><span>123456789</span></a>
          <a href="tel:1112223333"><i class="fas fa-phone"></i><span>1112223333</span></a>
          <a href="mailto:vikramadhanvi_paduchuri@srmap.edu.in"><i class="fas fa-envelope"></i><span>vikramadhanvi_paduchuri@srmap.edu.in</span></a>
          <a href="#"><i class="fas fa-map-marker-alt"></i><span>Guntur - 522002, Andhra Pradesh</span></a>
      </div>

      <div class="box">
          <a href="home.html"><span>Home</span></a>
          <a href="about.html"><span>About</span></a>
          <a href="contact.html"><span>Contact</span></a>
          <a href="index.php"><span>All Listings</span></a>
          <a href="#"><span>Saved Properties</span></a>
      </div>

      <div class="box">
          <a href="#"><span>Facebook</span><i class="fab fa-facebook-f"></i></a>
          <a href="#"><span>Twitter</span><i class="fab fa-twitter"></i></a>
          <a href="#"><span>LinkedIn</span><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><span>Instagram</span><i class="fab fa-instagram"></i></a>
      </div>
  </section>

  <div class="credit">&copy; Copyright @ 2022 by <span>Group 16</span> | All rights reserved!</div>
</footer>
</body>
</html>
