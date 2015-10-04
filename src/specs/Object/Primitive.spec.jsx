"use strict"
import React from "react";
import Primitive from "../../components/Object/Primitive";
import { inlineSection, italicSection, sizeSection } from "./Text.spec";


describe("Primitive", function() {
  this.header(`## A simple primitive value.`);
  before(() => {
    this.load( <Primitive value="My String" /> );
  });

  section("load", () => {
    it("`string`", () => this.load( <Primitive value="My string"/> ));
    it("`number`", () => this.load( <Primitive value={ 123 }/> ));
    it("`true`", () => this.load( <Primitive value={ true }/> ));
    it("`false`", () => this.load( <Primitive value={ false }/> ));
    it("`null`", () => this.load( <Primitive value={ null }/> ));
    it("`undefined`", () => this.load( <Primitive value={ undefined }/> ));
    it("`object` (error)", () => this.load( <Primitive value={{ foo: 123 }}/> ));
  });

  inlineSection.call(this);
  italicSection.call(this);
  sizeSection.call(this);
});
