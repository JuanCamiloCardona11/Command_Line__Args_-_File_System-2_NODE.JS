"use strict";

//Código para remover un objeto del arreglo de objetos personas en el archivo en formato JSON
//Se debe ingresar el nombre de la persona en la línea de comandos

//comando a ejecutar:   node app.js delete -name="nombre_de_una_persona" 

const yargs = require("yargs"),
  people = require("./people");

yargs.command({
  command: "delete",
  describe: "This command removes a current person",
  builder: {
    name: {
      describe: "name",
      demandOption: true,
      type: "string",
    }
  },
  handler: function (argv) {
    people.removePerson(argv.name);
  }
});

console.log(yargs.argv);
