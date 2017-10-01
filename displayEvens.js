
function validateItems() {
    var num1 = parseInt(document.forms["numberFun"]["num1"].value);
    var num2 = parseInt(document.forms["numberFun"]["num2"].value);
    // console.log(num2);
    var step = parseInt(document.forms["numberFun"]["step"].value);
    if (num1 == "" || isNaN(num1)) {
        alert("Starting number must be filled in with a number.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
    if (num2 < "" || isNaN(num2)) {
        alert("Num2 must be filled in with a number.");
        document.forms["numberFun"]["num2"]
           .parentElement.className = "form-group has-error"
        document.forms["numberFun"]["num2"].focus();
        return false;
    }
    if (num2 < num1) {
        alert("Num2 must be greater than Num1.");
        document.forms["numberFun"]["num2"]
           .parentElement.className = "form-group has-error"
        document.forms["numberFun"]["num2"].focus();
        return false;
    }
   if (step < 0 || isNaN(step)) {
    alert("Step must be filled in with a positive number.");
    document.forms["numberFun"]["step"]
       .parentElement.className = "form-group has-error";
    document.forms["numberFun"]["step"].focus();
    return false;
   }
   var myEvenArray = [];
   for (var i = num1; i <= num2; i+= step) {
    if (i%2 == 0) {
    myEvenArray.push(i);
    // console.log(i);
    }
    } 

    var results = "";
    results = "<br />" + "Here are the even numbers between " + num1 + 
    " and " + num2 + " by " + step + "'s: " + myEvenArray;
    document.getElementById("results").innerHTML = results;
  
}

   

