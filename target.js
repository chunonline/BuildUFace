var pxtTargetBundle = {
  "id": "sample",
  "name": "sample",
  "title": "MakeCode Editor Sample",
  "corepkg": "core",
  "cloud": {
    "workspace": false,
    "packages": true
  },
  "bundleddirs": [
    "libs/core"
  ],
  "runtime": {
    "mathBlocks": true,
    "loopsBlocks": true,
    "logicBlocks": true,
    "variablesBlocks": true,
    "textBlocks": true,
    "functionBlocks": true,
    "listsBlocks": true
  },
  "simulator": {
    "autoRun": true
  },
  "appTheme": {
    "logoUrl": "/BuildUFace/",
    "homeUrl": "/BuildUFace/",
    "privacyUrl": "https://go.microsoft.com/fwlink/?LinkId=521839",
    "termsOfUseUrl": "https://go.microsoft.com/fwlink/?LinkID=206977",
    "betaUrl": "https://makecode.com/",
    "homeScreenHero": "./static/hero.png",
    "docMenu": [
      {
        "name": "About",
        "path": "/BuildUFace/docs/about.html"
      },
      {
        "name": "Docs",
        "path": "/BuildUFace/docs/docs.html"
      }
    ],
    "coloredToolbox": true,
    "monacoToolbox": true,
    "invertedMenu": true,
    "useStartPage": true,
    "blocklyOptions": {
      "grid": {
        "spacing": 45,
        "length": 7,
        "colour": "rgba(189, 195, 199, 0.30)",
        "snap": true
      }
    },
    "simAnimationEnter": "fly right in",
    "simAnimationExit": "fly right out",
    "disableBlockIcons": true,
    "TOC": [
      {
        "name": "Blocks",
        "subitems": [
          {
            "name": "On Start",
            "subitems": [],
            "path": "/blocks/on-start",
            "prevName": "Blocks",
            "prevPath": "/blocks",
            "nextName": "Loops",
            "nextPath": "/blocks/loops"
          },
          {
            "name": "Loops",
            "subitems": [
              {
                "name": "repeat",
                "subitems": [],
                "path": "/blocks/loops/repeat",
                "prevName": "Loops",
                "prevPath": "/blocks/loops",
                "nextName": "for",
                "nextPath": "/blocks/loops/for"
              },
              {
                "name": "for",
                "subitems": [],
                "path": "/blocks/loops/for",
                "prevName": "repeat",
                "prevPath": "/blocks/loops/repeat",
                "nextName": "while",
                "nextPath": "/blocks/loops/while"
              },
              {
                "name": "while",
                "subitems": [],
                "path": "/blocks/loops/while",
                "prevName": "for",
                "prevPath": "/blocks/loops/for",
                "nextName": "Logic",
                "nextPath": "/blocks/logic"
              }
            ],
            "path": "/blocks/loops",
            "prevName": "On Start",
            "prevPath": "/blocks/on-start",
            "nextName": "repeat",
            "nextPath": "/blocks/loops/repeat"
          },
          {
            "name": "Logic",
            "subitems": [
              {
                "name": "if",
                "subitems": [],
                "path": "/blocks/logic/if",
                "prevName": "Logic",
                "prevPath": "/blocks/logic",
                "nextName": "Boolean",
                "nextPath": "/blocks/logic/boolean"
              },
              {
                "name": "Boolean",
                "subitems": [],
                "path": "/blocks/logic/boolean",
                "prevName": "if",
                "prevPath": "/blocks/logic/if",
                "nextName": "Variables",
                "nextPath": "/blocks/variables"
              }
            ],
            "path": "/blocks/logic",
            "prevName": "while",
            "prevPath": "/blocks/loops/while",
            "nextName": "if",
            "nextPath": "/blocks/logic/if"
          },
          {
            "name": "Variables",
            "subitems": [
              {
                "name": "assign",
                "subitems": [],
                "path": "/blocks/variables/assign",
                "prevName": "Variables",
                "prevPath": "/blocks/variables",
                "nextName": "change var",
                "nextPath": "/blocks/variables/change"
              },
              {
                "name": "change var",
                "subitems": [],
                "path": "/blocks/variables/change",
                "prevName": "assign",
                "prevPath": "/blocks/variables/assign",
                "nextName": "var",
                "nextPath": "/blocks/variables/var"
              },
              {
                "name": "var",
                "subitems": [],
                "path": "/blocks/variables/var",
                "prevName": "change var",
                "prevPath": "/blocks/variables/change",
                "nextName": "Math",
                "nextPath": "/blocks/math"
              }
            ],
            "path": "/blocks/variables",
            "prevName": "Boolean",
            "prevPath": "/blocks/logic/boolean",
            "nextName": "assign",
            "nextPath": "/blocks/variables/assign"
          },
          {
            "name": "Math",
            "subitems": [],
            "path": "/blocks/math",
            "prevName": "var",
            "prevPath": "/blocks/variables/var",
            "nextName": "JavaScript blocks",
            "nextPath": "/blocks/javascript-blocks"
          },
          {
            "name": "JavaScript blocks",
            "subitems": [],
            "path": "/blocks/javascript-blocks",
            "prevName": "Math",
            "prevPath": "/blocks/math",
            "nextName": "Custom blocks",
            "nextPath": "/blocks/custom"
          },
          {
            "name": "Custom blocks",
            "subitems": [],
            "path": "/blocks/custom",
            "prevName": "JavaScript blocks",
            "prevPath": "/blocks/javascript-blocks",
            "nextName": "JavaScript",
            "nextPath": "/javascript"
          }
        ],
        "path": "/blocks",
        "nextName": "On Start",
        "nextPath": "/blocks/on-start"
      },
      {
        "name": "JavaScript",
        "subitems": [
          {
            "name": "Calling",
            "subitems": [],
            "path": "/javascript/call",
            "prevName": "JavaScript",
            "prevPath": "/javascript",
            "nextName": "Sequencing",
            "nextPath": "/javascript/sequence"
          },
          {
            "name": "Sequencing",
            "subitems": [],
            "path": "/javascript/sequence",
            "prevName": "Calling",
            "prevPath": "/javascript/call",
            "nextName": "Variables",
            "nextPath": "/javascript/variables"
          },
          {
            "name": "Variables",
            "subitems": [],
            "path": "/javascript/variables",
            "prevName": "Sequencing",
            "prevPath": "/javascript/sequence",
            "nextName": "Operators",
            "nextPath": "/javascript/operators"
          },
          {
            "name": "Operators",
            "subitems": [],
            "path": "/javascript/operators",
            "prevName": "Variables",
            "prevPath": "/javascript/variables",
            "nextName": "Statements",
            "nextPath": "/javascript/statements"
          },
          {
            "name": "Statements",
            "subitems": [],
            "path": "/javascript/statements",
            "prevName": "Operators",
            "prevPath": "/javascript/operators",
            "nextName": "Functions",
            "nextPath": "/javascript/functions"
          },
          {
            "name": "Functions",
            "subitems": [],
            "path": "/javascript/functions",
            "prevName": "Statements",
            "prevPath": "/javascript/statements",
            "nextName": "Types",
            "nextPath": "/javascript/types"
          },
          {
            "name": "Types",
            "subitems": [],
            "path": "/javascript/types",
            "prevName": "Functions",
            "prevPath": "/javascript/functions",
            "nextName": "Classes",
            "nextPath": "/javascript/classes"
          },
          {
            "name": "Classes",
            "subitems": [],
            "path": "/javascript/classes",
            "prevName": "Types",
            "prevPath": "/javascript/types",
            "nextName": "Interfaces",
            "nextPath": "/javascript/interfaces"
          },
          {
            "name": "Interfaces",
            "subitems": [],
            "path": "/javascript/interfaces",
            "prevName": "Classes",
            "prevPath": "/javascript/classes",
            "nextName": "Generics",
            "nextPath": "/javascript/generics"
          },
          {
            "name": "Generics",
            "subitems": [],
            "path": "/javascript/generics",
            "prevName": "Interfaces",
            "prevPath": "/javascript/interfaces",
            "nextName": "Types",
            "nextPath": "/types"
          }
        ],
        "path": "/javascript",
        "prevName": "Custom blocks",
        "prevPath": "/blocks/custom",
        "nextName": "Calling",
        "nextPath": "/javascript/call"
      },
      {
        "name": "Types",
        "subitems": [
          {
            "name": "Number",
            "subitems": [],
            "path": "/types/number",
            "prevName": "Types",
            "prevPath": "/types",
            "nextName": "String",
            "nextPath": "/types/string"
          },
          {
            "name": "String",
            "subitems": [],
            "path": "/types/string",
            "prevName": "Number",
            "prevPath": "/types/number",
            "nextName": "Boolean",
            "nextPath": "/types/boolean"
          },
          {
            "name": "Boolean",
            "subitems": [],
            "path": "/types/boolean",
            "prevName": "String",
            "prevPath": "/types/string",
            "nextName": "Array",
            "nextPath": "/types/array"
          },
          {
            "name": "Array",
            "subitems": [],
            "path": "/types/array",
            "prevName": "Boolean",
            "prevPath": "/types/boolean",
            "nextName": "Function",
            "nextPath": "/types/function"
          },
          {
            "name": "Function",
            "subitems": [],
            "path": "/types/function",
            "prevName": "Array",
            "prevPath": "/types/array",
            "nextName": "Support",
            "nextPath": "/support"
          }
        ],
        "path": "/types",
        "prevName": "Generics",
        "prevPath": "/javascript/generics",
        "nextName": "Number",
        "nextPath": "/types/number"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Support",
            "subitems": [],
            "path": "/support",
            "prevName": "Function",
            "prevPath": "/types/function",
            "nextName": "FAQ",
            "nextPath": "/faq"
          },
          {
            "name": "FAQ",
            "subitems": [],
            "path": "/faq",
            "prevName": "Support",
            "prevPath": "/support",
            "nextName": "Translate",
            "nextPath": "/translate"
          },
          {
            "name": "Translate",
            "subitems": [],
            "path": "/translate",
            "prevName": "FAQ",
            "prevPath": "/faq",
            "nextName": "Sharing projects",
            "nextPath": "/share"
          },
          {
            "name": "Sharing projects",
            "subitems": [],
            "path": "/share",
            "prevName": "Translate",
            "prevPath": "/translate",
            "nextName": "Offline support",
            "nextPath": "/offline"
          },
          {
            "name": "Offline support",
            "subitems": [],
            "path": "/offline",
            "prevName": "Sharing projects",
            "prevPath": "/share",
            "nextName": "Streaming",
            "nextPath": "/streaming"
          },
          {
            "name": "Streaming",
            "subitems": [],
            "path": "/streaming",
            "prevName": "Offline support",
            "prevPath": "/offline",
            "nextName": "Command Line Interface",
            "nextPath": "/cli"
          }
        ],
        "prevName": "Function",
        "prevPath": "/types/function"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Command Line Interface",
            "subitems": [],
            "path": "/cli",
            "prevName": "Streaming",
            "prevPath": "/streaming",
            "nextName": "Visual Studio Code support",
            "nextPath": "/code"
          },
          {
            "name": "Visual Studio Code support",
            "subitems": [],
            "path": "/code",
            "prevName": "Command Line Interface",
            "prevPath": "/cli",
            "nextName": "Coding on Raspberry Pi",
            "nextPath": "/raspberry-pi"
          },
          {
            "name": "Coding on Raspberry Pi",
            "subitems": [],
            "path": "/raspberry-pi",
            "prevName": "Visual Studio Code support",
            "prevPath": "/code",
            "nextName": "Blocks Embed",
            "nextPath": "/blocks-embed"
          },
          {
            "name": "Blocks Embed",
            "subitems": [],
            "path": "/blocks-embed",
            "prevName": "Coding on Raspberry Pi",
            "prevPath": "/raspberry-pi"
          }
        ],
        "prevName": "Streaming",
        "prevPath": "/streaming"
      }
    ],
    "embedUrl": "http://microsoft.github.io/pxt-sample/",
    "id": "sample",
    "title": "MakeCode Editor Sample",
    "name": "sample",
    "htmlDocIncludes": {}
  },
  "blocksprj": {
    "id": "blocksprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.blocks",
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n</xml>",
      "main.ts": " ",
      "README.md": " "
    }
  },
  "tsprj": {
    "id": "tsprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "main.ts": " ",
      "README.md": " "
    }
  },
  "bundledpkgs": {
    "core": {
      "README.md": "# basic\r\n\r\nAdd your docs here...",
      "enums.d.ts": "/**\r\n * Enum for emotions\r\n */\r\ndeclare const enum Sentiment {\r\n    //% block=happy\r\n    Happy,\r\n    //% block=sad\r\n    Sad,\r\n    //% block=surprised\r\n    Surprised,\r\n    //% block=fear\r\n    Fear,\r\n    //% block=disgusted\r\n    Disgusted,\r\n    //% block=angry\r\n    Angry\r\n}\r\n\r\n/**\r\n * Enum for lean left / right\r\n */\r\ndeclare const enum LeftRight {\r\n    //% block=left\r\n    Left,\r\n    //% block=right\r\n    Right\r\n}\r\n\r\n/**\r\n * Enum for ball drop speed\r\n */\r\ndeclare const enum Speed {\r\n    //% block=slow\r\n    Slow,\r\n    //% block=medium\r\n    Medium,\r\n    //% block=fast\r\n    Fast\r\n}\r\n\r\n/**\r\n * Default status of all detector\r\n */\r\ndeclare const enum DefaultStatus {\r\n    ValueHolder\r\n}\r\n\r\n/**\r\n * Enum for eye status\r\n */\r\ndeclare const enum MouthStatus {\r\n    //% block=open\r\n    Open,\r\n    //% block=close\r\n    Close\r\n}\r\n\r\n\r\n/**\r\n * Enum for gender\r\n */\r\ndeclare const enum Gender {\r\n    //% block=male\r\n    Male,\r\n    //% block=female\r\n    Female\r\n}\r\n\r\n/**\r\n * Enum for MASKS\r\n */\r\ndeclare const enum maskType {\r\n    ironman,\r\n    average,\r\n    monalisa,\r\n    sean_connery,\r\n    skull,\r\n    audrey,\r\n    nicolas_cage\r\n}\r\n\r\n\r\n/**\r\n * Enum for Face substitution\r\n */\r\ndeclare const enum faceSubType {\r\n    average,\r\n    terminator,\r\n    walter,\r\n    clooney,\r\n    bieber,\r\n    kim,\r\n    rihanna,\r\n    audrey,\r\n    bill,\r\n    connery,\r\n    cage,\r\n    queen,\r\n    obama,\r\n    chuck,\r\n    monalisa,\r\n    scream\r\n}\r\n\r\n/*\r\n* Enum for face deformation\r\n* */\r\ndeclare const enum faceDeform {\r\n    unwell,\r\n    inca,\r\n    cheery,\r\n    dopey,\r\n    longface,\r\n    lucky,\r\n    overcute,\r\n    aloof\r\n}\r\n",
      "ns.ts": "/**\r\n * The detector apis\r\n */\r\n//% weight=100\r\n//% block=\"Face Detector\"\r\n//% color=#5B0621 icon=\"\\uf29a\"\r\nnamespace detector {\r\n\r\n}\r\n\r\n/**\r\n * The special effect apis\r\n */\r\n//% weight=100\r\n//% block=\"Augmented Reality\"\r\n//% color=#3891a6 icon=\"\\uf118\"\r\nnamespace augmentedReality {\r\n\r\n}\r\n\r\n/**\r\n * The gamming effect apis\r\n */\r\n//% weight=100\r\n//% block=\"Gaming\"\r\n//% color=#E87B21 icon=\"\\uf11b\"\r\nnamespace gaming {\r\n\r\n}\r\n\r\n/*\r\n * Main Rendering Engine\r\n * */\r\nloops.forever(() => {\r\n    if (true) {\r\n        detector.detectSentiment();\r\n        detector.detectMouthStatus();\r\n        detector.detectGender();\r\n\r\n    }\r\n\r\n    if (true) {\r\n        gaming.dropBall();\r\n    }\r\n});\r\n",
      "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Get or set the length of an array. This number is one more than the index of the last element the array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"arrays\"\n    length: number;\n\n    /**\n      * Append a new element to an array.\n      * @param items New elements of the Array.\n      */\n    //% help=arrays/push\n    //% shim=Array_::push weight=49\n    //% blockId=\"array_push\" block=\"%list| add value %value| to end\" blockNamespace=\"arrays\"\n    push(item: T): void;\n\n    /**\n      * Remove the last element from an array and return it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=48\n    //% blockId=\"array_pop\" block=\"get and remove last value from %list\" blockNamespace=\"arrays\"\n    pop(): T;\n\n    /**\n      * Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% help=arrays/reverse\n    //% helper=arrayReverse weight=10\n    //% blockId=\"array_reverse\" block=\"reverse %list\" blockNamespace=\"arrays\"\n    reverse(): void;\n\n    /**\n      * Remove the first element from an array and return it. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=70\n    //% blockId=\"array_shift\" block=\"get and remove first value from %list\" blockNamespace=\"arrays\"\n    shift(): T;\n\n    /**\n      * Add one element to the beginning of an array and return the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=69\n    //% blockId=\"array_unshift\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value: T): number;\n\n    /**\n      * Return a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% help=arrays/slice\n    //% helper=arraySlice weight=41 blockNamespace=\"arrays\"\n    slice(start: number, end: number): T[];\n\n    /**\n      * Remove elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * Sort the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Call a defined callback function on each element of an array, and return an array containing the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Return the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Remove the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element: T): boolean;\n\n    /** Remove the element at a certain index. */\n    //% help=arrays/remove-at\n    //% shim=Array_::removeAt weight=49\n    //% blockId=\"array_removeat\" block=\"%list| remove value at %index\" blockNamespace=\"arrays\"\n    removeAt(index: number): T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/insert-at\n    //% shim=Array_::insertAt weight=84\n    //% blockId=\"array_insertAt\" block=\"%list| insert at %index| value %value\" blockNamespace=\"arrays\"\n    insertAt(index: number, value: T): void;\n\n    /**\n      * Return the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% help=arrays/index-of\n    //% shim=Array_::indexOf weight=50\n    //% blockId=\"array_indexof\" block=\"%list| find index of %value\" blockNamespace=\"arrays\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Get the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% help=arrays/get\n    //% shim=Array_::getAt weight=85\n    get(index: number): T;\n\n    /**\n     * Store a value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/set\n    //% shim=Array_::setAt weight=84\n    set(index: number, value: T): void;\n\n    [n: number]: T;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=49\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %list=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Return the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=48\n    //% help=text/char-at\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=47\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Return the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * See how the order of characters in two strings is different (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% help=text/compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=10\n    //% help=text/substr\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start: number, length?: number): string;\n\n    // This block is currently disabled, as it does not compile in some targets\n    // Add % sign back to the block annotation to re-enable\n    /** Returns a value indicating if the string is empty */\n    //% shim=String_::isEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    // block=\"%this=text| is empty\"\n    isEmpty(): boolean;\n\n    [index: number]: string;\n}\n\n/**\n  * Convert a string to an integer.\n  * @param s A string to convert into a number. eg: 123\n  */\n//% shim=String_::toNumber\n//% help=text/parse-int\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\ndeclare function parseInt(text: string): number;\n\ninterface Object { }\ninterface Function { }\ninterface IArguments { }\ninterface RegExp { }\n\ntype uint8 = number;\ntype uint16 = number;\ntype uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=Boolean_::toString\n    toString(): string;\n}\n\n/**\n * Combine, split, and search text strings.\n*/\n//% blockNamespace=\"Text\"\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/from-char-code\n    //% shim=String_::fromCharCode\n    //% weight=0\n    //% blockNamespace=\"Text\" blockId=\"stringFromCharCode\" block=\"text from char code %code\" weight=1\n    function fromCharCode(code: number): string;\n}\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=Number_::toString\n    toString(): string;\n}\n\n/**\n * Add, remove, and replace items in lists.\n*/\n//% blockNamespace=\"Arrays\"\ndeclare namespace Array {\n}\n\n/**\n * More complex operations with numbers.\n*/\ndeclare namespace Math {\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and 1.\n     */\n    //% shim=Math_::random\n    //% helpUrl=\"/reference/math/random\"\n    function random(): number;\n\n    /**\n     * Returns a pseudorandom number between min and max included. \n     * If both numbers are integral, the result is integral.\n     * @param min the lower inclusive bound, eg: 0\n     * @param max the upper inclusive bound, eg: 10\n     */\n    //% blockId=\"device_random\" block=\"pick random %min|to %limit\"\n    //% helpUrl=\"/reference/math/random-range\"\n    //% shim=Math_::randomRange\n    function randomRange(min: number, max: number): number;\n\n    /**\n     * Returns the natural logarithm (base e) of a number.\n     * @param x A number\n     */\n    //% shim=Math_::log\n    function log(x: number): number;\n\n    /**\n     * Returns returns ``e^x``.\n     * @param x A number\n     */\n    //% shim=Math_::exp\n    function exp(x: number): number;\n\n    /**\n     * Returns the sine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::sin\n    function sin(x: number): number;\n\n    /**\n     * Returns the cosine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::cos\n    function cos(x: number): number;\n\n    /**\n     * Returns the tangent of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::tan\n    function tan(x: number): number;\n\n    /**\n     * Returns the arcsine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::asin\n    function asin(x: number): number;\n\n    /**\n     * Returns the arccosine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::acos\n    function acos(x: number): number;\n\n    /**\n     * Returns the arctangent (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::atan\n    function atan(x: number): number;\n\n    /**\n     * Returns the arctangent of the quotient of its arguments.\n     * @param y A number\n     * @param x A number\n     */\n    //% shim=Math_::atan2\n    function atan2(y: number, x: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n\n    /**\n     * Returns the smallest number greater than or equal to its numeric argument.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::ceil\n    function ceil(x: number): number;\n\n    /**\n      * Returns the greatest number less than or equal to its numeric argument.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::floor\n    function floor(x: number): number;\n\n    /**\n      * Returns the number with the decimal part truncated.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::trunc\n    function trunc(x: number): number;\n\n    /**\n      * Returns a supplied numeric expression rounded to the nearest number.\n      * @param x The value to be rounded to the nearest number.\n      */\n    //% shim=Math_::round\n    function round(x: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit multiplication of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::imul\n    function imul(x: number, y: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit division of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::idiv\n    function idiv(x: number, y: number): number;\n}\n",
      "pxt-helpers.ts": "type Action = () => void;\n\nnamespace helpers {\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n\n    export function arrayReverse<T>(arr: T[]): void {\n        let len = arr.length;\n        for (let i = 0; i < len / 2; i++) {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]): T {\n        return arr.removeAt(0);\n    }\n\n    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n            for(let i = values.length; i > 0; --i) {\n                arr.insertAt(0, values[i - 1]);\n            }\n            return arr.length;\n        }\n    */\n    export function arrayUnshift<T>(arr: T[], value: T): number {\n        arr.insertAt(0, value);\n        return arr.length;\n    }\n\n    function swap<T>(arr: T[], i: number, j: number): void {\n        let temp: T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }\n        let len = arr.length;\n        // simple selection sort.\n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j) {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn) {\n            //TODO: support native strings and number sorting\n            /* callbackfn = function (value1: string, value2: string) : number {\n                return value1.compare(value2);\n                }*/\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n\n    export function arraySlice<T>(arr: T[], start: number, end: number): T[] {\n        const res: T[] = [];\n        const len = arr.length;\n\n        if (start < 0) {\n            start = Math.max(len + start, 0);\n        }\n\n        if (end < 0) {\n            end = len + end;\n        }\n\n        const sliceLength = end - start;\n\n        for (let i = 0; i < sliceLength; ++i) {\n            const index = i + start;\n            if (index >= len) {\n                break;\n            }\n            res.push(arr[index]);\n        }\n        return res;\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions.\n      */\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions.\n      */\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n}\n",
      "pxt.json": "{\n    \"name\": \"core\",\n    \"description\": \"A target sample for PXT\",\n    \"files\": [\n        \"README.md\",\n        \"pxt-core.d.ts\",\n        \"pxt-helpers.ts\",\n        \"enums.d.ts\",\n        \"sims.d.ts\",\n        \"ns.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"public\": true,\n    \"dependencies\": {}\n}",
      "sims.d.ts": "// Auto-generated from simulator. Do not edit.\ndeclare namespace gaming {\n    /**\r     * Drop ball catcher\r     *\r     * @param speed\r     */\n    //% weight=100\n    //% blockId=onballdrop block=\"on ball drop speed %speed\"\n    //% shim=gaming::onBallDrop\n    function onBallDrop(speed: Speed, handler: () => void): void;\n\n    /**\r     * get ball x position\r     */\n    //% weight=100\n    //% blockId=getBallXPos block=\"get ball horizontal position\"\n    //% shim=gaming::getBallXPos\n    function getBallXPos(): number;\n\n    /**\r     * get ball y position\r     */\n    //% weight=100\n    //% blockId=getBallYPos block=\"get ball vertical position\"\n    //% shim=gaming::getBallYPos\n    function getBallYPos(): number;\n\n    /**\r     * check if ball hit mouth\r     */\n    //% weight=100\n    //% blockId=ifBallHitMouth block=\"check ball hit mouth\"\n    //% shim=gaming::ifBallHitMouth\n    function ifBallHitMouth(): boolean;\n\n    /**\r     * check if ball hit nose\r     */\n    //% weight=100\n    //% blockId=ifBallHitNose block=\"check ball hit nose\"\n    //% shim=gaming::ifBallHitNose\n    function ifBallHitNose(): boolean;\n\n    /**\r     * Drop ball\r     */\n    //%\n    //% shim=gaming::dropBall\n    function dropBall(): void;\n\n}\ndeclare namespace detector {\n    /**\r     * Act on sentiment\r     *\r     * @param sentiment\r     * @param handler\r     */\n    //% weight=100\n    //% blockId=onsentiment block=\"on sentiment %sentiment\"\n    //% shim=detector::onSentiment\n    function onSentiment(sentiment: Sentiment, handler: () => void): void;\n\n    /**\r     * Act on sentiment\r     *\r     * @param gender\r     * @param handler\r     */\n    //% weight=100\n    //% blockId=ongender block=\"on gender %gender\"\n    //% shim=detector::onGender\n    function onGender(gender: Gender, handler: () => void): void;\n\n    /**\r     * Act on mouth open or close\r     *\r     * @param mouthStatus\r     * @param hander\r     */\n    //% weight=100\n    //% blockId=onmouthstatus block=\"on mouth %mouthStatus\"\n    //% shim=detector::onMouthStatus\n    function onMouthStatus(mouthStatus: MouthStatus, handler: () => void): void;\n\n    /**\r     * Detect sentiment\r     */\n    //%\n    //% shim=detector::detectSentiment\n    function detectSentiment(): void;\n\n    /**\r     * Detect MouthStatus\r     */\n    //%\n    //% shim=detector::detectMouthStatus\n    function detectMouthStatus(): void;\n\n    /**\r     * Detect Gender\r     */\n    //%\n    //% shim=detector::detectGender\n    function detectGender(): void;\n\n    /**\r     * isFaceLeanLeft\r     *\r     * @param leftRight\r     */\n    //% weight=100\n    //% blockId=isFaceLeanLeft block=\"face lean %leftRight\"\n    //% shim=detector::faceLean\n    function faceLean(leftRight: LeftRight): boolean;\n\n    /**\r     * get face center X position\r     *\r     */\n    //% weight=100\n    //% blockId=getFaceHorizontalPosition block=\"get face horizontal position\"\n    //% shim=detector::getFaceXPosition\n    function getFaceXPosition(): number;\n\n    /**\r     * get face center Y position\r     *\r     */\n    //% weight=100\n    //% blockId=getFaceVerticalPosition block=\"get face vertical position\"\n    //% shim=detector::getFaceYPosition\n    function getFaceYPosition(): number;\n\n    /*\r     * Tracking convergence\r     *\r     * This function indicates how well the face is being tracked.\r     * The smaller the number, the better the tracking results.\r     * */\n    //% block=\"Get Tracking Convergence\" blockId=\"get_track_conv\"\n    //% weight=90\n    //% shim=detector::getTrackingConvergence\n    function getTrackingConvergence(): number;\n\n}\ndeclare namespace augmentedReality {\n    /**\r     * Draw face outline\r     */\n    //% weight=90\n    //% block=\"draw face outline\" blockId=\"face_outline\"\n    //% shim=augmentedReality::drawFaceOutlineAsync promise\n    function drawFaceOutline(): void;\n\n    /**\r     * Draw deformation\r     */\n    //% block=\"deform face %deform\" blockId=\"face_deform\"\n    //% weight=50\n    //% shim=augmentedReality::drawFaceDeformationAsync promise\n    function drawFaceDeformation(deform: faceDeform): void;\n\n    /**\r     * Add MASKS to faces\r     */\n    //% weight=90\n    //% block=\"draw mask %mask\" blockId=\"face_mask\"\n    //% shim=augmentedReality::drawMasksAsync promise\n    function drawMasks(mask: maskType): void;\n\n    /**\r     * Face substitution\r     */\n    //% weight=90\n    //% block=\"face substitution %face\" blockId=\"face_sub\"\n    //% shim=augmentedReality::faceSubstitutionLoopAsync promise\n    function faceSubstitutionLoop(face: faceSubType): void;\n\n}\ndeclare namespace loops {\n    /**\r     * Repeats the code forever in the background. On each iteration, allows other code to run.\r     * @param body the code to repeat\r     */\n    //% help=functions/forever weight=55 blockGap=8\n    //% blockId=device_forever block=\"forever\"\n    //% shim=loops::forever\n    function forever(body: () => void): void;\n\n    /**\r     * Pause for the specified time in milliseconds\r     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000\r     */\n    //% help=functions/pause weight=54\n    //% block=\"pause (ms) %pause\" blockId=device_pause\n    //% shim=loops::pauseAsync promise\n    function pause(ms: number): void;\n\n}\ndeclare namespace console {\n    /**\r     * Print out message\r     */\n    //%\n    //% shim=console::log\n    function log(msg: string): void;\n\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "test.ts": ""
    }
  },
  "compile": {
    "isNative": false,
    "hasHex": false,
    "floatingPoint": true
  },
  "versions": {
    "target": "1.0.9",
    "pxt": "2.3.30"
  }
}