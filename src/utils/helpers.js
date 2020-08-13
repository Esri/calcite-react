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

import { useEffect, useState } from 'react';
import { transparentize } from 'polished';
import { CalciteTheme } from '../CalciteThemeProvider';

const unitCalc = (left, right, operator) => {
  let leftUnit, rightUnit;
  if (typeof left === 'string') {
    leftUnit = left.replace(parseFloat(left), '');
    left = parseFloat(left);
  }
  if (typeof right === 'string') {
    rightUnit = right.replace(parseFloat(right), '');
    right = parseFloat(right);
  }

  const unit = leftUnit || rightUnit;

  switch (operator) {
    case '+':
      return left + right + unit;
    case '-':
      return left - right + unit;
    case '*':
      return left * right + unit;
    case '/':
      return left / right + unit;
    case '%':
      return (left % right) + unit;
    default:
      return undefined;
  }
};

// const unitCompare = (compare1, compare2, operator) => {
//   const compare1Value = parseFloat(compare1);
//   const compare2Value = parseFloat(compare2);
//
//   let value = window.eval(compare1Value + operator + compare2Value); // eslint-disable-line no-eval
//
//   return value;
// };

const clearfix = () => {
  return `
    &::after {
      content: '';
      display: table;
      clear: both;
    }
  `;
};

// const modularScale = (increment, theme) => {
//   const ratio = theme.type.ratio;
//   const bodySize = theme.type.bodySize;
//   let v1 = bodySize;
//   let v2 = theme.type.smallSize;
//   let value = v1;
//
//   while (unitCompare(v2 > v1)) {
//     v2 = unitCalc(v2, ratio, '/'); // will be off-by-1
//   }
//
//   while (unitCompare(v2 < v1)) {
//     v2 = unitCalc(v2, ratio, '*'); // will fix off-by-1
//   }
//
//   const doubleStranded = unitCompare(v2, v1, '>');
//
//   if (increment > 0) {
//     for (var i = 1; i < increment; i++) {
//       if (doubleStranded && unitCalc(v1, ratio, '*') > v2) {
//         value = v2;
//         v2 = unitCalc(v2, ratio, '*');
//       } else {
//         v1 = unitCalc(v1, ratio, '*');
//         value = v1;
//       }
//     }
//   }
//
//   if (increment < 0) {
//     const unit = unitCalc(bodySize, 16, '/');
//     const decriment = unitCalc(increment, unit, '*');
//     value = unitCalc(bodySize, decriment, '+');
//   }
//
//   return value;
// };

const fontSize = (scale, theme) => {
  // let fontSizeVal = modularScale(scale, theme);
  // let lineHeightVal;
  //
  // if (scale > 7) {
  //   lineHeightVal = 2.5 * theme.baseline;
  // } else if (scale <= 7 && scale > 4) {
  //   lineHeightVal = 2 * theme.baseline;
  // } else if (scale <= 4 && scale > 2) {
  //   lineHeightVal = 1.5 * theme.baseline;
  // } else if (scale <= 2) {
  //   lineHeightVal = theme.baseline;
  // }

  switch (scale) {
    case -3:
      return `
        font-size: 0.8125rem;
        line-height: 1.55rem;
      `;
    case -2:
      return `
        font-size: 0.875rem;
        line-height: 1.55rem;
      `;
    case -1:
      return `
        font-size: 0.9375rem;
        line-height: 1.55rem;
      `;
    case 0:
      return `
        font-size: 1rem;
        line-height: 1.55rem;
      `;
    case 1:
      return `
        font-size: 1.2019rem;
        line-height: 1.55rem;
      `;
    case 2:
      return `
        font-size: 1.414rem;
        line-height: 1.55rem;
      `;
    case 3:
      return `
        font-size: 1.69949rem;
        line-height: 2.325rem;
      `;
    case 4:
      return `
        font-size: 1.9994rem;
        line-height: 2.325rem;
      `;
    case 5:
      return `
        font-size: 2.40307rem;
        line-height: 3.1rem;
      `;
    case 6:
      return `
        font-size: 2.82715rem;
        line-height: 3.1rem;
      `;
    case 7:
      return `
        font-size: 3.39795rem;
        line-height: 3.1rem;
      `;
    case 8:
      return `
        font-size: 3.99758rem;
        line-height: 3.875rem;
      `;
    default:
      return `
        font-size: 1rem;
        line-height: 1.55rem;
      `;
  }
};

const subNavUnderline = props => {
  return `
    background-image: linear-gradient(to top, transparent 94%, ${
      props.theme.palette.white
    } 96%, ${props.theme.palette.white} 100%);
  `;
};

const backgroundGradient = (img, fromColor, toColor, addOverlayGradient) => {
  if (!fromColor || !toColor) {
    return `
      background: url(${img}) no-repeat top center;
      background-size: cover;
    `;
  } else {
    if (addOverlayGradient) {
      return `
        background: linear-gradient(to right, ${transparentize(
          0.3,
          fromColor
        )} 0%, ${transparentize(
        0.3,
        toColor
      )} 100%), url(${img}) no-repeat center center, linear-gradient(to right, ${fromColor} 0%, ${toColor} 100%);
        background-size: cover;
      `;
    } else {
      return `
        background: url(${img}) no-repeat center center, linear-gradient(to right, ${fromColor} 0%, ${toColor} 100%);
        background-size: cover;
      `;
    }
  }
};

const transition = delayTime => {
  if (delayTime) {
    return `
      ${CalciteTheme.transitionDuration} ${delayTime} ${CalciteTheme.easingFunc}
    `;
  }
  return `
    ${CalciteTheme.transitionDuration} ${CalciteTheme.easingFunc}
  `;
};

const getChildType = child => {
  return (
    (child.type && child.type.target && child.type.target.displayName) ||
    (child.type && child.type.displayName)
  );
};

const getAccessibleOnClickHandlers = onClick => {
  return onClick
    ? {
        onClick,
        onKeyPress:
          onClick &&
          (event => {
            if (event.key === 'Enter' || event.key === 'Space') {
              onClick();
            }
          })
      }
    : undefined;
};

const rtlPlacement = placement => {
  if (placement && document.documentElement.dir === 'rtl') {
    const hash = {
      end: 'start',
      start: 'end',
      left: 'right',
      right: 'left'
    };
    placement = placement.replace(
      /start|end|right|left/g,
      matched => hash[matched]
    );
  }
  return placement;
};

const useContextState = contextProps => {
  const [contextState, setContextState] = useState(contextProps);

  useEffect(() => {
    setContextState(contextProps);
  }, Object.values(contextProps));

  return contextState;
};

export {
  unitCalc,
  clearfix,
  fontSize,
  subNavUnderline,
  backgroundGradient,
  transition,
  getChildType,
  getAccessibleOnClickHandlers,
  rtlPlacement,
  useContextState
};
