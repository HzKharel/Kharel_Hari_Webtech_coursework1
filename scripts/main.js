//Main entry point for the program
//called by clicking the encrypt or decrypt buttons
function encode(isDecrypt) {
    var plain_text = document.getElementById("encodeField").value;
    var key = document.getElementById("encodedMessageKey").value;
    var cipher = document.getElementById("dropdownSelector").textContent;
    var output = document.getElementById("encodedMessage");
    var cipherdesc = document.getElementById("cipherdesc");


    //calling the right cipher depending on what was chosen
    switch (cipher) {
        case "ROT 13 Cipher":

            output.value = rot13(plain_text);


            break;

        case "Vignere Cipher":

                output.value = vignere(plain_text, key, isDecrypt);
                break;


        case "Autokey Cipher":

                output.value = autokey(plain_text, key, isDecrypt);
                break;

        case "Morse Code":

            output.value = morsecode(plain_text,isDecrypt);
            break;

        case "Binary":

            output.value = binary(plain_text,isDecrypt);
            break;
    }

    //displaying the encrypted/decrypted results
    output.style.display = "block";
}
