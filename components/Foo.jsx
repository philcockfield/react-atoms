import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";
const { numberOrString, boolOrString } = PropTypes;


/**
 * Stub component helpful for quickly laying up a
 * screen with placeholders.
 */
@Radium
export default class Foo extends React.Component {
  constructor(props) {
    super(props);
  }

  styles() {
    return css({
      base: {
        background: "rgba(255, 0, 0, 0.1)", //RED
      }
    });
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


// API -------------------------------------------------------------------------
Foo.propTypes = {
  display: PropTypes.oneOf(['none', 'block', 'inline-block', 'inline']),
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
  isDashed: PropTypes.bool,
  border: boolOrString,
  absolutePosition: numberOrString,
  fill: PropTypes.bool,
  boxShadow: numberOrString
};
Foo.defaultProps = {
  display: 'block',
  padding: 10,
  radius: 0,
  fontSize: 16,
  background: 'rgba(255, 0, 0, 0.1)',
  color: '#000',
  isDashed: true,
  fill: false
};
