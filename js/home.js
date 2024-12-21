//Add money to tha account

//^ 1
document
  .getElementById("btn-money")
  .addEventListener("click", function (event) {
    //^ 2
    event.preventDefault();

    //^ 3
    const addMoney = document.getElementById("input-addMoney").value;
    const getPin = document.getElementById("input-pin").value;

    //^ 4
    if (getPin === "1234") {
      console.log("Adding Money to your account.");

      //^ 5
      const balance = document.getElementById("balance-atm").innerText;
      //^ 6
      const balanceFloat = parseFloat(balance);
      const addMoneyFloat = parseFloat(addMoney);
      //^ 7
      const newbalance = balanceFloat + addMoneyFloat;
      console.log(newbalance);
      //^ 8
      document.getElementById("balance-atm").innerText = newbalance;
    } else {
      alert("Transaction failed .");
    }
  });
