function wait(time, callback) {
  setTimeout(function () {
    callback("done");
  }, time);
}

function waitPromise(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, time)
  });
}

function blockingCalls() {
  console.time('blocking')
  wait(500, function () {
    wait(250, function () {
      wait(250, function () {
        console.timeEnd('blocking')
      })
    })
  })
}

function nonBlocking() {
  console.time('non-blocking');
  wait(500, function () {
  });
  wait(250, function () {
  });
  wait(250, function () {
  });
  console.timeEnd('non-blocking');
}

function usePromise() {

  console.time('promise');
  Promise.all(
    [
      waitPromise(500),
      waitPromise(250),
      waitPromise(250)
    ]).then(() => {
    console.timeEnd('promise');
  });

}

// usePromise();
// blockingCalls();
// nonBlocking();

const fs = require("fs");

fs.readFile("file1.txt", (err, result) => {
  if (err) {
    console.error(err)
  } else {
    console.log(result);
  }
});

var file = fs.readFileSync("file1.txt");