function subTotalCalculate(phonePriceAmount, casePrice)
{
    const subTotal = phonePriceAmount + casePrice;
    //set subtotal
    const subTotalValue = document.getElementById('sub-total');
    subTotalValue.innerText = subTotal;

    //calculate tax

    const taxCalculateString = (subTotal * 0.1).toFixed(2);
    taxCalculate = parseFloat(taxCalculateString);
    const taxCalculateAmount = document.getElementById('tax-amount');
    taxCalculateAmount.innerText = taxCalculate;

    //calculate final price

    const finalTotalPrice = subTotal + taxCalculate;
    const finalTotalPriceValue = document.getElementById('final-total');
    finalTotalPriceValue.innerText = finalTotalPrice;
}