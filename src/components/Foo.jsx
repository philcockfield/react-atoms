import R from "ramda";
import React from "react";
import Radium from "radium";
import { css, PropTypes } from "./util";
const { numberOrString, boolOrString } = PropTypes;


/**
 * Stub component helpful for quickly laying up a
 * screen with placeholders.
 */
class Foo extends React.Component {
  static propTypes = {
    display: PropTypes.oneOf(["none", "block", "inline-block", "inline"]),
    width: numberOrString,
    height: numberOrString,
    minWidth: numberOrString,
    minHeight: numberOrString,
    padding: numberOrString,
    margin: numberOrString,
    marginTop: numberOrString,
    marginBottom: numberOrString,
    marginLeft: numberOrString,
    radius: numberOrString,
    fontSize: numberOrString,
    background: boolOrString,
    color: PropTypes.string,
    dashed: PropTypes.bool,
    border: boolOrString,
    absolute: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(numberOrString)
    ]),
    shadow: numberOrString
  };
  static defaultProps = {
    display: "block",
    padding: 10,
    radius: 0,
    fontSize: 16,
    background: "rgba(255, 0, 0, 0.1)",
    color: css.black.toString(),
    dashed: true
  };


  styles() {
    // Background.
    let background = this.props.background;
    if (background === false) { background = null; }
    if (background === true) { background = Foo.defaultProps.background; }

    // Border.
    const borderStyle = this.props.dashed ? "dashed" : "solid";
    const defaultBorder = `${ borderStyle } 1px rgba(0, 0, 0, 0.3)`;
    let border = this.props.border;
    if (R.is(Boolean, border)) {
      border = border ? defaultBorder : "solid 1px transparent";
    } else {
      border = R.is(String, border) ? border : defaultBorder;
    }

    // Shadow.
    let boxShadow = this.props.shadow;
    if (R.is(Number, boxShadow)) {
      boxShadow = `0px 3px 10px 5px rgba(0,0,0, ${ boxShadow })`;
    }

    const base = {
      fontFamily: "'Helvetica Neue', sans-serif",
      fontWeight: 400,
      boxSizing: "border-box",

      background,
      border,
      boxShadow,

      Absolute: this.props.absolute,
      display: this.props.display,
      padding: this.props.padding,
      color: this.props.color,
      borderRadius: this.props.radius,
      width: this.props.width,
      height: this.props.height,
      minWidth: this.props.minWidth,
      minHeight: this.props.minHeight,
      fontSize: this.props.fontSize,
      margin: this.props.margin,
      marginTop: this.props.marginTop,
      marginBottom: this.props.marginBottom,
      marginLeft: this.props.marginLeft,
      marginRight: this.props.marginRight,
    };


    return css({ base: base });
  }

  render() {
    const styles = this.styles();
    return (
      <div style={ styles.base }>
        { this.props.children }
      </div>
    );
  }
}


export default Radium(Foo);
