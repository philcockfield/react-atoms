import React from "react";
import Radium from "radium";


/**
 * Centers content vertically and/or horizontally.
 */
class Center extends React.Component {
  static propTypes = {
    horizontal: React.PropTypes.bool,
    vertical: React.PropTypes.bool
  };
  static defaultProps = {
    horizontal: true,
    vertical: true
  };

  styles() {
    const { horizontal, vertical } = this.props;
    let transform = "";
    if (horizontal && vertical) {
      transform = "translate(-50%, -50%)";
    } else {
      if (horizontal) { transform = "translateX(-50%)"; }
      if (vertical) { transform = "translateY(-50%)"; }
    }

    return {
      base: {
        display: "inline-block",
        position: "absolute",
        left: horizontal ? "50%" : 0,
        top: vertical ? "50%": 0,
        transform: transform
      }
    };
  }

  render() {
    const styles = this.styles();
    return (
      <div style={ styles.base }>{ this.props.children }</div>
    );
  }
}


export default Radium(Center);
