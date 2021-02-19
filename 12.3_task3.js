
function objWithoutPrototype() {
    return Object.create(null);
};

const newObj = objWithoutPrototype();
console.log(newObj);