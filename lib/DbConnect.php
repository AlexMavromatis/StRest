<?php

function DBconnect(){

$user= "root";
$pass= "";

try {
    $conn = new PDO('mysql:host=localhost;dbname=/banks', $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $conn;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}}

?>

