let bill = 277;
let tip = 1.2; 
// tip was previously equal to .2

// function calculateTip(bill, tip) {
//   return bill * tip;
// }

// let tipAmount = calculateTip(bill, tip);
// let roundedTip = Number(tipAmount.toFixed(2));
// console.log("20% of the bill is", roundedTip);

// function getBillTotal(bill, roundedTip) {
//   return bill + roundedTip;
// }
// let totalAmount = getBillTotal(bill, roundedTip);
// console.log("The total bill is", totalAmount);


  function calculateTip(bill, tip) {
  return bill * tip;
}

let total = calculateTip(bill, tip);
console.log(total);

//NOTE: Previous code has been commented out.
//By changing tip from 0.2 to 1.2 you are able to multiply it directly by the bill to get the total. 
//Thus eliminating the need for an extra function.