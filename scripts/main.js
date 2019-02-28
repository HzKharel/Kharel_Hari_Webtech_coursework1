
function encode(isDecrypt) {
    var plain_text = document.getElementById("encodeField").value;
    var key = document.getElementById("encodedMessageKey").value;
    var cipher = document.getElementById("dropdownSelector").textContent;
    var output = document.getElementById("encodedMessage");
    var cipherdesc = document.getElementById("cipherdesc");


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
    }

    output.style.display = "block";
}
