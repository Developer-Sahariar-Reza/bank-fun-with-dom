document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmountText = withdrawField.value;
  const newWithdrawAmount = parseFloat(withdrawAmountText);

  if (isNaN(newWithdrawAmount)) {
    alert("Invalid Input");
    withdrawField.value = "";
    return;
  } else {
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);

    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalText = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if (newWithdrawAmount > previousBalanceTotal) {
      alert("Insufficient Balance");
      withdrawField.value = "";
      return;
    } else {
      const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
      withdrawTotalElement.innerText = newWithdrawTotal;

      const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
      balanceTotalElement.innerText = newBalanceTotal;
      withdrawField.value = "";
    }
  }
});
