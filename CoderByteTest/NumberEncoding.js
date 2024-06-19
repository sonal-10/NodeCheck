function NumberEncoding(str) {

    let stringEncode = '';
    for (let i = 0; i < str.length; i++) {
      // Take one character
      let character = str[i];
      // Check if it from [a - z] then encode "a" - "a" logic
      if (character >= 'a' && character <= 'z') {
        stringEncode += (character.charCodeAt() - "a".charCodeAt())+1;
      }
      else{
        stringEncode += character;
      }
    }
    return(stringEncode); 
  
  }
  
  // keep this function call here 
  console.log(NumberEncoding(readline()));