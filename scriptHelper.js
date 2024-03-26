// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionT = document.getElementById("missionTarget");
    missionT.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`  

 }
 
 function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a Number";
    } else if(!isNaN(testInput)){
        return "Is a Number";
    }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty"){
        alert("All fields are required.")
    } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number"){
        alert("Enter valid information for each of the fields.")
    }
    if(validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && validateInput(fuelLevel) === "Is a Number" && validateInput(cargoMass) === "Is a Number"){
    let listPilotStatus = document.getElementById("pilotStatus");
    let listCopilotStatus = document.getElementById("copilotStatus");
    let listFuelStatus = document.getElementById("fuelStatus");
    let listCargoStatus = document.getElementById("cargoStatus");
    let listLaunchStatus = document.getElementById("launchStatus");
    if(fuelLevel < 10000){
        list.style.visibility = "visible";
        listFuelStatus.innerHTML = "Fuel level too low for launch.";
        listLaunchStatus.innerHTML = "Shuttle Not Ready for Launch.";
        listLaunchStatus.style.color = "red";
        listPilotStatus.innerHTML = `Pilot ${pilot} is ready for launch. `;
        listCopilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch. `;
        listCargoStatus = "Cargo mass low enough for Launch.";
    }
    if (cargoMass > 10000) {
        list.style.visibility = "visible";
        listCargoStatus.innerHTML = "Cargo mass too heavy for launch";
        listLaunchStatus.innerHTML = "Shuttle Not Ready for Launch";
        listLaunchStatus.style.color = "red";
        listFuelStatus.innerHTML = "Fuel level high enough for launch."
        listPilotStatus.innerHTML = `Pilot ${pilot} is ready for launch. `;
        listCopilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch. `;
    }
    if(fuelLevel < 10000 && cargoMass > 10000){
        list.style.visibility = "visible";
        listCargoStatus.innerHTML = "Cargo mass too heavy for launch";
        listFuelStatus.innerHTML = "Fuel level too low for launch";
        listLaunchStatus.innerHTML = "Shuttle Not Ready for Launch";
        listLaunchStatus.style.color = "red"; 
        listPilotStatus.innerHTML = `Pilot ${pilot} is ready for launch. `;
        listCopilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch. `;
    }
    if(fuelLevel >= 10000 && cargoMass <= 10000){
        list.style.visibility = "visible";
        listFuelStatus.innerHTML = "Fuel level high enough for launch.";
        listLaunchStatus.innerHTML = "Shuttle is Ready for Launch.";
        listLaunchStatus.style.color = "green";
        listPilotStatus.innerHTML = `Pilot ${pilot} is ready for launch. `;
        listCopilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch. `;
        listCargoStatus.innerHTML = "Cargo mass low enough for launch.";
    }
 }
}
 
 async function myFetch() {
    let planetsReturned = fetch("https://handlers.education.launchcode.org/static/planets.json");
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json();
        });

    return planetsReturned;
}
 
 function pickPlanet(planets) {
    let planet = Math.floor(Math.random()*planets.length);
    return planets[planet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;