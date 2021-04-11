//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  let stepCount = 0;

  const collatz = (num2) => {
    if (num < 1) {
      throw "Only positive numbers are allowed";
    } else if (num2 === 1) {
      return stepCount;
    } else if (num2 % 2 === 0) {
      stepCount += 1;
      return collatz(num2/2);
    } else if (num2 % 2 === 1) {
      stepCount += 1;
      return collatz(num2*3 + 1);
    }
  };

  return collatz(num);
};
