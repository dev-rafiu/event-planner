import React from "react";
function Event(props) {
  const { title, info, location, date } = props.item;
  return (
    <article className="event-item">
      <div className="header">
        <h2 className="title">{title}</h2>
        <span className="event-status">Status:pending</span>
        <button className="open-btn btn">^</button>
      </div>

      <div className="content">
        <p className="info">{info}</p>
        <p className="location">
          <span className="location-icon">
            {/* <i class="fa-solid fa-location-dot"></i> */}
          </span>
          {location}
        </p>
        <p className="date">
          <span className="date-icon">
            {/* <i class="fa-solid fa-calendar-days"></i> */}
          </span>{" "}
          {date}
        </p>

        <div className="action-btns">
          <button className="action-btn btn-edit">e</button>
          <button className="action-btn btn-delete">d</button>
          <button className="action-btn btn-complete">c</button>
        </div>
      </div>
    </article>
  );
}
export default Event;
