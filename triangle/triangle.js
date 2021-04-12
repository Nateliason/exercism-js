//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isInequal() {
    if (this.sides[0] + this.sides[1] < this.sides[2] || this.sides[1] + this.sides[2] < this.sides[0] || this.sides[0] + this.sides[2] < this.sides[1]) {
      return true;
    } else {
      return false;
    }
  }

  get isEquilateral() {
    if ( this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] != 0) {
      return true;
    } else {
      return false;
    }
  }

  get isIsosceles() {
    if (this.isInequal) {
      return false;
    } else if (this.sides[0] === this.sides[1] || this.sides[0] === this.sides[2] || this.sides[1] === this.sides[2]) {
      return true;
    } else {
      return false;
    }
  }

  get isScalene() {
    if (this.isInequal) {
      return false;
    } else if (this.sides[0] != this.sides[1] && this.sides[0] != this.sides[2] && this.sides[1] != this.sides[2]) {
      return true;
    } else {
      return false;
    }
  }
}