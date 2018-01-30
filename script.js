



  
// Input: b=budget
//        n = number of days
//        p=purchase price 
// Output: "no" when x is between 0-50%; "maybe" when x is between 51%-74%; "Yes" when x is between 75%-100%


function id(idstring){
  return document.getElementById(idstring);
}

  //let b = id('budget');
  //let n = id('days');
  //let p = id('price');

function budget_account(b, d, p) {
  //document.getElementById();
  var text = "";
  
  var x = (p)/(b/d);
  
  if (x > 1) {
    text = "No, with an estimated risk value of " + Math.ceil(x * 100) + "%  (" + Math.ceil(x * 100) + "% of your daily budget will be used).";
  }
	else if (1 >= x && x >= 0.26) {
    text = "Maybe, with an estimated risk value of "+ Math.ceil(x * 100) + "% (" + Math.ceil(x * 100) + "% of your daily budget will be used).";

    }
	else if (x < 0.26 && x >= 0){
    text = "Yes, with an estimated risk value of " + Math.ceil(x * 100) + "% (" + Math.ceil(x * 100) + "% of your daily budget will be used).";
    }
  else {
    text = "Please enter a budget, number of days, and price of the purchase!";
  }
  
  localStorage.setItem("numberDays", Math.floor(d));
  localStorage.setItem("dailyBudget", Math.floor(b/d));
  localStorage.setItem("results", text);
}

//GOOGLE CAL ATTEMPT
