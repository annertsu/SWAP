<?php

$name= $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

//Database Connection
$conn = new mysqli('localhost','anner','Yayoichan97','swap_db_anner');

if($conn -> connect_error){
    echo "$conn -> connect_error";
    die('Connection Failed : '.$conn->connect_error);
} else {
    // Check if email is valid
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        exit('Email is not valid!');
    }
    // We need to check if the account with that username exists
    if ($stmt = $conn->prepare('SELECT id, password FROM signup WHERE email = ?')) {
        // Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->store_result();
        // Store the result so we can check if the account exists in the database
        if ($stmt->num_rows > 0) {
            // Email already exists
            header('Location: exists.html');
        } else {
            $stmt = $conn -> prepare("insert into signup(name, email, password) values(?, ?, ?)");
            $stmt -> bind_param("sss", $name, $email, $password);
            $stmt->execute();
            header('Location: thanks.html');
            $stmt -> close();
            $conn -> close();
        }
    }
}

?>
