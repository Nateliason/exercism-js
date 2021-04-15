//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  const digits = Array.from(num.toString()).map(Number);
  const length = digits.length;
  let sum = 0;
  digits.forEach(n => {
    sum += n**length;
  });
  return sum === num ? true : false;
};