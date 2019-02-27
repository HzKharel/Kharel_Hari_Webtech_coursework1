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