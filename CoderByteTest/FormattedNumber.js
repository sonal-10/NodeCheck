function FormattedNumber(strArr) {
  const numStr = strArr[0];

  // String Check [3numbers],[3numbers]any length [.decimalpoint and any numbers]and ends
  const regex = /^(\d{1,3})(,\d{3})*(\.\d+)?$/;

  // Test the string if it contains anything other than numbers , or .
  if (!regex.test(numStr))
    return "false";

  // Check if there are more than 2 .
  if (numStr.split('.').length > 2)
    return "false";

  // Checking Comma positions
  if (numStr.includes(',')) {
    // Split into integers and fraction parts
    const parts = numStr.split('.');
    const integerPart = parts[0];
    const fractionalPart = parts[1] || '';

    if (integerPart.includes(',')) {
      const intGroup = integerPart.split(',');
      for (let i = 0; i < intGroup.length; i++) {
        if (i > 0 && intGroup[i].length !== 3) {
          return "false";
        }
      }
    }
  }
  return "true";

}

// keep this function call here 
console.log(FormattedNumber(["0,1.23"]));