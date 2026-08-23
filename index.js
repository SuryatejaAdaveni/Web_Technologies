const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise fullfilled");
    reject("promise rejected.");
  }, 2000);
});

pr.then((res) => {
  console.log(res);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally executed.");
  });
