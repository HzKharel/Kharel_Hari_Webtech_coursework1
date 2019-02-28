function vignere(input, key, decrypt) {
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
