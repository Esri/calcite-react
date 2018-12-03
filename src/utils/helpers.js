import { transparentize } from 'polished';
import CalciteTheme from '../theme/CalciteTheme';

const unitCalc = (operand1, operand2, operator) => {
  let operand1Value = operand1;
  let operand1Unit;
  if (typeof operand1 === 'string') {
    operand1Value = parseFloat(operand1);
    operand1Unit = operand1.replace(operand1Value, '');
  }

  let operand2Value = operand2;
  let operand2Unit;
  if (typeof operand2 === 'string') {
    operand2Value = parseFloat(operand2);
    operand2Unit = operand2.replace(operand2Value, '');
  }

  let value = window.eval(operand1Value + operator + operand2Value); // eslint-disable-line no-eval
  value = value + (operand1Unit || operand2Unit);

  return value;
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

export {
  unitCalc,
  clearfix,
  fontSize,
  subNavUnderline,
  backgroundGradient,
  transition
};
