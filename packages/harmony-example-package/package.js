Package.describe({
  summary: "ES6 Example Package"
});

Package.on_use(function(api) {
  api.use('harmony');
  api.add_files("fibonacci.next.js");
  api.export('Fibonacci');
});
