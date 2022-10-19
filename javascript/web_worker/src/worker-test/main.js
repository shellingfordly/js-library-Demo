async function init() {
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
  console.log("main");
}

var worker = new Worker("./src/worker-test/worker.js");

worker.onmessage = function (event) {
  console.log("Received message " + event.data);
};
init();
