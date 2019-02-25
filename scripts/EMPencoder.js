function encode(){
    var plain_text = document.getElementById("encodeField").value;
    var cyper_text = [];
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    for( var i = 0; i < plain_text.length; i++ ){
        input = alphabet.indexOf(plain_text[i]);
        if(input == -1){
            cyper_text.push(plain_text[i]);
        }
        else{
            var coded = (input+13)%26;
            cyper_text.push(alphabet[coded])
        }

    }
     
    var output_field = document.getElementById("encodedMessage");
    output_field.innerHTML = cyper_text.join('');
    output_field.style.display = "block";
}