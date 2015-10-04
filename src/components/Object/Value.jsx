import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";
import Text from "./Text";
import Twisty from "../Twisty";
import Primitive, { isPrimitive } from "./Primitive";


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
    const { label, italic, size, value } = this.props;
    const textProps = { italic, size };
    const elLabel = label && <Text color="purple" { ...textProps }>{ label }</Text>

    let elValue;
    if (isPrimitive(value)) {
      elValue = <Primitive value={ value } { ...textProps }/>
    }

    return (
      <div style={ styles.base }>
        { elLabel }
        { elLabel && <Text { ...textProps } marginRight={4}>:</Text> }
        { elValue }
      </div>
    );
  }
}

// API -------------------------------------------------------------------------
Value.propTypes = {
  value: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  label: PropTypes.string,
  italic: Text.propTypes.italic,
  size: Text.propTypes.size
};
Value.defaultProps = {
  italic: Text.defaultProps.italic,
  size: Text.defaultProps.size
};
