function NumberEncoding(str) {

  // str = str.toLowerCase();
  let encodeString = '';

  for (i = 0; i < str.length; i++) {
    let character = str[i];

    if (character >= 'a' && character <= 'z') {
      encodeString += (character.charCodeAt() - 'a'.charCodeAt() + 1);
    }
    else{
      encodeString += character;
    }
  }
  return encodeString;
}

// keep this function call here 
console.log(NumberEncoding('abc! {3}./*-+@A'));