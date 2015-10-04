import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";
import Text from "./Text";
import Twisty from "../Twisty";


/**
 * A single value of any type (with optional key and expansion toggle).
 */
@Radium
export default class Value extends React.Component {
  styles() {
    return css({
      base: {}
    });
  }

  render() {
    const styles = this.styles();
    const { label, italic, size } = this.props;
    const textProps = { italic, size };

    console.log("props", this.props);

    const elLabel = label ? <Text color="purple" { ...textProps }>{ label }</Text> : null


    return (
      <div style={ styles.base }>
        { elLabel }
        { elLabel ? <Text { ...textProps }>:</Text> : null }
      </div>
    );
  }
}

// API -------------------------------------------------------------------------
Value.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  italic: PropTypes.bool,
  size: PropTypes.numberOrString
};
Value.defaultProps = {};
