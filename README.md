# [Meteor Harmony](https://github.com/mquandalle/meteor-harmony) Example

After you've installed Meteor and Meteorite, you can create this example with:

```
mrt create meteor-harmony-example
cd meteor-harmony-example
mrt add harmony
sed 's/function ()/() =>/g' meteor-harmony-example.js
mv meteor-harmony-example.js meteor-harmony-example.next.js
mrt
```
