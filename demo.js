function sayHello() {
  console.log("hello");
}

console.log("before");
x = setInterval(sayHello, 1000);
console.log("after");

setTimeout(() => {
  clearInterval(x);
}, 5000);
