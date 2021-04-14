//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const mapping = [
  ['Methionine', ['AUG']],
  ['Phenylalanine', ['UUU', 'UUC']],
  ['Leucine', ['UUA', 'UUG']],
  ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
  ['Tyrosine', ['UAU', 'UAC']],
  ['Cysteine', ['UGU', 'UGC']],
  ['Tryptophan', ['UGG']],
  ['STOP', ['UAA', 'UAG', 'UGA']]
];

const decode = (codon) => {
  let check;
  mapping.forEach( protein => {
    if (protein[1].includes(codon)) {
      return check = protein[0];
    }
  });
  if (!check) {
    throw "Invalid codon";
  }
  return check;
}

const stopCheck = (codons) => {
  let translation = [];
  let breakCheck = false;
  codons.forEach( codon => {
    if (breakCheck === true) {
      return translation;
    } else {
      const decoded = decode(codon);
      if (decoded === 'STOP') {
        breakCheck = true;
      } else {
        translation.push(decoded);
      }
    }
  });
  return translation;
}

export const translate = (sequence) => {
  let translation = [];
  if (!sequence) {
    translation = [];
  } else {
    const codons = sequence.match(/.{1,3}/g);
    translation = stopCheck(codons);
  };
  return translation;
};

// console.log(translate('UUCUUCUAAUGGU'));