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

- [Contributing Guide](https://github.com/ArcGIS/calcite-react/blob/develop/CONTRIBUTING.md)
- [Calcite Web Documentation](http://esri.github.io/calcite-web/documentation/)

## Licensing

COPYRIGHT © 2019 Esri

All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.

This material is licensed for use under the Esri Master License Agreement (MLA), and is bound by the terms of that agreement. You may redistribute and use this code without modification, provided you adhere to the terms of the MLA and include this copyright notice.

See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english

For additional information, contact: Environmental Systems Research Institute, Inc. Attn: Contracts and Legal Services Department 380 New York Street Redlands, California, USA 92373 USA

email: contracts@esri.com
