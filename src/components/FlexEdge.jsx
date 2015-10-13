import R from "ramda";
import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";

const CHILD_POSITION = ["near", "middle", "far"];
const CHILD_STYLE_PROPS = [
  "maxHeight",
  "overflow",
  "overflowY",
];


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
 */
@Radium
export default class FlexEdge extends React.Component {
  styles(children) {
    const position = (index, styles = {}) => {
        const child = children[index];
        if (child && child.props.flexEdge) {
          // Add styles declared on the child element.
          CHILD_STYLE_PROPS.forEach(key => {
            if (child.props.flexEdge[key]) {
              styles[key] = child.props.flexEdge[key];
            }
          });
        }
        return styles;
      };

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
      },
      near: position(0, { position: "relative" }),
      middle: position(1, {
        position: "relative",
        flex: 1
      }),
      far: position(2, { position: "relative" })
    });
  }

  render() {
    const children = React.Children.toArray(this.props.children);
    const styles = this.styles(children);

    // Wrap children in style containers.
    let elChildren;
    if (children.length > 0) {
      elChildren = children.map((child, i) => {
            const style = styles[CHILD_POSITION[i]];
            return <div key={i} style={ style }>
                     { child }
                   </div>
          });
      elChildren = R.take(3, elChildren);
    }
    return <div style={ styles.base }>{ elChildren }</div>;
  }
}

// API -------------------------------------------------------------------------
FlexEdge.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"])
};
FlexEdge.defaultProps = {
  orientation: "horizontal"
};
