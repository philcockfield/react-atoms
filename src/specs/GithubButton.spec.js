import React from "react";
import GithubButton from "../components/GithubButton";


describe("GithubButton", function() {
  this.header(`## A button for a GitHub repo.`);
  before(() => {

    this.load( <GithubButton/> )

    console.log("hello");

  });

  it("foo", () => {});

});
