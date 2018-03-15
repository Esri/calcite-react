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
