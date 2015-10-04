"use strict"
import React from "react";
import Value from "../../components/Object/Value";
import * as util from "js-util";


describe("Value", function() {
  this.header("## A single value of any type (with optional key and expansion toggle).");
  before(() => {
    this.load( <Value label="foo">123</Value> )

    console.log("obj", { foo: 123 }); // TEMP

  });

  it("`unload`", () => this.unload());

  section("label", () => {
    it("`null`", () => this.props({ label: null }));
    it("`'foo'`", () => this.props({ label: "foo" }));
  });

  section("style", () => {
    it("`italic:true`", () => this.props({ italic: true }));
    it("`italic:false`", () => this.props({ italic: false }));
  });

  section("size", () => {
    it("`size:12 (default)`", () => this.props({ size: 12 }));
    it("`size:14`", () => this.props({ size: 14 }));
    it("`size:16`", () => this.props({ size: 16 }));
  });
});
