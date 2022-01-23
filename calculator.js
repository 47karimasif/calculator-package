export const calculator = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b > 0) {
        return a / b;
      }
      return "Division by zero not possible";
    default:
      return "No operation avaialble for this operator";
  }
};
