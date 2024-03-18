// script.js
function comparePrices() {
    // Assuming default products are always at index 0 and 1
    const product1 = {
        name: document.querySelector('.productName').value,
        price: parseFloat(document.querySelector('.productPrice').value),
        weight: parseFloat(document.querySelector('.productWeight').value)
    };
    const product2 = {
        name: document.querySelectorAll('.productName')[1].value,
        price: parseFloat(document.querySelectorAll('.productPrice')[1].value),
        weight: parseFloat(document.querySelectorAll('.productWeight')[1].value)
    };

    const cheaperProduct = product1.price / product1.weight < product2.price / product2.weight ? product1 : product2;
    const cheaperPricePerUnit = cheaperProduct.price / cheaperProduct.weight;
    const otherProduct = cheaperProduct === product1 ? product2 : product1;
    const otherPricePerUnit = otherProduct.price / otherProduct.weight;

    const priceDifference = otherPricePerUnit - cheaperPricePerUnit;
    const percentageDifference = (priceDifference / otherPricePerUnit) * 100;

    document.getElementById('result').innerHTML = `
        Cheaper product: ${cheaperProduct.name} (${cheaperProduct.price} THB per ${cheaperProduct.weight} unit)
        <br>
        Percentage cheaper: ${percentageDifference.toFixed(2)}%
    `;
}