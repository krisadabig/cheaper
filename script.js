// script.js
function comparePrices() {
    const product1 = {
        name: document.querySelector('.product:nth-child(1) h2').textContent,
        price: parseFloat(document.getElementById('APrice').value),
        weight: parseFloat(document.getElementById('Aweight').value)
    };

    const product2 = {
        name: document.querySelector('.product:nth-child(2) h2').textContent,
        price: parseFloat(document.getElementById('BPrice').value),
        weight: parseFloat(document.getElementById('BWeight').value)
    };

    const cheaperProduct = product1.price / product1.weight < product2.price / product2.weight ? product1 : product2;
    const cheaperPricePerUnit = cheaperProduct.price / cheaperProduct.weight;
    const otherProduct = cheaperProduct === product1 ? product2 : product1;
    const otherPricePerUnit = otherProduct.price / otherProduct.weight;

    const priceDifference = otherPricePerUnit - cheaperPricePerUnit;
    const percentageDifference = (priceDifference / otherPricePerUnit) * 100;

    const resultDisplay = document.getElementById('result');
    resultDisplay.innerHTML = `
        <p><strong>Cheaper Product:</strong> ${cheaperProduct.name} (${cheaperProduct.price} THB per ${cheaperProduct.weight} unit)</p>
        <p><strong>Price Difference:</strong> ${priceDifference.toFixed(2)} THB</p>
        <p><strong>Percentage Cheaper:</strong> ${percentageDifference.toFixed(2)}%</p>
    `;

    resultDisplay.style.display = 'block'; // Show the result display
}