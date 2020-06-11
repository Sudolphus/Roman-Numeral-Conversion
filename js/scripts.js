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
    } else if (remainder >= 10) {
      remainder -= 10;
      numeral += "X";
    } else if (remainder === 9) {
      remainder -= 9;
      numeral += "IX";
    } else if (remainder >= 5) {
      remainder -= 5;
      numeral += "V";
    } else if (remainder === 4) {
      remainder -= 4;
      numeral += "IV";
    } else {
      remainder -= 1;
      numeral += "I";
    }
  }
  return numeral;
}

const numberConverter = function(numeral) {
  let numer = numeral.toUpperCase();
  let number = 0;
  while (numer.length > 0) {
    if (numer.charAt(0) === "M") {
      numer = numer.slice(1);
      number += 1000;
    } else if (numer.charAt(0) === "D") {
      numer = numer.slice(1);
      number += 500;
    } else if (numer.charAt(0) === "C") {
      if (numer.search(/[DM]/) === 1) {
        number -= 100;
      } else {
        number += 100;
      }
      numer = numer.slice(1);
    } else if (numer.charAt(0) === "L") {
      numer = numer.slice(1);
      number += 50;
    } else if (numer.charAt(0) === "X") {
      if (numer.search(/[CL]/) === 1) {
        number -= 10;
      } else {
        number += 10;
      }
      numer = numer.slice(1);
    } else if (numer.charAt(0) === "V") {
      numer = numer.slice(1);
      number += 5;
    } else if (numer.charAt(0) === "I") {
      if (numer.search(/[XV]/) === 1) {
        number -= 1;
      } else {
        number += 1;
      }
      numer = numer.slice(1);
    }
  }
  return number;
}


//User Interface Logic
$(document).ready(function() {
  $("form#numberToNumeral").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("input[name=number]").val());

    if (!numberInput || numberInput < 1) {
      alert("Enter a Positive Integer");
      return;
    }

    const numeralOutput = romanConverter(numberInput);

    $("#numResult").show();
    $("#numInput").text(numberInput);
    $("#numeralOutput").text(numeralOutput);
  });

  $("form#numeralToNumber").submit(function(event) {
    event.preventDefault();
    const numeralInput = $("input[name=numeral]").val();

    if (numeralInput.search(/[^MDCLXVI]/i) > -1) {
      alert("Illegal Character Detected!");
      return;
    }

    const numberOutput = numberConverter(numeralInput);

    $("#numeralResult").show();
    $("#numeralInput").text(numeralInput);
    $("#numberOutput").text(numberOutput);
  })
});