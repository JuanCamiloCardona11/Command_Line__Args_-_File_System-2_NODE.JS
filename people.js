const fs = require('fs');

function loadPeople(){
   try{
      const dataBuffer = fs.readFileSync('./people.json');
      const dataJSON = dataBuffer.toString();
      return(JSON.parse(dataJSON));
   } catch (err) {
      return({people:[]});
   }
}

const removePerson = function(name){
   let peopleBuffer;
   peopleBuffer = loadPeople();
   if(peopleBuffer.people.length === 0){
         return;
   }
   const newBuffer = peopleBuffer.people.filter((person) => {
      if(person.name !== name){
         return(true);
      }
   });
   fs.writeFileSync("./people.json", JSON.stringify({people: newBuffer}));
}

module.exports = {
   removePerson
}