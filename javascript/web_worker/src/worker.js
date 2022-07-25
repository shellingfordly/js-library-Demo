setTimeout(() => {
  console.log("worker");
}, 1000);

let result = 0;
for (let i = 0; i < 10000000; i++) {
  result += i;
}

self.postMessage("result: " + result);
// self.addEventListener(
//   "message",
//   function (e) {

//   },
//   false
// );
