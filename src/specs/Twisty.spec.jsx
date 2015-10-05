"use strict"
import React from "react";
import Twisty from "../components/Twisty";


describe("Twisty", function() {
  this.header(`## A triangular bullet that toggles to express an "open" or "closed" state.`);

  const handleClick = (e) => {
    console.log("!!onClick", e);
    this.props({ isOpen: !e.isOpen })
  };

  before(() => {
    this.load( <Twisty onClick={ handleClick } /> );
  });

  section("width", () => {
    it("`8` (default)", () => this.props({ width: 8 }));
    it("`24`", () => this.props({ width: 24 }));
    it("`120`", () => this.props({ width: 120 }));
  });

  section("isOpen", () => {
    it("`true`", () => this.props({ isOpen: true }));
    it("`false`", () => this.props({ isOpen: false }));
  });

});
