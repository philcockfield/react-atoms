import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";


/**
 * A button for a GitHub repo.
 * See: https://buttons.github.io/
 */
@Radium
export default class GithubButton extends React.Component {
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

// API -------------------------------------------------------------------------
GithubButton.propTypes = {};
GithubButton.defaultProps = {};
