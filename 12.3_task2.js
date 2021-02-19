const person = {
    name: 'Roman',
    surname: 'Yurkov',
    age: 39,
  };
  
  const str = 'age';
  
  
  function hasProperty(obj, property) {
    return property in obj;
  };
  
  console.log(hasProperty(person, str));