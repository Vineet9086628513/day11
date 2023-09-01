const billAmountInput = document.getElementById("Amount");
const serviceQualitySelect = document.getElementById("Squality");
const totalPeopleInput = document.getElementById("totalPeople");
const calculateButton = document.getElementById("calcbtn");
const tipLabel = document.getElementById("tiplabel");
const totalTipInput = document.getElementById("totaltip");

calculateButton.addEventListener("click", calculateTip);

function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value);
  const serviceQuality = parseFloat(serviceQualitySelect.value);
  const totalPeople = parseInt(totalPeopleInput.value);

  if (
    isNaN(billAmount) ||
    isNaN(serviceQuality) ||
    isNaN(totalPeople) ||
    totalPeople <= 0
  ) {
    alert("Please enter valid values.");
    return;
  }

  const tipPerPerson = (billAmount * serviceQuality) / totalPeople;

  totalTipInput.value = "Rs. " + tipPerPerson.toFixed(2);

  tipLabel.style.display = "block";
}
