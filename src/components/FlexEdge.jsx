import R from "ramda";
import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";


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
      base: {}
    });
  }

  render() {
    const styles = this.styles();
    let { children } = this.props;


    console.log("React.Children", React.Children);
    const f = React.Children.map(children, item => item);
    console.log("f", f);

    console.log("children.map", children.map);

    // if (!R.is(Array, children)) { children = [children]; }

    // const f = children.map(item => {
    //   console.log("item", item);
    //   return item;
    // });
    // console.log("f", f);

    // const [left, center, right] = children;
    // const left = children.0();
    // const center = children[1];
    // const right = children[2];
    //
    //
    // console.log("left", left);
    // console.log("center", center);
    // console.log("right", right);
    //

    return (
      <div style={ styles.base }>
        { children }
      </div>
    );
  }
}

// API -------------------------------------------------------------------------
FlexEdge.propTypes = {
};
FlexEdge.defaultProps = {};
