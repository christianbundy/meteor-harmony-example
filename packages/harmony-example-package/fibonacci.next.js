Fibonacci = (n) => {
  var previous = 0;
  var current = 1;

  for (var i = 0; i < n; i++) {
    var temp = previous;
    previous = current;
    current = temp + current;
  }

  return current;
}
