document
  .getElementById("btn-cashout")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const outMoney = document.getElementById("input-cashout").value;
    const getpinCashout = document.getElementById("input-cashoutpin").value;

    if (getpinCashout === "1234") {
      console.log("Cash out money .");

      const balance = document.getElementById("balance-atm").innerText;

      const balanceFloat = parseFloat(balance);
      const cashoutFloat = parseFloat(outMoney);

      const newbalance = balanceFloat - cashoutFloat;
      console.log(newbalance);

      document.getElementById("balance-atm").innerText = newbalance;

      
    } else {
      alert("Transaction failed");
    }
  });
