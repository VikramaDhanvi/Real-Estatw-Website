<?php
// Check if the success parameter is set in the URL
if (isset($_GET['success']) && $_GET['success'] === 'true') {
    // If success parameter is true, display success message
    echo "<h1>Message sent successfully!</h1>";
} else {
    // If success parameter is not set or not true, display error message
    echo "<h1>Error: Message could not be sent.</h1>";
}
?>