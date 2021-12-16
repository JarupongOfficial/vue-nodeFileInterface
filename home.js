var student = {
    code: '001',
    name: 'Artdvp'
  };

let  testString = JSON.stringify(student);
console.log(testString);
console.log(JSON.stringify(testString));

let testJSON = JSON.parse(testString);
console.log(testJSON);

