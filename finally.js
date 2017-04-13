function waitPromise(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
      // reject();
    }, time)
  });
}
//
// waitPromise(500)
// .then(() => {
//   console.log('in then #1');
// })
// .catch(() => {
//   console.log('in catch');
// })
// .then(()=>{
//   console.log('finally');
// });

let contextObject = {
  user: undefined,
  books: undefined,
  countTimeInWebSite: undefined
};

waitPromise(500)
.then(() => {
  contextObject.user = {user: {id: 1}}
  return contextObject;
})
.then((contextObject) => {
  if (contextObject.user.user.id > 5) {

  }
  return contextObject;
}).
then((id) => {

})
.catch(() => {

});