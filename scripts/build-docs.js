// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const converter = require('number-to-words');

const svgPathRegex = /\sd="(.*)"/;
const svgFolderPath = path.resolve(
  __dirname,
  '../node_modules/@esri/calcite-ui-icons/icons'
);
const buildPath = path.resolve(__dirname, '../build');
const publishPath = path.resolve(__dirname, '../publish');

const iconsDefinition = require('@esri/calcite-ui-icons');

// Delete and recreate build folder
if (fs.existsSync(buildPath)) {
  rimraf.sync(buildPath);
}
fs.mkdirSync(buildPath);

// calcite-ui-icons exports a JSON structure of their icons.
// Iterate over that structure and craft React components for each icon.
Object.keys(iconsDefinition.icons).forEach(key => {
  const iconDef = iconsDefinition.icons[key];

  // Make a component name from the icon name
  iconDef.name =
    key
      .split(/-/g)
      .map(part => {
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join('') + 'Icon';

  const startsWithNumber = iconDef.name.match(/(\d*)(.*)/);

  if (startsWithNumber[1]) {
    iconDef.name = `${numberToWords(
      startsWithNumber[1]
    )}${capitalizeFirstLetter(startsWithNumber[2])}`;
  }

  iconDef.fileName = `${iconDef.name}.js`;

  // create first part of file
  let fileContent = `import React from 'react';

const ${
    iconDef.name
  } = ({ color = 'currentColor', size = 24, filled = false, className, children, ...props }) => {
  let classes = 'calcite-icon';
  if (className) classes += \` \${className}\`;
`;

  const sizes = Object.keys(iconDef.filled).sort(); // sort the sizes for use by if...then

  // loop through each size, except the largest one, which will be the default (i.e. no if...then)
  let size, componentSize;

  Object.keys(iconDef.filled)
    .sort()
    .forEach((key, i) => {
      const size = key;
      const largest = i === Object.keys(iconDef.filled).length - 1;

      if (!largest) {
        fileContent += `
    if (size <= ${size}) {
      return (
        <svg {...props} width={size} height={size} fill={color} viewBox="0 0 ${size} ${size}" className={classes}>`;
        if (iconDef.filled) {
          fileContent += `
          {filled ? ${getPathString(iconDef.filled[key])} : ${getPathString(
            iconDef.outline[key]
          )}}`;
        } else {
          fileContent += `
          ${getPathString(iconDef.outline[key])}`;
        }
        fileContent += `
        </svg>
      );
    }
  `;
      } else {
        fileContent += `
    return (
      <svg {...props} width={size} height={size} fill={color} viewBox="0 0 ${size} ${size}" className={classes}>`;
        if (iconDef.filled) {
          fileContent += `
        {filled ? ${getPathString(iconDef.filled[key])} : ${getPathString(
            iconDef.outline[key]
          )}}`;
        } else {
          fileContent += `
          ${getPathString(iconDef.outline[key])}`;
        }
        fileContent += `
      </svg>
    );
  `;
      }
    });

  fileContent += `
}

export default ${iconDef.name};
`;

  // Make the subdirectory, if it doesn't exist
  if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath);
  }

  // Write the component file
  fs.writeFileSync(path.join(buildPath, iconDef.fileName), fileContent);
});

function getPathString(paths) {
  const pathStrings = paths.map(path => `<path d="${path}"/>`);

  if (pathStrings.length === 1) return pathStrings[0];

  return `<React.Fragment>${pathStrings.join('')}</React.Fragment>`;
}

function numberToWords(number) {
  const word = capitalizeFirstLetter(converter.toWords(number))
    .replace(/ /g, '-')
    .replace(/,/g, '-')
    .split('-')
    .map(s => capitalizeFirstLetter(s))
    .join('');

  return word;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
