import React from "react";
import Center from "./Center";


/**
 * Centers content vertically.
 */
export default class CenterY extends React.Component {
  render() {
    return (
      <Center horizontal={ false } vertical={ true }>
        { this.props.children }
      </Center>
    );
  }
}
