document.addEventListener('DOMContentLoaded', function(event) {

// --------- Класс-Родитель ------------
// Конструктор родителя пишет свойства конкретного объекта
function Car(name, speed, passengers) {
  this.name = name;
  this.speed = 0;
  this.passengers = 5;
}

// Методы хранятся в прототипе
Car.prototype.run = function() {
 alert( this.name +" " + this.speed + "км" + " " +this.passengers +"чел");
}

// --------- Класс-потомок -----------
// Конструктор потомка
function Bus(name, speed, passengers) {
  Car.apply(this, arguments);
  this.speed = 90;
  this.passengers = 35;
}

// Унаследовать
Bus.prototype = Object.create(Car.prototype);

// Желательно и constructor сохранить
Bus.prototype.constructor = Bus;

// Методы потомка
Bus.prototype.run = function() {
	
	
  // Вызов метода родителя внутри своего
  Car.prototype.run.apply(this);


};

// Cоздаем объекты
bus = new Bus('Автобус');
bus.run();



// Конструктор потомка
function Truck(name, speed, passengers) {
  Car.apply(this, arguments);
  this.speed = 70;
  this.passengers = 2;
}

// Унаследовать
Truck.prototype = Object.create(Car.prototype);

// Желательно и constructor сохранить
Truck.prototype.constructor = Truck;

// Методы потомка
Truck.prototype.run = function() {
	
	
  // Вызов метода родителя внутри своего
  Car.prototype.run.apply(this);


};

// Cоздаем объекты
truck = new Truck('Грузовик');
truck.run();


// Конструктор потомка
function taxi(name, speed, passengers) {
  Car.apply(this, arguments);
  this.speed = 120;
  this.passengers = 5;
}

// Унаследовать
taxi.prototype = Object.create(Car.prototype);

// Желательно и constructor сохранить
Taxi.prototype.constructor = Taxi;

// Методы потомка
taxi.prototype.run = function() {
	
	
  // Вызов метода родителя внутри своего
  Car.prototype.run.apply(this);


};

// Cоздаем объекты
taxi = new Taxi('Такси');
taxi.run();
});