import React, { useState } from "react";
// import Input from "./Input";

function CreateArea(props) {
  const [eventItem, setEventItem] = useState({
    title: "",
    info: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventItem({ ...eventItem, [name]: value });
  };

  const submitEventItem = (e) => {
    props.onAdd(eventItem);
    setEventItem({ title: "", info: "", location: "", date: "" });
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form>
        <input
          onChange={handleChange}
          value={eventItem.title}
          name="title"
          placeholder="add title ..."
        />
        <textarea
          onChange={handleChange}
          value={eventItem.info}
          name="info"
          placeholder="more info ..."
          rows="2"
        />
        <input
          onChange={handleChange}
          autoComplete="off"
          value={eventItem.location}
          name="location"
          type="text"
          placeholder="event location ..."
        />
        <label>Choose Date:</label>
        <input
          onChange={handleChange}
          autoComplete="off"
          value={eventItem.date}
          name="date"
          type="date"
        />
        <button className="create-event-btn" onClick={submitEventItem}>
          create
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

// [] work on styling the and adding icons(open and close event item,hide and show createarea)
// [] work on local storage
