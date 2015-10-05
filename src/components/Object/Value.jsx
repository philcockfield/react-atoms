import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";
import Text from "./Text";
import Twisty from "../Twisty";
import Primitive, { isPrimitive } from "./Primitive";
import Complex from "./Complex";


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
    const { label, italic, size, value, isExpanded, level } = this.props;
    const textProps = { italic, size };
    const elLabel = label && <Text color="purple" { ...textProps }>{ label }</Text>

    let elValue;
    if (isPrimitive(value)) {
      elValue = <Primitive value={ value } { ...textProps }/>;
    } else {
      elValue = <Complex
                  value={ value }
                  level={ level }
                  label={ level === 0 }
                  isExpanded={ isExpanded }
                  { ...textProps }/>;
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
  size: Text.propTypes.size,
  level: PropTypes.number,
  isExpanded: PropTypes.bool,
};
Value.defaultProps = {
  italic: Text.defaultProps.italic,
  size: Text.defaultProps.size,
  level: 0,
  isExpanded: false
};
