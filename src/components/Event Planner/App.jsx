import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EventItem from "./EventItem";
import CreateArea from "./CreateArea";
// import "./styles.css";

function App() {
  const [eventItems, setEventItems] = useState([]);

  const addNote = (newItem) => {
    setEventItems([...eventItems, newItem]);
  };

  const handleDelete = (id) => {
    setEventItems((prevItem) => {
      return prevItem.filter((item, index) => index !== id);
    });
  };

  return (
    <React.Fragment>
      <Header />
      <section className="section-center">
        <CreateArea onAdd={addNote} />
        <div className="event-items-container">
          {eventItems.map((item, index) => (
            <EventItem
              key={index}
              id={index}
              item={item}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default App;
