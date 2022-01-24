<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'timemap';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$result = $conn->query("SELECT id, type, location, `datetime`, amount FROM `mission` ORDER BY `mission`.`id` ASC");
echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

$conn->close();
?>
