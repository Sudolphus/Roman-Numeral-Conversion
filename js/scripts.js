const romanConverter = function(num) {
  let remainder = num;
  let numeral = "";
  while (remainder > 0) {
    if (remainder >= 1000) {
      remainder -= 1000;
      numeral += 'M';
    } else if (remainder >= 900) {
      remainder -= 900;
      numeral += "CM";
    } else if (remainder >= 500) {
      remainder -= 500;
      numeral += "D";
    } else if (remainder >= 400) {
      remainder -= 400;
      numeral += "CD";
    } else if (remainder >= 100) {
      remainder -= 100;
      numeral += "C";
    } else if (remainder >= 90) {
      remainder -= 90;
      numeral += "XC";
    } else if (remainder >= 50) {
      remainder -= 50;
      numeral += "L";
    } else if (remainder >= 40) {
      remainder -= 40;
      numeral += "XL";
    }
  }
}

$(document).ready(function() {
  $("form#numeral").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("input[name=number]").val());

    if (!numberInput) {
      alert("Enter an Integer");
      return;
    }

    const numeralOutput = romanConverter(numberInput);
  });
});