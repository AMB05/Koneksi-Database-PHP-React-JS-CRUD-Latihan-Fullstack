<?php
    include 'db.php';

    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;
    $name = $data->name;

    $sql = "UPDATE items SET name='$name' WHERE id=$id";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Item updated successfully"]);
    } else {
        echo json_encode(["error" => $conn->error]);
    }
    $conn->close();
?>


