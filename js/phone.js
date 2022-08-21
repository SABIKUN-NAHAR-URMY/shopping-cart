document.getElementById('phone-plus').addEventListener('click', function(){
    const phoneField = document.getElementById('phone-field');
    let phoneFieldValue = parseInt(phoneField.value);
    phoneFieldValue = phoneFieldValue + 1;
    phoneField.value = phoneFieldValue;

    //phone price added
    const phonePriceAmount = phoneFieldValue * 1219;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = phonePriceAmount;

    //subtotal calculate
     const casePrice = parseInt(document.getElementById('case-price').innerText);
    subTotalCalculate(phonePriceAmount, casePrice );
})

document.getElementById('phone-minus').addEventListener('click', function(){
    const phoneField = document.getElementById('phone-field');
    let phoneFieldValue = parseInt(phoneField.value);
    phoneFieldValue = phoneFieldValue - 1;
    phoneField.value = phoneFieldValue;

    //phone price added
    const phonePriceAmount = phoneFieldValue * 1219;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = phonePriceAmount;

    //subtotal calculate
    const casePrice = parseInt(document.getElementById('case-price').innerText);
    subTotalCalculate(phonePriceAmount, casePrice );
})

