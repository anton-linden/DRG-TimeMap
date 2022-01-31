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

$data = json_decode(file_get_contents('php://input'), true);

$vote = $data["vote"];
$missionID = $data["missionID"];

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

if ($conn->query("UPDATE mission SET rating = rating + $vote WHERE id='$missionID'") === TRUE) {
  echo json_encode("Successful");
} else {
  echo json_encode("Failure");
}

$conn->close();
?>
