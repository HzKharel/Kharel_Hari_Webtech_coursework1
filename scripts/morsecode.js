
function morsecode(plain_text, decrypt) {

    var alphabet = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0',
    };
    plain_text = plain_text.toLowerCase();
    var message = [];

    if (decrypt) {

        var morse_codes = plain_text.split(" ");

        for(var code in morse_codes){

            letter =  alphabet[morse_codes[code]];
            if(letter === undefined){
                message.push(" ");
            }
            message.push(letter);

        }
    }
    else{

        for (var i = 0; i < plain_text.length; i++) {
            var letter = plain_text[i].toLowerCase();

            if (letter.toLowerCase() !== letter.toUpperCase()) {
                for (var key in alphabet) {
                    if (alphabet[key] === letter) {
                        message.push(key);
                        message.push(" ");
                    }
                }
            }
            else if (letter = " ") {
                message.push(letter);
            }
        }


    }

    return message.join("");
}

