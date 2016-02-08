import React from 'react';
import Center from './Center';
import { PropTypes } from './util';


/**
 * Centers content vertically.
 */
export default class CenterY extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Center horizontal={ false } vertical>
        { this.props.children }
      </Center>
    );
  }
}
