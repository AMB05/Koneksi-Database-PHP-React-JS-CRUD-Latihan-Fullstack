import React, { useState } from "react";

const Form = ({ addItem, updateItem, editMode, itemToEdit, setEditMode }) => {
    const [input, setInput] = useState(editMode ? itemToEdit.name : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            updateItem(itemToEdit.id, input);
            setEditMode(false);
        } else {
            addItem(input);
        }
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter item"
            required
        />
        <button type="submit">{editMode ? "Update" : "Add"}</button>
        </form>
    );
};

export default Form;


