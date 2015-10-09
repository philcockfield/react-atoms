# react-atoms
[![Build Status](https://travis-ci.org/philcockfield/react-atoms.svg?branch=master)](https://travis-ci.org/philcockfield/react-atoms)

Low level react components (the 'atoms' of larger UI structures).



## Source vs. Transpiled Files
The source ES2015 files are housed within the `/src` folder.  

These are built using babel into corresponding folder(s) at the root of the project using `gulp build`.
There is no master `index.js` to the library allowing selective inclusion of components via `require/import` statements
so that unused code is not included into the consuming project, eg:

    var AlignmentContainer = require("core-ui/components/AlignmentContainer");

or

    import AlignmentContainer from "core-ui/components/AlignmentContainer";



## License (MIT)
Copyright © 2015, **Phil Cockfield**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
