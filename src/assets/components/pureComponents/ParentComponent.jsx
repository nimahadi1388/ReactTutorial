import React from "react";
import PureComponents from "./PureComponent";
class ParentComponent extends React.Component {
  render() {
    return (
      <>
        <PureComponents />
      </>
    );
  }
}
export default ParentComponent;
