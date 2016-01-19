import R from "ramda";
import React from "react";
import Radium from "radium";
import { css, PropTypes } from "./react-util";

const CHILD_POSITION = ["near", "middle", "far"];
const CHILD_STYLE_PROPS = [
  "maxHeight",
  "overflow",
  "overflowY",
  "flex",
  "background"
];

const childStyle = (props) => {
    const styles = { position: "relative" };
    if (props === "*" || R.is(Number, props)) {
      // A single number is assumed to be the "flex" value.
      props = { flex: props };
    }

    // Add styles declared on the child element.
    CHILD_STYLE_PROPS.forEach(key => {
        if (props[key]) {
          styles[key] = props[key];
        }
      });

    // Finish up.
    return css(styles);
};



/**
 * Flexible spacing container.
 *
 * A spacing container providing a flexible size of content
 * with left/top-aligned (and optionally right/bottom-aligned)
 * fixed-width content.
 *
 * Example scenarios:
 *
 *      | Avatar |  ...content...   |
 *      | Avatar |  ...content...   | Checkbox |
 *
 *
 *  <FlexEdge align="horizontal">
 *    <div>left</div>
 *    <div flexEdge={1}>middle (stretched)</div>
 *    <div>right</div>
 *  </FlexEdge>
 *
 * Note the `flexEdge` property, either pass a number that will
 * be interpreted as the `flex` style to apply to the container
 * element, or pass an {object} with style properties.
 */
class FlexEdge extends React.Component {
  static propTypes = {
    orientation: PropTypes.oneOf(["horizontal", "vertical"])
  };
  static defaultProps = {
    orientation: "horizontal"
  };

  styles(children) {
    return css({
      base: {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "stretch",
        flexDirection: this.props.orientation === "vertical"
                          ? "column"
                          : "row"
      }
    });
  }

  render() {
    const children = React.Children.toArray(this.props.children);
    const styles = this.styles(children);

    // Wrap children in style containers.
    let elChildren;
    if (children.length > 0) {
      elChildren = children.map((child, i) => {
          if (child) {
            const style = child.props.flexEdge && childStyle(child.props.flexEdge);
            return <div key={i} style={ style }>{ child }</div>
          }
        });
    }
    return <div style={ styles.base }>{ elChildren }</div>;
  }
}


export default Radium(FlexEdge);
