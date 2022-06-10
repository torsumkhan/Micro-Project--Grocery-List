import { useState } from "react";
import List from "./List";
import Alert from "./Alert";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
    } else if (name && isEditing) {
      //handle edit
    } else {
      //show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert />}
        <h3 className="title">Grocery List</h3>
        <input
          id="input"
          type="text"
          placeholder="e.g. milk"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="submit-btn">
          {isEditing ? "edit" : "add"}
        </button>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button
            className="clear-btn"
            onClick={() => {
              setList([]);
            }}
          >
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
