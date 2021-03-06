import React from "react";
import FlexEdge from "../components/FlexEdge";
import Foo from "../components/Foo";
import { lorem } from "./util";



const Sample = (props) => (
    <Foo
      radius={4}
      padding={4}
      fontSize={11}
      minHeight={30} {...props}>{ props.children }</Foo>
  );


describe("FlexEdge", function() {
  this.header(`## Flexible spacing container.`);

  before(() => {
    this
      .width(550)
      .height(550)
      .component(
        <FlexEdge orientation="horizontal">
          <Sample>near</Sample>
          <Sample absolute={0} flexEdge={1}>{ "middle --- " + lorem(300) }</Sample>
          <Sample width={100} height={100}>far</Sample>
        </FlexEdge>
    );
  });

  section("width", () => {
    it("`null`", () => this.width(null));
    it("`550px`", () => this.width(550));
    it("`100%`", () => this.width("100%"));
  });

  section("height", () => {
    it("`null`", () => this.height(null));
    it("`550px`", () => this.height(550));
    it("`100%`", () => this.height("100%"));
  });





  section("load - horizontal", () => {

    it('`DIVs`', () => {
      this.component(
        <FlexEdge orientation="horizontal">
          <div>One</div>
          <div data-flexEdge={1}>Two</div>
          <div>Three</div>

        </FlexEdge>
      );
    });

    it("`icon/main`", () => {
      this.component(
        <FlexEdge orientation="horizontal">
          <Sample>icon</Sample>
          <Sample flexEdge={1}>main</Sample>
        </FlexEdge>
      );
    });
    it("`near/middle/far`", () => {
      this.component(
        <FlexEdge orientation="horizontal">
          <Sample>near</Sample>
          <Sample absolute={0} flexEdge={{ flex: 1, maxHeight: "90%" }}>{ "middle --- " + lorem(300) }</Sample>
          <Sample width={100} height={100}>far</Sample>
        </FlexEdge>
      );
    });

    it("`<nothing>/middle/far`", () => {
      this.component(
        <FlexEdge orientation="horizontal">
          <div data-flexEdge={0}/>
          <Sample absolute={0} flexEdge={1}>{ "middle --- " + lorem(300) }</Sample>
          <Sample width={100} height={100}>far</Sample>
        </FlexEdge>
      );
    });
  });

  section("load - vertical", () => {
    it("`icon/main`", () => {
      this.component(
        <FlexEdge orientation="vertical">
          <Sample>icon</Sample>
          <Sample absolute={0} flexEdge={1}>main</Sample>
        </FlexEdge>
      );
    });
    it("`near/middle/far`", () => {
      this.component(
        <FlexEdge orientation="vertical">
          <Sample>near</Sample>
          <Sample absolute={0} flexEdge={1}>{ "middle --- " + lorem(300) }</Sample>
          <Sample width={100} height={100}>far</Sample>
        </FlexEdge>
      );
    });
    it("`<nothing>/middle/far`", () => {
      this.component(
        <FlexEdge orientation="vertical">
          <div/>
          <Sample absolute={0} flexEdge={1}>{ "middle --- " + lorem(300) }</Sample>
          <Sample width={100} height={100}>far</Sample>
        </FlexEdge>
      );
    });
  });

  section("edge cases", () => {
    it("`load: empty`", () => this.component( <FlexEdge/> ));

    it("`5 children`", () => {
      this.component(
        <FlexEdge orientation="vertical">
          <Sample>1</Sample>
          <Sample height={100}>2</Sample>
          <Sample>3</Sample>
          <Sample>4</Sample>
          <Sample>5</Sample>
        </FlexEdge>
      );
    });
  });
});
