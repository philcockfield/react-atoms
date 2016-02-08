import React from 'react';
import Radium from 'radium';
import { PropTypes } from './util';


/**
 * Centers content vertically and/or horizontally.
 */
class Center extends React.Component {
  static propTypes = {
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool,
    children: PropTypes.node,
  };
  static defaultProps = {
    horizontal: true,
    vertical: true,
  };

  styles() {
    const { horizontal, vertical } = this.props;
    let transform = '';
    if (horizontal && vertical) {
      transform = 'translate(-50%, -50%)';
    } else {
      if (horizontal) { transform = 'translateX(-50%)'; }
      if (vertical) { transform = 'translateY(-50%)'; }
    }

    return {
      base: {
        transform,
        display: 'inline-block',
        position: 'absolute',
        left: horizontal ? '50%' : 0,
        top: vertical ? '50%' : 0,
      },
    };
  }

  render() {
    const styles = this.styles();
    return (
      <div style={ styles.base }>{ this.props.children }</div>
    );
  }
}


export default Radium(Center);
