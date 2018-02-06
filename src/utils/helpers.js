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

  let value = eval(operand1Value + operator + operand2Value);
  value = value + (operand1Unit || operand2Unit);

  return value;
};

const unitCompare = (compare1, compare2, operator) => {
  const compare1Value = parseFloat(compare1);
  const compare2Value = parseFloat(compare2);

  let value = eval(compare1Value + operator + compare2Value);

  return value;
};

const clearfix = () => {
  return `
    &::after {
      content: '';
      display: table;
      clear: both;
    }
  `;
};

const modularScale = (increment, theme) => {
  const ratio = theme.type.ratio;
  const bodySize = theme.type.bodySize;
  let v1 = bodySize;
  let v2 = theme.type.smallSize;
  let value = v1;

  while (unitCompare(v2 > v1)) {
    v2 = unitCalc(v2, ratio, '/'); // will be off-by-1
  }

  while (unitCompare(v2 < v1)) {
    v2 = unitCalc(v2, ratio, '*'); // will fix off-by-1
  }

  const doubleStranded = unitCompare(v2, v1, '>');

  if (increment > 0) {
    for (var i = 1; i < increment; i++) {
      if (doubleStranded && unitCalc(v1, ratio, '*') > v2) {
        value = v2;
        v2 = unitCalc(v2, ratio, '*');
      } else {
        v1 = unitCalc(v1, ratio, '*');
        value = v1;
      }
    }
  }

  if (increment < 0) {
    const unit = unitCalc(bodySize, 16, '/');
    const decriment = unitCalc(increment, unit, '*');
    value = unitCalc(bodySize, decriment, '+');
  }

  return value;
};

const fontSize = (scale, theme) => {
  let fontSizeVal = modularScale(scale, theme);
  let lineHeightVal;

  if (scale > 7) {
    lineHeightVal = 2.5 * theme.baseline;
  } else if (scale <= 7 && scale > 4) {
    lineHeightVal = 2 * theme.baseline;
  } else if (scale <= 4 && scale > 2) {
    lineHeightVal = 1.5 * theme.baseline;
  } else if (scale <= 2) {
    lineHeightVal = theme.baseline;
  }

  return `
    font-size: ${fontSizeVal};
    line-height: ${lineHeightVal};
  `;
};

export { unitCalc, clearfix, fontSize };
