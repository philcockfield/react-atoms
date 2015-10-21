# react-atoms
[![Build Status](https://travis-ci.org/philcockfield/react-atoms.svg?branch=master)](https://travis-ci.org/philcockfield/react-atoms)

Low level react components (the 'atoms' of larger UI structures).




## Source vs. Transpiled Files
The source ES6 (ES2015) files are housed within the `/src` folder.  

These are built using babel into corresponding folder(s) at the root of the project using `gulp build`.
There is no master `index.js` to the library allowing selective inclusion of components via `require/import` statements
so that unused code is not included into the consuming project, eg:

    var AlignmentContainer = require("react-atoms/components/AlignmentContainer");

or

    import AlignmentContainer from "react-atoms/components/AlignmentContainer";


## Explore in the [UIHarness](http://uiharness.com/)
    git clone https://github.com/philcockfield/react-atoms.git
    cd react-atoms
    npm install
    npm start

![ui-harness](https://cloud.githubusercontent.com/assets/185555/10385888/688768d0-6e04-11e5-9263-2e9469e652d9.png)




---
### License: MIT
