const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newest = "";
    let letter = "";
    for (let i = 0; i < expr.length; i = i + 10) {
      if (expr[i] == "*") {
        newest += " ";
      } else {
        letter = "";
        for (let j = i; j < i + 10; j = j + 2) {
          if (expr[j] == "1" && expr[j + 1] == "0") {
            letter += ".";
          } else if (expr[j] == "1" && expr[j + 1] == "1") {
            letter += "-";
          }
        }
        newest += MORSE_TABLE[letter];
      }
    }
    return newest;
}

module.exports = {
    decode
}