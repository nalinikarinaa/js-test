const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Aliquam a lorem urna. Donec.',
];

function result(sentences) {
  let max = 0;

  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    let word = sentence.trim().split(/\s+/).length;

    if (word > max) {
        max = word
    }
  }

  return max;
}
console.log(result(sentences))