import { useState } from "react";
import List from "./List";
import Alert from "./Alert";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Enter grocery item");
    } else if (name && isEditing) {
      //handle edit
    } else {
      showAlert(true, "success", "Grocery item added");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
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
