function encode(isDecrypt) {
    var plain_text = document.getElementById("encodeField").value;
    var key = document.getElementById("encodedMessageKey").value;
    var cipher = document.getElementById("dropdownSelector").textContent;
    var output = document.getElementById("encodedMessage");


    switch (cipher) {
        case "ROT 13 Cipher":

            output.value = rot13(plain_text);
            output.style.display = "block";
            break;

        case "Vignere Cipher":

            output.value = vignere_Cipher(plain_text, key, isDecrypt);
            output.style.display = "block";
            break;

    }
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
