"use strict"
import React from "react";
import Value from "../../components/Object/Value";
import * as util from "js-util";
import { lorem } from "js-util/test";
import { italicSection, sizeSection } from "./Text.spec";


describe("Value", function() {
  this.header("## A single value of any type (with optional key and expansion toggle).");
  before(() => {
    this.load( <Value label="foo">123</Value> )
  });

  it("`unload`", () => this.unload());

  section("`label`", () => {
    it("`null`", () => this.props({ label: null }));
    it("`'foo'`", () => this.props({ label: "foo" }));
  });

  section("Primitive Value", () => {
    it("`string` short", () => this.props({ value: "My String" }));
    it("`string` long", () => this.props({ value: lorem() }));
    it("`number: 123456`", () => this.props({ value: 123456 }));
    it("`number: -1`", () => this.props({ value: -1 }));
    it("`bool: true`", () => this.props({ value: true }));
    it("`bool: false`", () => this.props({ value: false }));
    it("`null`", () => this.props({ value: null }));
    it("`undefined`", () => this.props({ value: undefined }));
  });

  section("Object Value", () => {
    it("`{}`", () => this.props({ value: {}}));
    it("`{ foo: 123 }`", () => this.props({ value: { foo:123 }}));

  });

  section("Array Value", () => {
    it("`[]`", () => this.props({ value: [] }));
    it("`[1, 2, 3]`", () => this.props({ value: [1, 2, 3] }));
    it("`['one', 2, { label:'three' }]`", () => this.props({ value: ["one", 2, { label: "three" }] }));
  });

  section("Date Value", () => {
    it("`date: now`", () => this.props({ value: new Date() }));
  });

  italicSection.call(this);
  sizeSection.call(this);
});
