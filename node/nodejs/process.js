process.on("exit", () => {
  const end = Date.now() + 2000;
  while (Date.now() < end) {
    console.log(Date.now());
  }
});

process.exit();

process.stdin.pipe(process.stdout);
