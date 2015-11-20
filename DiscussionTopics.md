What was the most challenging thing you worked on this week?
What did you learn this week?

Week 4
======
How do media queries work? What's the syntax, etc.?
Responsive design patterns. What are some ways you might arrange content responsively? Some sites with interesting examples of responsive design?
How does JavaScript fit into the paradigm of HTML = Content, CSS = Presentation that we talked about earlier?

Week 5
======
Organizing file structure. Let's look at HTML5 Boilerplate. https://github.com/h5bp/html5-boilerplate

Week 6
======
How does JS compare and contrast with other languages you've looked at?
Interesting example of sites using JavaScript and what they might be doing?

Week 7
======

jQuery DOM manipulation
JavaScript initialization order
== vs. ====

Week 8
======
Explain how much AJAX works... How would use it in jQuery?
Difference between var x = function() and function x(); what does var do with variables and functions.
CSS organization principles

Week 9
======
Relationship between responsive design and web performance: what might some pitfalls be and how to address
More in depth on CSS organization principles
```
function Developer(skill) {
  this.skill = skill;
  this.says = function(){
    alert(this.skill + ' rocks!');
  }
}
var john = new Developer('Ruby');
var func = john.says;
func();
```
Week 10
=======
Explain how much AJAX works... How would use it in jQuery?
Difference between var x = function() and function x(); what does var do with variables and functions.
Explain prototypical inheritance. Difference between that and extending.
New keyword.
Fix this:
```
function Hamster() {  }
Hamster.prototype = {
  food: [],
  found: function(something) {
    this.food.push(something);
  }
}

// Create two speedy and lazy hamsters, then feed the first one
speedy = new Hamster();
lazy = new Hamster();

speedy.found("apple");
speedy.found("orange");

console.log(speedy.food.length);
console.log(lazy.food.length);
```
Week 12
=======
Explain hoisting...
What's the result of this code:
```
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
```
In JavaScript, what is the difference between var x = 1 and x = 1? Answer in as much or as little detail as you feel comfortable.
Local scope vs. global scope? Why is it good to keep the global scope clean?

Week 13
=======
Local scope vs. global scope? Why is it good to keep the global scope clean? How do you go about that?
Let's talk about strict mode.
Let's revisit this:
```
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```
What happens when we make some changes to scope and declarations?
```
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
   }
}

test();
console.log(a);
console.log(b);
console.log(foo());
```
Week 14
=======
http://eloquentjavascript.net/06_object.html
```
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
```
