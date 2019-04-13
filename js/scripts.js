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
    topping1Display += pizza.topping1;
    topping2Display += pizza.topping2;
    topping3Display += pizza.topping3;
    sizeDisplay += pizza.size;
  })

  $("#cheese").html(topping1Display);
  $("#sauce").html(topping2Display);
  $("#topping").html(topping3Display);
  if (sizeDisplay === "1") {
    $("#total").html("$17.95");
  } else if (sizeDisplay === "2") {
    $("#total").html("$15.45");
  } else if (sizeDisplay === "3") {
    $("#total").html("$12.20");
  }
};

$("document").ready(function(){
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
