
# Day11Homework

This is a simple HTML and JavaScript code that calculate the tip


## Step-by-Step Explanation

### HTML Code

The HTML code consists of a `<div>` element that contains a button. The button has an `onclick` event listener that calls the `changeBackgroundColor()` function when clicked.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day 11</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div id="container">
      <div id="form_container">
        <h1>Charles' Tip Calculator</h1>
        <form id="form">
          <label>
            How much was your bill?<br />
            Rs. <input type="text" id="Amount" fdprocessedid="h5hwk" /><br />
          </label>
          <label>
            How was your service?<br />
            <select id="Squality" fdprocessedid="2u0q6">
              <option disabled="" selected="" value="0">
                -- Choose an option --
              </option>
              <option value="0.3">30% - Outstanding</option>
              <option value="0.2">20% - Good</option>
              <option value="0.15">15% - It was okay</option>
              <option value="0.1">10% - Bad</option>
              <option value="0.05">5% - Terrible</option>
            </select>
          </label>
          <label>
            How many people are sharing the bill?<br />
            <input type="text" id="totalPeople" fdprocessedid="q73yqp" /> people
          </label>
          <button type="button" id="calcbtn" fdprocessedid="c0muwd">
            Calculate!
          </button>
          <label
            for="tip"
            style="text-align: center; width: 100%; display: none"
            id="tiplabel"
          >
            Tip Amount<br />
            <input type="text" id="totaltip" style="text-align: center" />
          </label>
        </form>
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>

```

### JavaScript Code

```const billAmountInput = document.getElementById("Amount");
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
```
