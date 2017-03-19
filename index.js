var receivesAFunction = (callback) => {
  callback();
}

var returnsANamedFunction = () => {
  return someFunction = () => {
    console.log("Hello World!");
  }
}

var returnsAnAnonymousFunction = () => {
  return () => {
    console.log("Will this work?");
  }
}
