<?php
    include 'db.php';

    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;

    $sql = "DELETE FROM items WHERE id=$id";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Item deleted successfully"]);
    } else {
        echo json_encode(["error" => $conn->error]);
    }
    $conn->close();
?>


