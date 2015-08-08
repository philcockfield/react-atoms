import _ from "lodash";
import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";
import * as util from "js-util";
import marked from "marked";



/**
 * Formats text for display.
 * @param {string} text: The text for format.
 * @return {string} HTML.
 */
export const formatText = (text) => {
  if (util.isBlank(text)) { return text; }
  text = text.toString();
  text = escapeHtml(text);
  text = marked(text);
  text = text.substring(3, text.length - 5) // Remove the wrapping <p>...</p> tags.
  return text;
};


/**
 * Converts HTML chars into escaped versions.
 */
export const escapeHtml = (text) => {
  let isWithinBlock = false;
  let result = "";
  let i = 0;
  for (let char of text) {
    // Don't escape <HTML> that is wihtin the markdown `tick` block.
    if (char === "`") { isWithinBlock = !isWithinBlock; }
    if (!isWithinBlock) {
      if (char === "<") { char = "&lt;"; }
      if (char === ">") { char = "&gt;"; }
    }
    result += char
    i += 1;
  }
  return result;
};



/**
 * Renders markdown as HTML.
 */
@Radium
export default class Markdown extends React.Component {
  styles() {
    return css({
      base: {
        display: this.props.display
      }
    });
  }

  render() {
    const styles = this.styles();
    const html = formatText(this.props.children);
    return (
      <div
          style={ styles.base }
          dangerouslySetInnerHTML={{ __html: html }} />
    );
  }
}

// API -------------------------------------------------------------------------
Markdown.propTypes = {
  children: PropTypes.string,
  display: PropTypes.oneOf(["block", "inline-block", "inline"])
};
Markdown.defaultProps = {
  display: "inline-block"
};
