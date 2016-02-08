import React from 'react';
import Center from './Center';
import { PropTypes } from './util';


/**
 * Centers content horizontally.
 */
export default class CenterX extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };
  static defaultProps = {};

  render() {
    return (
      <Center horizontal vertical={ false }>
        { this.props.children }
      </Center>
    );
  }
}
