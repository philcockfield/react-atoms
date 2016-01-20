import R from "ramda";
import React from "react";
import Radium from "radium";
import { css, PropTypes } from "./util";
import * as util from "js-util";
import marked from "marked";


/**
 * Trims a uniform indent from a multi-line string.
 * This is useful when working with indented template
 * strings (`...`) from ES6.
 *
 * @param {string} text: The text for format.
 * @return {string} HTML.
 */
export const trimIndent = (text) => {
  const DEFAULT_RESULT = { text, indent: 0 };
  if (!R.is(String, text)) { return DEFAULT_RESULT; }
  if (text[0] !== "\n") { return DEFAULT_RESULT; }
  let lines = text.split("\n");
  if (lines.length < 2) { return DEFAULT_RESULT; }

  const indent = lines[1].search(/\S/);
  if (indent === 0) { return DEFAULT_RESULT; }

  let result = [];
  for (let i = 1; i < lines.length; i++) {
    let line = lines[i];
    result.push(line.substring(indent, line.length));
  }

  return {
    text: result.join("\n"),
    indent
  };
};


/**
 * Formats text for display.
 * @param {string} text: The text for format.
 * @return {string} HTML.
 */
const toHtml = (text) => {
  text = marked(text);
  if (text.startsWith("<p>")) {
    text = text.substring(3, text.length - 5) // Remove the wrapping <p>...</p> tags.
  }
  return text;
};


/**
 * Converts HTML chars into escaped versions.
 */
const escapeHtml = (text) => {
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
class Markdown extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    display: PropTypes.oneOf(["block", "inline-block", "inline"]),
    trimIndent: PropTypes.bool,
    escapeHtml: PropTypes.bool,
    className: PropTypes.string
  };
  static defaultProps = {
    display: "inline-block",
    trimIndent: false,
    escapeHtml: false
  };

  styles() {
    return css({
      base: {
        display: this.props.display
      }
    });
  }

  render() {
    const styles = this.styles();

    let html = this.props.children;
    if (!util.isBlank(html)) {
      if (this.props.trimIndent) { html = trimIndent(html).text; }
      if (this.props.escapeHtml) { html = escapeHtml(html); }
      html = toHtml(html);
    }

    return (
      <div
        className={ this.props.className }
        style={ styles.base }
        dangerouslySetInnerHTML={{ __html: html }} />
    );
  }
}


export default Radium(Markdown);
