function encode(isDecrypt) {
    var plain_text = document.getElementById("encodeField").value;
    var key = document.getElementById("encodedMessageKey").value;
    var cipher = document.getElementById("dropdownSelector").textContent;
    var output = document.getElementById("encodedMessage");


    switch (cipher) {
        case "ROT 13 Cipher":

            output.value = rot13(plain_text);
            break;

        case "Vignere Cipher":

            output.value = vignere_Cipher(plain_text, key, isDecrypt);
            break;

        case "Autokey Cipher":
            output.value = autokey(plain_text, key, isDecrypt);
            break;
    }

    output.style.display = "block";
}

//////////////////ROT 13//////////////////////
//////////////////ROT 13//////////////////////
//////////////////ROT 13//////////////////////

function rot13(plain_text) {

    var output = "";
    for (var idx = 0; idx < plain_text.length; idx++) {

        if (plain_text[idx].toUpperCase() !== plain_text[idx].toLowerCase()) {

            var crypt_letter_code = (plain_text[idx].charCodeAt(0));
            var crypt_letter;


            if (plain_text[idx] === plain_text[idx].toUpperCase()) {
                crypt_letter = String.fromCharCode(((crypt_letter_code + 13 - 65) % 26) + 65);
                output += crypt_letter;
            }
            else {
                crypt_letter = String.fromCharCode(((crypt_letter_code + 13 - 97) % 26) + 97);
                output += crypt_letter;
            }
        }
        else {
            output += plain_text[idx];
        }
    }
    return output;
}


//////////////////Vignere Cipher//////////////////////
//////////////////Vignere Cipher//////////////////////
//////////////////Vignere Cipher//////////////////////


function vignere_Cipher(input, key, decrypt) {
    var output = "";
    key = key.toLowerCase();
    for (var idx = 0, key_idx = 0; idx < input.length; idx++) {

        var key_char = key[key_idx % key.length];
        var crypt_letter_code = input.charCodeAt(idx);
        var key_letter_code = key_char.charCodeAt(0);

        if (input[idx].toUpperCase() !== input[idx].toLowerCase()) {

            var encrypted_letter_code;
            //now handling uppercase letters
            if (input[idx] === input[idx].toUpperCase()) {
                if (decrypt) {

                    encrypted_letter_code = (((crypt_letter_code - 65) - (key_letter_code - 97)) % 26);

                    if (encrypted_letter_code < 0) {
                        encrypted_letter_code = 26 + encrypted_letter_code;
                    }

                    output += String.fromCharCode(encrypted_letter_code + 65);
                } else {
                    encrypted_letter_code = (((crypt_letter_code - 65) + (key_letter_code - 97)) % 26);
                    console.log((crypt_letter_code - 65) + ", " + (key_letter_code - 97));
                    output += String.fromCharCode(encrypted_letter_code + 65);
                }
                key_idx++;
            }
            //if its not uppercase, then its lower
            else {

                if (decrypt) {

                    encrypted_letter_code = (((crypt_letter_code - 97) - (key_letter_code - 97)) % 26);

                    if (encrypted_letter_code < 0) {

                        encrypted_letter_code = 26 + encrypted_letter_code;

                    }

                    output += String.fromCharCode(encrypted_letter_code + 97);
                } else {

                    encrypted_letter_code = (((crypt_letter_code - 97) + (key_letter_code - 97)) % 26);
                    output += String.fromCharCode(encrypted_letter_code + 97);
                }

                key_idx++;
            }
        }
        //if not a letter, push it back to the output stream
        else {
            output += input[idx];

        }
    }
    return output;
}

//////////////////Autokey Cipher//////////////////////
//////////////////Autokey Cipher//////////////////////
//////////////////Autokey Cipher//////////////////////

function autokey(plain_text, key, decrypt) {

    var key_stream = key.toLowerCase();
    var plain_text_stream = "";
    var output = "";

    if (!decrypt) {
        //removing punctuation and spaces from plain text to build a key stream
        for (var i = 0; i < plain_text.length; i++) {
            if (plain_text[i].toUpperCase() !== plain_text[i].toLowerCase()) {
                plain_text_stream += plain_text[i].toLowerCase();
            }
        }

        //building the key stream
        for (var i = 0; key_stream.length < plain_text_stream.length; i++) {
            key_stream += plain_text_stream[i];
        }
    }


    var key_stream_index = 0;
    //now encrypting the message
    for (var i = 0; i < plain_text.length; i++) {

        if (plain_text[i].toUpperCase() !== plain_text[i].toLowerCase()) {

            var plain_text_code = plain_text[i].charCodeAt(0);
            var key_code = (key_stream[key_stream_index].charCodeAt(0));

            if (plain_text[i].toUpperCase() === plain_text[i]) {

                if (decrypt) {
                    var crypt_code = ((plain_text_code - 65) - (key_code - 97)) % 26;

                    if (crypt_code < 0) {
                        crypt_code = 26 + crypt_code;
                    }
                    //  console.log(crypt_code);
                    var letter = String.fromCharCode(crypt_code + 65);
                    output += letter;
                    key_stream += letter.toLowerCase();
                }

                else {
                    var crypt_code = ((plain_text_code - 65) + (key_code - 97)) % 26;
                    output += String.fromCharCode(crypt_code + 65);
                }
            }
            else {

                if (decrypt) {
                    var crypt_code = ((plain_text_code - 97) - (key_code - 97)) % 26;

                    if (crypt_code < 0) {
                        crypt_code = 26 + crypt_code;
                    }
                    var letter = String.fromCharCode(crypt_code + 97);

                    output += letter;
                    key_stream += letter.toLowerCase();
                }

                else {
                    var crypt_code = ((plain_text_code - 97) + (key_code - 97)) % 26;
                    output += String.fromCharCode(crypt_code + 97);
                }
            }

            key_stream_index++;
        }

        else {
            output += plain_text[i];
        }

    }

    return output;
}
