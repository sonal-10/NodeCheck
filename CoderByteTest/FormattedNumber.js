function FormattedNumber(strArr) {
  const numStr = strArr[0];
 
   const regex = /^\d{1,3}(,\d{3})*(\.\d+)?$/;
 
   if (!regex.test(numStr)) {
     return "false";
   }
   if(numStr.split('.').length >2){
     return "false";
   }
 
   // Checking Comma positions
   if (numStr.includes(',')) {
     // Split into integer and fractional parts
     const parts = numStr.split('.');
     const integerPart = parts[0];

     // Validate integer part
     const integerGroups = integerPart.split(',');
     for (let i = 0; i < integerGroups.length; i++) {
       if (i > 0 && integerGroups[i].length !== 3) {
         return "false";
       }
   }
  }
   return "true";
 
 }

 
 // keep this function call here 
 console.log(FormattedNumber(readline()));