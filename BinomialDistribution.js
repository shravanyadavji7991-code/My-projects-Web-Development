let chart;

// pure function for factorial calculation
function factorial(num) {
   let fact = 1;
  for(let i = 1; i <= num; i++) {
        fact *= i;
    }
   return fact;
}

// pure function for nCr calculation
function combination(n, x) {
    return factorial(n) /
    (factorial(x) * factorial(n - x));
}

// PMF Calculation
function binomialProbability(n, p, x) {
 return combination(n, x) *
    Math.pow(p, x) *
    Math.pow((1 - p), (n - x));
}

// CDF Calculation
function cumulativeProbability(n, p, x) {
     let sum = 0;
     for(let i = 0; i <= x; i++) {
      sum += binomialProbability(n, p, i);
     }
return sum;
}

// Main Body Part
function calculate() {
    let n = parseInt(document.getElementById("n").value);
    let p = parseFloat(document.getElementById("p").value);
    let x = parseInt(document.getElementById("x").value);
    let type = document.getElementById("type").value;
    let answer;

    if(type === "exact") {

        answer = binomialProbability(n, p, x);

    } else {

        answer = cumulativeProbability(n, p, x);
    }

    document.getElementById("result").innerHTML =
    "Binomial Distribution : " + answer.toFixed(5);

    document.getElementById("mean").innerHTML =
    "Mean : " + (n * p).toFixed(2);

    document.getElementById("vari").innerHTML =
    "Variance : " + (n * p * (1 - p)).toFixed(2);




    // GRAPH PART

    let labels = [];
    let values = [];

    for(let i = 0; i <= n; i++) {
       
        labels.push("X = " + i);
        values.push(
            binomialProbability(n, p, i).toFixed(5)
        );
    }

    let ctx = document.getElementById("myChart");

    // remove old graph
    
    if(chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {

        type: 'bar',

        data: {

            labels: labels,

            datasets: [{
                label: 'Binomial Distribution',

                data: values,

                borderWidth: 1
            }]
        },

        options: {

            responsive: true,

            scales: {
                y: {
                    beginAtZero: true
                }
            }
            
        }
    });
}