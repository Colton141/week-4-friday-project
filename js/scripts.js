// Business logic
function PizzaOrderForm(){
  this.pizzas = [],
  this.currentId = 0
}


PizzaOrderForm.prototype.addPizza = function(pizza){
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}
PizzaOrderForm.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


function Pizza(size, topping1, topping2, topping3){
  this.size = size,
  this.topping1 = topping1,
  this.topping2 = topping2,
  this.topping3 = topping3
}


//User interface
var pizzaOrderForm = new PizzaOrderForm();

function DisplayPizzaOrder(orderForm){
  var topping1Display = "";
  var topping2Display = "";
  var topping3Display = "";
  var sizeDisplay = "";
  orderForm.pizzas.forEach(function(pizza){
    topping1Display = pizza.topping1;
    topping2Display = pizza.topping2;
    topping3Display = pizza.topping3;
    sizeDisplay = pizza.size;
  })
  $("#cheese").text(topping1Display);
  $("#sauce").text(topping2Display);
  $("#topping").text(topping3Display);
  if (sizeDisplay === "1") {
    $("#size").text("Large");
    $("#total").text("$17.95");
  } else if (sizeDisplay === "2") {
    $("#size").text("Medium");
    $("#total").text("$15.45");
  } else if (sizeDisplay === "3") {
    $("#size").text("Small");
    $("#total").text("$12.20");
  }
};
//This fuunction clears out the order form
function newPizza(){
  $("button#new-pizza").on("click", function(){
    pizzaOrderForm.pizzas.splice(0, 5);
    var topping1Display = "";
    var topping2Display = "";
    var topping3Display = "";
    var sizeDisplay = "";
    $("#cheese").html(topping1Display);
    $("#sauce").html(topping2Display);
    $("#topping").html(topping3Display);
    $("#size").html(sizeDisplay);
    $("#total").html("0")
  })
}

$("document").ready(function(){
  newPizza();
  $("form#order-form").submit(function(event){
    event.preventDefault();
  var size = $("#pizza-size").val();
  var topping1 = $("#topping1").val();
  var topping2 = $("#topping2").val();
  var topping3 = $("#topping3").val();
  console.log(size);
  var newPizza = new Pizza(size, topping1, topping2, topping3);
  pizzaOrderForm.addPizza(newPizza);

  DisplayPizzaOrder(pizzaOrderForm);

})
})
