// Write your JavaScript code here!
const {addDestinationInfo, myFetch} = require("./scriptHelper");
window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planets = pickPlanet(listedPlanets);
        
        addDestinationInfo(document, planets.name, diameter, star, distance, moons, imageUrl)
    })
    
    
 });
 let list = document.getElementById("faultyItems");
 list.style.visibility = "hidden";

 let form = document.querySelector("form");
 form.addEventListener("submit", function(event){
     event.preventDefault();

 
     let pilot = document.querySelector("input[name=pilotName]").value;
     let copilot = document.querySelector("input[name=copilotName]").value;
     let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
     let cargoLevel = document.querySelector("input[name=cargoLevel]").value;
     
     formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
 });