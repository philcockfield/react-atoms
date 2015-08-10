import React from "react";
import AlignmentContainer from "../components/AlignmentContainer";
import Foo from "../components/Foo";


describe("AlignmentContainer", function() {
  this.header("## Flex-box container providing edge alignment of child content.").hr(true);

  before(() => {
    this
      .width("100%")
      .height("100%")

    this.load(
      <AlignmentContainer>
        <Foo></Foo>
      </AlignmentContainer>
    );
  });

});
