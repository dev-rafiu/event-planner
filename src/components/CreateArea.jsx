import React, { useState, useEffect } from "react";

function CreateArea(props) {
  const { alert, setAlert, removeAlert } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const [eventItem, setEventItem] = useState({
    name: "",
    time: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventItem({ ...eventItem, [name]: value });
  };

  const submitEventItem = (e) => {
    e.preventDefault();
    const { name, time, location, date } = eventItem;

    if (name === "" && time === "" && location === "" && date === "") {
      setAlert({ ...alert, msg: "all fields cannot be empty" });
      removeAlert();
      return;
    }

    props.onAdd(eventItem);
    setAlert({ ...alert, msg: "new event item added" });
    removeAlert();
    setEventItem({ name: "", time: "", location: "", date: "" });
  };

  return (
    <div className="form-container">
      <form className="create-form">
        <p className="alert">{alert.msg}</p>
        <input
          onChange={handleChange}
          value={eventItem.name}
          name="name"
          placeholder="add event name"
        />

        <label className="date-label">add time:</label>
        <input
          type="time"
          onChange={handleChange}
          value={eventItem.time}
          name="time"
        />

        <input
          type="text"
          onChange={handleChange}
          autoComplete="off"
          value={eventItem.location}
          name="location"
          placeholder="add location"
        />

        <label className="date-label">select date:</label>
        <input
          type="date"
          onChange={handleChange}
          autoComplete="off"
          value={eventItem.date}
          name="date"
        />

        <button className="create-event-btn" onClick={submitEventItem}>
          {isEditing ? "edit" : "create"}
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

// [] work on styling the and adding icons(open and close event item,hide and show createarea)
// [] work on local storage
