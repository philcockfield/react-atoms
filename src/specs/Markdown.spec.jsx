import React from "react";
import Markdown from "../components/Markdown";
import { lorem } from "js-util/test";


// const simple = {};
const simple = `
# H1
## H2
### H3

${ lorem(100) }

---

${ lorem(100) }
`;

describe("Markdown", function() {
  this.header(`## Renders markdown as HTML.`);
  const load = (markdown) => {
      this
        .width("100%")
        .load( <Markdown>{ simple }</Markdown> );
    };


  section("markdown", () => {
    it("simple", () => load(simple));
  });
});
