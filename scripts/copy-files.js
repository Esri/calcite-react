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

/* eslint-disable no-console */
import path from 'path';
import fse from 'fs-extra';

const files = ['README.md'];

Promise.all(files.map(file => copyFile(file))).then(() => createPackageFile());

function copyFile(file) {
  const buildPath = resolveBuildPath(file);
  return new Promise(resolve => {
    fse.copy(file, buildPath, err => {
      if (err) throw err;
      resolve();
    });
  }).then(() => console.log(`Copied ${file} to ${buildPath}`));
}

function resolveBuildPath(file) {
  return path.resolve(__dirname, '../dist/', path.basename(file));
}

function createPackageFile() {
  return new Promise(resolve => {
    fse.readFile(
      path.resolve(__dirname, '../package.json'),
      'utf8',
      (err, data) => {
        if (err) {
          throw err;
        }

        resolve(data);
      }
    );
  })
    .then(data => JSON.parse(data))
    .then(packageData => {
      const {
        name,
        version,
        description,
        keywords,
        author,
        contributors,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies
      } = packageData;

      const minimalPackage = {
        name,
        version,
        description,
        keywords,
        author,
        contributors,
        license,
        repository,
        bugs,
        homepage,
        peerDependencies,
        dependencies
        // main: './index.js',
        // module: './index.es.js',
      };

      return new Promise(resolve => {
        const buildPath = path.resolve(__dirname, '../dist/package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(buildPath, data, err => {
          if (err) throw err;
          console.log(`Created package.json in ${buildPath}`);
          resolve();
        });
      });
    });
}
