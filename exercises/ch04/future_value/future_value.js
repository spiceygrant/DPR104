var $ = function(id) {
    return document.getElementById(id);
  };

var calculateFV = function (investment, rate, years) {
  var futureValue = investment;
  for (var i = 1; i <= years; i++ ) {
    futureValue = futureValue + (futureValue * rate / 100);
    }
  //  futureValue = parseInt(futureValue);
    return futureValue;
  };

  var processEntries = function () {
     "use strict";
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
    var years = parseFloat($("years").value);
    var errMsg = "";
    if (isNaN(investment) || investment <= 0 || investment > 100000) {
      $("investment").value = "";
      errMsg = "Must be an number between 0 and 100k dude!";
      $("investment").focus();
    } else if (isNaN(rate) || rate <= 0 || rate > 15) {
      $("rate").value = "";
      errMsg = "A realistic rate is between 0 and 15 greehorn!";
      $("rate").focus();
    } else if (isNaN(years) || years <= 0 || years > 50) {
      $("years").value = "";
      errMsg = "Try calculating what you might make in YOUR lifetime professor!";
      $("years").focus();
    }

    if (errMsg == "") {
      $("future_value").value = calculateFV(investment, rate, years).toFixed(2);
    } else {
      alert(errMsg);
    }
  };

    window.onload = function () {
      $("calculate").onclick = processEntries;
      $("investment").focus();
    }
