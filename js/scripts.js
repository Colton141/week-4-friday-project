// Business logic
function PizzaOrderForm(){
  this.pizzas = [],
  this.currentId = 0
}

function Pizza(size, topping1, topping2, topping3){
  this.size = size,
  this.toppings = {
    topping1: topping1,
    topping2: topping2,
    topping3: topping3
  }
}

PizzaOrderForm.prototype.Addpizza = function(){
  pizza.id = this.assignId();
  this.pizzas.push(pizza)
}
