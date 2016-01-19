import React from "react";
import Radium from "radium";
import { css, PropTypes } from "./react-util";


/**
 * A button for a GitHub repo.
 * See: https://buttons.github.io/
 */
class GithubButton extends React.Component {
  styles() {
    return css({
      base: {}
    });
  }

  render() {
    const styles = this.styles();
    return (
      <div style={ styles.base }>GithubButton</div>
    );
  }
}


export default Radium(GithubButton);
