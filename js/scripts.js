$(document).ready(function() {
  $("form#numeral").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("input[name=number]").val());

    if (!numberInput) {
      alert("Enter an Integer");
      return;
    }


  })
})