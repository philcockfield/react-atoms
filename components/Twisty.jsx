import React from "react";
import Radium from "radium";


/**
 * A triangular bullet that toggles to express
 * an "open" or "closed" state.
 */
@Radium
export default class Twisty extends React.Component {
  styles() {
    return {
      base: {}
    };
  }

  render() {
    const styles = this.styles();
    return (
      <div style={ styles.base }>Twisty</div>
    );
  }
}

// -----------------------------------------------------------------------------
Twisty.propTypes = {
    isOpen: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    width: React.PropTypes.number,
    color: React.PropTypes.string,
    opacity: React.PropTypes.number
};
Twisty.defaultProps = {
    isOpen: false,
    width: 8,
    color: '#000',
    opacity: 0.3
};
