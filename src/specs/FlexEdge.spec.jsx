import React from "react";
import FlexEdge from "../components/FlexEdge";
import Foo from "../components/Foo";
import { lorem } from "js-util/test";


const createFoo = (text, width) => {
    return <Foo
        radius={4}
        padding={4}
        width={width}
        fontSize={11}
        minHeight={30}>
      { text }
    </Foo>
};


describe("FlexEdge", function() {
  this.header(`## Flexible spacing container.`);

  before(() => {
    this
      .width(550)
      .load(
        <FlexEdge>
          { createFoo("left") }
          { createFoo(lorem(300)) }
          { createFoo("right") }
        </FlexEdge>
    );
  });

  section("width", () => {
    it("`550px`", () => this.width(550));
    it("`80%`", () => this.width("80%"));
  });

  section("load", () => {
    it("`empty`", () => this.load( <FlexEdge/> ));
    it("`left/center/right`", () => {
      this.load(
        <FlexEdge>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </FlexEdge>
      );
    });
  });

});
