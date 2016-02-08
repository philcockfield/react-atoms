import React from 'react';
import Radium from 'radium';
import { css, PropTypes } from './util';


/**
 * A triangular bullet that toggles to express
 * an 'open' or 'closed' state.
 */
class Twisty extends React.Component {
  static propTypes = {
    isAnimated: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    width: PropTypes.number,
    color: PropTypes.string,
    opacity: PropTypes.number,
    margin: PropTypes.numberOrString,
  };
  static defaultProps = {
    isAnimated: true,
    isOpen: false,
    width: 8,
    color: '#000',
    opacity: 0.3,
    margin: 0,
  };

  styles() {
    let { opacity } = this.props;
    const { width, color, isOpen, isAnimated, margin } = this.props;
    const narrow = Math.round(width * 0.666666);
    if (opacity < 0) { opacity = 0; }
    if (opacity > 1) { opacity = 1; }
    return css({
      base: {
        opacity,
        margin,
        display: 'inline-block',
        width: 0,
        height: 0,
        borderTop: `${ narrow }px solid transparent`,
        borderBottom: `${ narrow }px solid transparent`,
        borderLeft: `${ width }px solid ${ color }`,
        transform: `rotate(${ isOpen ? '90deg' : '0deg' })`,
        transition: isAnimated ? 'transform 0.15s' : 'none',
        cursor: 'pointer',
      },
    });
  }

  handleClick = () => {
    const { onClick, isOpen } = this.props;
    if (onClick) {
      onClick({ isOpen });
    }
  };

  render() {
    const styles = this.styles();
    return <div onClick={ this.handleClick } style={ styles.base } />;
  }
}

export default Radium(Twisty);
