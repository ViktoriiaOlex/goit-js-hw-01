function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`
}


makeTransaction(5, 3000)
makeTransaction(3, 1000)
makeTransaction(10, 500)

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// const name = "Droid";
// const perItem = 3500;

// // Change code below this line
// const message = `You picked ${name}, price per item is ${perItem} credits`
// console.log(message);
// `You ordered ${quantity} droids worth ${totalPrice} credits!`