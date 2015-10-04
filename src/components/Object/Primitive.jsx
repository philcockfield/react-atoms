import R from "ramda";
import React from "react";
import { css, PropTypes } from "js-util/react";
import Text from "./Text";

const COLORS = {
  "Null": "lightGrey",
  "Undefined": "lightGrey",
  "String": "red",
  "Number": "blue",
  "Boolean": "blue"
};



/**
 * A primitive/simple value.
 */
export default class Primitive extends React.Component {
  render() {
    let { value } = this.props;
    const type = R.type(value);
    switch (type) {
      case "Undefined": value = "<undefined>"; break;
      case "Null": value = "<null>"; break;
      case "Boolean": value = value.toString(); break;
      case "String": value = `“${ value }”`; break;
    }
    return (
      <Text color={ COLORS[type] } { ...this.props }>{ value }</Text>
    );
  }
}

// API -------------------------------------------------------------------------
Primitive.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  inline: Text.propTypes.inline,
  italic: Text.propTypes.italic,
  size: Text.propTypes.size
};
Primitive.defaultProps = {};
