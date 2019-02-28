
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