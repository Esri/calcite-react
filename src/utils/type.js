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

const avenirLight = () => {
  return `
    font-weight: 300;
    font-style: normal;

    b, strong {
      font-weight: 500;
    }
  `;
};

const avenirLightItalic = () => {
  return `
    font-weight: 300;
    font-style: italic;

    b, strong {
      font-weight: 500;
    }
  `;
};

const avenirRegular = () => {
  return `
    font-weight: 400;
    font-style: normal;

    b, strong {
      font-weight: 500;
    }
  `;
};

const avenirItalic = () => {
  return `
    font-weight: 400;
    font-style: italic;

    b, strong {
      font-weight: 500;
    }
  `;
};

const avenirDemi = () => {
  return `
    font-weight: 500;
    font-style: normal;

    b, strong {
      font-weight: 600;
    }
  `;
};

const avenirDemiItalic = () => {
  return `
    font-weight: 500;
    font-style: italic;

    b, strong {
      font-weight: 600;
    }
  `;
};

const avenirBold = () => {
  return `
    font-weight: 600;
    font-style: normal;

    b, strong {
      font-weight: 600;
    }
  `;
};

const avenirBoldItalic = () => {
  return `
    font-weight: 600;
    font-style: italic;

    b, strong {
      font-weight: 600;
    }
  `;
};

export {
  avenirLight,
  avenirLightItalic,
  avenirRegular,
  avenirItalic,
  avenirDemi,
  avenirDemiItalic,
  avenirBold,
  avenirBoldItalic
};
