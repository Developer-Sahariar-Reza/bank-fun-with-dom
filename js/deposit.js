document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositAmountText = depositField.value;
  const newDepositAmount = parseFloat(depositAmountText);

  if (isNaN(newDepositAmount)) {
    alert("Invalid Input");
    depositField.value = "";
    return;
  } else {
    const depositTotalElement = document.getElementById("deposit-total");
    const depositTotalText = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalText = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    depositField.value = "";
  }
});
