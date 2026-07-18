import React, { createRef } from "react";
import PureCompo from "./PureComponents";
class ParentsCompo extends React.Component {
  constructor(){
    super()
    this.componentRef = createRef()
  }
  // Using items another component in this component with Ref
  handleChangeCompoName = () =>{
    this.componentRef.current.handleChange() //second step: we refernce to any item we wants 
  }
  render() {
    return (
      <>
        <PureCompo ref={this.componentRef}/> {/* first step: we should refernce Ref in our component*/}
        <br />
        <br />
        <button className="btn btn-danger" onClick={this.handleChangeCompoName}>Test</button> {/* last step: we should set it in our btn  */}
      </>
    );
  }
}
export default ParentsCompo;
