<?php

session_start();

$con = mysqli_connect('localhost','root','','register');

mysqli_select_db($con, 'register');

$UserName = $_POST['username'];
$Pass = $_POST['password'];
$Email = $_POST['email'];


$s = " select * from register_table where username = '$UserName'";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);

if ($num == 1)
{
    echo '<script> alert("Username already taken."); window.location.href="http://localhost/login.html";</script>';
}
else
{
    $reg = " insert into register_table(username , pass , email) values ('$UserName','$Pass','$Email')";
    mysqli_query($con, $reg);
    // echo" Registration Successful";
    echo '<script type="text/javascript">
           window.location = "http://localhost/register_popup.html"
    </script>';
}

?>





