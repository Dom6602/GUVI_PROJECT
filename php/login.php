<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "register";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


$Username = $_POST['username'];
$Pass = $_POST['password'];



$sql = "SELECT username, pass FROM register_table WHERE username = '$Username' and pass = '$Pass'";

$d = mysqli_query($conn, $sql);


$num = mysqli_num_rows($d);

if ($num>0) 
{
    header("Location:http://localhost/profile.html");
}    
else 
{
    echo '<script> alert("User not exists or invalid password"); window.location.href="http://localhost/login.html";</script>';
    
}

mysqli_close($conn);
?>