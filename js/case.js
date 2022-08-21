//caseing work
document.getElementById('case-plus').addEventListener('click', function(){
   const caseField = document.getElementById('case-field');
   let caseFieldValue = parseInt(caseField.value);
   caseFieldValue = caseFieldValue + 1;
   caseField.value = caseFieldValue;

   //phone price added
   const casePriceAmount = caseFieldValue * 59;
   const casePrice = document.getElementById('case-price');
   casePrice.innerText = casePriceAmount;

   //subtotal calculte
   const phonePriceAmount = parseInt(document.getElementById('phone-price').innerText);
   subTotalCalculate(phonePriceAmount, casePriceAmount );

})

document.getElementById('case-minus').addEventListener('click', function(){
   const caseField = document.getElementById('case-field');
   let caseFieldValue = parseInt(caseField.value);
   caseFieldValue = caseFieldValue - 1;
   caseField.value = caseFieldValue;

   //phone price added
   const casePriceAmount = caseFieldValue * 59;
   const casePrice = document.getElementById('case-price');
   casePrice.innerText = casePriceAmount;

   //subtotal calculte
   const phonePriceAmount = parseInt(document.getElementById('phone-price').innerText);
   subTotalCalculate(phonePriceAmount, casePriceAmount );
})