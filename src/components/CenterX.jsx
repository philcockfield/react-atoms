import React from "react";
import Center from "./Center";


/**
 * Centers content horizontally.
 */
export default class CenterX extends React.Component {
  render() {
    return (
      <Center horizontal={ true } vertical={ false }>
        { this.props.children }
      </Center>
    );
  }
}
