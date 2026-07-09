import React from "react";
import Hello from "./assets/components/Hello";
import Timer from "./assets/components/Timer";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Deadline",
    };
  }
  handleSetTitle = () => {
    this.setState({
      title: "Welcome to Deadline",
    });
  };
  render() {
    return (
      <div className="components">
        <Hello title={this.state.title} />
        <Timer eventClick={this.handleSetTitle} />
      </div>
    );
  }
}
export default App;
