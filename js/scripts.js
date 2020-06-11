const romanConverter = function(num) {
  let remainder = num;
  let numeral = "";
  while (remainder >= 1000) {
    remainder -= 1000;
    numeral += 'M';
  }
  if (remainder >= 900) {
    remainder -= 900;
    numeral += "CM";
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