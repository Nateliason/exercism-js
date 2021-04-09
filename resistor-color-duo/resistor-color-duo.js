//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

export const colorCode = (color) => {
  return COLORS.indexOf(color);
};

export const decodedValue = (values) => {
  let nums = [];
  values.forEach(x => 
    nums.push(colorCode(x))
  )
  return parseInt(`${nums[0]}${nums[1]}`, 10);
};

