module.exports = function toReadable(number) {

   var ones = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
   var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
   var hundred = ' hundred';
   var output = '';
   var numString = number.toString();

   if (number == 0) {
      return 'zero';
   }
   //the case of 10, 11, 12 ,13, .... 19 
   if (number < 20) {
      output = ones[number];
      return output.trim();
   }

   //100 and more
   if (numString.length == 3) {
      output += ones[parseInt(numString.charAt(0))] + hundred;
      output += tens[parseInt(numString.charAt(1))];
      output += ones[parseInt(numString.charAt(2))];
      return output.trim();
   }

   output += tens[parseInt(numString.charAt(0))];
   output += ones[parseInt(numString.charAt(1))];

   return output.trim();


}
