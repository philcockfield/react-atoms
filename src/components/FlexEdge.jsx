import R from "ramda";
import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";

const CHILD_POSITION = ["near", "middle", "far"];



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
  styles() {
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
      near: { position: "relative" },
      middle: {
        position: "relative",
        flex: 1
      },
      far: { position: "relative" }
    });
  }

  render() {
    const styles = this.styles();
    const children = React.Children.toArray(this.props.children);

    // TODO:
    console.log("TODO: Take only the first 3 children");

    // Wrap children in style containers.
    let elChildren;
    if (children.length > 0) {
      elChildren = children.map((child, i) => {
          const style = styles[CHILD_POSITION[i]];
          return <div key={i} style={ style }>
                   { child }
                 </div>
        });
    }
    return <div style={ styles.base }>{ elChildren }</div>;
  }
}

// API -------------------------------------------------------------------------
FlexEdge.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};
FlexEdge.defaultProps = {
  orientation: "horizontal"
};
