<?php  
    include 'db.php';  

    $data = json_decode(file_get_contents("php://input"));  

    // Check if name is set  
    if (isset($data->name)) {  
        $name = $data->name;  

        // Prepare the SQL statement  
        $stmt = $conn->prepare("INSERT INTO items (name) VALUES (?)");  
        $stmt->bind_param("s", $name);  

        // Execute the statement  
        if ($stmt->execute()) {  
            echo json_encode(["message" => "Item added successfully"]);  
        } else {  
            echo json_encode(["error" => $stmt->error]);  
        }  

        // Close the statement and connection  
        $stmt->close();  
    } else {  
        echo json_encode(["error" => "Name is required"]);  
    }  

    $conn->close();  
?>