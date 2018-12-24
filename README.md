# babel-plugin-react-data-name

## Overview

Babel plugin for adding meaningful identifiers to React Components. 
This allows our components to have a designated attribute for end-to-end integration tests (without having to add them manually).

## Installation

This package is available on npm as `babel-plugin-react-data-name`, and you can find it
[here](https://www.npmjs.com/package/babel-plugin-react-data-name).

To install the latest stable version with Yarn:

```sh
$ yarn add --dev babel-plugin-react-data-name
```

## Usage

#### BABEL CONFIG

```json
{
  "env": {
    "development": {
      "plugins": ["react-data-name"]
    }
  }
}
```

#### CUSTOM ATTRIBUTE NAME

You can pass custom attribute name with your `.bablerc`.

```json
{
  "env": {
    "development": {
      "plugins": [["react-data-name", { "property": "data-test" }]]
    }
  }
}
```
## License

[MIT][license]
