// -------------- Class Type -----------------

import { memo } from "react";

// import React from "react";
// class PureComponents extends React.PureComponent{
//     render(){
//         console.log('Pure components');

//         return(
//             <>
//                 <h1>Pure Components: {this.props.name}</h1>
//             </>
//         )
//     }
// }
// export default PureComponents

// -------------- Function Type -----------------
const PureComponents = (props) => {
  return (
    <>
      <h1>Pure Components: {props.name}</h1>
    </>
  );
};
export default memo(PureComponents);
