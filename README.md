# Meteor ES6 Example

After you've installed Meteor and Meteorite, you can create this example with:

```
meteor create meteor-es6-example
cd meteor-es6-example
mrt add es6
sed 's/function ()/() =>/g' meteor-es6-example.js > meteor-es6-example.next.js
rm meteor-es6-example.js
mrt
```
