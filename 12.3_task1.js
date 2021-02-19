const obj = {
    name: 'Roman',
    surname: 'Yurkov',
    age: 39,
  };
  
  function properties(obj) {
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        console.log(obj[key]);
      };
    };
  };
  
  properties(obj);