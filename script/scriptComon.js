function getTotal(peramemter1, peramemter2) {
   const triangelInput1 = document.getElementById(peramemter1)
   const Input1Valu = triangelInput1.value;
   const inputConvert = parseFloat(Input1Valu)
   triangelInput1.value=""


   const triangelInput2 = document.getElementById(peramemter2)
   const Input2Valu = triangelInput2.value;
   const input2Convert = parseFloat(Input2Valu)
   triangelInput2.value=""

   if (isNaN(inputConvert) || isNaN(input2Convert)) {

      alert('Please Enter a Numbber')

   }

   else {
      const totalValue = inputConvert * input2Convert;

      return totalValue

   }

}











