var prompt = require('prompt-sync')();
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','.','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',' ','-','\'',"!",'\n',',','“','"','?',':','@','#','$','%','&','*','(',')','+','+','_','[',']','{','}',';']
const dictionary = ['j','y','m','v','f','o','u','t','l','p','x','i','w','c','b','q','d','g','r','a','e','n','k','z','s','h','.','C','D','J','G','S','M','X','L','P','A','B','O','Z','R','Y','U','H','E','V','K','F','N','Q','W','T','I',' ','-','\'','!','\n',',','“','"','?',':','@','#','$','%','&','*','(',')','+','+','_','[',']','{','}',';']
while (alphabet){
    var string = prompt("Text to be decoded:")
    string = Array.from(string)
    var fin = ""
    for (var i=0;i<string.length;i++){
        if(isNaN(string[i])){
            fin+= alphabet[dictionary.indexOf(string[i])]
        } else {
            fin+= string[i]
        }
    }
    console.log("\n");
    console.log(fin);
    console.log("\n");
}

