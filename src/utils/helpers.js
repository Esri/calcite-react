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

export { unitCalc };
