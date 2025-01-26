import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [items, setItems] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  // Fetch items from the backend
  const fetchItems = async () => {
    const response = await axios.get("http://localhost/koneksi_crud_fullstack/backend/read.php");
    setItems(response.data);
  };
  // Add item
  const addItem = async (name) => {
    await axios.post("http://localhost/koneksi_crud_fullstack/backend/create.php", { name });
    fetchItems();
  };
  // Update item
  const updateItem = async (id, name) => {
    await axios.post("http://localhost/koneksi_crud_fullstack/backend/update.php", { id, name });
    fetchItems();
  };
  // Delete item
  const deleteItem = async (id) => {
    await axios.post("http://localhost/koneksi_crud_fullstack/backend/delete.php", { id });
    fetchItems();
  };
  // Edit item
  const editItem = (item) => {
    setEditMode(true);
    setItemToEdit(item);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>React & PHP CRUD</h1>
      <Form
        addItem={addItem}
        updateItem={updateItem}
        editMode={editMode}
        itemToEdit={itemToEdit}
        setEditMode={setEditMode}
      />
      <Table items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
};

export default App;

