import React from "react";
import Center from "../components/Center";
import CenterX from "../components/CenterX";
import CenterY from "../components/CenterY";
import Foo from "../components/Foo";

const foo = <Foo padding={30}>Content</Foo>

describe("Center", function() {
  this.header(`## Containers for Centering Content`);

  before(() => {
    this
      .width("100%")
      .height("100%")
      .load(<Center>{ foo }</Center>);
  });

  it("`<Center>`", () => this.load( <Center>{ foo }</Center> ));
  it("`<CenterX>`", () => this.load( <CenterX>{ foo }</CenterX> ));
  it("`<CenterY>`", () => this.load( <CenterY>{ foo }</CenterY> ));
});
