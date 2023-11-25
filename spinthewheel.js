document.addEventListener('DOMContentLoaded', function () {
    const spinBtn = document.getElementById('spinBtn');
    const depositBtn = document.getElementById('depositBtn');
    const amountInput = document.getElementById('amount');
    const resultDiv = document.getElementById('result');
    const counterDiv = document.getElementById('counter');
    const wheel = document.getElementById('wheel');
    const balanceDisplay = document.getElementById('balance');
    const depositPopup = document.getElementById('depositPopup');
    const closeDepositPopup = document.getElementById('closeDepositPopup');
    const confirmDepositBtn = document.getElementById('confirmDepositBtn');
    const cancelDepositBtn = document.getElementById('cancelDepositBtn');

    let virtualBalance = 238.38; // Set initial virtual balance

    spinBtn.addEventListener('click', function () {
        const amount = parseInt(amountInput.value);

        // Validate the amount and implement the spinning logic
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
        } else if (amount > virtualBalance) {
            alert('Insufficient funds. Please add more money.');
        } else {
            // Disable the button during the spin
            spinBtn.disabled = true;

            // Placeholder for spinning logic
            spinWheel(amount);
        }
    });

    confirmDepositBtn.addEventListener('click', function () {
        const creditName = document.getElementById('creditName').value;
        const creditNumber = document.getElementById('creditNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const creditType = document.getElementById('creditType').value;
        const cvv = document.getElementById('cvv').value;
        const depositAmount = document.getElementById('depositAmount').value;

        const depositInfo = `
            Credit Name: ${creditName}
            Credit Number: ${creditNumber}
            Expiry Date: ${expiryDate}
            Credit Type: ${creditType}
            CVV: ${cvv}
            Deposit Amount: ${depositAmount}
        `;

        alert(`Deposit confirmed. Details:\n\n${depositInfo}`);
        depositForm.classList.add('hidden');
    });

    closeDepositPopup.addEventListener('click', function () {
        depositPopup.classList.add('hidden');
    });

    confirmDepositBtn.addEventListener('click', function () {
        const creditName = document.getElementById('creditName').value;
        const creditNumber = document.getElementById('creditNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const creditType = document.getElementById('creditType').value;
        const cvv = document.getElementById('cvv').value;
        const depositAmount = parseInt(document.getElementById('depositAmount').value);

        // Validate the deposit form
        if (!validateCreditCard(creditNumber) || !validateExpiryDate(expiryDate) || !validateCVV(cvv)) {
            alert('Invalid credit card information. Please check and try again.');
        } else if (isNaN(depositAmount) || depositAmount <= 0) {
            alert('Please enter a valid deposit amount.');
        } else {
            virtualBalance += depositAmount;
            balanceDisplay.innerText = `Virtual Balance: ${virtualBalance.toFixed(2)} ZAR`;
            alert(`Successfully deposited ${depositAmount.toFixed(2)} ZAR!`);

            // Clear the form
            document.getElementById('creditCardForm').reset();
            depositPopup.classList.add('hidden');
        }
    });

    cancelDepositBtn.addEventListener('click', function () {
        // Clear the form
        document.getElementById('creditCardForm').reset();
        depositPopup.classList.add('hidden');
    });

    function spinWheel(amount) {
        let counter = 0;
        const totalSpins = 50 + Math.floor(Math.random() * 50); // Vary the number of spins
        const finalResult = generateResult(amount);

        const spinInterval = setInterval(() => {
            counter++;
            wheel.style.transform = `rotate(${counter * 10}deg)`;
            counterDiv.innerText = counter;

            if (counter === totalSpins) {
                clearInterval(spinInterval);
                showResult(finalResult, amount);
            }
        }, 20);
    }

    function showResult(result, amount) {
        wheel.style.transform = `rotate(${result * 60}deg)`;

        // Update virtual balance based on the result
        if (result === 7) {
            // Win money
            virtualBalance += Math.floor(amount * 0.5 + Math.random() * amount * 0.5);
        } else {
            // Lose money
            virtualBalance -= Math.floor(amount * 0.5 + Math.random() * amount * 0.5);
        }

        // Display the virtual balance
        balanceDisplay.innerText = `Virtual Balance: ${virtualBalance.toFixed(2)} ZAR`;

        // Enable the button after the spin
        spinBtn.disabled = false;

        // Display the result
        resultDiv.innerText = `You spun: ${result === 7 ? 'Win!' : 'Lose!'} ${amount.toFixed(2)} ZAR`;
    }

    function generateResult(amount) {
        // Placeholder for result generation logic
        return Math.floor(Math.random() * 10) + 1;
    }

    function validateCreditCard(creditCardNumber) {
        // Placeholder for credit card validation logic (Luhn algorithm)
        // This is a simplified example and may not cover all cases
        return /^\d{16}$/.test(creditCardNumber);
    }

    function validateExpiryDate(expiryDate) {
        // Placeholder for expiry date validation logic
        // This is a simplified example and may not cover all cases
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate);
    }

    function validateCVV(cvv) {
        // Placeholder for CVV validation logic
        // This is a simplified example and may not cover all cases
        return /^\d{3,4}$/.test(cvv);
    }
});
