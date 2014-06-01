if (Meteor.isClient) {
  var i = 0;
  Session.set('sequence', '');

  Template.hello.greeting = () => Session.get('sequence');

  Template.hello.events({
    'click input': () => {
      Session.set('sequence', Session.get('sequence') + ' ' + Fibonacci(i));
      i++;
    }
  });
}
