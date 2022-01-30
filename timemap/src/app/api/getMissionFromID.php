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

if (isset($_GET['id'])) {
    $id = $_GET['id'];
} else {
    exit("WARNING, No mission id was given");
}

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$result = $conn->query("SELECT id, type, location, `datetime`, amount, length, complexity FROM `mission` WHERE id=$id");
echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

$conn->close();
?>
