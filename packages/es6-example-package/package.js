Package.describe({
  summary: "ES6 Example Package"
});

Package.on_use(function(api) {
  api.use('es6');
  api.add_files("foo.next.js");
  api.export('bar');
});
