import React from "react";
import Foo from "../components/Foo";


describe("Foo", function() {
  this.header("## Placeholder component for rapidly stubbing in a UI structure.").hr(true);

  before(() => {
    this.load( <Foo>My text</Foo> );
  });

  section("radius", () => {
    it("`radius:0`", () => { this.props({ radius: 0 }) });
    it("`radius:5`", () => { this.props({ radius: 5 }) });
  });

  section("background", () => {
    it("`background:true`", () => { this.props({ background: true }) });
    it("`background:false`", () => { this.props({ background: false }) });
    it("`background:red`", () => { this.props({ background: "red" }) });
  });

  section("border", () => {
    it("`border:true`", () => { this.props({ border: true }) });
    it("`border:false`", () => { this.props({ border: false }) });
    it("`border:solid 5px tomato`", () => { this.props({ border: "solid 5px tomato" }) });
    it("`dashed:true`", () => { this.props({ dashed: true }) });
    it("`dashed:false`", () => { this.props({ dashed: false }) });
  });

  section("position", () => {
    const setSize = () => this.width("100%").height("100%");
    it("`absolute: 0`", () => { setSize().props({ absolute:0 }) });
    it("`absolute: '20 30 50 null'`", () => { setSize().props({ absolute: "20 30 50 null" }) });
    it("`absolute: [60, 10]`", () => { setSize().props({ absolute: [60, 10] }) });
  });

  section("shadow", () => {
    it("`shadow: null`", () => { this.props({ shadow: null }) });
    it("`shadow: 0.2`", () => { this.props({ shadow: 0.2 }) });
    it("`shadow: <string>`", () => { this.props({ shadow: "10px 5px 3px 3px rgba(0, 0, 0, 0.1)" }) });
  });

  section("width", () => {
    it("`null`", () => this.props({ width: null }));
    it("`250px`", () => this.props({ width: 250 }));
  });

  section("height", () => {
    it("`null`", () => this.props({ height: null }));
    it("`250px`", () => this.props({ height: 250 }));
  });

});
