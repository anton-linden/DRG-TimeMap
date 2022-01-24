<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'timemap';

// $servername = 'localhost';
// $username = 'adm';
// $password = 'myserverx';
// $dbname = 'timemap';

if (isset($_GET['ID'])) {
    $ID = $_GET['ID'];
} else {
    exit("WARNING, No location ID was given");
}

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$result = $conn->query("SELECT name FROM `location` WHERE id=$ID");
echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

$conn->close();
?>
