// Code DelayedButton Component Here

import React from "react";

class DelayedButton extends React.Component {
  clickAction(e) {
    // e.persist();
    let xcoord = e.clientX;
    let ycoord = e.clientY;

    setTimeout(
      () => this.props.onDelayedClick([xcoord, ycoord]),
      this.props.delay
    );
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.clickAction(e)}>Delayed Button</button>
      </div>
    );
  }
}

export default DelayedButton;
