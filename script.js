function calculate() {
    var investmentType = document.getElementById("investmentType").value;
    var investmentAmount = parseFloat(document.getElementById("investmentAmount").value);
    var timePeriod = parseFloat(document.getElementById("timePeriod").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);

    var currentValue;

    if (investmentType === "sip") {
        currentValue = calculateSIP(investmentAmount, timePeriod, interestRate);
    } else {
        currentValue = calculateLumpSum(investmentAmount, timePeriod, interestRate);
    }

    document.getElementById("result").innerHTML = "Current Value: Rs " + currentValue.toFixed(2);
}


function calculateSIP(investmentAmount, timePeriod, interestRate) {
    var monthlyRate = interestRate / 12 / 100;
    var totalMonths = timePeriod * 12;
    var futureValue = 0;

    for (var i = 0; i < totalMonths; i++) {
        futureValue += investmentAmount;
        futureValue *= (1 + monthlyRate);
    }

    return futureValue;
}

function calculateLumpSum(investmentAmount, timePeriod, interestRate) {
    var annualRate = interestRate / 100;
    var futureValue = investmentAmount * Math.pow(1 + annualRate, timePeriod);

    return futureValue;
}
