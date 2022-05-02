const clientData = {
    clientName: "Sonic_solutions",
    program: "IT recruitment"
};

let {clientName, program } = clientData;

console.log(clientName);
console.log(program);

let {clientName: name, program: work} = clientData;

console.log(name);
console.log(work);