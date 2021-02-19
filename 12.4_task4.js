
function ElectroDevicies(name) {
    this.name = name;
    this.voltage = 220;
    this.garanty = 12;
    this.location = 'House';
    this.message = 'Отправка по миру';
};

function KitchenDevicies(name){
    this.name = name;
    this.location = 'kitchen';
    this.country = 'Russia';
    this.switch = 'on';
    this.message = 'Отправка только в станы СНГ';
    this.price = 200;
};

function RoutineDevicies(name) {
    this.name = name;
    this.country = 'USA';
    this.switch = 'off';
    this.message = 'Отправка по России';
    this.price = 300;
};

ElectroDevicies.prototype.getPower = function() {
    return `Мощность прибора: ${this.power} ватт`;
};

ElectroDevicies.prototype.getSwitch = function() {
    let res = (this.switch.toLowerCase() === 'on') ? 'включен': 'выключен';
    return `Прибор: ${this.name} ${res}`;
};

ElectroDevicies.prototype.addProperty = function(property, value) {
    this[property] = value;
};

ElectroDevicies.prototype.getProperty = function(property) {
    if(this.hasOwnProperty(property)) {
        return `Свойство ${property}: ${this[property]}`;
    } else {
        return `Такого свойства нет у объекта ${this.name}`;
    }; 
};

ElectroDevicies.prototype.showProperty = function(name) {
    if(this.hasOwnProperty(name)) {
        return console.log(`${this[name]}`);
    } else {
        return console.log(`Такого свойства нет у объекта ${this.name}`);
    }; 
};

ElectroDevicies.prototype.showMessage = function() {
    console.log(this.message);
};



KitchenDevicies.prototype = new ElectroDevicies();

RoutineDevicies.prototype = new ElectroDevicies();

KitchenDevicies.prototype.showMessage = function() {
    console.log(this.message);
};
KitchenDevicies.prototype.getDiscount = function(percent) {
    return `Цена по ${this.country} с учётом скидки - ${this.price - (this.price * percent / 100)}`;
};

RoutineDevicies.prototype.showMessage = function() {
    console.log(this.message);
};
RoutineDevicies.prototype.getDiscount = function(percent) {
    return `Цена по ${this.country} с учётом скидки - ${this.price - (this.price * percent / 100)}`;
};


const lamp = new ElectroDevicies('Лампа настольная 4248');
//lamp.showProperty('name');
//lamp.showMessage();

const iron = new RoutineDevicies('Утюг Tefal 4248');
//iron.showProperty('name');
//iron.addProperty('power', 1300);
//console.log(iron.getProperty('continent'));
//console.log(iron.getSwitch());
//console.log(iron.getPower());
//iron.showMessage();
console.log(iron.getDiscount(20));


const electricCooker = new KitchenDevicies('Электрическая плита Gorenge SW-2045');
//electricCooker.getProperty('name');
//electricCooker.addProperty('power', 2000);
//electricCooker.addProperty('color', 'red');
//console.log(electricCooker.getProperty('color'));
//console.log(electricCooker.getSwitch());
//electricCooker.showMessage();
console.log(electricCooker.getDiscount(20));
