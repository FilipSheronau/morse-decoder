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
    // write your solution here    
    let result = expr.match(/(\d{10})|(\*{10})/g);    
    result.forEach((value,index) => {
		result.splice(index,1,result[index].replace(/00/g,''));
		result.splice(index,1,result[index].replace(/10/g,'.'));
		result.splice(index,1,result[index].replace(/11/g,'-'));
		result.splice(index,1,result[index].replace(/\*{10}/g,' '));
		for(let i = 0;i<Object.keys(MORSE_TABLE).length;i++) {
			if (Object.keys(MORSE_TABLE)[i] === result[index]) {
				result.splice(index,1,Object.values(MORSE_TABLE)[i]);
				break;
			}
		}
    });
    result = result.join('');
    return result;    
}

module.exports = {
    decode
}