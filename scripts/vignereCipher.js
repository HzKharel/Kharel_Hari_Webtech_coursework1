// crypt("", "pizza", false);
crypt("hello world. this is god.", "pizza", false);
crypt("wmkko lwqkd. iphr ih onc.", "pizza", true);

function crypt(input, key,decrypt){
    var output = "";

    for(var idx = 0, key_idx = 0; idx < input.length; idx++){

        var char_code = input.charCodeAt(idx);
        var letter = String.fromCharCode(char_code);

        //check if the character is a letter. No native function to check.
        //toUpperCase and toLowerCase both evaluate to true if its not a letter.
        //A simple if statement to check if its an actual letter using above principle.
        if(letter.toUpperCase() !== letter.toLowerCase()){

            //now handling uppercase letters
            if(letter === letter.toUpperCase()){
                var key_char = key[key_idx % key.length];
                if(decrypt){
                    output += String.fromCharCode(((char_code - 65) - (key_char.charCodeAt(0) - 64)) % 26 + 65);
                    console.log(((char_code - 65) - (key_char.charCodeAt(0) - 64)));
                }
                else{

                    output += String.fromCharCode(((char_code  - 65) + (key_char.charCodeAt(0) - 65)) % 26 + 65);
                    console.log(((char_code - 65) + (key_char.charCodeAt(0) - 65)));
                }
                key_idx++;
            }
            //if its not uppercase, then its lower
            else{
                var key_char = key[key_idx % key.length];
               if(decrypt){
                   output += String.fromCharCode(((char_code - 97) - (key_char.charCodeAt(0) - 96)) % 26 + 98);
                   console.log(((char_code - 97) - (key_char.charCodeAt(0) - 97)) % 26 + 97);
               }
               else{
                   output += String.fromCharCode(((char_code - 97) + (key_char.charCodeAt(0) - 97)) % 26 + 97);
                   console.log(((char_code - 97) + (key_char.charCodeAt(0) - 97)) % 26 + 97);
               }
                key_idx++;
            }
        }
        //if not a letter, push it back to the output stream
        else{
            output += letter;
        }

    }

   console.log(output);
}




