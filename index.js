function getMessage() {
  const a = Math.random();
  let message = "";
  if (a > .5) {
    message = "<h1>Good morning </h1>";
  } else {
    message = "<h1>Good evening</h1>";
  }
  return message;
}
