/*
  JavaScript codes samples used as discussion topics for my Udacity
  Front-End Nanodegree team

  A brief example of how 'this' can be tricky. What do you expect the output
  to be.
*/
function Developer(skill) {
  this.skill = skill;
  this.says = function(){
    alert(this.skill + ' rocks!');
  };
}
var john = new Developer('Ruby');
var func = john.says;
func();

/*
  An example of how the prototype object works.
  Fix this:
*/
function Hamster() {  }
Hamster.prototype = {
  food: [],
  found: function(something) {
    this.food.push(something);
  }
};

// Create two speedy and lazy hamsters, then feed the first one
speedy = new Hamster();
lazy = new Hamster();

speedy.found("apple");
speedy.found("orange");

console.log(speedy.food.length);
console.log(lazy.food.length);

/*
  An example of hoisting.
  What's the result of this code:
*/
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

/// undefined and 2

/*
  A slightly trickier version of the above.
  What happens when we make some changes to scope and declarations?
*/
function test() {
   console.log(a);
   console.log(foo());
   console.log(bar());

   var a = 1;
   b = 2;

   function foo() {
      return 2;
   }

   var bar = function() {
      return 4;
   };
}

test();
console.log(a);
console.log(b);
console.log(foo());

/*
  Another example of how prototypes work.
  http://eloquentjavascript.net/06_object.html
*/
function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);


/*
  An example of how the module pattern might be implemented.
*/

(function(global){
  // all my awesome private code

  var foo = function() {
    // do stuff
  };

  // Public API
  global.foo = foo;

})(window);
