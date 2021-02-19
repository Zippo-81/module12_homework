class ElectroDevicies {
    constructor(name) {
        this.name = name;
        this.voltage = 220;
        this.garanty = 12;
        this.location = 'House';
        this.message = 'Отправка по миру';
    };
    showMessage() {
        console.log(this.message);
    };
    getPower() {
        return `Мощность прибора: ${this.power} ватт`;
    };
    getSwitch() {
        let res = (this.switch.toLowerCase() === 'on') ? 'включен': 'выключен';
        return `Прибор: ${this.name} ${res}`;
    };
    addProperty(property, value) {
        this[property] = value;
    };
    getProperty(property) {
        if(this.hasOwnProperty(property)) {
            return `Свойство ${property}: ${this[property]}`;
        } else {
            return `Такого свойства нет у объекта ${this.name}`;
        }; 
    };
    showProperty(name) {
        if(this.hasOwnProperty(name)) {
            return console.log(`${this[name]}`);
        } else {
            return console.log(`Такого свойства нет у объекта ${this.name}`);
        }; 
    };
    
};

class KitchenDevicies extends ElectroDevicies {
    constructor(name) {
        super(name);
        this.name = name;
        this.location = 'kitchen';
        this.country = 'Russia';
        this.switch = 'on';
        this.message = 'Отправка только в станы СНГ';
        this.price = 200;
    };
    showMessage() {
        console.log(this.message);
    };
    getDiscount(percent) {
        return `Цена по ${this.country} с учётом скидки - ${this.price - (this.price * percent / 100)}`;
    };
};

class RoutineDevicies extends ElectroDevicies {
    constructor(name) {
        super(name);
        this.name = name;
        this.country = 'USA';
        this.switch = 'off';
        this.message = 'Отправка по России';
        this.price = 300;
    };
    showMessage() {
        console.log(this.message);
    };
    getDiscount(percent) {
        return `Цена по ${this.country} с учётом скидки - ${this.price - (this.price * percent / 100)}`;
    };
};



const lamp = new ElectroDevicies('Лампа настольная 4248');
lamp.showProperty('name');
lamp.showMessage();

const iron = new RoutineDevicies('Утюг Tefal 4248');
//iron.showProperty('name');
//iron.addProperty('power', 1300);
//console.log(iron.getProperty('continent'));
//console.log(iron.getSwitch());
//console.log(iron.getPower());
//iron.showMessage();
//console.log(iron.getDiscount(20));

const electricCooker = new KitchenDevicies('Электрическая плита Gorenge SW-2045');
//electricCooker.getProperty('name');
//electricCooker.addProperty('power', 2000);
//electricCooker.addProperty('color', 'red');
//console.log(electricCooker.getProperty('color'));
//console.log(electricCooker.getSwitch());
//electricCooker.showMessage();
//console.log(electricCooker.getDiscount(20));

