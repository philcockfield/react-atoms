"use strict"
import React from "react";
import Text from "../../components/Object/Text";
import { COLORS } from "../../components/Object/Text";


export const inlineSection = function() {
  section("inline", () => {
    it("`inline:true`", () => this.props({ inline: true }));
    it("`inline:false`", () => this.props({ inline: false }));
  });
};


export const italicSection = function() {
  section("italic", () => {
    it("`italic:true`", () => this.props({ italic: true }));
    it("`italic:false`", () => this.props({ italic: false }));
  });
};


export const sizeSection = function() {
  section("size", () => {
    it("`size:12 (default)`", () => this.props({ size: 12 }));
    it("`size:14`", () => this.props({ size: 14 }));
    it("`size:16`", () => this.props({ size: 16 }));
    it("`size:22`", () => this.props({ size: 22 }));
  });
};




describe("Text", function() {
  this.header(`## Text display with commonly used style properties.`)
  before(() => {
    this.load(<Text color="red">My Text</Text>);
  });

  inlineSection.call(this);
  italicSection.call(this);
  sizeSection.call(this);

  section("color", () => {
    Object.keys(COLORS).forEach(color => {
      it(`\`${ color }\``, () => this.props({ color }));
    });
  });
});
