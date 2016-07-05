import React from "react";
import AlignmentContainer from "../components/AlignmentContainer";
import Foo from "../components/Foo";


describe("AlignmentContainer", function() {
  this.header("## Flex-box container providing edge alignment of child content.").hr(true);

  before(() => {
    this
      .width("100%")
      .height("100%")
      .component(
        <AlignmentContainer>
          <Foo width={100} height={100}></Foo>
        </AlignmentContainer>
      );
  });

  section("align", () => {
    it("`left top`", () => { this.props({ align:"left top" }) });
    it("`left middle`", () => { this.props({ align:"left middle" }) });
    it("`left bottom`", () => { this.props({ align:"left bottom" }) });

    it("`center top`", () => { this.props({ align:"center top" }) });
    it("`center middle`", () => { this.props({ align:"center middle" }) });
    it("`center bottom`", () => { this.props({ align:"center bottom" }) });

    it("`right top`", () => { this.props({ align:"right top" }) });
    it("`right middle`", () => { this.props({ align:"right middle" }) });
    it("`right bottom`", () => { this.props({ align:"right bottom" }) });
  });
});
