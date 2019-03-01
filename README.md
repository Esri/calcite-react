# Documentation

You can find the full docs for Calcite React here: https://calcite-react.netlify.com

# Calcite React

Calcite React is a component library built in React and used by Esri. It is an
implementation of Calcite, the geo-centric design language of Esri, aimed at
helping React developers to quickly build components that adhere to the Calcite
design language.

## Installation

```shell
npm i calcite-react
```

## Usage

### Theme Provider

Calcite React components rely on `<CalciteThemeProvider />` to access our theme
via [React Context](https://reactjs.org/docs/context.html). All Calcite React
components must be wrapped in this provider component in order to render
properly. In most cases, it's recommended to wrap your entire app at the highest
level.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'path/to/App';

import CalciteThemeProvider from 'calcite-react/CalciteThemeProvider';

ReactDOM.render(
  <CalciteThemeProvider>
    <App />
  </CalciteThemeProvider>,
  document.getElementById('root')
);
```

### Components

Below is a simple example of importing and using two Calcite React components.

```jsx
import React, { Component } from 'react';

import Button from 'calcite-react/Button';
import { CalciteH1 } from 'calcite-react/Elements';

class App extends Component {
  render() {
    return (
      <div>
        <CalciteH1>My App uses Calcite headers and buttons!</CalciteH1>
        <Button>A Calcite Button!</Button>
      </div>
    );
  }
}

export default App;
```

## References

- [Contributing Guide](/CONTRIBUTING.md)
- [Calcite React Docs](https://calcite-react.netlify.com)
- [Calcite Web Documentation](http://esri.github.io/calcite-web/documentation/)

## Licensing

Copyright 2019 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](/LICENSE) file.
