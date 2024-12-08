const sun = document.querySelector(".sun")
const mercury = document.querySelector(".mercury")
const venus = document.querySelector(".venus")
const earth = document.querySelector(".earth")
const mars = document.querySelector(".mars")
const jupiter = document.querySelector(".jupiter")
const saturn = document.querySelector(".saturn")
const uranus = document.querySelector(".uranus")
const neptune = document.querySelector(".neptune")
const overlayPlanet = document.querySelector(".overlay-planet")
const planetGlowOne = document.querySelector(".glow-one")
const planetGlowTwo = document.querySelector(".glow-two")
const overlayMoon = document.querySelector(".overlay-moon ")

const spaceship = document.querySelector(".spaceship-tooltip-wrapper")

const header = document.querySelector("header")
const mainPage = document.querySelector(".main-page")
const overlay = document.querySelector(".planet-overlay")



async function getKey() {
    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys';
    const options = {
        method: 'POST',
    };

    try {
        const response = await fetch(url, options);
        const keyObject = await response.json();
        const key = keyObject.key
        return key
      } catch (error) {
        console.error(error);
      }
    
}



async function sunClick() {

    let key = await getKey()

    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
    const options = {
      method: 'GET',
      headers: {'x-zocom': `${key}`}
    };
    
    try {

      const response = await fetch(url, options);
      const information = await response.json();
      const planet = information.bodies[0]

      header.style.display = 'none'
      mainPage.style.display = 'none'
      overlay.style.display = 'flex'
      overlayMoon.style.display = 'none'

      overlayPlanet.style.background = '#FFD029'
      planetGlowOne.style.background = '#FFD029'
      planetGlowTwo.style.background = '#FFD029'
      document.querySelector("#overlay-planet-ring").style.display = 'none'
      

      document.querySelector(".planet-name").innerText = planet.name.toUpperCase()
      document.querySelector(".planet-actual-name").innerText = planet.latinName.toUpperCase()
      document.querySelector(".planet-info-paragraph").innerText = planet.desc
      document.querySelector(".circumference-fact").innerText = planet.circumference + "km"
      document.querySelector(".max-temp-fact").innerText = planet.temp.day + "C"
      document.querySelector(".km-from-sun-fact").innerText = planet.distance + "km"
      document.querySelector(".min-temp-fact").innerText = planet.temp.night + "C"
      document.querySelector(".moons-fact").innerText = planet.moons.join(", ")




    } catch (error) {
      console.error(error);
    }
}



async function mercuryClick() {

    let key = await getKey()

    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
    const options = {
      method: 'GET',
      headers: {'x-zocom': `${key}`}
    };
    
    try {

      const response = await fetch(url, options);
      const information = await response.json();
      const planet = information.bodies[1]

      header.style.display = 'none'
      mainPage.style.display = 'none'
      overlay.style.display = 'flex'
      overlayMoon.style.display = 'none'

      overlayPlanet.style.background = '#888888'
      planetGlowOne.style.background = '#888888'
      planetGlowTwo.style.background = '#888888'
      document.querySelector("#overlay-planet-ring").style.display = 'none'
      

      document.querySelector(".planet-name").innerText = planet.name.toUpperCase()
      document.querySelector(".planet-actual-name").innerText = planet.latinName.toUpperCase()
      document.querySelector(".planet-info-paragraph").innerText = planet.desc
      document.querySelector(".circumference-fact").innerText = planet.circumference + "km"
      document.querySelector(".max-temp-fact").innerText = planet.temp.day + "C"
      document.querySelector(".km-from-sun-fact").innerText = planet.distance + "km"
      document.querySelector(".min-temp-fact").innerText = planet.temp.night + "C"
      document.querySelector(".moons-fact").innerText = planet.moons.join(", ")




    } catch (error) {
      console.error(error);
    }
}

async function venusClick() {

    let key = await getKey()

    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
    const options = {
      method: 'GET',
      headers: {'x-zocom': `${key}`}
    };
    
    try {

      const response = await fetch(url, options);
      const information = await response.json();
      const planet = information.bodies[2]

      header.style.display = 'none'
      mainPage.style.display = 'none'
      overlay.style.display = 'flex'
      document.querySelector("#overlay-planet-ring").style.display = 'none'
      overlayMoon.style.display = 'none'

      overlayPlanet.style.background = '#E7CDCD'
      planetGlowOne.style.background = '#E7CDCD'
      planetGlowTwo.style.background = '#E7CDCD'
      

      document.querySelector(".planet-name").innerText = planet.name.toUpperCase()
      document.querySelector(".planet-actual-name").innerText = planet.latinName.toUpperCase()
      document.querySelector(".planet-info-paragraph").innerText = planet.desc
      document.querySelector(".circumference-fact").innerText = planet.circumference + "km"
      document.querySelector(".max-temp-fact").innerText = planet.temp.day + "C"
      document.querySelector(".km-from-sun-fact").innerText = planet.distance + "km"
      document.querySelector(".min-temp-fact").innerText = planet.temp.night + "C"
      document.querySelector(".moons-fact").innerText = planet.moons.join(", ")




    } catch (error) {
      console.error(error);
    }
}

async function earthClick() {

    let key = await getKey()

    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
    const options = {
      method: 'GET',
      headers: {'x-zocom': `${key}`}
    };
    
    try {

      const response = await fetch(url, options);
      const information = await response.json();
      const planet = information.bodies[3]

      header.style.display = 'none'
      mainPage.style.display = 'none'
      overlay.style.display = 'flex'
      document.querySelector("#overlay-planet-ring").style.display = 'none'
      overlayMoon.style.display = 'block'

      overlayMoon.style.background = '#8798a8'
      overlayPlanet.style.background = '#428ED4'
      planetGlowOne.style.background = '#428ED4'
      planetGlowTwo.style.background = '#428ED4'
      
      

      document.querySelector(".planet-name").innerText = planet.name.toUpperCase()
      document.querySelector(".planet-actual-name").innerText = planet.latinName.toUpperCase()
      document.querySelector(".planet-info-paragraph").innerText = planet.desc
      document.querySelector(".circumference-fact").innerText = planet.circumference + "km"
      document.querySelector(".max-temp-fact").innerText = planet.temp.day + "C"
      document.querySelector(".km-from-sun-fact").innerText = planet.distance + "km"
      document.querySelector(".min-temp-fact").innerText = planet.temp.night + "C"
      document.querySelector(".moons-fact").innerText = planet.moons.join(", ")




    } catch (error) {
      console.error(error);
    }
}

async function marsClick() {

    let key = await getKey()

    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
    const options = {
      method: 'GET',
      headers: {'x-zocom': `${key}`}
    };
    
    try {

      const response = await fetch(url, options);
      const information = await response.json();
      const planet = information.bodies[4]

      header.style.display = 'none'
      mainPage.style.display = 'none'
      overlay.style.display = 'flex'
      document.querySelector("#overlay-planet-ring").style.display = 'none'
      overlayMoon.style.display = 'block'


      overlayMoon.style.background = '#ab887c'
      overlayPlanet.style.background = '#EF5F5F'
      planetGlowOne.style.background = '#EF5F5F'
      planetGlowTwo.style.background = '#EF5F5F'
      

      document.querySelector(".planet-name").innerText = planet.name.toUpperCase()
      document.querySelector(".planet-actual-name").innerText = planet.latinName.toUpperCase()
      document.querySelector(".planet-info-paragraph").innerText = planet.desc
      document.querySelector(".circumference-fact").innerText = planet.circumference + "km"
      document.querySelector(".max-temp-fact").innerText = planet.temp.day + "C"
      document.querySelector(".km-from-sun-fact").innerText = planet.distance + "km"
      document.querySelector(".min-temp-fact").innerText = planet.temp.night + "C"
      document.querySelector(".moons-fact").innerText = planet.moons.join(", ")




    } catch (error) {
      console.error(error);
    }
}

async function jupiterClick() {

    let key = await getKey()

    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
    const options = {
      method: 'GET',
      headers: {'x-zocom': `${key}`}
    };
    
    try {

      const response = await fetch(url, options);
      const information = await response.json();
      const planet = information.bodies[5]

      header.style.display = 'none'
      mainPage.style.display = 'none'
      overlay.style.display = 'flex'
      document.querySelector("#overlay-planet-ring").style.display = 'none'
      overlayMoon.style.display = 'block'


      overlayMoon.style.background = '#b3c4c8'
      overlayPlanet.style.background = '#E29468'
      planetGlowOne.style.background = '#E29468'
      planetGlowTwo.style.background = '#E29468'
      

      document.querySelector(".planet-name").innerText = planet.name.toUpperCase()
      document.querySelector(".planet-actual-name").innerText = planet.latinName.toUpperCase()
      document.querySelector(".planet-info-paragraph").innerText = planet.desc
      document.querySelector(".circumference-fact").innerText = planet.circumference + "km"
      document.querySelector(".max-temp-fact").innerText = planet.temp.day + "C"
      document.querySelector(".km-from-sun-fact").innerText = planet.distance + "km"
      document.querySelector(".min-temp-fact").innerText = planet.temp.night + "C"
      document.querySelector(".moons-fact").innerText = planet.moons.join(", ")




    } catch (error) {
      console.error(error);
    }
}

async function saturnClick() {

    let key = await getKey()

    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
    const options = {
      method: 'GET',
      headers: {'x-zocom': `${key}`}
    };
    
    try {

      const response = await fetch(url, options);
      const information = await response.json();
      const planet = information.bodies[6]

      header.style.display = 'none'
      mainPage.style.display = 'none'
      overlay.style.display = 'flex'
      document.querySelector("#overlay-planet-ring").style.display = 'block'
      overlayMoon.style.display = 'block'


      overlayMoon.style.background = '#e3dc82'
      overlayPlanet.style.background = '#C7AA72'
      planetGlowOne.style.background = '#C7AA72'
      planetGlowTwo.style.background = '#C7AA72'
      

      document.querySelector(".planet-name").innerText = planet.name.toUpperCase()
      document.querySelector(".planet-actual-name").innerText = planet.latinName.toUpperCase()
      document.querySelector(".planet-info-paragraph").innerText = planet.desc
      document.querySelector(".circumference-fact").innerText = planet.circumference + "km"
      document.querySelector(".max-temp-fact").innerText = planet.temp.day + "C"
      document.querySelector(".km-from-sun-fact").innerText = planet.distance + "km"
      document.querySelector(".min-temp-fact").innerText = planet.temp.night + "C"
      document.querySelector(".moons-fact").innerText = planet.moons.join(", ")




    } catch (error) {
      console.error(error);
    }
}

async function uranusClick() {

    let key = await getKey()

    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
    const options = {
      method: 'GET',
      headers: {'x-zocom': `${key}`}
    };
    
    try {

      const response = await fetch(url, options);
      const information = await response.json();
      const planet = information.bodies[7]

      header.style.display = 'none'
      mainPage.style.display = 'none'
      overlay.style.display = 'flex'
      document.querySelector("#overlay-planet-ring").style.display = 'none'
      overlayMoon.style.display = 'block'


      overlayMoon.style.background = '#a89b7a'
      overlayPlanet.style.background = '#C9D4F1'
      planetGlowOne.style.background = '#C9D4F1'
      planetGlowTwo.style.background = '#C9D4F1'
      

      document.querySelector(".planet-name").innerText = planet.name.toUpperCase()
      document.querySelector(".planet-actual-name").innerText = planet.latinName.toUpperCase()
      document.querySelector(".planet-info-paragraph").innerText = planet.desc
      document.querySelector(".circumference-fact").innerText = planet.circumference + "km"
      document.querySelector(".max-temp-fact").innerText = planet.temp.day + "C"
      document.querySelector(".km-from-sun-fact").innerText = planet.distance + "km"
      document.querySelector(".min-temp-fact").innerText = planet.temp.night + "C"
      document.querySelector(".moons-fact").innerText = planet.moons.join(", ")




    } catch (error) {
      console.error(error);
    }
}

async function neptuneClick() {

    let key = await getKey()

    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
    const options = {
      method: 'GET',
      headers: {'x-zocom': `${key}`}
    };
    
    try {

      const response = await fetch(url, options);
      const information = await response.json();
      const planet = information.bodies[8]

      header.style.display = 'none'
      mainPage.style.display = 'none'
      overlay.style.display = 'flex'
      document.querySelector("#overlay-planet-ring").style.display = 'none'
      overlayMoon.style.display = 'block'


      overlayMoon.style.background = '#98a384'
      overlayPlanet.style.background = '#7A91A7'
      planetGlowOne.style.background = '#7A91A7'
      planetGlowTwo.style.background = '#7A91A7'
      

      document.querySelector(".planet-name").innerText = planet.name.toUpperCase()
      document.querySelector(".planet-actual-name").innerText = planet.latinName.toUpperCase()
      document.querySelector(".planet-info-paragraph").innerText = planet.desc
      document.querySelector(".circumference-fact").innerText = planet.circumference + "km"
      document.querySelector(".max-temp-fact").innerText = planet.temp.day + "C"
      document.querySelector(".km-from-sun-fact").innerText = planet.distance + "km"
      document.querySelector(".min-temp-fact").innerText = planet.temp.night + "C"
      document.querySelector(".moons-fact").innerText = planet.moons.join(", ")




    } catch (error) {
      console.error(error);
    }
}











function goBack() {
    try {
        header.style.display = 'flex'
        mainPage.style.display = 'flex'
        overlay.style.display = 'none'
    } catch(error) {
        console.error(error);
    }

      
}



sun.addEventListener("click", sunClick)
mercury.addEventListener("click", mercuryClick)
venus.addEventListener("click", venusClick)
earth.addEventListener("click", earthClick)
mars.addEventListener("click", marsClick)
jupiter.addEventListener("click", jupiterClick)
saturn.addEventListener("click", saturnClick)
uranus.addEventListener("click", uranusClick)
neptune.addEventListener("click", neptuneClick)

spaceship.addEventListener("click", goBack)