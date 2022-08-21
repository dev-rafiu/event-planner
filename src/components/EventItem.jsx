import React, { useState } from "react";
function Event(props) {
  const { alert, setAlert, removeAlert } = props;
  const { name, time, location, date } = props.item;
  const [expanded, setExpanded] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { onEdit } = props;

  const handleExpand = () => {
    !expanded ? setExpanded(true) : setExpanded(false);
  };

  const handleComplete = () => {
    setCompleted(true);
    // console.log(200, "ok");
  };

  const onDelete = () => {
    props.onDelete(props.id);
    setAlert("item deleted");
    removeAlert();
  };

  return (
    <article
      className="event-item"
      style={{ color: completed && "hsl(0, 0%, 70%)" }}
    >
      <div className="header">
        <h2 className="title">{name}</h2>
        <p className="status">{completed && "this event has taken place"}</p>
        <button
          onClick={handleExpand}
          className="expand-btn btn"
          style={{ transform: expanded ? "rotate(180deg)" : "none" }}
        >
          <i className="fa-solid fa-angle-down expand-icon"></i>
        </button>
      </div>

      <div
        className="container"
        style={{ display: expanded ? "block" : "none" }}
      >
        <p className="time">
          <span className="clock-icon">
            <i className="fa-solid fa-clock"></i>
          </span>
          {time}
        </p>
        <p className="location">
          <span
            className="location-icon"
            style={{ display: !location && "none" }}
          >
            <i className="fa-solid fa-location-dot"></i>
          </span>
          {location}
        </p>
        <p className="date">
          <span className="date-icon" style={{ display: !date && "none" }}>
            <i className="fa-solid fa-calendar-days"></i>
          </span>
          {date}
        </p>
        {/* action buttons */}
        <div className="action-btns">
          <button
            className="action-btn edit-btn"
            onClick={() => props.onEdit(props.item)}
          >
            e<i className="fa-solid fa-pen-to-square"></i>
          </button>

          <button className="action-btn delete-btn" onClick={onDelete}>
            <i className="fa-solid fa-trash-can"></i>d
          </button>

          <button onClick={handleComplete} className="action-btn check-btn">
            <i className="fa-solid fa-check"></i>c
          </button>
        </div>
      </div>
    </article>
  );
}
export default Event;
