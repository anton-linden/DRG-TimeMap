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
    exit("WARNING, No mission id was gotten");
}

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$result = $conn->query("SELECT mutatorsonmission.mutator, mutators.name, mutators.hazardBonus, mutators.imagePath
FROM `mutatorsonmission`
INNER JOIN mutators ON mutatorsonmission.mutator=mutators.id
WHERE mutatorsonmission.mission=$id");
echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

$conn->close();
?>
