import R from "ramda";
import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";

export const FONT_MONO = "Menlo, monospace";
export const COLORS = {
  black: "#000",
  darkGrey: "#303942",
  lightGrey: "#C8C8C8",
  red: "#C9214C",
  brown: "#9B4500",
  green: "#007500",
  blue: "#180AA9",
  purple: "#AC0093"
};


/**
 * Text display with commonly used style properties.
 */
@Radium
export default class Text extends React.Component {
  styles() {
    return css({
      base: {
        fontFamily: FONT_MONO,
        fontSize: this.props.size,
        fontWeight: "normal",
        fontStyle: this.props.italic ? "italic" : "normal",
        color: COLORS[this.props.color]
      }
    });
  }

  render() {
    const styles = this.styles();
    return this.props.inline
        ? <span style={ styles.base }>{ this.props.children }</span>
        : <div style={ styles.base }>{ this.props.children }</div>
  }
}


// API -------------------------------------------------------------------------
Text.propTypes = {
  inline: PropTypes.bool,
  italic: PropTypes.bool,
  size: PropTypes.numberOrString,
  color: PropTypes.oneOf(Object.keys(COLORS)),
};
Text.defaultProps = {
  inline: true,
  italic: false,
  size: 12,
  color: "darkGrey"
};
