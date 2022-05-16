// parameter destructuring

// it can only be used in objects only


const data = {
    clientName: "simpleToCode",
    platform: "online bootcamp"
}

// function clientData(object){
//     console.log(object.clientName);
//     console.log(object.platform)
// }

// Method 2

function clientData({clientName, platform}){
    console.log(clientName);
    console.log(platform);
}



clientData(data);










