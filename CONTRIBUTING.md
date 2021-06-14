# Contributing

Thanks for being interested in this project! Here are a few guidelines.

## Getting Started

To get started, go ahead and fork this repo. Once you've done that, there are a few things you should know before getting started.

### Before you Start

`npm install`

### NPM tasks

#### To run `docz`

`npm run docz:dev`

> Use docz as the primary development/test environment.

#### To build for production

`npm run build`

## Testing

After saving your changes and building for production, run `npm pack` in the dist folder to create a .tgz file that mimics a npm-published calcite-react package. Then run `npm install [filename].tgz` from your parent app to install the package locally and test drive the changes.

## Submitting a Pull Request

Once you're ready to submit your changes, submit a pull request **into the `develop` branch**. Often it's a good idea to open an issue to discuss your proposed changes before making a PR, but you're welcome to submit a PR without an issue - just be sure to include a good description of your changes.

# styled-component file snippet (VSCode)

```
"Stub out a calcite-react styled-component": {
  "prefix": "calcite-styled-component",
  "body": [
    "// Copyright 2019 Esri",
    "// Licensed under the Apache License, Version 2.0 (the \"License\");",
    "// you may not use this file except in compliance with the License.",
    "// You may obtain a copy of the License at",
    "// http://www.apache.org/licenses/LICENSE-2.0",
    "// Unless required by applicable law or agreed to in writing, software",
    "// distributed under the License is distributed on an \"AS IS\" BASIS,",
    "// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.",
    "// See the License for the specific language governing permissions and",
    "// limitations under the License.​",
    "",
    "// styled-components",
    "import styled, { css } from 'styled-components';",
    "",
    "// Utils, common elements",
    "import { unitCalc, fontSize } from '../utils/helpers';",
    "",
    "// Calcite theme and Esri colors",
    "import { CalciteTheme as theme } from '../CalciteThemeProvider';",
    "",
    "// Calcite components",
    "",
    "// Icons",
    "",
    "// Third party libraries",
    "",
    "const $1 = styled()`",
    "",
    "`;",
    "$1.defaultProps = { theme };",
    "",
    "export { $1 };",
    ""
  ],
  "description": "Stub out a calcite-react styled-component"
}
```
