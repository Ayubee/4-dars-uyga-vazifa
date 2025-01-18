// let a = 25;

// if (a <= 99) {
//   console.log("Togri");
// } else {
//   console.log("Xatolik");
// }

// let son = 567;

// let a = (son - (son % 100)) / 100;
// let b = ((son % 100) - (son % 10)) / 10;
// let c = son % 10;

// if (a < b && b < c) {
//   console.log("raqamlar ketma ket");
// } else {
//   console.log("raqamlar ketma ket emas");
// }

//Array

// let a = 10;
// let b = 15;
// let c = 20;

// if (a) {
// }

function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x);
  }

  console.log(x);
}

// function letScoping() {
//   let x = 1;

//   if (true) {
//     let x = 2;
//     console.log(x);
//   }

//   console.log(x);
// }

// console.log(x);
