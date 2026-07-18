// -------------- Class Type -----------------
import React from "react";
import PureComponents from "./PureComponent";
class ParentComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Nima",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: `Nima ${new Date().toLocaleTimeString()}`,
      });
    }, 1000);
  }
  render() {
    // console.log("--------------------Parent components--------------------");
    return (
      <>
        <PureComponents name={this.state.name} />
      </>
    );
  }
}
export default ParentComponent;
