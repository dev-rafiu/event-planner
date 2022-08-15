/*import React, { Component } from "react";
import NavBar from "./components/mosh/navbar";
import Counters from "./components/mosh/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value += 1;
    this.setState({ counters: counters });
  };

  handleDelete = (id) => {
    const filteredCounts = this.state.counters.filter(
      (counter) => counter.id !== id
    );
    this.setState({ counters: filteredCounts });
  };

  render() {
    const totalCounters = this.state.counters.filter(
      (counter) => counter.value > 0
    ).length;

    return (
      <React.Fragment>
        <NavBar totalCounters={totalCounters} />
        <Counters
          handleReset={this.handleReset}
          handleIncrement={this.handleIncrement}
          handleDelete={this.handleDelete}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}
export default App;*/

// Yu
import React from "react";
// import Content from "./components/yu/App";
import CreateArea from "./components/Event Planner/App";
function App() {
  return <CreateArea />;
}
export default App;
