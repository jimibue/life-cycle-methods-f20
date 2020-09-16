// function sayHello() {
//   console.log("hello");
// }

// console.log("before");
// x = setInterval(sayHello, 1000);
// console.log("after");

// setTimeout(() => {
//   clearInterval(x);
// }, 5000);

// var myPromise = new Promise(function (resolve, reject) {
//   let worked = true;
//   if (false) {
//     resolve([{}, {}]);
//   } else {
//     reject("didn't work 404");
//   }
// });

// myPromise
//   .then((data) => {
//     console.log("in then this worked", data);
//   })
//   .catch((error) => {
//     console.log("in catch some error", error);
//   });

function get(url) {
  return new Promise(function (res, rej) {
    if (url == "badurl") {
      rej("bad url given");
    } else {
      res([{}, {}]);
    }
  });
}

get("asdasd").then((data) => {
  console.log(data);
});

get("badurl")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
