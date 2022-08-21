import React, { useState } from "react";
import Header from "./components/Header";
import EventItem from "./components/EventItem";
import CreateArea from "./components/CreateArea";

function App() {
  const [eventList, setEventList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const removeAlert = () => {
    setTimeout(() => {
      setAlert({ show: false, msg: "", type: "" });
    }, 2000);
  };

  const addEventItem = (newItem) => {
    setEventList([...eventList, newItem]);
  };

  const handleEdit = (item) => {
    console.log(123);
    console.log(item);
  };

  const handleDelete = (id) => {
    setEventList((prevList) => {
      return prevList.filter((item, index) => index !== id);
    });
  };

  return (
    <React.Fragment>
      <Header />
      <section className="section-center">
        <CreateArea
          onAdd={addEventItem}
          alert={alert}
          setAlert={setAlert}
          removeAlert={removeAlert}
        />
        <div className="event-items-container">
          {eventList.map((item, index) => (
            <EventItem
              key={index}
              id={index}
              item={item}
              onEdit={handleEdit}
              onDelete={handleDelete}
              alert={alert}
              setAlert={setAlert}
              removeAlert={removeAlert}
            />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
