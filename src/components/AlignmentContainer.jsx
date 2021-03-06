import R from 'ramda';
import React from 'react';
import Radium from 'radium';
import { css, PropTypes } from './util';


const HORIZONTAL = ['left', 'center', 'right'];
const VERTICAL = ['top', 'middle', 'bottom'];
const DEFAULT_HORIZONTAL = 'center';
const DEFAULT_VERTICAL = 'top';

const contains = (array, value) => R.any(item => item === value, array);
const isVertical = (value) => contains(VERTICAL, value);
const isHorizontal = (value) => contains(HORIZONTAL, value);

const combine = (left, right) => {
  const result = [];
  left.forEach(leftItem => {
    right.forEach(rightItem => { result.push(`${ leftItem } ${ rightItem }`); });
  });
  return result;
};

const EDGES = R.flatten([
  HORIZONTAL,
  VERTICAL,
  combine(HORIZONTAL, VERTICAL),
  combine(VERTICAL, HORIZONTAL),
]);





/**
 * Flex-box container providing edge alignment of child content.
 */
class AlignmentContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    align: PropTypes.oneOf(EDGES),
  };
  static defaultProps = {
    align: 'left top',
  };

  styles() {
    const { horizontal, vertical } = this.edges();
    let direction;
    let alignItems;
    let justifyContent;

    if (horizontal === 'left' && vertical === 'top') {
      direction = 'row';
      alignItems = 'flex-start';
    }

    if (horizontal === 'left' && vertical === 'middle') {
      direction = 'row';
      alignItems = 'center';
    }

    if (horizontal === 'left' && vertical === 'bottom') {
      direction = 'row';
      alignItems = 'flex-end';
    }

    if (horizontal === 'right' && vertical === 'top') {
      direction = 'column';
      alignItems = 'flex-end';
    }

    if (horizontal === 'right' && vertical === 'middle') {
      direction = 'row';
      alignItems = 'center';
      justifyContent = 'flex-end';
    }

    if (horizontal === 'right' && vertical === 'bottom') {
      direction = 'column-reverse';
      alignItems = 'flex-end';
    }

    if (horizontal === 'center' && vertical === 'top') {
      direction = 'column';
      alignItems = 'center';
    }

    if (horizontal === 'center' && vertical === 'middle') {
      direction = 'column';
      alignItems = 'center';
      justifyContent = 'center';
    }

    if (horizontal === 'center' && vertical === 'bottom') {
      direction = 'column-reverse';
      alignItems = 'center';
    }

    return css({
      base: {
        alignItems,
        justifyContent,
        Absolute: 0,
        display: 'flex',
        flexDirection: direction,
      },
    });
  }


  edges() {
    const parts = this.props.align.split(' ');

    // If only one axis was specified fill in the missing value.
    if (parts.length < 2) {
      if (isHorizontal(parts[0])) { parts[1] = DEFAULT_VERTICAL; }
      if (isVertical(parts[0])) { parts[1] = DEFAULT_HORIZONTAL; }
    }

    // Extract axis values.
    const horizontal = isHorizontal(parts[0]) ? parts[0] : parts[1];
    const vertical = isVertical(parts[0]) ? parts[0] : parts[1];
    return { horizontal, vertical };
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


export default Radium(AlignmentContainer);
