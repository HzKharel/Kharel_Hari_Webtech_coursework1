
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
var enctext = encode();
decode(enctext);

function encode()
{
    var key = "helloworld";
    var plainText = "abvcfghdsq";
    plainText = plainText.toLowerCase();
    key = key.toLowerCase();
    console.log(plainText);
    var crypted = [];
    var key_idx = 0;

    for(var i = 0; i < plainText.length; i++)
    {
        if(i >= key.length)
        {
            key_idx = i%key.length;
        }
        else {
            key_idx++;
        }

       var letter_index = ((alphabet.indexOf(plainText[i]) + alphabet.indexOf(key[key_idx]))%26);
       if(letter_index !== -2){
           crypted.push(alphabet[letter_index]);
       }
       else {
           crypted.push(' ');
       }

    }

    crypted = crypted.join('');
    console.log(crypted);
    return crypted;


}

function decode(text) {
    var key = "helloworld";
    key = key.toLowerCase();
    var decrypted = [];
    var key_current_index = 0;
    var key_idx = 0;

    for(var i = 0; i < text.length; i++)
    {
        if(i >= key.length)
        {
            key_idx = i%key.length;
        }
        else {
            key_idx++;
        }

        var letter = ((alphabet.indexOf(text[i])- alphabet.indexOf(key[key_idx]) + 26) % 26);

        if(letter != 0){
            decrypted.push(alphabet[letter]);
        }
        else {
            decrypted.push(' ');
        }

        key_current_index++;
    }

    decrypted = decrypted.join('');
    console.log(decrypted);
}