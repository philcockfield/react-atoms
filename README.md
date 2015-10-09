# react-atoms
[![Build Status](https://travis-ci.org/philcockfield/react-atoms.svg?branch=master)](https://travis-ci.org/philcockfield/react-atoms)

Low level react components (the 'atoms' of larger UI structures).



## Source vs. Transpiled Files
The source ES2015 files are housed within the `/src` folder.  

These are built using babel into corresponding folder(s) at the root of the project using `gulp build`.
There is no master `index.js` to the library allowing selective inclusion of components via `require/import` statements
so that unused code is not included into the consuming project, eg:

    var AlignmentContainer = require("react-atoms/components/AlignmentContainer");

or

    import AlignmentContainer from "react-atoms/components/AlignmentContainer";


---
### License: MIT
