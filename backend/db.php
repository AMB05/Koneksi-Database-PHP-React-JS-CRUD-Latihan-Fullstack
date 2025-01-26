<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "react_php_crud";

// Enable error reporting
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conn = new mysqli($host, $username, $password, $database);
    // Set charset to UTF-8
    $conn->set_charset("utf8");
} catch (mysqli_sql_exception $e) {
    // Handle connection error
    echo json_encode(["error" => "Connection failed: " . $e->getMessage()]);
    exit();
}

// Your database operations go here

// Close the connection when done
$conn->close();
?>