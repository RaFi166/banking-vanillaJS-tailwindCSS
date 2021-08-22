let depoBtn = document.getElementById('depositebutton');

depoBtn.addEventListener('click', function () {

  let depoValue = document.querySelector('#add-deposite').value;
  let depoAmount = document.querySelector('#deposit-amount');
  let theAmount = depoAmount.innerText;

  document.querySelector('#add-deposite').value = '';
  let theLatest = parseFloat(theAmount) + parseFloat(depoValue);
  console.log(theLatest);
  let finalAmount = depoAmount.innerText = theLatest;

});

//withdraw..........

let withdrawBtn = document.querySelector('#withdraw-btn');
withdrawBtn.addEventListener('click', function () {
  // console.log('clicked!');
  let withdrawInput = document.querySelector('#withdraw-input').value;
  console.log(withdrawInput);
  document.querySelector('#withdraw-input').value = '';

  let previousWithdraw = document.querySelector('#withdraw-amount').innerText;
  let newWithdraw = parseFloat(previousWithdraw) + parseFloat(withdrawInput)
  let totalWithdraw = document.querySelector('#withdraw-amount').innerText = newWithdraw;

  let newDepositValue = document.querySelector('#deposit-amount').innerText;
  let newBalances = parseFloat(newDepositValue) - parseFloat(totalWithdraw);
  // console.log(newBalances);
  document.querySelector('#total-balance').innerText = newBalances;

});


