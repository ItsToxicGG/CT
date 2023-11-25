document.addEventListener('DOMContentLoaded', function () {
    const depositBtn = document.getElementById('depositBtn');
    const depositForm = document.getElementById('depositForm');
    const confirmDepositBtn = document.getElementById('confirmDepositBtn');
    const cancelDepositBtn = document.getElementById('cancelDepositBtn');

    depositBtn.addEventListener('click', function () {
        depositForm.classList.remove('hidden');
    });

    confirmDepositBtn.addEventListener('click', function () {
        const creditName = document.getElementById('creditName').value;
        const creditNumber = document.getElementById('creditNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const creditType = document.getElementById('creditType').value;
        const cvv = document.getElementById('cvv').value;
        const depositAmount = document.getElementById('depositAmount').value;

        alert(`Credit Name: ${creditName}\nCredit Number: ${creditNumber}\nExpiry Date: ${expiryDate}\nCredit Type: ${creditType}\nCVV: ${cvv}\nDeposit Amount: ${depositAmount}`);
        depositForm.classList.add('hidden');
    });

    cancelDepositBtn.addEventListener('click', function () {
        depositForm.classList.add('hidden');
    });
});
