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

if (isset($_GET['typeID'])) {
    $typeID = $_GET['typeID'];
} else {
    exit("WARNING, No typeID was gotten");
}

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$result = $conn->query("SELECT name, imagePath FROM `missiontype` WHERE id=$typeID");
echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

$conn->close();
?>
