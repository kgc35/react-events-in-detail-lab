// Code CoordinatesButton Component Here

import React from "react";

class CoordinatesButtons extends React.Component {
  clickAction(e) {
    let xcoord = e.clientX;
    let coord = e.clientY;

    this.props.onReceiveCoordinates([xcoord, ycoord]);
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.clickAction(e)}>Text</button>
      </div>
    );
  }
}

export default CoordinatesButtons;
